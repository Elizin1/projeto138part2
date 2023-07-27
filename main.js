img = "";
objects = [];
modelStatus = "";

function preload(){
    img = loadImage('3objetos.png');
}

function setup(){
    canvas = createCanvas(700,700);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "status: detectando Objetos";
}

function modelLoaded(){
    console.log("modelo foi carregado");
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
