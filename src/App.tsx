import React, { useState } from 'react';
import Draggable from 'react-draggable'

import ReactDOM from 'react-dom'
import {Shape} from './components/Shapes';
import Quadrant from './components/Quadrant';

export default function App() {
  // const [shapes, setShapes] = useState([
  //   {id: 1, shape:'circle'},
  //   {id: 2, shape:'circle'},
  //   {id: 3, shape:'circle'},
  //   {id: 4, shape:'circle'},
  //   {id: 5, shape:'circle'},
  // ])

  return (
    <div className='h-screen flex flex-col'>
      <header className='bg-blue-500 text-white p-4 text-center text-xl font-bold'>
        Drag and Drop App
      </header>
      <div className='flex-1 grid grid-cols-2'>
        <Quadrant>
          <Shape shape="circle" />
        </Quadrant>
        <Quadrant>
          <Shape shape="hexagon" />
        </Quadrant>
        <Quadrant>
          <Shape shape="square"/>
        </Quadrant>
        <Quadrant>
          <Shape shape="triangle"/>
        </Quadrant>
      </div>

      {/* <div className='flex-1 grid grid-cols-2'>
          <div className='bg-blue-400 m-1 mr-0.5 mb-0.5 flex items-center justify-center'>
            circle
            <Circle></Circle>
          </div>
          <div className='bg-blue-400 m-1 ml-0.5 mb-0.5 flex items-center justify-center'>
            hexagon
          </div>
          <div className='bg-blue-400 m-1 mr-0.5 mt-0.5 flex items-center justify-center'>
            square
          </div>
          <div className='bg-blue-400 m-1 ml-0.5 mt-0.5 flex items-center justify-center'>
            triangle
          </div>
      </div> */}
    </div>
  );
}
