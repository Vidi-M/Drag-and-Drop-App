import React, { useEffect, useRef } from 'react' 
import { DragPreviewImage, useDrag } from 'react-dnd';
import { shapeImage } from './shapeImage';


export const ItemTypes = {
    SHAPE: 'shape',
  };

export const Shape = ({shape, from}: {shape:string, from?:string}) => {
    const canDrag = shape !== 'empty'
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.SHAPE,
        canDrag: canDrag,
        item: {shape, from},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
    }));

    const ref = useRef<HTMLDivElement>(null);
    drag(ref);

    const renderShape = () => {
        switch (shape) {
            case 'circle':
                return <div className='mx-4 size-16 rounded-full bg-blue-700 hover:bg-blue-600'></div>;
            case 'square':
                return <div className="mx-4 size-16 bg-blue-700 hover:bg-blue-600"></div>;
            case 'hexagon':
                return <div className="mx-4 size-16 bg-blue-700 hover:bg-blue-600 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]"></div>;
            case 'triangle':
                return <div className='mx-4 size-16  bg-blue-700 hover:bg-blue-600 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]'></div>;
            default:
                return <div className='mx-4 size-16 bg-blue-400'></div>;
        }
    };

    return (
        <>
            <DragPreviewImage connect={preview} src={shapeImage}/>
            <div 
                ref={ref}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: canDrag ? 'move' : '',
                }}
            >
                {renderShape()}
            </div>
        </>
        
    )
}