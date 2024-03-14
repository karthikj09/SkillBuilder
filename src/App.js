import React from 'react';
import SystemDesign from './components/SystemDesign';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <SystemDesign />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
