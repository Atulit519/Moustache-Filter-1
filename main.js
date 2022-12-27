function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(485, 200);
    capture = createCapture(VIDEO);
    capture.hide();
}

function draw(){
    image(capture, 0, 0, 400, 400);
}

function take_snapshot(){
    save("Snap.png");
}