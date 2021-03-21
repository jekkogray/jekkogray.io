const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, document.getElementById("testCanvas").clientwidth/document.getElementById("testCanvas").clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('testCanvas'), antialias: true });
renderer.setSize(document.getElementById("testCanvas").clientwidth, document.getElementById("testCanvas").clientHeight);
document.getElementById("frame").appendChild(renderer.domElement);
// .appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();