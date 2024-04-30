"use client"
import React from "react";
import { allTypesContent } from "@/data";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const ContentsTypeTab = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="mt-10 mb-10">
        <ul className="flex flex-row flex-nowrap content-center justify-start items-center md:flex-wrap md:justify-around">
          {allTypesContent.map((content, index) => {
            const isActive = pathname === content.url;

            const linkClass = isActive
              ? "border-2 border-black dark:border-white px-10 py-2 text-appBlue-100 dark:text-appBlue-50"
              : "";

            return (
              <li className={`px-4 rounded-md p-2 hover:text-appGray-100 hover:bg-appBlue-100 hover:shadow-lg shadow-none transition-all  md:mx-5 mx-2 transform hover:scale-105 w-auto text-2xl font-bold cursor-pointer ${linkClass}`} key={index}>
                <Link className="hover:text-white" href={content.url}>{content.name}</Link>
              </li>
            );
          })}
          
        </ul>
      </div>
    </>
  );
};

export default ContentsTypeTab;
