"use client";
import React, { type ReactPortal, forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = forwardRef(function Modal({ children }: ModalProps, ref):ReactPortal|null  {
  const dialog = useRef<HTMLDialogElement>(null);

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
  }));

  return isMounted
    ? createPortal(
        <dialog
          ref={dialog}
          className={`
        w-[400px]
        md:w-[900px]
        h-[400px]
        md:h-[800px]
        bg-white
        dark:bg-slate-800
        rounded-lg
        backdrop:bg-slate-900/90
        backdrop-blur-sm
        
        `}
        >
          <form method="dialog" className="flex justify-end">
            <button className="m-1">
              <IoClose size={30} className="text-light dark:text-dark" />
            </button>
          </form>
          {children}
        </dialog>,
        document.getElementById("modal") as HTMLElement 
      )
    : null;
});
