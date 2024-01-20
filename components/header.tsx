import React from "react";
import Image from "next/image";
export const Header = () => {
  return (
    <div className="flex justify-start gap-10">
      <div className="max-w-[200px] flex items-center">
        <Image
          className="rounded-[50%]"
          src="/profile.jpeg"
          alt="profile"
          sizes="(max-width:768px) 100vw"
          // fill
          width={200}
          height={200}
        />
      </div>
      <div className="flex-grow divide-y-2">
        <p className="text-[2rem] md:text-[3rem] lg:text-[4rem] text-light dark:text-dark pb-4">
          Full Stack Developer
        </p>

        <p
          className={`text-[1rem]
        md:text-[1.5rem]
        lg:text-[2rem]
        dark:text-dark
        italic
        pt-4`}
        >
          React.JS, Next.JS, AWS, Node.JS, JavaScript, Typescript, Python, Java
        </p>
      </div>
    </div>
  );
};
