Status = "";
img = "";
function preload() {
    img = loadImage("GUEST_ffaa4aff-7139-4ed8-aecb-b1524f2697b9.jpeg")
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting...";
}
function draw() {
    image(img, 0, 0, 500, 500);
}
function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
    objectdetector.detect(img, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}