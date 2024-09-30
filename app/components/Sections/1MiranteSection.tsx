
import { PortableText } from "next-sanity";
import Image from "next/image";
import { Mirante } from "@/app/interface";
import { urlFor } from "@/sanity/lib/image";


const Mirante1 = ({ projectSection }: { projectSection: Mirante }) => {

    return (
      <div className="min-h-screen pt-12 ">
        {/* Mobile */}
        <div className="md:hidden min-h-[80vh] text-right pt-12 flex flex-col">
          <div className="flex flex-col justify-center  w-full">
            <h1 className="pb-2 ">{projectSection.title}</h1>
          </div>
          <div className="columns-1  w-full">
            {projectSection.image && (
              <div>
                <div className="relative h-[95%] w-full">
                  <Image
                    src={urlFor(projectSection.image.asset).url()}
                    alt={projectSection.title}
                    width={700}
                    height={500}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center pt-6 pb-20">
            <PortableText value={projectSection.content} />
          </div>
        </div>
  
        {/* Desktop */}
        <div className="hidden pb-24 md:grid md:grid-cols-3">
          <div className="flex flex-col justify-center pt-8 md:pt-32 md:pb-8 text-right  md:ml-8 col-span-1">
            <PortableText value={projectSection.content} />
          </div>
          <div className="hidden md:flex flex-col justify-center items-start  md:min-h-[90vh] md:w-full md:pl-12 col-span-2">
            <h1 className="md:pl-4">{projectSection.title}</h1>
            {projectSection.image && (
              <div className="relative md:h-[75%] w-full">
                <Image
                  src={urlFor(projectSection.image).url() as string}
                  alt={projectSection.title}
                  fill
                  className="object-contain md:pl-4"
                  style={{ objectPosition: "left" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default Mirante1
