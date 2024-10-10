import styles from "./page.module.css";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Contact />
    </div>

    // <div className={styles.page}>
  // <main className={styles.main}>

      // </main> 
    // </div>
  );
}
