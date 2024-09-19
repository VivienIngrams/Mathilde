import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import {
  Mirante1,
  Mirante2,
  Mirante3,
} from "../components/Sections/MiranteSections";

async function getImages() {
  const data = await client.fetch(
    `
    *[_type == 'gallery' && title == 'Mon ordinaire'] {
      images[] {
        asset->{
          _id,
          url
        }
      },
      content,
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

export default async function Ordinaire() {
  const data = await getImages();
  const images = data[0]?.images || [];
console.log(data)
  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)] min-h-screen p-4">
        {data.content && <Mirante1 projectSection={data[0]} />}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image: any) => (
            <div key={image.asset._id} className="mb-4 break-inside-avoid">
              <Image
                src={urlFor(image.asset).url()}
                alt="Gallery Image"
                width={500}
                height={500}
                objectFit="cover"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
