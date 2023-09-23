import { Application } from "https://cdn.skypack.dev/@splinetool/runtime@0.9.455";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/aCxuV9kKR2s7IVPh/scene.splinecode').then(
    () => {

    }
);