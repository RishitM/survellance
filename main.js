var objects=[] 
var status=""
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
for(i=0;i<objects.length;i++){
   document.getElementById("status").innerHTML="Objects Detected"
    document.getElementById("numbers").innerHTML= objects.length;
percentage=floor(objects[i].confidence*100)
 noFill()
 stroke(9,45,7)
 strokeWeight(3)
text(objects[i].label + " " + percentage + "%" ,objects[i].x,objects[i].y)
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
} 
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
     objects=results

    }
}
function stop()
{
     vid.pause();	
}
