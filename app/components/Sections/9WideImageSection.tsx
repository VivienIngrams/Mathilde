"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";
import { usePathname } from "next/navigation";

const WideImageSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  const path = usePathname();
  const isHomePage = path === "/";
  return (
    <div
      className={`h-[40vh] md:min-h-screen min-w-screen  md:-pb-[20vh] md:h-[120vh] md:mb-12 relative`}
    >
      {projectSection.images && (
        <Image
          src={urlFor(projectSection.images[0]).url() as string}
          alt={title}
          fill
          className="object-cover px-4"
        />
      )}
      {isHomePage && (
        <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          {title}
        </h1>
      )}
    </div>
  );
};

export default WideImageSection;
