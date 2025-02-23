import React from "react";
import { Shape } from "./Shapes";

export default function Quadrant({num, shape}: {num:number, shape: string}) {
    return (
        <div className="bg-blue-400 m-1 flex items-center justify-center">
            {Array.from({ length: num }).map((_, index) => (
                <Shape key={index} shape={shape}/>
            ))}
        </div>
    )
}