import React from "react";
import { Shape } from "./Shapes";

export default function Quadrant({num, shape}: {num:number, shape: string}) {
    return (    

        <div className="bg-blue-400 flex items-center justify-center">
            {num === 0 ? (
                <Shape shape="empty"/> // Render a single placeholder shape
            ) : (
                // Render the actual shapes if num > 0
                Array.from({ length: num }).map((_, index) => (
                <Shape key={index} shape={shape}/>
                ))
            )}
        </div>
    )
}