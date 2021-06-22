var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var nasaimages=["1.jpg","2.jpg","3.jpg","mars.jpg"];
var randnumber=Math.floor(Math.random()*4);
var roverwidth=100;
var roverheight=90;
var roverx=10;
var rovery=10;
console.log(nasaimages[randnumber]);
var backgroundimg=nasaimages[randnumber];
var roverimg="rover.png";
function add(){
    backgroundimgT=new Image();
    backgroundimgT.onload=uploadBG;
backgroundimgT.src=backgroundimg;
roverimgT=new Image();
roverimgT.onload=uploadrover;
roverimgT.src=roverimg;
}
function uploadBG(){
ctx.drawImage(backgroundimgT,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimgT,10,10,roverwidth,roverheight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keyPressed=e.keyCode;
if(keyPressed=='38'){
   up();
}
if(keyPressed=='40'){
    down();
}
if(keyPressed=='37'){
    left();
}
if(keyPressed=='39'){
   right();
}
}
function up(){
    console.log("up");
    if(rovery>=0){
        rovery=rovery-10;
        uploadBG();
        uploadrover();
    }
}
function down(){
    console.log("down");
    if(rovery<=500){
        rovery=rovery+10;
        uploadBG();
        uploadrover();
    }
}
function left(){
    console.log("left");
    if(roverx>=0){
        roverx=roverx-10;
        uploadBG();
        uploadrover();
    }
}
function right(){
    console.log("right");
    if(roverx<=800){
        roverx=roverx+10;
        uploadBG();
        uploadrover();
    }
}
