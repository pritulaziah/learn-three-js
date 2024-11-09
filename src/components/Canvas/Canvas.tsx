import { forwardRef, HTMLAttributes } from "react";

export const Canvas = forwardRef<HTMLCanvasElement, HTMLAttributes<HTMLCanvasElement>>(
  function MyInput(props, ref) {
    return <canvas {...props} ref={ref} />;
  }
);
