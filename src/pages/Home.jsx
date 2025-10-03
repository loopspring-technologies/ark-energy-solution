import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const heroData = [
  {
    head: "We are a TEDA enlisted solar system integrator",
    content:
      "ARK Leeds is a leading solar PV engineering firm, delivering optimized and reliable solar and storage solutions for homes and businesses.",
  },
  {
    head: "NRE Empaneled and Government Approved",
    content:
      "Delivering reliable, compliant, and officially recognized solutions with the assurance of NRE empanelment.",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroData.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = heroData[index];
  return (
    <>
      <div className={styles.heroSection}>
        <img src="/images/home/wave2.svg" className={styles.wave2Img} />{" "}
        <img src="/images/home/wave1.svg" className={styles.wave1Img} />
        <img src="/images/home/cloud.svg" className={styles.cloud1Img} />
        <img src="/images/home/sun.svg" className={styles.sunImg} />
        <img src="/images/home/cloud.svg" className={styles.cloud2Img} />
        {/*  <img src="/images/home/bigCloud.svg" className={styles.bigCloudImg} /> */}
        <img src="/images/home/building.svg" className={styles.buildingImg} />
        <div className={styles.roadDiv}></div>
        <img src="/images/home/people.svg" className={styles.peopleImg} />
        <div className={styles.heroContent}>
          <div
            key={data.id}
            className={`${styles.heroSubContent} ${
              fade ? styles.fadeIn : styles.fadeOut
            }`}
          >
            <h2>{data.head}</h2>
            <p>{data.content}</p>
            <div className={`${styles.heroBtn} mt-5`}>
              <Link to="/contact">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.aboutDiv} mt-5 pt-5 sectionDiv`}>
        <h1 className="mainHead text-center">ARK LEEDS Energy Solutions</h1>
        <div className="row mt-5 pt-4 justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`${styles.aboutSubDiv}`}>
              <img src="/images/home/aboutImg1.svg" />
              <div>
                <h2>All in One Solar Street Light</h2>
                <p>
                  All in One street lights are suitable for applications where
                  the light intensity requirement is minimal. These are budget
                  friendly and all the components like solar panel, controller,
                  battery and luminary are assembled as a single piece.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`${styles.aboutSubDiv}`}>
              <img src="/images/home/aboutImg2.svg" />
              <div>
                <h2>Two in One Solar street light</h2>
                <p>
                  Semi-integrated Solar street lights are otherwise called as
                  Two-in-One solar street lights. They come in different ratings
                  and designs such as street lights, flood lights etc. ARK LEEDS
                  Energy Solutions have wide range of Two-in-One solar street
                  lights to suit every customer requirement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`${styles.aboutSubDiv}`}>
              <img src="/images/home/aboutImg3.svg" />
              <div>
                <h2>Stand alone Solar street light</h2>
                <p>
                  These are Solar street lights with every component like Solar
                  panel, Charge controller, Battery, Luminary installed
                  separately. Thus stand alone solar street lights have better
                  serviceability and are easy for maintenance activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-3 sectionDiv">
        <h1 className="mainHead text-center">Our Solutions</h1>
        <nav className={`${styles.navButton} mt-5 pt-2 navBtn`}>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Solar PV Solutions
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Lighting Solutions
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className={`${styles.solutionDiv}`}>
              <div className="row  align-items-center">
                <div className="col-md-6 mb-5">
                  <img src="/images/home/solutionImg1.svg" alt="" />
                </div>
                <div className="col-md-6 mb-4">
                  <div className="ps-md-5" style={{ width: "fit-content" }}>
                    <h2>Solar PV Solutions</h2>
                    <div className={styles.divider}>
                      <img src="/images/home/headUnderlineImg.svg" />
                    </div>
                  </div>
                  <p className="ps-md-5">
                    ARK LEEDS Energy Solutions supplies major solar components
                    like Solar Panels, Inverter, Charge Controller, Battery and
                    other required components.
                  </p>
                  <p className="ps-md-5">
                    We complete projects with exceptional quality and on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className={`${styles.solutionDiv} `}>
              <div className="row align-items-center">
                <div className="col-md-6 mb-5">
                  <img src="/images/home/solutionImg2.svg" alt="" />
                </div>
                <div className="col-md-6 mb-4">
                  <div className="ps-md-5" style={{ width: "fit-content" }}>
                    <h2>Lighting Solutions</h2>
                    <div className={styles.divider}>
                      <img src="/images/home/headUnderlineImg.svg" />
                    </div>
                  </div>
                  <p className="ps-md-5">
                    ARK LEEDS Lighting will guide you through the lighting
                    process and be your lighting resource. Uniquely qualified to
                    fulfil your lighting needs, we supply a variety of lighting
                    systems including track, recessed, and decorative fixtures.
                    It takes time and effort to ensure that your investment in
                    lighting will be returned to the bottom line, and it’s a
                    partnership we’ll be involved every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="mt-5  sectionDiv">
        <h1 className="mainHead text-center">Our Specialties</h1>
      </div>
    </>
  );
};
export default Home;
