import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css'
import './index.css'


// import Ejercicio1 from './components/Ejercicio 1/Ejercicio1';
// import Ejercicio2 from './components/Ejercicio 2/Ejercicio2';
import Ejercicio3 from './components/Ejercicio 3/Ejercicio3';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Ejercicio1/> */}
    {/* <Ejercicio2 title='my friend!'/> */}
    <Ejercicio3/>
  </React.StrictMode>
);
