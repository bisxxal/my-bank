 

'use client';
import { signIn,  useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Shield, Sparkles,  Lock, Zap } from 'lucide-react';
import Image from 'next/image';

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (status === "loading") return null; 

  if (session) return null; 

  else{
    return (
    <div   style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", overflow: "hidden" }}>
      
      <div style={{ position: "relative", zIndex: 1, maxWidth: 440, width: "100%", opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(36px)", transition: "all 0.9s cubic-bezier(.16,1,.3,1)" }}>


        <div className=" animate-slide-up text-center mb-[36px] " >
          <div className=" animate-slide-up" style={{ display: "inline-block", animation: "float 4s ease-in-out infinite", marginBottom: 20, position: "relative" }}>
            <div   >
              <Image src='/bank.png' alt='logo' width={60} height={60} style={{ filter: "drop-shadow(0 4px 12px rgba(167,139,250,0.4))" }} />
            </div>
             
           </div>

          <h1 className="followtext" style={{  fontSize: "clamp(30px,5vw,42px)", fontWeight: 800, color: "white", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 12 }}>
            Welcome to{" "}
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
               MyBank
            </span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 15, lineHeight: 1.6 }}> <span style={{ fontSize: 13, color: "#6b7280" }}>Track your finances with confidence</span></p>
        </div>
 
        <div className="  animate-fade-in " style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.09), rgba(96,165,250,0.05))", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 28, padding: "40px 36px", backdropFilter: "blur(24px)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)", position: "relative", overflow: "hidden" }}>
         


          <div className=" " style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 18 }}>
              <Lock size={13} style={{ color: "#a78bfa" }} />
              <span style={{ fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: "0.5px" }}>OAuth 2.0 Protected</span>
            </div>
            <h2  className="followtext" style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: "white", letterSpacing: "-0.5px", marginBottom: 6 }}>Sign In</h2>
           </div>

         
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="google-btn"
            style={{ width: "100%", background: "white", border: "none", borderRadius: 16, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, cursor: "pointer", transition: "all 0.3s cubic-bezier(.16,1,.3,1)", fontFamily: "inherit", marginBottom: 24 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#1f2937" }}>Sign in with Google</span>
          </button>
 
        
        </div>

         
        <div style={{ marginTop: 24, textAlign: "center" }}>
          
          <p  className=" text-xs text-[#374151] "  >© 2025 BankTracker. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
  }
};

export default SignInPage;