
import { PortableText } from "next-sanity";
import Image from "next/image";
import { Mirante } from "@/app/interface";
import { urlFor } from "@/sanity/lib/image";


const Mirante3 = ({ projectSection }: { projectSection: Mirante }) => {

    return (
      <div className="min-h-[99vh] md:pb-24 pt-12 flex flex-col md:grid md:grid-cols-3">
        <div className="flex flex-col justify-center md:items-end h-[10vh] md:min-h-[100vh] w-full md:w-full">
          <h1 className="md:mr-8">{projectSection.title}</h1>
        </div>
        <div className="columns-1 md:flex flex-col justify-center items-start md:min-h-[90vh] w-full">
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
                  style={{ objectPosition: "left" }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center pt-6 pb-20 md:p-12 md:mr-8">
          <PortableText value={projectSection.content} />
        </div>
      </div>
    );
  };
  
  export default Mirante3