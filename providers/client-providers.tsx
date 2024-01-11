'use client';

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

interface Props{
  children: React.ReactNode;
}

export default function ClientProviders({children}:Props) {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return <>{children}</>
  }

  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}