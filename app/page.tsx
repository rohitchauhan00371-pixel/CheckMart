import Banner from "@/components/Banner";
import Electronics from "@/components/Electronics";
import Foodies from "@/components/Foodies";
import Footer from "@/components/Footer";
import Topals from "@/components/Topals";
import Topdeals from "@/components/Topdeals";
import Tops from "@/components/Tops";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Banner />
    <Topals/>
    <Topdeals/>
    <Electronics/>
    <Foodies />
    <Tops />
    <Footer />
    </>
  );
}
