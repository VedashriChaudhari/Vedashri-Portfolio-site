import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Vishwakarma Institute of Technology</h3>
              <p>
                Btech in Artificial Intelligence and Data Science | CGPA-8.55
              </p>
              <p>
                2025 (expected)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>HSC</h3>
              <p>
                Dr. Ulhas Patil English Medium School, Savda | Percentage-84%
              </p>
              <p>
                2021
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>SSC</h3>
              <p>
                Tapti Public School, Bhusawal | Percentage-91%
              </p>
              <p>
                2019
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};