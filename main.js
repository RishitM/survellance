var status
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
if(status!=""){ 
object_detector.detect(vid,gotResult) 
}
}
function start(){
    object_detector=ml5.objectDetector("cocossd",modelLoaded)

}
function modelLoaded(){
    console.log("Model Loaded");
    document.getElementById("status").innerHTML="Detecting objects"
    status="true"
    vid.loop()
    vid.speed(1)
    vid.volume(0)
}
function gotResult(error,results){
if(error){
    console.error("3RR0R")
}
else{
    console.log(results);
}
}
