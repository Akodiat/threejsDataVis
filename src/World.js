import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

class World {
    /**
     * Initialise World and setup scene
     * @param {*} containerDOM Container to place the WebGL renderer DOM element into
     */
    constructor(containerDOM) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        // Setup renderer
        this.renderer = new THREE.WebGLRenderer({
            alpha: true, antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        containerDOM.appendChild(this.renderer.domElement);

        // Add some lights
        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        this.scene.add(ambientLight);
        const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        this.scene.add(hemiLight);

        // Add x-y-z axis indicator
        const axesHelper = new THREE.AxesHelper(1);
        this.scene.add(axesHelper);

        // And camera controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener("change", () => this.render());

        // Update camera aspect ratio on window resize
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );
            this.render();
        });

        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}

export {World}