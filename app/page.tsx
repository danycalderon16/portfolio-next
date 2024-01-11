import { Navbar } from "@/components";

export default function Home() {
  return (
    <div
      className={`
        pl-4 
        pr-4 
        bg-gradient-to-r 
        dark:to-blue-bg-to 
        dark:from-blue-bg-from     
        h-screen`
      }
    >
      <Navbar />
    </div>
  );
}
