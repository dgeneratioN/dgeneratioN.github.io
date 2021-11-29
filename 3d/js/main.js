//import * as from "three/examples/js/loaders/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.setClearColor(0x8b0000, 1);

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

camera.position.z = 1;
camera.position.x = 0;
camera.position.y = 0;


const loader = new THREE.GLTFLoader();

class DoomGuy {
  constructor() {
    loader.load("../3d/models/scene.gltf", (gltf) => {
      scene.add(gltf.scene);
      this.doomguy = gltf.scene;

      var box = new THREE.Box3().setFromObject(gltf.scene);

      // this re-sets the mesh position
      box.getCenter(gltf.scene.position);
      gltf.scene.position.multiplyScalar(- 1);


      var pivot = new THREE.Group();
      scene.add(pivot);
      pivot.add(gltf.scene);
      this.pivo = pivot;
      animate();
    })
  }
  rodar() {
    this.pivo.rotation.y += 0.01;
  }
  animate() {
    this.rodar();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
}

let doom = new DoomGuy();
let retroSound = new Audio("snd/collectible.mp3")


//doom.rodar();

function animate() {
  doom.rodar();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function romero() {
  retroSound.play()
}

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}