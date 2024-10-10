'use client';

import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Ovis. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
