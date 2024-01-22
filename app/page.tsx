import { About, Header, Navbar, Projects, Separator } from "@/components";
import Image from "next/image";
import { FaAndroid, FaJava, FaGoogle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SiAndroidstudio, SiFirebase } from "react-icons/si";

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


      <div className="container mx-auto">
        <div
          className={`
        w-[400px]
        md:w-[900px]
        h-[400px]
        md:h-[800px]
        border
        rounded-lg
        backdrop-blur-sm
        `}
        >
          <form method="dialog" className="flex justify-end">
            <button>
              <IoClose size={30} className="text-light dark:text-dark" />
            </button>
          </form>
          <div className="flex flex-col h-full w-full">
            <div className="flex-grow bg-white relative">
              <Image
                src="/loans-0.png"
                fill
                className="object-contain rounded-lg"
                alt="demo"
              />
            </div>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2 text-light dark:text-dark">App de prestamos</h3>
              <p className="text-light dark:text-dark text-base">
                Aplicación de Android para realizar un seguimiento de los
                préstamos, tener un registro de préstamos y pagos realizados por
                los clientes, guardar datos importantes y generar estadísticas,
                con almacenamiento en la nube usando Firestore.
              </p>
              <div className="mt-4">
                <p className="font-bold text-light dark:text-dark">Tecnolologias usadas</p>
                <div className="flex gap-4 align-middle items-center mt-2 mb-2">
                  <div className=" border rounded-[50%] border-slate-700 p-2">
                    <FaAndroid
                      className="text-light dark:text-dark"
                      size={20}
                    />
                  </div>
                  <div className=" border rounded-[50%] border-slate-700 p-2">
                    <FaJava className="text-light dark:text-dark" size={20} />
                  </div>
                  <div className=" border rounded-[50%] border-slate-700 p-2">
                    <SiAndroidstudio
                      className="text-light dark:text-dark"
                      size={20}
                    />
                  </div>
                  <div className=" border rounded-[50%] border-slate-700 p-2">
                    <SiFirebase
                      className="text-light dark:text-dark"
                      size={20}
                    />
                  </div>
                  <div className=" border rounded-[50%] border-slate-700 p-2">
                    <FaGoogle className="text-light dark:text-dark" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        
        
        <Navbar />
        <div className="flex flex-col gap-2 content-center ">
          <Header />
          <Separator />
          <Projects />
          <div
            id="solutions"
            className="h-[700px] w-full p-5 py-8  mt-4 bg-stone-800"
          >
            <p className="text-white">solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
