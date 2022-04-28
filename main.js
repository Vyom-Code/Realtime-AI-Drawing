noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristY=0;

function setup(){
    canvas = createCanvas(550,500);
    canvas.position(950,500);
    
    video= createCapture(VIDEO);
    video.size(550,500);
    video.position(250,500)
    
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" +noseX+"noseY"+noseY);

        leftWristY = results[0].pose.leftWrist.y;
        rightWristX= results[0].pose.leftWrist.x;
        difference= floor(leftWristY - rightWristX);

        console.log("leftWristY ="+ leftWristY +"rightWristX ="+ rightWristX+ "difference" + difference);
    }
}

function draw(){
    document.getElementById("square_side").innerHTML ="Width and height of a square will be ="+difference+ " px";
    background("#00a2ff");
    fill("white")
    stroke("black")
    square(noseX, noseY, difference);
}



