import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import {
  ProjectSection6,
  ProjectSection2,
} from "@/app/components/ProjectSection";
import { Mirante1, Mirante2, Mirante3 } from "@/app/components/MiranteSections";
import { Mirante } from "@/app/interface";


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
  const { project, mirante } = await getProjectData();

  return (
    <div className="min-h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)]">
        <ProjectSection6
          projectSection={project.sections[0]}
          title={project.title}
        />

        <ProjectSection2
          projectSection={project.sections[1]}
          title={project.title}
        />
        {/* Saline */}
        <Mirante1 projectSection={mirante[0]}/>

        {/* Affranchie */}
       <Mirante3 projectSection={mirante[1]}/>

        {/* Luxuriance */}
        <Mirante2 projectSection={mirante[2]}/>

        {/* Naufragée */}
        <Mirante1 projectSection={mirante[3]} />

        {/*Pleins Phares */}
        <Mirante2 projectSection={mirante[4]} />

        {/* Motel des Indes */}
        <Mirante3 projectSection={mirante[5]} />

        {/* Touareg */}
        <Mirante3 projectSection={mirante[6]} />

      </div>
      <Footer />
    </div>
  );
}
