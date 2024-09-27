"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";
import Link from "next/link";
import { usePathname } from "next/navigation";


const TitleSection = ({
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
    <div className={`md:min-h-screen w-full pb-4`}>
      <div className={`md:grid md:grid-cols-2 md:pt-8`}>
        {/* Mobile */}
        <div className="md:hidden text-right">
          <div className="md:pb-12">
            <h1 className="pt-4">{title}</h1>
            {projectSection.images && projectSection.images[0] && (
              <div className="my-4 break-inside-avoid">
                <Link
                  href={
                    isHomePage
                      ? `/project/${slug}`
                      : urlFor(projectSection.images[0]).url()
                  } className="cursor-pointer"
                >
                  <Image
                    src={urlFor(projectSection.images[0]).url()}
                    alt="Gallery Image"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </Link>
              </div>
            )}
            {projectSection.text && (
              <div className="mb-4">
                <p className="py-2">{projectSection.text[0]}</p>
                {projectSection.text[1] && (
                  <p className="py-2">{projectSection.text[1]}</p>
                )}
                {projectSection.text[2] && (
                  <p className="py-2">{projectSection.text[2]}</p>
                )}
                {projectSection.text[3] && (
                  <p className="py-2">{projectSection.text[3]}</p>
                )}
                {projectSection.text[4] && (
                  <p className="py-2">{projectSection.text[4]}</p>
                )}
              </div>
            )}
            {projectSection.images && projectSection.images[1] && (
              <Link
                href={
                  isHomePage
                    ? `/project/${slug}`
                    : urlFor(projectSection.images[1]).url()
                }
              >
                <div className="mb-4 break-inside-avoid">
                  <Image
                    src={urlFor(projectSection.images[1]).url()}
                    alt="Gallery Image"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex md:flex-col md:justify-end md:items-end h-[75vh] md:h-[80vh] w-[85vw] md:w-[70vw] lg:w-[50vw]">
          {projectSection.images && projectSection.images[0] && (
            <Link
              href={
                isHomePage
                  ? `/project/${slug}`
                  : urlFor(projectSection.images[0]).url()
              }
              className="relative h-full w-full md:w-[85%]"
            >
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,"
                className="object-contain z-10"
                style={{ objectPosition: "right" }}
              />
            </Link>
          )}
        </div>
        <div className="hidden md:flex flex-col justify-center items-start md:pl-20">
          {projectSection.images && projectSection.images[1] && (
            <Link
              href={
                isHomePage
                  ? `/project/${slug}`
                  : urlFor(projectSection.images[0]).url()
              }
              className="relative h-[40vh] w-[50%] mb-4"
            >
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={`${title} - additional`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw"
                className="object-contain z-10"
              />
            </Link>
          )}
          {projectSection.text && (
            <Link href={`/project/${slug}`} className="w-[60%] pt-2">
              <h1>{title}</h1>
              <div className="mr-[5vw]">
                <p className="py-2">{projectSection.text[0]}</p>
                {projectSection.text[1] && (
                  <p className="py-2">{projectSection.text[1]}</p>
                )}
                {projectSection.text[2] && (
                  <p className="py-2">{projectSection.text[2]}</p>
                )}
                {projectSection.text[3] && (
                  <p className="py-2">{projectSection.text[3]}</p>
                )}
                {projectSection.text[4] && (
                  <p className="py-2">{projectSection.text[4]}</p>
                )}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
