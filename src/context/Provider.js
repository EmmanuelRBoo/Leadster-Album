import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);
  const client = '563492ad6f917000010000019a5bcf4b1859476186a62f6af160ca3e';
  async function fetchImage() {
    const URL = `https://api.pexels.com/v1/curated?page=${page}&per_page=24`;
    fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: client,
      },
    }).then(res => res.json())
      .then(media => {
        setPhotos(media.photos);
        setLoad(false);
        console.log(media)
      });
  }

useEffect(() => {
  fetchImage();
  setLoad(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [page])
  const context = {
    photos,
    setPhotos,
    page,
    setPage,
    load,
    setLoad,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );

}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;