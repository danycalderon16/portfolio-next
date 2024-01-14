import { Navbar } from "@/components";

export default function Home() {
  return (
    <div
      className={`
        pl-4 
        pr-4 
        pt-[80px]
        bg-gradient-to-t    
         dark:from-zinc-900 dark:to-slate-900        `}
    >
      <Navbar />
      <div className="pt-16">
        <div
          id="about"
          className="h-[700px] w-full p-5 pt-4 py-8  bg-stone-800"
        >
          <p className="text-white">about</p>
        </div>
        <div
          id="projects"
          className="h-[700px] w-full p-5 py-8  mt-4 bg-stone-800"
        >
          <p className="text-white">projects</p>
        </div>
        <div
          id="solutions"
          className="h-[700px] w-full p-5 py-8  mt-4 bg-stone-800"
        >
          <p className="text-white">solutions</p>
        </div>
      </div>
    </div>
  );
}
