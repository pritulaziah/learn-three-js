import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";

class DefaultCanvas {
  private sizes: { width: number; height: number };
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public controls: OrbitControls;
  private clock: THREE.Clock;
  private requestId?: number;
  public gui: GUI;

  constructor(canvas: HTMLCanvasElement) {
    // Request animation frame id
    this.requestId = undefined;
    // Sizes
    const { innerWidth, innerHeight } = window;
    this.sizes = { width: innerWidth, height: innerHeight };
    // Scene
    this.scene = new THREE.Scene();
    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.gui = new GUI();
  }

  private setSize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
  }

  private onResize = () => {
    // Update sizes
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    // Update camera
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.setSize();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.render();
  };

  protected customAnimate(_: number) {}

  private animate = () => {
    this.requestId = requestAnimationFrame(this.animate);
    const elapsedTime = this.clock.getElapsedTime();

    this.customAnimate(elapsedTime);

    this.controls.update();
    this.render();
  };

  public destroy() {
    this.renderer.dispose();
    this.gui.destroy();
    window.removeEventListener("resize", this.onResize);
    this.requestId != null && cancelAnimationFrame(this.requestId);
  }

  protected init() {}

  public run() {
    window.addEventListener("resize", this.onResize);
    this.setSize();
    this.init();

    this.render();
    this.animate();
  }
}

export default DefaultCanvas;
