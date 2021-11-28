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
    loader.load("../models/scene.gltf", (gltf) => {
      scene.add(gltf.scene);
      //gltf.scene.scale.set (4,4,4);
      this.doomguy = gltf.scene;

      var box = new THREE.Box3().setFromObject(gltf.scene);
      box.getCenter(gltf.scene.position); // this re-sets the mesh position
      gltf.scene.position.multiplyScalar(- 1);


      var pivot = new THREE.Group();
      scene.add(pivot);
      pivot.add(gltf.scene);
      this.pivo = pivot;
    })
  }
  rodar() {
    this.pivo.rotation.y += 0.1;
    
  }
}

let doom = new DoomGuy();


//doom.rodar();

function animate() {
  doom.rodar();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

setTimeout(() => {
  animate();
}, 3000);


function romero() {
  new Audio("snd/romero.m4a").play();
}

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}