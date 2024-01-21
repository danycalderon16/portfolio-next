"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

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
        <dialog ref={dialog} className="modal">
          {children}
          <form method="dialog">
        <button>Close</button>
      </form>
        </dialog>,
        modalRoot
      )
    : null;
});
