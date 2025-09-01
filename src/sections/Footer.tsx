import styles from './styles/Footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={styles.Footer}>
        {/* Direitos autorais */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Vinícius Mendes Lima. Todos os direitos reservados.
        </p>

        {/* Links sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:seuemail@email.com"
            className="hover:text-blue-400 transition-colors"
          >
            Contato - seuemail@email.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
