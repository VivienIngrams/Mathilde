"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";
import { usePathname } from "next/navigation";
import Link from "next/link";

const RandomSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  const path = usePathname();
  const isHomePage = path === "/";

  return (
    <div className={` min-h-[95vh] w-full pt-2 `}>
      {/* Mobile */}
      <div className="columns-1 sm:columns-2 md:hidden">
        {projectSection.images?.map((image: any, index: number) => (
          <div key={index} className="m-12 break-inside-avoid">
            <Link href={urlFor(image).url()}>
              <Image
                src={urlFor(image.asset).url()}
                alt="Gallery Image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className={`hidden  md:grid md:grid-cols-3 h-full `}>
        <div className="h-[100%] flex flex-col items-center justify-center relative">
          {projectSection.images && projectSection.images[0] && (
            <Link
              href={urlFor(projectSection.images[0]).url()}
              className="relative h-[50vh] w-[70%] m-4"
            >
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </Link>
          )}
          {isHomePage && <h1 className="absolute bottom-[7%] ">{title}</h1>}
        </div>
        <div className="h-[100%] hidden md:flex flex-col justify-center items-center">
          {projectSection.images && projectSection.images[1] && (
            <Link
              href={urlFor(projectSection.images[1]).url()}
              className="relative h-[80vh] md:h-[90vh] w-[100%] md:w-[150%] "
            >
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </Link>
          )}
        </div>
        {projectSection.images && projectSection.images[1] && (
          <div className="md:hidden columns-1">
            <div className=" break-inside-avoid">
              <Link href={urlFor(projectSection.images[1]).url()}>
                <Image
                  src={urlFor(projectSection.images[1]).url() as string}
                  alt={`${title} - additional`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover px-4"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        )}
        <div className=" md:h-[100%] flex flex-col items-center justify-around">
          {projectSection.images && projectSection.images[2] && (
            <Link
              href={urlFor(projectSection.images[2]).url()}
              className="relative h-[50vh] w-[70%] "
            >
              <Image
                src={urlFor(projectSection.images[2]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </Link>
          )}{" "}
          {projectSection.images && projectSection.images[3] && (
            <Link
              href={urlFor(projectSection.images[3]).url()}
              className="relative h-[30vh] w-[70%] mb-6"
            >
              <Image
                src={urlFor(projectSection.images[3]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomSection;
