import React from 'react';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Slider from './Component/Slider';
import Home from './Page/Home';
import About from './Page/About';
// import Offer from './Component/Offer';
// import Example from './Component/Example';
// import Table from './Component/Table';
//import Sample from './Component/Sample';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
 
  return (
    <Router>
   <Header />
  
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/About' element={< About />}></Route>
    <Route exact path='/Slider' element={< Slider />}></Route>
</Routes>
 <Footer />
 {/* <Sample name="Sara" />
      <Sample name="Cahal" />
      <Sample name="Edite" />
      <Example />
    <Header />
    <Slider />
    <Main />
    <Footer />
    <Offer />
    <Table /> 
<Sample /> */}
    </Router>
       );
}

export default App;


