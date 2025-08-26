import { MenuHamburguer } from "../components/MenuHuburguer";
import styles from './styles/Header.module.css'


const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="NameProfession">
        <h1>Seu Nome</h1>
        <p>Desenvolvedor web</p>
      </div>
      <MenuHamburguer/>
      
    </header>
  );
};

export {Header}