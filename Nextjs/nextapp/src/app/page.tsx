import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Mainhero from "@/Components/Mainhero";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Mainhero />
      <Footer />
    </>
  );
}
