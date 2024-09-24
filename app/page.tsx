import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import { client } from "../sanity/lib/client";
import { Project } from "../app/interface";
import { Section } from "../app/interface";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import TitleSection from "@/app/components/Sections/1TitleSection";
import PosterSection from "@/app/components/Sections/2PosterSection";
import HalfHalfSection from "@/app/components/Sections/6HalfHalfSection";
import RandomSection from "@/app/components/Sections/7RandomSection";
import MapImageSection from "@/app/components/Sections/8MapImageSection";
import WideImageSection from "@/app/components/Sections/9WideImageSection";
import {
  MobileMapSection,
  MobileSection,
} from "./components/Sections/MobileSection";

async function getData() {
  const data = await client.fetch(
    `{
        "project": *[_type == 'project'] | order(order asc) {
          title,
          order,
          "slug": slug.current,
          mainImages[],
          mainLayout,
          mainBackground,
          mainText
        },
        "gallery": *[_type == 'gallery'] {
          images[0..4] {
            asset->{
              _id,
              url
            }
          },
          text,
          title
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
  1: TitleSection,
  2: PosterSection,
  6: HalfHalfSection,
  7: RandomSection,
  8: MapImageSection,
  9: WideImageSection,
};

export default async function Home() {
  const { project, gallery } = await getData();
  const transformedData = transformData(project);

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.70)] p-4">
       
        {/* Projects */}
        <div className="">
          {/* Mobile View */}
          <div className="md:hidden -mt-5">
            <MobileMapSection project={transformedData[0]} />
            <MobileSection project={transformedData[2]} />
            <MobileSection project={transformedData[3]} />
            <MobileMapSection project={transformedData[5]} />
            <MobileSection project={transformedData[1]} />
            <MobileSection project={transformedData[4]} />
            <MobileMapSection project={transformedData[6]} />
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            {transformedData.map((project: Project, index: number) => {
              const SectionComponent =
                sectionComponents[project.section.layout];

              return (
                <Link key={index} href={`/project/${project.slug}`}>
                  {SectionComponent ? (
                    <SectionComponent
                      projectSection={project.section}
                      title={project.title}
                      slug={project.slug}
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Ordinaire */}
        <Link href="/ma-vie-ordinaire">
          <div className="hidden md:block">
            <MapImageSection
              projectSection={gallery[1]}
              title={gallery[1].title}
            />
          </div>
          {/* Mobile  */}
          <div className="md:hidden mt-12">
            <div className="min-h-[70vh] min-w-screen relative">
              <Image
                src={urlFor(gallery[1].images[0]).url() as string}
                alt={gallery[1].title}
                fill
                className="object-cover"
              />
              {/* Add the overlay here */}
              <h1 className="absolute bottom-2 left-2 text-white text-2xl ">
                {gallery[1].title}
              </h1>
            </div>
          </div>
        </Link>

        {/* Voyages */}
        <Link href="/voyages">
          <div className="hidden md:block">
            <RandomSection
              projectSection={gallery[0]}
              title={gallery[0].title}
            />
          </div>
          {/* Mobile  */}
          <div className="md:hidden mt-12">
            <div className="min-h-[70vh] min-w-screen relative">
              <Image
                src={urlFor(gallery[0].images[0]).url() as string}
                alt={gallery[0].title}
                fill
                className="object-cover"
              />
              {/* Add the overlay here */}
              <h1 className="absolute bottom-2 left-2 text-white text-2xl ">
                {gallery[0].title}
              </h1>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
