import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import { client } from "../sanity/lib/client";
import { Project } from "../app/interface";
import Link from "next/link";


async function getData() {
  const data = await client.fetch(
    `
    *[_type == 'project'] | order(date desc) {
    title,
    date,
    "slug": slug.current,
       mainImages[],
      mainLayout,
      mainBackground,
      mainText
  }
  `,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return data;
}

function transformData(data: any[]): Project[] {
  return data.map((item) => ({
    title: item.title,
    slug: item.slug,
    date: item.date,
    section: {
      images: item.mainImages,
      layout: item.mainLayout,
      background: item.mainBackground,
      text: item.mainText,
    },
  }));
}

const sectionComponents: {
  [key: number]: React.ComponentType<{
    projectSection: Section;
    title: string;
    slug: string;
  }>;
} = {
  1: ProjectSection1,
  2: ProjectSection2,
  3: ProjectSection3,
  4: ProjectSection4,
  5: ProjectSection5,
  6: ProjectSection6,
  7: ProjectSection7,
  8: ProjectSection8,
  9: ProjectSection9,
  10: ProjectSection10,
 
};

export default async function Home() {
  const data = await getData();
  const transformedData = transformData(data);
  console.log(transformedData);
  return (
    <div className="h-full">
      <NavMenu />
      <div className=" bg-[rgba(227,224,220,0.85)] ">
        {transformedData.map((project: Project) => (
          <div key={project.slug}>
            <ProjectSection1
              projectSection={project.section}
              title={project.title}
              
            />
            <div className={`-mt-12 `} >
            <Link
              href={`/project/${project.slug}`}
           
            >
              Read more
            </Link></div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
