function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
    }
    
    img="";
    status="";
    
    function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
    }
    
    function gotResult(error,results){
    if(error){
    console.log(error);
    }
    console.log(results);
    }
    
    function preload(){
    img=loadImage('dog_cat.jpg');
    }
    
    function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF00000")
    rect(30,60,450,350);
    
    fill("#FF0000");
    text("air-conditioner",90,10);
    noFill();
    stroke("#FF00000")
    rect(90,10,500,100);
    }