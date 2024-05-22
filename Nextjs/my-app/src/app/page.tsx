import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Mainhero from "@/Components/Mainhero";

export default function Home() {
  return (
    <>
      <main>
        {" "}
        <Navbar />
        <Mainhero />
        <Footer />
      </main>
    </>
  );
}
