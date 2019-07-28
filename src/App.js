import React from 'react';
import './App.css';
import Header from './components/header';
import CryptoCurrencyApp from './containers/CryptoCurrencyApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <CryptoCurrencyApp/>
      <Footer/>
    </div>
  );
}

export default App;
