"use client";

import Image from "next/image";
import { Section } from "@/app/interface";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MapImageSection = ({
  projectSection,
  title,
  slug,
}: {
  projectSection: Section;
  title: string;
  slug: string;
}) => {
  const path = usePathname();
  const isHomePage = path === "/";

  return (
    <div className="md:min-h-[60vh] w-full md:pt-8">
      {/* Mobile */}
      <div className="-mt-12 columns-1 sm:columns-2 md:hidden">
        {projectSection.images?.map((image: any, index: number) => (
          <div key={index} className="m-12 break-inside-avoid">
            {isHomePage ? (
              <Link href={`/project/${slug}`}>
                <Image
                  src={urlFor(image.asset).url()}
                  alt="Gallery Image"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </Link>
            ) : (
              <Link href={urlFor(image).url() as string}>
                <Image
                  src={urlFor(image.asset).url()}
                  alt="Gallery Image"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:flex-row md:justify-center md:items-end  md:h-[60vh] w-full md:px-[10vw] ">
        {projectSection.images &&
          projectSection.images.map((image, index) => (
            <div className="relative h-[95%] w-full my-2 " key={index}>
              <Link
                href={isHomePage ? `/project/${slug}` : urlFor(image).url()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={urlFor(image).url() as string}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw"
                    className="object-contain p-2"
                  />
                </div>
              </Link>
            </div>
          ))}
      </div>
      {projectSection.text ? (
  isHomePage ? (
    <Link
      href={`/project/${slug}`}
      className="h-[30vh] flex flex-col items-center justify-center py-8"
    >
      <div className="px-4 md:text-center md:max-w-[55vw]">
        <p className="leading-[18px]">
          {projectSection.text[0]}
          <span className="text-2xl lg:text-4xl leading-[18px] lg:leading-[20px] font-serif tracking-tighter">
            {projectSection.text[1]}
          </span>
          {projectSection.text[2]}
          <span className="text-2xl lg:text-4xl leading-[18px] lg:leading-[20px] font-serif tracking-tighter">
            {projectSection.text[3]}
          </span>
          {projectSection.text[4]}
        </p>
      </div>
    </Link>
  ) : (
    <div className="h-[30vh] flex flex-col items-center justify-center py-8">
      <div className="px-4 md:text-center md:max-w-[55vw]">
        <p className="leading-[18px]">
          {projectSection.text[0]}
          <span className="text-2xl lg:text-4xl leading-[18px] lg:leading-[20px] font-serif tracking-tighter">
            {projectSection.text[1]}
          </span>
          {projectSection.text[2]}
          <span className="text-2xl lg:text-4xl leading-[18px] lg:leading-[20px] font-serif tracking-tighter">
            {projectSection.text[3]}
          </span>
          {projectSection.text[4]}
        </p>
      </div>
    </div>
  )
) : (
  <div className="md:h-24" />
)}

    </div>
  );
};

export default MapImageSection;
