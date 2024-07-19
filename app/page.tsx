import Image from "next/image";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import { client, urlFor } from "../sanity/lib/client";
import { projectType } from "../app/interface";

async function getData() {
  const data = await client.fetch(
    `
    *[_type == 'project' && title == "Sentiment océanique"] | order(date desc) {
    title,
    "slug": slug.current,
      date,
      images1[],
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

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="h-full">
      <NavMenu />
      <div className="">
        {data.map((project: projectType) => (
          <div className="min-h-screen w-full" key={project.slug}>
            <h2>{project.title}</h2>
            {project.images1.map((image, index) => (
              <Image
                key={index}
                src={urlFor(image).url() as string}
                alt={project.title}
                width={200}
                height={200}
              />
            ))}
            <p>{project.date}</p>
            <a href={`/project/${project.slug}`}>Read more</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
