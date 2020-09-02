import React from 'react';
import Header from './component/Template/Header';
import Home from './component/page/Home';
import About from './component/page/About';
import Footer from './component/Template/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <About />
      <Footer />
    </div>
  );
}

export default App;
