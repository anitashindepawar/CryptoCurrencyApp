import React from 'react';
import './App.css';
import Header from './components/header';
import CryptoCurrencyApp from './containers/CryptoCurrencyApp';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid className="App">
      <Header/>
      <CryptoCurrencyApp/>
      <Footer/>
    </Grid>
  );
}

export default App;
