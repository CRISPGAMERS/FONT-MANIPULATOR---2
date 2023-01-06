function setup(){
    video = createCapture("VIDEO");
    video.size(550, 500);
    video.position(100,100)

    canvas = createCanvas(550, 400);
    canvas.position(680, 150);
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('model is loaded');
}

function draw(){
    background('#8a8a91');
}

function gotPoses(Result){
    if(Result.length>0){
        console.log(Result);
    }
}