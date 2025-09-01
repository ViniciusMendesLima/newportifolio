import styles from "./styles/About.module.css";
import foto from "../assets/fotomodelo.png";
import { AboutInformation } from "../components/AboutInformation";
import { useEffect, useState } from "react";
const About = () => {
  const [showInfo, setshowInfo] = useState(false);

  const handleClick = () => {
    setshowInfo((prev) => !prev);
  };

  useEffect(() => {
    if (showInfo) {
      document.body.style.overflow = "hidden"; // bloqueia rolagem
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "auto"; // libera rolagem
    }

    // Limpeza ao desmontar (por precaução)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showInfo]);
  return (
    <section id="About" className={`${styles.SectionAbout} Container`} >
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
