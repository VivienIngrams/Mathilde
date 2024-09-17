import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";


const HalfHalfSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` w-full`}>
      <div className={`  md:grid md:grid-cols-2`}>
        {projectSection.text && (
          <div className="flex flex-col leading-normal justify-center py-8 md:py-20  text-right  md:mr-8 md:ml-[45%]">
            <p className="">
              <span className="text-3xl lg:text-4xl leading-[1] font-serif tracking-tighter">
                {projectSection.text[0]}
              </span>
              {projectSection.text[1]}
            </p>
            <p className="py-2">{projectSection.text[2]}</p>
            {projectSection.text[3] && (
              <p className="py-2">{projectSection.text[3]}</p>
            )}
          </div>
        )}
        <div>
          {projectSection.images && (
            <div className="flex flex-col justify-center items-start h-[45vh] md:min-h-[100vh] w-[100vw] md:w-[100%]  ">
              <div className="relative h-[95%] w-[100%] md:w-[90%]">
                <Image
                  src={urlFor(projectSection.images[0]).url() as string}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
          {!projectSection.images &&
            projectSection.text &&
            projectSection.text[4] && (
              <div className="flex flex-col justify-center items-start md:min-h-[80vh] w-[100vw] md:w-[100%]  ">
                <div className="flex flex-col justify-center py-8 md:py-20   md:mr-[45%]">
                  {projectSection.text[4] && (
                    <p className="py-2"> {projectSection.text[4]}</p>
                  )}
                  {projectSection.text[5] && (
                    <p className="py-2"> {projectSection.text[5]}</p>
                  )}
                  {projectSection.text[6] && (
                    <p className="py-2"> {projectSection.text[6]}</p>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default HalfHalfSection;