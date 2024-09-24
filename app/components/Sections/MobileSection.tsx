import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/interface";
import { urlFor } from "@/sanity/lib/image";

interface MobileProjectViewProps {
  project: Project;
}

export const MobileMapSection: React.FC<MobileProjectViewProps> = ({
  project,
}) => {
  return (
    <Link href={`/project/${project.slug}`}>
      <div className="flex flex-col h-[92vh] w-full relative pt-1">
        {project.section.images &&
          project.section.images.map((image, index) => (
            <div className="relative h-[95%] w-full my-[2px]" key={index}>
              <Image
                src={urlFor(image.asset).url() as string}
                alt={project.title}
                fill
                sizes=""
                className="object-contain"
              />
            </div>
          ))}
        <h1 className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-2xl text-[rgba(227,224,220)]">
          {project.title}
        </h1>
      </div>
    </Link>
  );
};

export const MobileSection: React.FC<MobileProjectViewProps> = ({
  project,
}) => {
  return (
    <Link href={`/project/${project.slug}`}>
      <div className="columns-1 sm:columns-2 gap-4 my-12 relative">
        {project.section.images && (
          <Image
            src={urlFor(project.section.images[0].asset).url()}
            alt={project.title}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        )}
      <h1 className="absolute bottom-1 left-2 text-center text-2xl text-[rgba(227,224,220)]">
          {project.title}
        </h1>
      </div>
    </Link>
  );
};
