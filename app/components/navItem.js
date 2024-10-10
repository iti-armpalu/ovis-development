"use client";

import Link from "next/link";
// import { useAnimateOnView } from "../helpers/useAnimationOnView";
import { useInView } from "react-intersection-observer";

const NavItem = ({ href, label, delay }) => {
  // const { ref, inView } = useAnimateOnView();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: delay, // Delay in milliseconds for when the element's inView state updates
  });

  return (
    <li
      ref={ref}
      className={`${inView ? "fade-up" : "hidden"}`}
      style={{ animationDelay: `${delay}ms` }} // Apply the delay as animationDelay in milliseconds
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavItem;
