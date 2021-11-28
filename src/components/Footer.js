import React, { useContext } from "react";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Context from "../context/Context";
import '../styles/Footer.css';

function Footer() {
  const { page, setPage } = useContext(Context);
  return(
    <footer>
      <button
        type="button"
        className="footer-btn"
        onClick={ () => setPage(page - 1) }
        disabled={ page === 1 }
      >
        <FaChevronLeft className="icons" />
      </button>
      <div className="footer-container">
        <span>Página {page} de 80</span>
        <div className="developer">
          <h4>Projeto criado por</h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/EmmanuelRBoo"
          >
            Emmanuel Boo
          </a>
        </div>
      </div>
      <button
        type="button"
        className="footer-btn"
        onClick={ () => setPage(page + 1) }
        disabled={ page === 80 }
      >
        <FaChevronRight className="icons" />
      </button>
    </footer>
  );
}

export default Footer;
