import React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import PizzaList from "./components/PizzaList"
import PizzaDetails from "./components/PizzaDetails";
import PizzaAdd from "./components/PizzaAdd";
import PizzaPut from "./components/PizzaPut";
import PizzaDelete from "./components/PizzaDelete";

function App()
{
  return(
    <Router>
      <header>
        <h1>Pizzázó</h1>
      </header>
      <nav>
        <ul>
          <li><NavLink to="/">Pizzák</NavLink></li>
          <li><NavLink to="/pizza-hozzaadasa">Új Pizza</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<PizzaList/>}></Route>
        <Route path='/Pizza/:id' element={<PizzaDetails/>}></Route>
        <Route path='/pizza-hozzaadasa' element={<PizzaAdd/>}></Route>
        <Route path='/pizza-modositas/:id' element={<PizzaPut/>}></Route>
        <Route path='/pizza-torles/:id' element={<PizzaDelete/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;