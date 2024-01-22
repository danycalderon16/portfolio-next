"use client";
import Image from "next/image";
import React from "react";
import { FaAndroid, FaGithub, FaGoogle, FaJava } from "react-icons/fa";
import { SiAndroidstudio, SiFirebase } from "react-icons/si";
import { MdInstallMobile } from "react-icons/md";
import { Modal } from "..";
import Link from "next/link";

interface ModalHandle {
  open: () => void;
  // Aquí puedes añadir más métodos si los necesitas
}

export function ProjectItem() {
  const modalRef = React.useRef<ModalHandle>(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  return (
    <>
      <Modal ref={modalRef}>
        <div className="flex flex-col h-[770px] w-full">
          <div className="flex-grow bg-white dark:bg-slate-800 relative">
            <Image
              src="/loans-0.png"
              fill
              className="object-contain rounded-lg"
              alt="demo"
            />
          </div>
          <div className=" px-6 py-4">
            <h3 className="font-bold text-xl mb-2 text-light dark:text-dark">
              App de prestamos
            </h3>
            <p className="text-light dark:text-dark text-base">
              Aplicación de Android para realizar un seguimiento de los
              préstamos, tener un registro de préstamos y pagos realizados por
              los clientes, guardar datos importantes y generar estadísticas,
              con almacenamiento en la nube usando Firestore.
            </p>
            <div className="mt-4">
              <p className="font-bold text-light dark:text-dark">
                Tecnolologias usadas
              </p>
              <div className="flex gap-4 align-middle items-center mt-2 mb-2">
                <div 
                 className=" border rounded-[50%] border-slate-700 p-2">
                  <FaAndroid className="text-light dark:text-dark" size={20} />
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
                  <SiFirebase className="text-light dark:text-dark" size={20} />
                </div>
                <div className=" border rounded-[50%] border-slate-700 p-2">
                  <FaGoogle className="text-light dark:text-dark" size={20} />
                </div>
             
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold text-light dark:text-dark">
                Enlaces
              </p>
              <div className="flex gap-4 align-middle items-center mt-2 mb-2">
                <a 
                  href="https://github.com/danycalderon16/appPrestamosFirebase"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light dark:text-dark flex items-center gap-2"
                >
                <FaGithub size={30}/>
                  Repositorio de Gitub
                </a>
              </div>
              <div className="flex gap-4 align-middle items-center mt-3 mb-2">
                <Link
                  href="AppPrestamos.apk"
                  locale={false}
                  className="text-light dark:text-dark flex items-center gap-2"
                >
                <MdInstallMobile size={30}/>
                  APK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div
        className="border rounded-xl shadow cursor-pointer hover:shadow-lg hover:scale-105"
        onClick={() => openModal()}
      >
        <div className="relative w-full h-40 rounded-lg bg-cover bg-center">
          <Image
            src="/loans-0.png"
            // width={100}
            // height={100}
            fill
            className="object-contain rounded-lg"
            alt="demo"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mt-2 mb-2 dark:text-dark">
            App de prestamos
          </h3>
          <p className="text-neutral-600 text-base leading-normal dark:text-dark">
            Aplicacion Android para llevar un control de prestamos
          </p>
          <div className="flex gap-4 align-middle items-center mt-2 mb-2">
            <div className=" border rounded-[50%] border-slate-700 p-2">
              <FaAndroid className="text-light dark:text-dark" size={20} />
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
              <SiFirebase className="text-light dark:text-dark" size={20} />
            </div>
            <div className=" border rounded-[50%] border-slate-700 p-2">
              <FaGoogle className="text-light dark:text-dark" size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
