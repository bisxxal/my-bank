 
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTransactionsBySelected } from '@/actions'; 

export const useGetAllPaymemts = (startDate: Date, endDate: Date) => {
  const [localData, setLocalData] = useState<any[] | null>(null);
  const [isCheckingLocal, setIsCheckingLocal] = useState(true);
  const [storedRangeKey, setStoredRangeKey] = useState<string | null>(null);
  const rangeKey = `${startDate.toISOString()}_${endDate.toISOString()}`;
  useEffect(() => {
    try {
      const raw = localStorage.getItem('paymentsData');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.rangeKey && parsed.data) {
          setStoredRangeKey(parsed.rangeKey);
          if (parsed.rangeKey === rangeKey) {
            setLocalData(parsed.data);
          } else {
            setLocalData(null);
          }
        } else { 
          setLocalData(null);
          setStoredRangeKey(null);
        }
      } else {
        setLocalData(null);
      }
    } catch (err) {
      setLocalData(null);
      setStoredRangeKey(null);
    } finally {
      setIsCheckingLocal(false);
    }
  }, []); 

  const { data, isLoading, isRefetching , refetch } = useQuery({
    queryKey: ['trackerData', rangeKey],
    queryFn: async () => {
      const fetched = await getTransactionsBySelected(startDate, endDate);
      if (fetched?.status !== 200) {
        return [];
      }
      try {
        localStorage.setItem('paymentsData',JSON.stringify({ rangeKey, data: fetched?.data  }));
        setStoredRangeKey(rangeKey);
      } catch (err) {
      }
      setLocalData(fetched?.data);
      return fetched?.data || [];
    },
    enabled: !isCheckingLocal && localData === null,
  });
  useEffect(() => {
    if (data) {
      setLocalData(data);
    }
  }, [data]);

  useEffect(() => {

    if (!isCheckingLocal) {
      if (storedRangeKey !== rangeKey) {

        setLocalData(null);

        refetch().catch(() => {
        });
      }
    }
  }, [rangeKey, isCheckingLocal, storedRangeKey, refetch]);

  
  return {
    data: localData,
    isLoading: isCheckingLocal || (localData === null && isLoading),
    refetch,
    isRefetching
  };
};
