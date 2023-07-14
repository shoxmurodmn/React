import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './1 dars/App';
import fruit from "./1 dars/mock"
// import './style.css'
import GetCalc from "./2-darst/index"

import State2 from "./4 darst/index"

import Styled from './5-darst/idex'
import CRAt from './CRAT/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* < ---   2 darsta  ---  */}

    {/* <h1 > Mevalar </h1>
    <div className='list'>
      {fruit.map(item => {
        return <Card data={item} />
      })} 
    </div>*/}

    {/* < ---   / 2darsta  ---  */}

    {/* < ---   3 darsta  ---  */}

    {/* <GetCalc /> */}
    

    
    {/* < ---   4 darsta  ---  */}
    {/* < ---   / darsta  ---  */}

    {/* <State2 /> */}

    {/* 5 darst */}
{/* 
    <Styled>

    </Styled> */}

    <CRAt></CRAt>
  </React.StrictMode>
);