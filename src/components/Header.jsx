import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { Modal } from "bootstrap";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const modalEl = document.getElementById("exampleModal");
    const bsModal = new Modal(modalEl, { backdrop: true });
    const onShown = () => {
      const backdrop = document.querySelector(".modal-backdrop");
      if (!backdrop) return;
      const onBgClick = () => {
        bsModal.hide();
        document.body.classList.remove("modal-open");
        document
          .querySelectorAll(".modal-backdrop")
          .forEach((el) => el.remove());
      };
      backdrop.addEventListener("click", onBgClick);
      modalEl.addEventListener("hidden.bs.modal", () => backdrop.remove(), {
        once: true,
      });
    };

    modalEl.addEventListener("shown.bs.modal", onShown);
    return () => {
      modalEl.removeEventListener("shown.bs.modal", onShown);
    };
  }, []);

  const closeModal = () => {
    const modalEl = document.getElementById("exampleModal");
    const bsModal =
      Modal.getInstance(modalEl) ?? new Modal(modalEl, { backdrop: true });
    bsModal.hide();
  };
  const openModal = () => {
    const modalEl = document.getElementById("exampleModal");
    const modal = Modal.getInstance(modalEl) || new Modal(modalEl);
    modal.show();
  };
  return (
    <>
      <div className={styles.mainHeader}>
        <div className="d-flex justify-content-between align-items-center">
          <img src="/images/logo.svg" className={styles.logoImg} />
          <div className={`d-flex gap-4 align-items-center ${styles.topLink}`}>
            <a
              href="tel:9442975649"
              target="_blank"
              className={styles.headerLink}
            >
              <img src="/images/call.svg" /> +91 9442975649
            </a>
            <a
              href="mailto:arkleedsngl@gmail.com"
              target="_blank"
              className={styles.headerLink}
            >
              <img src="/images/message.svg" /> arkleedsngl@gmail.com
            </a>
            <div className={`d-flex gap-3 ${styles.socialLinks}`}>
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
            <div className={styles.togButton}>
              <button
                className="navbar-toggler"
                type="button"
                onClick={openModal}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.navHeaderDiv}>
          <nav id="navHeader" className="navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse justify-content-end">
              <ul className={`navbar-nav mb-lg-0 ${styles.navHeaderSubDiv}`}>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    ABOUT US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    SOLAR PV SOLUTIONS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    LIGHTING SOLUTIONS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    GALLERY
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`modal fade left ${styles.modalDiv}`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
      >
        <div className={`modal-dialog  ${styles.modalDialog}`}>
          <div className={`modal-content  ${styles.modalContent}`}>
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={`modal-body  ${styles.modalBody}`}>
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    ABOUT US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    SOLAR PV SOLUTIONS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    LIGHTING SOLUTIONS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    GALLERY
                  </NavLink>
                </li>
              </ul>
              <div className={styles.contactUsModal}>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
