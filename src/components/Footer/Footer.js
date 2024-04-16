// Navbar
import React from "react"
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <div className={styles.title}>Who we are</div>
          <div className={styles.listItem}>About us</div>
          <div className={styles.listItem}>Code of Conduct</div>
          <div className={styles.listItem}>Partner with us</div>
        </div>
        <div className={styles.column}>
          <div className={styles.title}>Legal</div>
          <div className={styles.listItem}>Terms & Conditions</div>
          <div className={styles.listItem}>Privacy Policy</div>
        </div>
        <div className={styles.column}>
          <div className={styles.title}>Contact us</div>
          <div className={styles.listItem}>
            <p>United Kingdom Office:</p>
            <p>2nd Floor, 30 Churchill Pl, London</p>
            <p>E14 5EU United Kingdom</p>
          </div>
          <div className={styles.listItem}>
            <p>Canada Office:</p>
            <p>44322 YALE RD UNIT 3B #203</p>
            <p>CHILLIWACK, BC, CANADA V2R4H1</p>
          </div>
        </div>  
      </div>
      <div className={styles.bottomSection}>
        <p>© 2024 HelloMe Money. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;