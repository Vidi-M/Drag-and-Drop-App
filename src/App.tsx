import React, { useState } from 'react';
import Draggable from 'react-draggable'

import ReactDOM from 'react-dom'
import {Shape} from './components/Shapes';
import Quadrant from './components/Quadrant';

export default function App() {

  return (
    <div className='h-screen flex flex-col'>
      <header className='bg-blue-500 text-white p-4 text-center text-xl font-bold'>
        Drag and Drop App
      </header>
      <div className='flex-1 grid grid-cols-2'>
        <Quadrant num={5} shape="circle" />
        <Quadrant num={5} shape="hexagon" />
        <Quadrant num={5} shape="square" />
        <Quadrant num={5} shape="triangle" />
        
      </div>
    </div>
  );
}
