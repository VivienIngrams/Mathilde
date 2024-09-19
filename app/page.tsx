import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import { client } from "../sanity/lib/client";
import { Project } from "../app/interface";
import { Section } from "../app/interface";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import TitleSection from "@/app/components/Sections/1TitleSection";
import OnlyH3Section from "@/app/components/Sections/2OnlyH3Section";
import PostersSectionA from "@/app/components/Sections/3PostersSectionA";
import PostersSectionB from "@/app/components/Sections/4PostersSectionB";
import PostersSectionC from "@/app/components/Sections/5PostersSectionC";
import HalfHalfSection from "@/app/components/Sections/6HalfHalfSection";
import RandomSection from "@/app/components/Sections/7RandomSection";
import MapImageSection from "@/app/components/Sections/8MapImageSection";
import WideImageSection from "@/app/components/Sections/9WideImageSection";
import TextSection from "@/app/components/Sections/10TextSection";

// Get gallery data, for ordinaire and voyages section, to be included below with MapImageSection

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
          images[0..6] {
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
  2: OnlyH3Section,
  3: PostersSectionA,
  4: PostersSectionB,
  5: PostersSectionC,
  6: HalfHalfSection,
  7: RandomSection,
  8: MapImageSection,
  9: WideImageSection,
  10: TextSection,
};

export default async function Home() {
  const { project, gallery } = await getData();
  const transformedData = transformData(project);

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)]">
        {/* Voyages */}
        <Link href="/voyages" className="">
          <div
            className={` min-h-[95vh] min-w-screen  relative`}
          >
            <Image
              src={urlFor(gallery[0].images[0]).url() as string}
              alt={gallery[0].title}
              fill
              className="object-cover "
            />
          </div>
        </Link>
<div className="md:pt-12">
        {/* Projects */}
        {transformedData.map((project: Project, index: number) => {
          const SectionComponent = sectionComponents[project.section.layout];

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
        {/*Ordinaire */}
        <Link href="/mon-ordinaire">
          <MapImageSection
            projectSection={gallery[1]}
            title={gallery[1].title}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
