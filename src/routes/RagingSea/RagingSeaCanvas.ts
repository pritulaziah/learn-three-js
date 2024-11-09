import * as THREE from "three";
import DefaultCanvas from "@classes/DefaultCanvas";
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

class RagingSeaCanvas extends DefaultCanvas {
  private water: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial, THREE.Object3DEventMap>;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.water = this.addWater();
  }

  /**
   * Water
   */
  private addWater() {
    // Geometry
    const waterGeometry = new THREE.PlaneGeometry(2, 2, 128, 128);
    // Material
    const waterMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_elevation: { value: 0.2 },
        u_frequency: { value: new THREE.Vector2(4, 1.5) },
      },
      side: THREE.DoubleSide,
    });

    // Mesh
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI * 0.5;
    this.scene.add(water);
    return water;
  }

  /**
   * GUI
   */
  private createDebug() {
    this.gui.add(this.water.material.uniforms.u_elevation, "value").min(0).max(1).step(0.001).name("Wave elevation");
    this.gui.add(this.water.material.uniforms.u_frequency.value, "x").min(0).max(10).step(0.001).name("Wave frequency x");
  }

  protected init(): void {
    this.camera.position.set(1, 1, 1);
    this.controls.enableDamping = true;
    this.createDebug();
  }
}

export default RagingSeaCanvas;
