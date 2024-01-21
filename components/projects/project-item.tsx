"use client"
import Image from "next/image";
import React from "react";
import { FaAndroid, FaGoogle, FaJava } from "react-icons/fa";
import { SiAndroidstudio, SiFirebase } from "react-icons/si";
import { Modal } from "..";

interface ModalHandle {
  open: () => void;
  // Aquí puedes añadir más métodos si los necesitas
}

export function ProjectItem() {


  const modalRef = React.useRef<ModalHandle>(null);


  const openModal = () => {
    modalRef.current?.open();
  }

  return (
    <>
    <Modal ref={modalRef}>
      <p>Hola desde portal</p>
    </Modal>
    <div className="border rounded-xl shadow cursor-pointer hover:shadow-lg hover:scale-105" onClick={()=> openModal()}>
      <div className="relative w-full h-40 rounded-lg bg-cover bg-center">
        <Image
          src="/profile.jpeg"
          // width={100}
          // height={100}
          fill
          className="object-cover rounded-lg"
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
            <SiAndroidstudio className="text-light dark:text-dark" size={20} />
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
