/* 
    =====================
        Quadrant.tsx (Quadrant Component)
        - Represents a quadrant where shapes can be dropped
        - Uses React DnD's useDrop to handle when the shapes are dropped
    ===================== 
*/

import React, { useRef } from "react";
import { ItemTypes, Shape } from "./Shapes";
import { useDrop } from "react-dnd";

export default function Quadrant({num, shape, setQuadrants, quadrants}: {num:number, shape: string, setQuadrants:any, quadrants:any}) {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.SHAPE,
        drop: (item: {shape: string, from: string}) => {
            console.log(`Shape ${item.shape} moved from ${item.from} to ${shape}`);
            // check if a shape has moved to a different quadrant
            if (item.from !== shape) {
                setQuadrants( () => ({
                    ...quadrants,
                    // update the number of shapes in the relevant quadrants
                    [item.from]: quadrants[item.from] - 1,
                    [shape]: quadrants[shape] + 1,
                }));
            }
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
          }),
    });

    // fix for the ref error
    const ref = useRef<HTMLDivElement>(null);
    drop(ref);

    return (    
        <div ref={ref} className="relative text-top h-full bg-blue-400 rounded-lg grow-0 flex flex-wrap items-center justify-center">
            {/* Display the shape count in top left corner */}
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold rounded-full p-2 h-6 flex items-center justify-center transform">
                {shape}: {num}
            </div>
            {/* Render Shapes */}
            {num === 0 ? (
                <Shape shape="empty"/> // Render a single hidden placeholder shape
            ) : (
                // Render the actual shapes if num > 0
                // Send information on what shape it was and what it is now
                Array.from({ length: num }).map((_, index) => (
                    <Shape key={index} shape={shape} from={shape}/>
                ))
            )}
        </div>
    )
}