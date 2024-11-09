import * as THREE from "three";
import DefaultCanvas from "@classes/DefaultCanvas";

class RagingSeaClass extends DefaultCanvas {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  protected init(): void {
    this.camera.position.set(1, 1, 1);
    this.controls.enableDamping = true;

    /**
     * Water
     */

    // Geometry
    const waterGeometry = new THREE.PlaneGeometry(2, 2, 128, 128);

    // Material
    const waterMaterial = new THREE.ShaderMaterial();

    // Mesh
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI * 0.5;
    this.scene.add(water);
  }
}

export default RagingSeaClass;
