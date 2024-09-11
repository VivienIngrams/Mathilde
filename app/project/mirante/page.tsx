import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import {
  ProjectSection6,
  ProjectSection2,
} from "@/app/components/ProjectSection";
import { Mirante } from "@/app/interface";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

async function getProjectData() {
  const data = await client.fetch(
    ` 
      {
        "project": *[_type == 'project' && slug.current == 'mirante'][0] {
          title,
          "slug": slug.current,
          "sections": [
            {
              "text": text1
            },
              {
            "text": text2
              }
          ]
        },
        "mirante": *[_type == 'mirante'] | order(_createdAt asc) {
          title,
          "slug": slug.current,
          image,
          content,
        }
      }
    `,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return data;
}

export default async function MirantePage() {
  const projectMirante = await getProjectData();
  console.log(projectMirante);
  return (
    <div className="min-h-full">
  <NavMenu />
  <div className="bg-[rgba(227,224,220,0.85)]">
    <ProjectSection6
      projectSection={projectMirante.project.sections[0]}
      title={projectMirante.project.title}
    />

    <ProjectSection2
      projectSection={projectMirante.project.sections[1]}
      title={projectMirante.project.title}
    />
    {/* Saline */}
    <div className="md:grid md:grid-cols-3">
      <div className="flex flex-col justify-center items-start h-[55vh] md:min-h-[100vh] w-full md:w-full md:pl-12 col-span-2">
        <h1>{projectMirante.mirante[0].title}</h1>
        <div className="relative h-[75%] w-full">
          <Image
            src={urlFor(projectMirante.mirante[0].image).url() as string}
            alt={projectMirante.mirante.title}
            fill
            className="object-contain md:pl-4"
            style={{ objectPosition: "left" }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center py-8 md:py-20 text-right md:text-left md:mr-8 col-span-1">
        <PortableText value={projectMirante.mirante[0].content} />
      </div>
    </div>

    {/* Affranchie */}
    <div className="flex flex-col md:grid md:grid-cols-3">
      <div className="flex flex-col justify-center md:items-end h-[10vh] md:min-h-[100vh] w-full md:w-full">
        <h1>{projectMirante.mirante[1].title}</h1>
      </div>
      <div className="flex flex-col justify-center items-start h-[50vh] md:min-h-[100vh] w-full">
        <div className="relative h-[95%] w-full">
          <Image
            src={urlFor(projectMirante.mirante[1].image).url() as string}
            alt={projectMirante.mirante.title}
            fill
            className="object-contain"
            style={{ objectPosition: "left" }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center py-8 md:py-20 text-right md:text-left md:mr-8">
        <PortableText value={projectMirante.mirante[1].content} />
      </div>
    </div>

    {/* Luxuriance */}
    <div className="h-[30vh]  md:min-h-screen w-full relative">
      {projectMirante.mirante[2].image && (
        <Image
          src={urlFor(projectMirante.mirante[2].image).url() as string}
          alt={projectMirante.mirante[2].title}
          fill
          className="object-contain"
        />
      )}
    </div>
    <div className="flex flex-col  md:grid md:grid-cols-3">
      <div className="md:flex md:flex-col md:justify-center md:items-end  md:min-h-[30vh] w-full">
        <h1>{projectMirante.mirante[2].title}</h1>
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-center md:h-[30vh] w-full md:col-span-2">
        <div className="md:columns-2 md:gap-8">
          <PortableText value={projectMirante.mirante[2].content} />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>

  );
}
