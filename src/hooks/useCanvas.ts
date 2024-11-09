import DefaultCanvas from "@classes/DefaultCanvas";
import { useEffect, useRef } from "react";

const useCanvas = (
  initCanvas: (canvasElement: HTMLCanvasElement) => DefaultCanvas
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current == null) return;

    const canvas = initCanvas(canvasRef.current);
    canvas.run();

    return () => {
      canvas.destroy();
    };
  }, [initCanvas]);

  return canvasRef;
};

export default useCanvas;
