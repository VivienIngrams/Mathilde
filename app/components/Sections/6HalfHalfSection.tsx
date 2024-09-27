import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Section } from "../../interface";
import Link from "next/link";

const HalfHalfSection = ({
  projectSection,
  title,
}: {
  projectSection: Section;
  title: string;
}) => {
  return (
    <div className={` w-full`}>
      <div className={`py-6 md:grid md:grid-cols-2`}>
        {projectSection.text && (
          <div className="flex flex-col justify-center md:py-20  md:text-right md:min-h-[80vh] md:mr-8 md:ml-[45%]">
            <p className="">
              <span className="text-2xl lg:text-4xl leading-[18px] lg:leading-[20px] font-serif tracking-tighter">
                {projectSection.text[0]}
              </span>
              {projectSection.text[1]}
            </p>
            <p className="py-2">{projectSection.text[2]}</p>
            {projectSection.text[3] && (
              <p className="">{projectSection.text[3]}</p>
            )}
          </div>
        )}
        <div>
          {projectSection.images && (
            <div className="my-4 flex flex-col justify-center items-start md:min-h-[90vh] w-[100%]  ">
              <div className="relative">
                <Link href={urlFor(projectSection.images[0]).url() as string}>
                  <Image
                    src={urlFor(projectSection.images[0]).url() as string}
                    alt={title}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          )}
          {!projectSection.images &&
            projectSection.text &&
            projectSection.text[4] && (
              <div className="flex flex-col justify-center items-start md:min-h-[80vh] md:w-[100%]  ">
                <div className="flex flex-col justify-center md:py-20   md:mr-[45%]">
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
