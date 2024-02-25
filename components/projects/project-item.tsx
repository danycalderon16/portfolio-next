"use client";
import Image from "next/image";
import React from "react";
import { FaAndroid, FaGithub, FaGoogle, FaJava } from "react-icons/fa";
import { SiAndroidstudio, SiFirebase, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { MdInstallMobile } from "react-icons/md";
import { Modal } from "@/components";
import Link from "next/link";
import { WebProjectDetails } from "./web-project-details";
interface ModalHandle {
  open: () => void;
}

export function ProjectItem() {
  const modalRefAndroid = React.useRef<ModalHandle>(null);
  const modalRefNext = React.useRef<ModalHandle>(null);

  const openModalAndorid = (evento: React.MouseEvent<HTMLDivElement>) => {
    evento.stopPropagation();
    modalRefAndroid.current?.open();
  };
  const openModalNext = (evento: React.MouseEvent<HTMLDivElement>) => {
    evento.stopPropagation();
    modalRefNext.current?.open();
  };

  return (
    <>
      <WebProjectDetails modalRef={modalRefNext}/>
      <Modal ref={modalRefAndroid} key="android">
        <div className="flex flex-col h-[760px] w-full">
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
              Loan app
            </h3>
            <p className="text-light dark:text-dark text-base">
              Android application for tracking loans, maintaining a record of
              loans and payments made by clients, storing important data, and
              generating statistics, with cloud storage using Firestore.
            </p>
            <div className="mt-4">
              <p className="font-bold text-light dark:text-dark">
                Technologies used
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
                <Link
                  href="AppPrestamos.apk"
                  locale={false}
                  className="text-light dark:text-dark flex items-center gap-2"
                >
                  <MdInstallMobile size={30} />
                  APK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div
        className="border rounded-xl shadow cursor-pointer hover:shadow-lg hover:scale-105"
        onClick={openModalNext}
      >
        <div className="relative w-full h-40 rounded-lg bg-cover bg-center">
          <Image
            src="/web-app-00.png"
            // width={100}
            // height={100}
            fill
            className="object-contain rounded-lg"
            alt="demo"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mt-2 mb-2 dark:text-dark">
            Web Loan App
          </h3>
          <p className="text-neutral-600 text-base leading-normal dark:text-dark">
          An application for loan management on the web
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
      </div>
      <div
        className="border rounded-xl shadow cursor-pointer hover:shadow-lg hover:scale-105"
        onClick={openModalAndorid}
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
            Android Loan App
          </h3>
          <p className="text-neutral-600 text-base leading-normal dark:text-dark">
          Loan Management for Android
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
