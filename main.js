function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function modelLoaded() {
    console.log('PoseNet foi inicializado');
}

function gotPoses(results) {}

function draw() {

}

function takeSnapshot() {
    save('myFilterImage.png');
}