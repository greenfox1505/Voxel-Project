let THREE = require("three");

let renderer = new (require("./Rendering"))({
  //todo
})

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
renderer.scene.add(cube);

renderer.camera.position.z = 5;

var animate = function() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.draw()
};

animate();
