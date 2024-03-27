import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import HeroBanner from "@/components/HeroBanner";
import Solutions from "@/components/Solutions";
import HowitsWork from "@/components/HowitsWork";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import JoinAi from "@/components/JoinAi";
import Footer from "@/components/Footer";
import Move from "@/components/Move";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div>
        <HeroBanner />
      </div>
      <Solutions />
      <HowitsWork />
      <Features />
      <Move />
      <Testimonial />
      <JoinAi />
      <Footer />
    </main>
  );
}
