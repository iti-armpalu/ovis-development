"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import styles from "./header.module.css";
import logo from "../../public/images/ovis-logo.png";

const Header = () => {
  const navItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for navigation items only
      gsap.fromTo(
        navItemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }, navItemsRef);

    // Clean up GSAP context when the component is unmounted
    return () => ctx.revert();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            priority={true}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {["About", "Contact"].map((label, index) => (
            <li
              key={label}
              ref={(el) => (navItemsRef.current[index] = el)}
              className={styles.navItem}
            >
              <Link href={`#${label.toLowerCase()}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
