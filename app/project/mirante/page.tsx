import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import { Section } from "@/app/interface";

async function getProjectData() {
  const data = await client.fetch(
    `
      *[_type == 'project' {
        title,
        "slug": slug.current,
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

export default async function Mirante() {
  const projectMirante = await getProjectData();

  return (
    <div className="min-h-full">
      <NavMenu />
      <div className=" bg-[rgba(227,224,220,0.85)] ">
        {/* {projectMirante.map((section: Section, index: number) => {
 
          
        } */}
      </div>
      <Footer />
    </div>
  );
}
