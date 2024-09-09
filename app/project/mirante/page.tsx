import { client } from "../../../sanity/lib/client";
import NavMenu from "@/app/components/NavMenu";
import Footer from "@/app/components/Footer";

async function getProjectData() {
  const data = await client.fetch(
    `
      *[_type == 'mirante'] {
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
console.log(projectMirante)
  return (
    <div className="min-h-full">
      <NavMenu />
      <div className=" bg-[rgba(227,224,220,0.85)] ">
        {/* {projectMirante.map((section: Section, index: number) => { */}
        
          {/* {projectMirante} */}
        
      </div>
      <Footer />
    </div>
  );
}
