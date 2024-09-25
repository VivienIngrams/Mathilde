import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";
import Link from "next/link";

const TitleSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` md:min-h-screen w-full `}>
      <div className={` md:grid md:grid-cols-2 md:pt-8`}>
        {/* // Mobile */}
        <div className="md:hidden text-right ">
          <div className=" md:pb-12">
            <h1 className="pt-4">{title}</h1>
            {projectSection.images && projectSection.images[0] && (
              <Link href={urlFor(projectSection.images[0]).url()}>
                <div className=" break-inside-avoid ">
                  <Image
                    src={urlFor(projectSection.images[0]).url()}
                    alt="Gallery Image"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </Link>
            )}
            {projectSection.text && (
              <div className="my-2">
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
              <Link href={urlFor(projectSection.images[1]).url()}>
                <div className="my-4 break-inside-avoid ">
                  <Image
                    src={urlFor(projectSection.images[1]).url()}
                    alt="Gallery Image"
                    width={500}
                    height={500} // Placeholder size, maintains aspect ratio
                    objectFit="cover"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex md:flex-col md:justify-end md:items-end h-[75vh] md:h-[80vh] w-[85vw] md:w-[70vw] lg:w-[50vw]  ">
          <div className="relative h-full w-full md:w-[85%]">
            {projectSection.images && projectSection.images[0] && (
              <Link href={urlFor(projectSection.images[0]).url()}>
                <Image
                  src={urlFor(projectSection.images[0]).url() as string}
                  alt={title}
                  fill
                  className="object-contain  z-10"
                  style={{ objectPosition: "right" }}
                />
              </Link>
            )}
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-start md:pl-20">
          {projectSection.images && projectSection.images[1] && (
            <Link
              href={urlFor(projectSection.images[1]).url()}
              className="relative h-[40vh] w-[50%] mb-4"
            >
              <Image
                src={urlFor(projectSection.images[1]).url() as string}
                alt={`${title} - additional`}
                fill
                className="object-contain  z-10"
              />
            </Link>
          )}
          {projectSection.text && (
            <div className="w-[60%] pt-2">
              <h1 className="">{title}</h1>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
