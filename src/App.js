import React, { lazy, Suspense } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Provider from './context/Provider';

const PhotoAlbum = lazy(() => import('./components/Album'))

function App() {
  return ( 
    <div className="main-container">
      <Provider>
        <Header />
        <Suspense fallback={<Loading />}>
          <PhotoAlbum />
        </Suspense>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
