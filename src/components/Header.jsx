import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <img src="/images/logo.svg" className={styles.logoImg} />
        <div className={`d-flex gap-4 ${styles.topLink}`}>
          <a href="tel:9442975649" target="_blank">
            <img src="/images/call.svg" /> +91 9442975649
          </a>
          <a href="mailto:arkleedsngl@gmail.com" target="_blank">
            <img src="/images/message.svg" /> arkleedsngl@gmail.com
          </a>
          <div className="d-flex gap-3">
            <a
              href="https://www.instagram.com/ark_leeds/?igsh=ZW9kbDdkM3YwczM0#"
              target="_blank"
            >
              <img src="/images/instagram.svg" style={{ width: "17px" }} />
            </a>
            <a href="" target="_blank">
              <img src="/images/facebook.svg" style={{ width: "9px" }} />
            </a>
            <a href="https://wa.me/+919442975649" target="_blank">
              <img src="/images/whatsapp.svg" style={{ width: "16px" }} />
            </a>
            <a
              href="https://www.youtube.com/@arkleedsenergysolutions"
              target="_blank"
            >
              <img src="/images/youtube.svg" style={{ width: "20px" }} />
            </a>
          </div>
          <NavLink className={styles.contactUs} to="/contact">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
