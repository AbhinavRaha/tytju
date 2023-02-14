image="";
status="";

object=[];



function preload(  )
{
image=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(500,500);

canvas.center();

objectDetector=ml5.objectDetector('cocossd' ,modleloded);

document.getElementById('status').inerHTML="status-detecting objetes";

function modleloded()
}

function draw()
{
    image(image,0,0,500 ,500);
}

function modleloded()
{
console.log("modle is loded");

status=true;

objectDetector.detect(image,gotResults);
}

function gotResults()
    {

    }
