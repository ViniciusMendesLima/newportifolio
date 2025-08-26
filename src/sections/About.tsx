import styles from "./styles/About.module.css";
import foto from "../assets/fotomodelo.png";
import { AboutInformation } from "../components/AboutInformation";
import { useState } from "react";
const About = () => {
  const [showInfo, setshowInfo] = useState(false);

  const handleClick = () => {
    setshowInfo((prev) => !prev);
  };
  return (
    <section className={styles.SectionAbout}>
      <img src={foto} alt="Foto" />
      <div className={styles.AboutResum}>
        <h2>Sobre</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          libero, cupiditate impedit earum odio necessitatibus omnis saepe cum
          consequatur, at recusandae fuga magni delectus provident iste vero
          quis repellendus sit.
        </p>
        <button className={styles.BtnOpenInfo} onClick={handleClick}>Saiba Mais</button>
      </div>
      {showInfo && (
        <div className={styles.BackBlack}>
            <button className={styles.BtnClouseInfo} onClick={handleClick}>
              <span className={styles.ClouseInfoX}></span>
            </button>
          <div className={styles.AboutInformation}>
            <AboutInformation />
          </div>
        </div>
      )}
    </section>
  );
};

export { About };
