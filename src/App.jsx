import React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import PizzaList from "./components/PizzaList"
import PizzaDetails from "./components/PizzaDetails";
import PizzaAdd from "./components/PizzaAdd";
import PizzaPut from "./components/PizzaPut";
import PizzaDelete from "./components/PizzaDelete";
import 'bootstrap/dist/css/bootstrap.css';

function App()
{
  return(
    <Router>
      <header>
        <h1>Pizzázó</h1>
      </header>
      <nav>
        <ul>
          <li><NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart" viewBox="0 0 16 16">
  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
</svg>Pizzák</NavLink></li>
          <li><NavLink to="/pizza-hozzaadasa"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>Új Pizza</NavLink></li>
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