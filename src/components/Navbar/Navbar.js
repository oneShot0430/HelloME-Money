// Navbar
import React from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo_link}>
        <img src="/images/HelloME_logo.png" alt="HelloMe Money Logo" className={styles.logo_img} />
        <span className={styles.logo_description}>HelloMe Money</span>
      </Link>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.navLink}>Personal Account</Link>
        <Link to="/" className={styles.navLink}>Business Account</Link>
        <Link to="/" className={styles.navLink}>Company</Link>
      </div>
      <div className={styles.accountActionsContainer}>    
        <Link to="/" className={styles.accountAction}><div>Login</div></Link>
        <Link to="/" className={styles.accountAction}><div>Signup</div></Link>
      </div>
    </div>
  );
};

export default Navbar;