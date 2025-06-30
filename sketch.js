let canvas, classifier;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  background("pink");
  classifier = ml5.imageClassifier("DoodleNet", modelLoaded);
  canvas.mouseReleased(classifyCanvas);
}

function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

function gotResult(results) {
  console.log(results);
}

function modelLoaded() {
  console.log("The model is loaded");
}

function draw() {
  strokeWeight(13);
  stroke("green");
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function clearCanvas() {
  background("pink");
}
function modelReady(){
    console.log('Model is ready...')
    classifier.classifyStart(gotResult);
}
function gotResult(Results){
    console.log(Results);
    document.getElementById('name').innerHTML=Results[0].label
    document.getElementById('Accuracy').innerHTML=(Results[0].confidence*100).toFixed(2)+ "%";
}
