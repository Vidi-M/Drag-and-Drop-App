import React, { useRef } from "react";
import { ItemTypes, Shape } from "./Shapes";
import { useDrop } from "react-dnd";

export default function Quadrant({num, shape, setQuadrants, quadrants}: {num:number, shape: string, setQuadrants:any, quadrants:any}) {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.SHAPE,
        drop: (item: {shape: string, from: string}) => {
            console.log(`Shape ${item.shape} moved from ${item.from} to ${shape}`);
            if (item.from !== shape) {
                setQuadrants( () => ({
                    ...quadrants,
                    [item.from]: quadrants[item.from] - 1,
                    [shape]: quadrants[shape] + 1,
                }));
            }
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
          }),
    });

    const ref = useRef<HTMLDivElement>(null);
    drop(ref);

    return (    
        <div ref={ref} className="h-full bg-blue-400 border border-blue-500 to-blue-500 rounded-lg grow-0 flex flex-wrap items-center justify-center">
            {num === 0 ? (
                <Shape shape="empty"/> // Render a single placeholder shape
            ) : (
                // Render the actual shapes if num > 0
                Array.from({ length: num }).map((_, index) => (
                    <Shape key={index} shape={shape} from={shape}/>
                ))
            )}
        </div>
    )
}