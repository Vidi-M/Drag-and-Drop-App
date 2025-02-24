import React, { useEffect } from 'react' 
import { useDrag } from 'react-dnd';

export const ItemTypes = {
    SHAPE: 'shape',
  };

export const Shape = ({shape, from}: {shape:string, from:string}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SHAPE,
        item: {shape, from},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
    }));
    //   console.log(drag)

    const renderShape = () => {
        switch (shape) {
            case 'circle':
                return <div className="mx-4 h-12 w-12 rounded-full bg-blue-700"></div>;
            case 'square':
                return <div className="m-4 h-12 w-12 bg-blue-700"></div>;
            case 'hexagon':
                return <div className="m-4 h-12 w-12 bg-blue-700 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]"></div>;
            case 'triangle':
                return <div className='m-4 h-12 w-12  bg-blue-700 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]'></div>;
            default:
                return <div className='m-4 h-12 w-12 bg-blue-500'></div>;
        }
    };

    let shapeComponent = renderShape();

    // useEffect(
    //     () => {
    //         shapeComponent = renderShape();
    //     } , []
    // )

    return (
        // shapeComponent
        <div ref={drag}
         style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}>
            {renderShape()}
        </div>
        
    )
}