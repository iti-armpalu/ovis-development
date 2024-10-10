"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

const Hero = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Stagger animation for each element inside the hero section
      gsap.from(elementsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5, // 0.3s delay between each element animation
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start the animation when the top of the section hits 80% of the viewport height
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context when component unmounts
  }, []);

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
          <Link
            href="/strategy"
            ref={(el) => (elementsRef.current[2] = el)}
            className={`${styles.button}`}
          >
            Learn more about our strategy
          </Link>
          <Link
            href="/opportunities"
            ref={(el) => (elementsRef.current[3] = el)}
            className={`${styles.button}`}
          >
            Explore investment opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
