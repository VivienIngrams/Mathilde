import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";

const TitleSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` md:min-h-screen w-full `}>
      <div className={` md:grid md:grid-cols-2 pt-8`}>
        {projectSection.text && (
          // Mobile
          <div className="md:hidden text-right ">
            <div className=" pb-12">
              <h1 className="py-2">{title}</h1>
              {projectSection.images && projectSection.images[0] && (
                <div className="relative  h-[55vh] w-[100%]">
                  <Image
                    src={urlFor(projectSection.images[0]).url() as string}
                    alt={`${title} - additional`}
                    fill
                    className="object-contain z-10"
                    style={{ objectPosition: "right" }}
                  />
                </div>
              )}
              <p className="mt-2 py-2">{projectSection.text[0]}</p>
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
        {/* Desktop */}
        <div className="hidden md:flex md:flex-col md:justify-end md:items-end h-[75vh] md:h-[80vh] w-[85vw] md:w-[70vw] lg:w-[50vw]  ">
          <div className="relative h-full w-full md:w-[85%]">
            {projectSection.images && projectSection.images[0] && (
              <Image
                src={urlFor(projectSection.images[0]).url() as string}
                alt={title}
                fill
                className="object-contain  z-10"
                style={{ objectPosition: "right" }}
              />
            )}
          </div>
        </div>
        {projectSection.text && (
          <div className="hidden md:flex flex-col justify-center items-start pl-20">
            {projectSection.images && projectSection.images[1] && (
              <div className="relative h-[40vh] w-[50%] mb-4">
                <Image
                  src={urlFor(projectSection.images[1]).url() as string}
                  alt={`${title} - additional`}
                  fill
                  className="object-contain  z-10"
                />
              </div>
            )}
            <div className="w-[50%] pt-2">
              <h1 className="">{title}</h1>
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
  );
};

export default TitleSection;