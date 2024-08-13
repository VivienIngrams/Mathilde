import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import { client } from "../sanity/lib/client";
import { Project } from "../app/interface";
import Link from "next/link";
import { ProjectSection1 } from "./components/ProjectSection";

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

export default async function Home() {
  const data = await getData();
  const transformedData = transformData(data);
  console.log(transformedData[1].section);
  return (
    <div className="h-full">
      <NavMenu />
      <div className="">
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
