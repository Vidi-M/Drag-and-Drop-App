import React, { useState } from 'react';
import Draggable from 'react-draggable'

import ReactDOM from 'react-dom'
import {Shape} from './components/Shapes';
import Quadrant from './components/Quadrant';

export default function App() {
  const [quadrants, setQuadrants] = useState({
    circle: 4,    // TopRight
    hexagon: 1,   // TopLeft
    square: 0,    // BotRight
    triangle: 0,  // BotLeft
  })

  return (
    <div className='h-screen flex flex-col'>
      <header className='bg-blue-500 text-white p-4 text-center text-xl font-bold'>
        Drag and Drop App
      </header>
      <div className='flex-1 grid grid-cols-2'>
        <Quadrant num={quadrants.circle} shape="circle" />
        <Quadrant num={quadrants.hexagon} shape="hexagon" />
        <Quadrant num={quadrants.square} shape="square" />
        <Quadrant num={quadrants.triangle} shape="triangle" />
      </div>
    </div>
  );
}
