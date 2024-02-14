"use client";

import React from "react";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";
import { Section, Subtitle } from "@/components";

export const About = () => {
  return (
    <Section id="about">
      <Subtitle text="About me" />
      <p className="text-ligth dark:text-dark mt-4">
        Passionate computer systems engineer with a love for solving problems
        through programming. I enjoy facing the challenges of coding and take
        pride in creating elegant solutions.
      </p>
      <p className="text-ligth dark:text-dark mt-4">
        My experience in software development has allowed me to excel in both
        frontend and backend technologies. I have accumulated significant skills
        in creating seamless user experiences using React.js and Next.js. In
        addition, I have experience dabbling in the backend realm with Node.js
        and Python. I also have knowledge in mobile development using Android
        Studio.
      </p>
      <p className="text-ligth dark:text-dark mt-4">
        In addition, I have experience managing various AWS services, leveraging
        the power of the cloud to deliver efficient and scalable solutions.
      </p>
      <p className="text-ligth dark:text-dark mt-8 font-bold flex items-center">
        <FaRegFileAlt className="mr-2"/>
        Download my{" "}
        <Link
          className="underline ml-2 font-normal"
          target="_blank"
          passHref
          href={"DanielCalderonCV.pdf"}
        >
          resume{' '}
        </Link>
      </p>
    </Section>
  );
};
