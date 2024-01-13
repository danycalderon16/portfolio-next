import { Navbar } from "@/components";

export default function Home() {
  return (
    <div
      className={`
        pl-4 
        pr-4 
        bg-gradient-to-t    
         dark:from-zinc-900 dark:to-slate-900
        h-screen`
      }
    >
      <Navbar />
    </div>
  );
}
