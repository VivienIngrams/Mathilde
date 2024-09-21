'use client'

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";
import { usePathname } from "next/navigation";

const RandomSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
const path = usePathname()
const isHomePage = path === '/'

  return (
    <div className={` min-h-[95vh] w-full pt-2 `}>
      <div className={`  md:grid md:grid-cols-3 h-full `}>
        <div className="h-[100%] flex flex-col items-center justify-center">
          {projectSection.images && projectSection.images[0] && (
            <div className="relative h-[50vh] w-[70%] m-4">
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
          <h1>{title}</h1>
        </div>
        <div className="h-[100%] hidden md:flex flex-col justify-center items-center">
          {projectSection.images && projectSection.images[1] && (
            <div className="relative h-[80vh] md:h-[90vh] w-[100%] md:w-[150%] ">
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
          {projectSection.images && projectSection.images[1] && (
            <div className="md:hidden columns-1">
              <div className=" break-inside-avoid">
                <Image
                  src={urlFor(projectSection.images[1]).url() as string}
                  alt={`${title} - additional`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        <div className=" md:h-[100%] flex flex-col items-center justify-around">
          {projectSection.images && projectSection.images[2] && (
            <div className="relative h-[50vh] w-[70%] m-4 ">
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}{" "}
          {projectSection.images && projectSection.images[3] && (
            <div className="relative h-[30vh] w-[70%] my-6">
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomSection;
