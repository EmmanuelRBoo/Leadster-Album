import React from 'react';
import './App.css';
import Album from './components/Album';
import Footer from './components/Footer';
import Header from './components/Header';
import Provider from './context/Provider';

function App() {
  return ( 
    <div className="main-container">
      <Provider>
        <Header />
        <Album />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
