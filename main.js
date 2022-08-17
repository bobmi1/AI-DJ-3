song1 = "";
song2 = "";
leftwristX = 0;
rightwristX = 0;
leftwristY = 0;
rightwristY = 0;
scoreLeftwrist = 0;
scoreRightwrist = 0;
song1_status = "";
song2_status = ""; 

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas( 600, 500 );
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded );
    poseNet.on("pose", gotPoses);
}
function draw() {
image(video, 0 ,0 , 600, 500);
song1.status = song1.isPlaying();
song2.status = song2.isPlaying();
fill("#425af5");
stroke("#425af5");

if (scoreLeftwrist > 0.2) {
    circle(leftwristX,leftwristY,20);
    song2.stop()
 if ( song1_status == false) {
    song1.play();
    document.getElementById("sound").innerHTML = "Playing: Harry Potter Remix "
 }   
 }
 if (scoreRightwrist > 0.2) {
    circle(rightwristX,rightwristY,20);
    song1.stop()
 if ( song2_status == false) {
    song2.play();
    document.getElementById("sound").innerHTML = "Playing: Peter Pan Theme  "
 }   
 }
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("The Posent is Loaded")
 }

function gotPoses(results){
    if (results.length > 0 ){
        console.log( "Results are "+ results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        scoreLeftwrist = results[0].pose.keypoints[9].score;
        scoreRightwrist =  results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist = " + scoreLeftwrist + "scoreRightWrist = " + scoreRightwrist)

        leftwristY = results[0].pose.leftWrist.y;
        rightwristY = results[0].pose.rightWrist.y; 

        console.log("leftwristX is " + leftwristX + "leftwristY is " + leftwristY + "rightwristX is " + rightwristX + "rightwristY is " + rightwristY );
       
    }
 }