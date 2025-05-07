let gameState = 'start';
let customFont;
let button;

let face;
let hair;
let eyes;
let mouth;
let extra;

function preload(){
customFont= loadFont ('assets/font1.ttf');
face = loadImage();
}


function setup (){
createCanvas (1000,600);
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
    text('Create Your Avatar', width / 2, 200);

    if (!button) {
        button = createButton('play');
        button.position(450, 400);
        button.size(100, 50);
        button.style('font-size', '24px');
        button.class('custom-font');
        button.mousePressed(() => {
            gameState = 'face';
            button.remove();
            button = null; 
        });
    }
}

function face(){
    background(75,60,150);

}

function hair(){
  background(75,60,150);

}
function eyes(){
  background(75,60,150);

}
function mouth(){
  background(75,60,150);

}
function extra(){
  background(75,60,150);

}
