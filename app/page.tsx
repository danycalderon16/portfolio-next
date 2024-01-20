import { About, Header, Navbar, Projects, Separator } from "@/components";

export default function Home() {
  return (
    <div
      className={`
        pl-4 
        pr-4 
        pt-[80px]
        bg-gradient-to-t    
        from-zinc-50 to-slate-50
         dark:from-zinc-900 dark:to-slate-900 `}
    >
      <Navbar />
      <div className="flex flex-col gap-2 ">
        <Header/>
        <Separator/>
        <Projects/>
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
