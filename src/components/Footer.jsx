import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerDiv}>
        <div className="d-flex align-items-center justify-content-between">
          <img src="/images/footerLogo.svg" className={styles.logoImg} />
          <ul className="d-flex">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/about">SOLAR PV SOLUTIONS</Link>
            </li>
            <li>
              <Link to="/about">LIGHTING SOLUTIONS</Link>
            </li>
            <li>
              <Link to="/about">GALLERY</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerSecondDiv}>
        <div
          className={`d-flex justify-content-between ${styles.footerSecondSubDiv}`}
        >
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/ark_leeds/?igsh=ZW9kbDdkM3YwczM0#"
              target="_blank"
            >
              <img src="/images/finstagram.svg" style={{ width: "22px" }} />
            </a>
            <a href="" target="_blank">
              <img src="/images/ffacebook.svg" style={{ width: "22px" }} />
            </a>
            <a href="https://wa.me/+919442975649" target="_blank">
              <img src="/images/fwhatsapp.svg" style={{ width: "22px" }} />
            </a>
            <a
              href="https://www.youtube.com/@arkleedsenergysolutions"
              target="_blank"
            >
              <img src="/images/fyoutube.svg" style={{ width: "22px" }} />
            </a>
          </div>
          <div className={styles.copyrightDiv}>
            Copyright © 2025 Nalinam Develop By{" "}
            <Link to="https://loopspring.in/">LoopSpring Technologies</Link>.
          </div>
          <div className={styles.contactBtn}>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
