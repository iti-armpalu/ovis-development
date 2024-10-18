"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./hero.module.css";

const Hero = () => {
  const initialTexts = [
    "Learn more about our strategy",
    "Explore investment opportunities",
  ];

  const [buttonTexts, setButtonTexts] = useState(initialTexts);

  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Stagger animation for each element inside the hero section
      gsap.fromTo(
        elementsRef.current, // Target elements
        {
          opacity: 0, // Start opacity
          y: 50, // Start position
        },
        {
          opacity: 1, // End opacity
          y: 0, // End position
          duration: 1,
          ease: "power3.out",
          stagger: 0.5, // 0.5s delay between each element animation
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Start the animation when the top of the section hits 80% of the viewport height
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context when component unmounts
  }, []);

  // Generalized function to handle text change based on button index
  const changeTextFunction = (index, newText) => {
    // Update the text
    setButtonTexts((prevTexts) => {
      const updatedTexts = [...prevTexts];
      updatedTexts[index] = newText;
      return updatedTexts;
    });

    // Revert text back to original after 5 seconds
    setTimeout(() => {
      setButtonTexts((prevTexts) => {
        const updatedTexts = [...prevTexts];
        updatedTexts[index] = initialTexts[index];
        return updatedTexts;
      });
    }, 5000); // 5000ms = 5 seconds
  };

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1 ref={(el) => (elementsRef.current[0] = el)}>
            Ovis is a specialized investment firm focused on value investing in
            the Canadian tech sector
          </h1>
          <p ref={(el) => (elementsRef.current[1] = el)}>
            We transform underperforming companies through strategic investments
            and operational restructuring
          </p>
        </div>

        <div className={styles.buttons}>
          <button
            ref={(el) => (elementsRef.current[2] = el)}
            className={styles.button}
            onClick={() =>
              changeTextFunction(0, "Strategy details coming soon")
            }
          >
            {buttonTexts[0]}
          </button>
          <button
            ref={(el) => (elementsRef.current[3] = el)}
            className={styles.button}
            onClick={() => changeTextFunction(1, "Opportunities coming soon")}
          >
            {buttonTexts[1]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
