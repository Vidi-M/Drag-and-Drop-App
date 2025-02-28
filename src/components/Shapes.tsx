/* 
  =====================
   Shapes.tsx (Shape Component)
   - Renders shapes based on quadrant
   - Uses React DnD's useDrag to handle when a shape is being dragged
  ===================== 
*/

import React, { useEffect, useRef } from 'react' 
import { DragPreviewImage, useDrag } from 'react-dnd';
import { shapeImage } from './shapeImage';


export const ItemTypes = {
    SHAPE: 'shape',
  };

export const Shape = ({shape, from}: {shape:string, from?:string}) => {
    const canDrag = shape !== 'empty' // so we don't drag the placeholder
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.SHAPE,
        canDrag: canDrag,
        item: {shape, from},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
    }));

    // To handle the ref error
    const ref = useRef<HTMLDivElement>(null);
    drag(ref);

    // Render the shapes based on which quadrant it is in
    const renderShape = () => {
        const shapeStyle = "mx-4 size-16 bg-blue-700 hover:bg-blue-600"
        switch (shape) {
            case 'circle':
                return <div className= {`${shapeStyle} rounded-full`}></div>;
            case 'square':
                return <div className= {`${shapeStyle}`}></div>;
            case 'hexagon':
                return <div className= {`${shapeStyle} [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]`}></div>;
            case 'triangle':
                return <div className= {`${shapeStyle} [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]`}></div>;
            default:
                return <div className='mx-4 size-16 bg-blue-400'></div>;
        }
    };

    return (
        <>
            {/* Add an image preview whilst dragging shapes */}
            <DragPreviewImage connect={preview} src={shapeImage}/>
            <div 
                ref={ref}
                style={{
                    opacity: isDragging ? 0.5 : 1, // helps to show which shape is being dragged
                    cursor: canDrag ? 'move' : '', // only change cursor for shapes you can move
                }}
            >
                {/* renders which ever shape is required */}
                {renderShape()}
            </div>
        </>
        
    )
}