import Link from "next/link";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { MdInstallMobile } from "react-icons/md";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { Modal } from "..";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import Carousel from "../carousel";

interface ModalHandle {
  open: () => void;
}

interface Props {
  modalRef: React.RefObject<ModalHandle>;
}

export const WebProjectDetails = ({ modalRef }: Props) => {
  return (
    <Modal ref={modalRef} key="nexy">
      <div className="flex flex-col h-[760px] w-full">
        <Carousel
          images={[
            { id:1,src: "/web-app-00.png" },
            { id:2,src: "/web-app-01.png" },
            { id:3,src: "/loans-0.png" },
          ]}
        />
        {/* <div className="flex-grow bg-white dark:bg-slate-800 relative">
            <Image
              src="/web-app-00.png"
              fill
              className="object-contain rounded-lg"
              alt="demo"
            />
          </div> */}
        <div className=" px-6 py-4">
          <h3 className="font-bold text-xl mb-2 text-light dark:text-dark">
            Loan app
          </h3>
          <p className="text-light dark:text-dark text-base">
            Web application developed using Next.js for tracking loans,
            maintaining a record of loans and payments made by clients, storing
            important data, and generating statistics. Utilizes cloud storage
            with Firestore for seamless data management.
          </p>
          <div className="mt-4">
            <p className="font-bold text-light dark:text-dark">
              Technologies used
            </p>
            <div className="flex gap-4 align-middle items-center mt-2 mb-2">
              <div className=" border rounded-[50%] border-slate-700 p-2">
                <SiNextdotjs className="text-light dark:text-dark" size={20} />
              </div>
              <div className=" border rounded-[50%] border-slate-700 p-2">
                <SiTypescript className="text-light dark:text-dark" size={20} />
              </div>
              <div className=" border rounded-[50%] border-slate-700 p-2">
                <SiTailwindcss
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
            <p className="font-bold text-light dark:text-dark">Links</p>
            <div className="flex gap-4 align-middle items-center mt-2 mb-2">
              <a
                href="https://github.com/danycalderon16/appPrestamosFirebase"
                target="_blank"
                rel="noreferrer"
                className="text-light dark:text-dark flex items-center gap-2"
              >
                <FaGithub size={30} />
                Github repository
              </a>
            </div>
            <div className="flex gap-4 align-middle items-center mt-3 mb-2">
              <a
                href="https://app-prestamos-nextjs.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-light dark:text-dark flex items-center gap-2"
              >
                <TbExternalLink size={30} />
                Try this app
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
