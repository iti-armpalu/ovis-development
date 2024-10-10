"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./about.module.css";

const About = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered animation for each element in the about section
      gsap.from(elementsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start when the top of the section is 80% of the way down the viewport
        },
      });
    }, sectionRef);

    // Clean up GSAP context when the component is unmounted
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <h1
        ref={(el) => (elementsRef.current[0] = el)}
        className={styles.sectionTitle}
      >
        About
      </h1>
      <div className={styles.contentWrapper}>
        <h2
          ref={(el) => (elementsRef.current[1] = el)}
          className={styles.sectionDescription}
        >
          Ovis is a special situation fund that focuses on transforming
          underperforming and distressed companies into thriving, high-value
          assets.
        </h2>
        <div className={styles.values}>
          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className={styles.value}
          >
            <h3 className={styles.valueTitle}>Mission</h3>
            <p className={styles.valueDescription}>
              Our mission is to unlock hidden potential by providing strategic
              capital, operational expertise, and hands-on management to help
              businesses overcome challenges and achieve sustainable growth.
            </p>
          </div>
          <div
            ref={(el) => (elementsRef.current[3] = el)}
            className={styles.value}
          >
            <h3 className={styles.valueTitle}>Strong network</h3>
            <p className={styles.valueDescription}>
              Operating as the only distressed investor in the Quebec VC market,
              we leverage our strong network of institutional and private
              investors to offer unique opportunities for growth and recovery.
            </p>
          </div>
          <div
            ref={(el) => (elementsRef.current[4] = el)}
            className={styles.value}
          >
            <h3 className={styles.valueTitle}>Proven turnaround expertise</h3>
            <p className={styles.valueDescription}>
              With a proven track record in VC turnarounds, we specialize in
              secondary transactions, restructuring, and driving value creation
              across our portfolio companies. We work closely with founders and
              management teams to implement tailored solutions that deliver
              long-term success.
            </p>
          </div>
          <div
            ref={(el) => (elementsRef.current[5] = el)}
            className={styles.value}
          >
            <h3 className={styles.valueTitle}>Strategic approach</h3>
            <p className={styles.valueDescription}>
              Guided by a disciplined Value Creation Playbook, we approach each
              opportunity with a focus on strategic transformation, operational
              efficiency, and creating value for both our companies and our
              partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
