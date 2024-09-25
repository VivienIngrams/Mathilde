
'use client'
import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="flex flex-col relative justify-center items-center py-12 bg-[rgba(227,224,220,0.75)] font-serif">
      <div
        className="rounded-full shadow-sm shadow-[#ad8b77] p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiOutlineChevronDoubleUp />
      </div>

      <Link
        href="https://vivieningrams.com"
        target="_blank"
        className="my-4 text-[10px]  tracking-tight xs:tracking-normal  z-50 leading-loose"
      >
        <p className="hidden md:flex absolute text-[12px] tracking-tight xs:tracking-normal font-serif z-50 leading-loose bottom-5 left-12 ">
          Website by Vivien Ingrams
        </p>
      </Link>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-2 mb-2">
          <Socials />
        </div>
        <Link href="mailto:mathilde@2regards.com" target="_blank" className="">
          mathilde@2regards.com
        </Link>
        <p className="font-serif ">+33 6 79 76 14 88</p>
      </div>
    </div>
  );
};

export default Footer;
