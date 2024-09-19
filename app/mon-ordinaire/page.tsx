import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

async function getImages() {
  const data = await client.fetch(
    `
    *[_type == 'gallery' && title == 'Mon ordinaire'][0] {
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
        revalidate: 10,
      },
    }
  );
  return data;
}

export default async function MonOrdinaire() {
  const data = await getImages();
  const images = data?.images || [];

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)] min-h-screen p-4">
        {data?.text && (
          <div className=" text-right ">
            <div className=" pb-12">
              <h1 className="pt-4">{data.title}</h1>

              <div className="my-2">
                <p className="py-2">{data.text[0]}</p>
                {data.text[1] && <p className="py-2">{data.text[1]}</p>}
                {data.text[2] && <p className="py-2">{data.text[2]}</p>}
                {data.text[3] && <p className="py-2">{data.text[3]}</p>}
                {data.text[4] && <p className="py-2">{data.text[4]}</p>}
              </div>
            </div>
          </div>
        )}
        {/* {data?.text && <OnlyH3Section title={data.title} />} */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image: any) => (
            <div key={image.asset._id} className="mb-4 break-inside-avoid">
              <Image
                src={urlFor(image.asset).url()}
                alt="Gallery Image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
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
