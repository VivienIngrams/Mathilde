import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

async function getImages() {
  const data = await client.fetch(
    `
    *[_type == 'gallery'] {
      images[] {
        asset->{
          _id,
          url
        }
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

export default async function Gallery() {
  const data = await getImages();
  const images = data[0]?.images || [];

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)] p-4">
        {/* Use CSS columns for masonry effect */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image: any) => (
            <div key={image.asset._id} className="mb-4 break-inside-avoid">
              <Image
                src={urlFor(image.asset).url()}
                alt="Gallery Image"
                width={500}
                height={500} // Placeholder size, maintains aspect ratio
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
