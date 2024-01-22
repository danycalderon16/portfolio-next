import {
  About,
  Experience,
  Header,
  Navbar,
  Projects,
  Separator,
  Solutions,
} from "@/components";

export default function Home() {
  return (
    <div
      className={`
        pl-4 
        pr-4 
        bg-gradient-to-t    
        from-zinc-50 to-slate-50
         dark:from-zinc-900 dark:to-slate-900 `}
    >
      <div className="container mx-auto">
        <Navbar />
        <div className="flex flex-col gap-2 content-center ">
          <Header />
          <Separator />
          <Projects />
          <Experience />
          <Solutions />
        </div>
      </div>
    </div>
  );
}
