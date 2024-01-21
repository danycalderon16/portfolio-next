"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = forwardRef(function Modal({ children }: ModalProps, ref) {
  const dialog = useRef<HTMLDialogElement>(null);
  const modalRoot = document.getElementById("modal") as HTMLElement;

  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  }, []);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
  }));

  return domReady
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
        `}
        >
          <form method="dialog" className="flex justify-end">
            <button>
              <IoClose size={30} className="text-light dark:text-dark" />
            </button>
          </form>
          {children}
        </dialog>,
        modalRoot
      )
    : null;
});
