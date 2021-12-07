import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Procedures from './components/Procedures';
import Contact from './components/Contact'

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path='procedures' element={<Procedures />}/>
      <Route path='contact' element={<Contact />}/>
    </Route>
  </Routes>
  </BrowserRouter>, 
  rootElement
);
