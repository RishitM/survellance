var vid=""
function preload(){
vid=createVideo("video.mp4")
}
function setup(){
    canvas=createCanvas(400,400)
    canvas.position(500,300)
    vid.hide()

}
function draw(){
image(vid,0,0,400,400)  
}
function start(){
    object_detector=ml5.objectDetector("cocossd",modelLoaded)

}
function modelLoaded(){
    console.log("Model Loaded");
}