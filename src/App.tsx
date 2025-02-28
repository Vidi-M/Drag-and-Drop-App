import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Quadrant from './components/Quadrant';

export default function App() {
  const getInitialState = () => {
    const quadrants = localStorage.getItem("quadrants");
    return quadrants ? 
      JSON.parse(quadrants) :
      {
        circle: 5,    // TopRight
        hexagon: 0,   // TopLeft
        square: 0,    // BotRight
        triangle: 0,  // BotLeft
      }
  }

  const [quadrants, setQuadrants] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("quadrants", JSON.stringify(quadrants))
  }, [quadrants])

  const resetShapes = () => {
    setQuadrants({
      circle: 5,
      hexagon: 0,
      square: 0,
      triangle: 0,
    })
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='h-screen flex flex-col'>
        <header className='bg-blue-500 text-white p-4 text-center text-2xl font-bold'>
          Drag and Drop App
          <button onClick={resetShapes} className='bg-white text-blue-500 text-xl px-2 rounded-lg ml-10'>
            RESET
          </button>
        </header>
        <div className='h-full grid grid-cols-2 m-1 gap-1'>
          <Quadrant num={quadrants.circle} shape="circle" setQuadrants={setQuadrants} quadrants={quadrants} />
          <Quadrant num={quadrants.hexagon} shape="hexagon" setQuadrants={setQuadrants} quadrants={quadrants} />
          <Quadrant num={quadrants.square} shape="square" setQuadrants={setQuadrants} quadrants={quadrants} />
          <Quadrant num={quadrants.triangle} shape="triangle" setQuadrants={setQuadrants} quadrants={quadrants} />
        </div>
      </div>
    </DndProvider>
  );
}
