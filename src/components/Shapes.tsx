import React from 'react'

export const Shape = ({shape}: {shape:string}): React.ReactElement => {
    switch (shape) {
        case 'circle':
            return <div className="m-4 h-12 w-12 rounded-full bg-blue-700"></div>;
        case 'square':
            return <div className="m-4 h-12 w-12 bg-blue-700"></div>;
        case 'hexagon':
            return <div className="m-4 h-12 w-12 bg-blue-700 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]"></div>;
        case 'triangle':
            return <div className='m-4 h-12 w-12  bg-blue-700 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]'></div>;
        default:
            return <div></div>
    }
}