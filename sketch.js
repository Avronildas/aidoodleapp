let canvas, classifier;
let isModelReady = false;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  background("pink");

  classifier = ml5.imageClassifier("DoodleNet", modelLoaded);
  canvas.mouseReleased(classifyCanvas);
}

function draw() {
  strokeWeight(13);
  stroke("green");
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function modelLoaded() {
  console.log("Model Loaded");
  isModelReady = true;
}

function classifyCanvas() {
  if (isModelReady) {
    classifier.classify(canvas, gotResult);
  }
}

function gotResult(results) {
  if (results && results[0]) {
    const label = results[0].label;
    const accuracy = (results[0].confidence * 100).toFixed(2);

    document.getElementById("name").innerHTML = label;
    document.getElementById("Accuracy").innerHTML = accuracy + "%";
  }
}

function clearCanvas() {
  background("pink");
  document.getElementById("name").innerHTML = "--";
  document.getElementById("Accuracy").innerHTML = "--";
}

