import type { Metadata } from "next";
import BottomBar from "@/components/buttombar";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Dashboard | My bank",
};

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className=" mt-[60px] ">
        {children}
      </div>
      <BottomBar />
      
    </main>
  );
}
