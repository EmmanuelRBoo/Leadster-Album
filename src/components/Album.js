import React, { useContext } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Context from '../context/Context';
import '../styles/Album.css';

function Album() {

  const {photos, page, setPage, text } = useContext(Context);

  return (
    <main>
      <button
        type="button"
        className="btn"
        onClick={ () => setPage(page - 1) }
        disabled={ page === 1 }
      >
        <FaChevronLeft className="icons" />
      </button>
      <div className="album-container">
        {photos.filter(e => e.photographer.includes(text.toLocaleLowerCase())).map(img => {
          return(
            <div className="photo-container" key={img.id}>
              <img src={ img.src.tiny } alt={`foto feita por ${img.photographer}`} />
              <p className="photographer">{img.photographer}</p>
            </div>
          );
        }) }
      </div>
      <button
        type="button"
        className="btn"
        onClick={ () => setPage(page + 1) }
        disabled={ page === 80 }
      >
        <FaChevronRight className="icons" />
      </button>
    </main>
  );
}

export default Album;