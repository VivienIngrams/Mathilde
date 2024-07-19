import Image from "next/image";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import { client } from "../sanity/lib/client";
import { Project , Section } from "../app/interface";
import ProjectSection from "./components/ProjectSection";
import Link from "next/link";

async function getData() {
  const data = await client.fetch(
    `
    *[_type == 'project'] | order(date desc) {
    title,
    "slug": slug.current,
      subtitle1,
      images1[],
      layout1,
      font1,
      background1,
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
  return data.map(item => ({
    title: item.title,
    slug: item.slug,
    section: {
      images: item.images1,
      subtitle: item.subtitle1,
      layout: item.layout1,
      font: item.font1,
      background: item.background1,
      
    },
  }));
}


export default async function Home() {
  const data = await getData();
  const transformedData = transformData(data);
  console.log(transformedData[0].section);
  return (
    <div className="h-full">
      <NavMenu />
      <div className="">
        {transformedData.map((project: Project) => (
          <div className={`${project.section.background} min-h-screen w-full`} key={project.slug}>
            <h1>{project.title}</h1>
          <ProjectSection projectSection={project.section as Section} />
          <Link href={`/project/${project.slug}`}>Read more</Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
