import React, { useContext } from "react";
import Context from "../context/Context";
import '../styles/Header.css';

function Header() {
  const { text, setText } = useContext(Context);
  return(
    <header>
      <h1>Álbum de fotos</h1>
      <label>
        <input
          className="input-header"
          type="text"
          placeholder="Procure um fotógrafo nesta página:"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </header>
  );
}

export default Header;
