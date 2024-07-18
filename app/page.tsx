import Image from "next/image";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-full">
      <NavMenu />
    <div>Hey hey</div>
    <Footer/>
    </div>
  );
}

