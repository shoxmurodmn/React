import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './App';
import fruit from "./mock"
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 > Mevalar </h1>
    <div className='list'>
      {fruit.map(item => {
        return <Card data={item} />
      })}
    </div>
  </React.StrictMode>
);