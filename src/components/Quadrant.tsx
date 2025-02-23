import React from "react";
import { Shape } from "./Shapes";

export default function Quadrant({children}:{children: React.ReactNode}) {
    return (
        <div className='bg-blue-400 m-1 flex items-center justify-center'>
            {children}
        </div>
    )
}