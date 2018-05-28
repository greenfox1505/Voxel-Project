let THREE = require("three");

module.exports = class Renderer {
  constructor(args) {
    this.voxWorld = args.voxWorld 
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    //todo modular?
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }
  draw() {
	  //todo: smarter draw function?
	  this.renderer.render(this.scene, this.camera);
  }
  resize() {}
}
