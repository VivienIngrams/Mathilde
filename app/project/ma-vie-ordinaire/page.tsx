import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../../components/Footer";
import NavMenu from "../../components/NavMenu";
import Link from "next/link";

async function getImages() {
  const data = await client.fetch(
    `
    *[_type == 'gallery' && title == 'Ma Vie Ordinaire'][0] {
      images[] {
        asset->{
          _id,
          url
        }
      },
      text,
      title,
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

export default async function MaVieOrdinaire() {
  const data = await getImages();
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
                <p className="md:max-w-[50vw]">
                  {data.text[0]}
                  {data.text[1]}
                  {data.text[2]}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image: any) => (
            <div key={image.asset._id} className="mb-4 break-inside-avoid">
              <Link href={urlFor(image.asset).url()}>
              <Image
                src={urlFor(image.asset).url()}
                alt="Gallery Image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
              /></Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
