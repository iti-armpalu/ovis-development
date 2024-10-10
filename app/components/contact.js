'use client';

import { useState } from 'react';
import { useAnimateOnView } from "../helpers/useAnimationOnView";
import styles from './contact.module.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const tagAnimation = useAnimateOnView();
  const titleAnimation = useAnimateOnView();
  const emailAnimation = useAnimateOnView();
  const formAnimation = useAnimateOnView();

  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const formRef = useRef(null);


 

  const [copied, setCopied] = useState(false);
  const email = 'jp@ovis.vc';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
    }).catch((error) => {
      console.error('Failed to copy email:', error);
    });
  };

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the tag
      gsap.from(tagRef.current, {
        opacity: 0, // The element starts completely transparent (invisible).
        y: 20, // The element starts 50 pixels below its natural position. y represents a vertical position (up and down movement).
        duration: 1, // The duration of the animation is 1 second.
        ease: 'power3.out', // makes the animation start quickly and then ease out smoothly at the end.
        scrollTrigger: {
          trigger: tagRef.current, // This property sets the element that will be used as the trigger point for the animation.
          start: 'top 80%', // When the user scrolls such that the top of the element is 80% of the way down the visible part of the screen, the animation will start.
        },
      });

      // Animate the title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      // Animate the form
      gsap.from(emailRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: emailRef.current,
          start: 'top 90%',
        },
      });

      // Animate the end sentence
      gsap.from(formRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    // Clean up ScrollTrigger instances when the component is unmounted
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.contact} id="contact">
      <h1
        ref={tagRef}
        // className={`${styles.sectionTitle} ${tagAnimation.inView ? 'fade-up' : 'hidden'}`}
        className={`${styles.sectionTitle} `}
      >
        Contact
      </h1>

      <div className={styles.contentWrapper}>
        <div>
        <h2
                  ref={titleRef}
          // className={`${styles.sectionDescription} ${titleAnimation.inView ? 'fade-up' : 'hidden'}`}
          className={`${styles.sectionDescription} `}
        >
          We’re here to connect. Whether you’re an investor looking for unique opportunities, a company seeking strategic guidance, or a member of the press, we’re ready to hear from you.
        </h2>
        <p
         ref={emailRef}
        //  className={`${emailAnimation.inView ? 'fade-up' : 'hidden'}`}
        >
          For any inquiries, submit a contact form or email us at 
          <button onClick={copyToClipboard} className={styles.copyButton}>
            {email}
          </button>
          {copied && <span className={styles.copiedText}> Email copied</span>}
        </p>
        </div>
        <div>
       


        <div 
          // ref={formAnimation.ref} 
          ref={formRef}
          // className={`${styles.formContainer} 
          // ${formAnimation.inView ? 'fade-up' : 'hidden'}`}
          className={styles.formContainer} 
          >


        <form className={styles.contactForm}>
            <div className={styles.formGroupHalf}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="2" required></textarea>
            </div>
            <button type="submit" className={styles.button}>Send</button>
          </form>


        </div>
        </div>
       
      </div> 

      {/* <div className={`${styles.contentWrapper} ${descriptionAnimation.inView ? 'fade-up' : 'hidden'}`}>
        <p className={`${styles.sectionDescription}`}>
          For any inquiries, submit a contact form or email us at <a href="mailto:jp@ovis.vc">jp@ovis.vc</a>
        </p>
        <div ref={formAnimation.ref} className={`${styles.formContainer} ${formAnimation.inView ? 'fade-up' : 'hidden'}`}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
        <p
          ref={endSentenceAnimation.ref}
          className={`${styles.endSentence} ${endSentenceAnimation.inView ? 'fade-up' : 'hidden'}`}
        >
          We look forward to hearing from you and will respond promptly to your message.
        </p>
      </div> */}
    </section>
  );
};

export default Contact;
