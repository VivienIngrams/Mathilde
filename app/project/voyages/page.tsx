import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../../components/Footer";
import NavMenu from "../../components/NavMenu";
import Link from "next/link";

async function getImages() {
  const data = await client.fetch(
    `
    *[_type == 'gallery' && title == 'Voyages'][0] {
      images[] {
        asset->{
          _id,
          url
        }
      },
      title,
      text,
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

export default async function Gallery() {
  const data = await getImages();
  console.log(data.text);
  const images = data?.images || [];

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.75)] min-h-screen p-4">
        {data?.text && (
          <div className=" text-right ">
            <div className="pb-4 md:pb-12">
              <h1 className="pt-4 ">{data.title}</h1>
              <div className="flex flex-col items-end">
                <p className="md:max-w-[50vw]">{data.text[0]}</p>
                <p className="md:max-w-[50vw]">{data.text[1]}</p>
              </div>
            </div>
          </div>
        )}
        {/* Use CSS columns for masonry effect */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image: any) => (
            <Link href={urlFor(image.asset).url()} key={image.asset._id} className=" break-inside-avoid">
              <Image
                src={urlFor(image.asset).url()}
                alt="Gallery Image"
                width={500}
                height={500} // Placeholder size, maintains aspect ratio
                className="w-full h-auto object-cover mb-4"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
