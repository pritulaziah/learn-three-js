import useCanvas from "@hooks/useCanvas";
import Canvas from "@components/Canvas";
import RagingSeaClass from "./RagingSeaCanvas";

const initCanvas = (canvasElement: HTMLCanvasElement) =>
  new RagingSeaClass(canvasElement);

export function RagingSea() {
  const canvasRef = useCanvas(initCanvas);

  return <Canvas ref={canvasRef} />;
}
