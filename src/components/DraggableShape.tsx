import React from 'react';
import { useDrag } from 'react-dnd';
import { Shape } from './Shapes';

// export default function DragShape({shape, fromQuadrant}) {
//     const [, drag] = useDrag(() => ({
//         type: shape,
//         item: { fromQuadrant },
//     }));
  
//     return (
//       <div>
//         <Shape shape={shape} />
//       </div>
//     );
// }