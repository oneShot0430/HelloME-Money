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
        <Link to="/personal" className={styles.navLink}>Personal Account</Link>
        <Link to="/business" className={styles.navLink}>Business Account</Link>
        <Link to="/company" className={styles.navLink}>Company</Link>
      </div>
      <div className={styles.accountActionsContainer}>    
        <Link to="/login" className={styles.accountAction}><div>Login</div></Link>
        <Link to="/signup" className={styles.accountAction}><div>Signup</div></Link>
      </div>
    </div>
  );
};

export default Navbar;