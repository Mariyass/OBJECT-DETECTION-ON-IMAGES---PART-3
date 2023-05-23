var img="";
var status="";
var objects=[];

 function preload(){
        img=loadImage("office_table_img.jpeg")
}

function setup(){
    canvas=createCanvas(450,300);
    canvas.center();
   
}

function modelLoaded(){
    console.log("Model Loaded")
    status=true
    // objectDetector.detect(img,gotResult)
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML=" Status: Detecting objects";
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects=results;
    }
}
function draw(){
    image(img,0,0,380,380)

    if(status!=""){
        objectDetector.detect(img,gotResult);

        r=random(255);
        g=random(255);
        b=random(255);

        for(var i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status : oblect detected";
            document.getElementById("number_of_objects").innerHTML="number of objects detected are; "+objects.length;

            fill(r,g,b);
            percent=floor(objects[i].confidence*100)
            textSize(22)
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
            noFill()
            stroke(r,g,b)
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    
}