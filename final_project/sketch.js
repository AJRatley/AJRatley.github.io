let gameState = 'start';
let customFont;
let button;

let bg1;
let bg2;
let bg3;
let bg4;
let bg5;
let bg6;

function preload(){
customFont= loadFont ('https://ajratley.github.io/final_project/assets/font1.ttf');
bg1 = loadImage('https://ajratley.github.io/final_project/assets/Asset%201.png');
bg2 = loadImage('https://ajratley.github.io/final_project/assets/Asset%202.png');
bg3 = loadImage('https://ajratley.github.io/final_project/assets/Asset%203.png');
bg4 = loadImage('https://ajratley.github.io/final_project/assets/Asset%204.png');
bg5 = loadImage('https://ajratley.github.io/final_project/assets/Asset%206.png');
bg6 = loadImage('https://ajratley.github.io/final_project/assets/Asset%205.png');
}


function setup (){
createCanvas (960,540);
background(75,60,150);
textFont(customFont);
}

function draw () {

    if (gameState == 'start') {
        start();
      } 
     else if (gameState == 'face') {
        face();
      } 
      else if (gameState == 'hair') {
        hair();
      }
      else if (gameState == 'eyes') {
        eyes();
      }
      else if (gameState == 'mouth') {
        mouth();
      }
      else if (gameState == 'nose') {
        nose();
      }
      else if (gameState == 'extra') {
        extra();
      }
      else if (gameState == 'end') {
            end();
      }
    
    } 



function start(){
    textSize(100);
    stroke(255);
    fill(255);
    textAlign(CENTER,CENTER)
    text('Create Your Avatar', width / 2, 150);

    if (!button) {
        button = createButton('play');
        button.position(width/2-50, height/2+25);
        button.size(100,60);
        button.style('font-size', '40px');
        button.class('custom-font');
        button.mousePressed(() => {
            gameState = 'face';
            button.remove();
            button = null; 
        });
    }
}

function face(){
  background(bg1);
 
}

function hair(){
  background(bg2);

}
function eyes(){
  background(bg3);

}
function mouth(){
  background(bg4);

}
function nose(){
  background(bg5);

}
function extra(){
  background(bg6);

}

function mousePressed() {
  if (gameState === 'hair' || 'eyes' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 960 && mouseX <= 1110 && mouseY >= 122 && mouseY <= 272) {
      gameState = 'face';
    }
  }
  if (gameState === 'face' || 'eyes' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 1110 && mouseX <= 1260 && mouseY >= 122 && mouseY <= 272) {
      gameState = 'hair';
    }
  }
  if (gameState === 'hair' || 'face' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 1260 && mouseX <= 1410 && mouseY >= 122 && mouseY <= 272) {
      gameState = 'eyes';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'face' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 1410 && mouseX <= 1560 && mouseY >= 122 && mouseY <= 272) {
      gameState = 'mouth';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'mouth' || 'face' || 'extra' 
  ) {
    if (mouseX >= 1560 && mouseX <= 1710 && mouseY >= 122 && mouseY <= 272) {
      gameState = 'nose';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'mouth' || 'nose' || 'face' 
  ) {
    if (mouseX >= 1710 && mouseX <= 1860 && mouseY >= 122 && mouseY <= 272) {
      gameState = 'extra';
    }
  }
}