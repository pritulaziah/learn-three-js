import useCanvas from "@hooks/useCanvas";
import Canvas from "@components/Canvas";
import RagingSeaClass from "./RagingSeaClass";

const initCanvas = (canvasElement: HTMLCanvasElement) =>
  new RagingSeaClass(canvasElement);

function RagingSea() {
  const canvasRef = useCanvas(initCanvas);

  return <Canvas ref={canvasRef} />;
}

export default RagingSea;
