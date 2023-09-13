var bgImage, cityBg;
var balloon, balloonImage;
var obsTop1Image, obsTop2Image;

function preload(){
    bgImage= loadImage("assets/cityImage.png");
    balloonImage= loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
    obsTop1Image= loadImage("assets/obsTop1.png");
    obsTop2Image= loadImage("assets/obsTop2.png");
}

function setup(){
    createCanvas(700,560);

    //imagem de fundo
    cityBg= createSprite(350,280);
    cityBg.addImage(bgImage);
    cityBg.scale= 0.4;

    //personagem principal
    balloon= createSprite(100,200,20,50);
    balloon.addAnimation("balloon", balloonImage);
    balloon.scale= 0.35;
}

function draw() {
    background("black");

    //movendo o fundo
    cityBg.velocityX= -2;
    if(cityBg.x<200){
        cityBg.x=cityBg.width/2-750;
    }

    //movendo o personagem principal
    if(keyDown(UP_ARROW)){
        balloon.velocityY= -4;
    }
    //gravidade
    balloon.velocityY+= 0.4;

    drawSprites();
   
}

//função para gerar os obstáculos

