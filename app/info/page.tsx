import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";


export default async function Info() {

  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)] min-h-screen p-4">
        <div className="">

        </div>
      </div>
      <Footer />
    </div>
  );
}