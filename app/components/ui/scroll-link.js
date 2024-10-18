"use client";

import { useRef } from "react";
import styles from "./scroll-link.module.css"; // Create a CSS module for custom styles if needed

const ScrollLink = ({ label, targetId }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={styles.scrollLink} onClick={handleScroll}>
      {label}
    </button>
  );
};

export default ScrollLink;
