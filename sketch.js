var titleImg;
var gaelhawkImg;

var title;
var gaelhawk

function preload(){
    titleImg = loadImage("title1.png");
    gaelhawkImg = loadImage("logo1.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    title = createSprite(windowWidth/2, 100);
    title.addImage(titleImg);
    title.scale = 1;

    gaelhawk = createSprite(140, 50);
    gaelhawk.addImage(gaelhawkImg);
    gaelhawk.scale = 1;


}

function draw() {
    drawSprites();
}