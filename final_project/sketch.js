let gameState = 'start';
let customFont;
let button;
let selectedFace = null;
let selectedHair = null;
let selectedEyes = null;
let selectedMouth = null;
let selectedNose = null;
let selectedExtra = null;

let bg1;
let bg2;
let bg3;
let bg4;
let bg5;
let bg6;

let assets = [];

function preload(){
customFont= loadFont ('https://ajratley.github.io/final_project/assets/font1.ttf');
bg1 = loadImage('https://ajratley.github.io/final_project/assets/Asset%201.png');
bg2 = loadImage('https://ajratley.github.io/final_project/assets/Asset%202.png');
bg3 = loadImage('https://ajratley.github.io/final_project/assets/Asset%203.png');
bg4 = loadImage('https://ajratley.github.io/final_project/assets/Asset%204.png');
bg5 = loadImage('https://ajratley.github.io/final_project/assets/Asset%206.png');
bg6 = loadImage('https://ajratley.github.io/final_project/assets/Asset%205.png');

  for (let i = 1; i < 255; i++) {
    let filename = 'https://ajratley.github.io/final_project/assets/Asset%20' + i + '.png';
    assets[i] = loadImage(filename);
  }

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
    

if (gameState !== 'start' && gameState !== 'end') {
    if (selectedHair !== null && assets[selectedHair]) {
    image(assets[selectedHair], 175, 175);
  }
  if (selectedFace !== null && assets[selectedFace]) {
    image(assets[selectedFace], 175, 175);
  }
  if (selectedEyes !== null && assets[selectedEyes]) {
    image(assets[selectedEyes], 175, 175);
  }
  if (selectedMouth !== null && assets[selectedMouth]) {
    image(assets[selectedMouth], 175, 175);
  }
  if (selectedNose !== null && assets[selectedNose]) {
    image(assets[selectedNose], 175, 175);
  }
  if (selectedExtra !== null && assets[selectedExtra]) {
    image(assets[selectedExtra], 175, 175);
  }
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
    if (mouseX >= 480 && mouseX <= 555 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'face';
    }
  }
  if (gameState === 'face' || 'eyes' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 555 && mouseX <= 630 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'hair';
    }
  }
  if (gameState === 'hair' || 'face' || 'mouth' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 630 && mouseX <= 705 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'eyes';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'face' || 'nose' || 'extra' 
  ) {
    if (mouseX >= 705 && mouseX <= 780 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'mouth';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'mouth' || 'face' || 'extra' 
  ) {
    if (mouseX >= 780 && mouseX <= 855 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'nose';
    }
  }
  if (gameState === 'hair' || 'eyes' || 'mouth' || 'nose' || 'face' 
  ) {
    if (mouseX >= 855 && mouseX <= 930 && mouseY >= 61 && mouseY <= 136) {
      gameState = 'extra';
    }
  }


  // --- FACE SELECTION ---
  if (gameState === 'face') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedFace = 189;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedFace = 188;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedFace = 187;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedFace = 186;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedFace = 185;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedFace = 184;
    }
  }

  // --- HAIR SELECTION ---
  if (gameState === 'hair') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedHair = 254;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedHair = 253;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedHair = 250;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedHair = 252;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedHair = 251;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedHair = 249;
    }
  }

  // --- EYES SELECTION ---
  if (gameState === 'eyes') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedEyes = 243;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedEyes = 241;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedEyes = 240;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedEyes = 242;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedEyes = 239;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedEyes = 238;
    }
  }

  // --- MOUTH SELECTION ---
  if (gameState === 'mouth') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedMouth = 247;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedMouth = 246;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedMouth = 245;
    }
  }

  // --- NOSE SELECTION ---
  if (gameState === 'nose') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedNose = 87;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedNose = 86;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedNose = 85;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedNose = 84;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedNose = 83;
    } 
  }

  // --- EXTRA SELECTION ---
  if (gameState === 'extra') {
    if (mouseX >= 507 && mouseX <= 623 && mouseY >= 175 && mouseY <= 290) {
      selectedExtra = 79;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 175 && mouseY <= 290) {
      selectedExtra = 80;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 175 && mouseY <= 290) {
      selectedExtra = 81;
    } else if (mouseX >= 507 && mouseX <= 623 && mouseY >= 325 && mouseY <= 440) {
      selectedExtra = 82;
    } else if (mouseX >= 647 && mouseX <= 763 && mouseY >= 325 && mouseY <= 440) {
      selectedExtra = 248;
    } else if (mouseX >= 787 && mouseX <= 903 && mouseY >= 325 && mouseY <= 440) {
      selectedExtra = 248;
    }
  }

  else if (selectedFace === 189 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 183;
  } else if (selectedFace === 189 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 153;
  } else if (selectedFace === 189 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 177;
  } else if (selectedFace === 189 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 165;
  } else if (selectedFace === 189 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 147;
  } else if (selectedFace === 189 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 171;
  } else if (selectedFace === 189 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 159;
  } else if (selectedFace === 189 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 141;
  }

  else if (selectedFace === 188 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 182;
  } else if (selectedFace === 188 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 153;
  } else if (selectedFace === 188 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 176;
  } else if (selectedFace === 188 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 164;
  } else if (selectedFace === 188 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 146;
  } else if (selectedFace === 188 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 170;
  } else if (selectedFace === 188 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 158;
  } else if (selectedFace === 188 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 140;
  }

  else if (selectedFace === 187 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 181;
  } else if (selectedFace === 187 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 152;
  } else if (selectedFace === 187 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 175;
  } else if (selectedFace === 187 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 163;
  } else if (selectedFace === 187 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 145;
  } else if (selectedFace === 187 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 169;
  } else if (selectedFace === 187 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 157;
  } else if (selectedFace === 187 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 139;
  }

  else if (selectedFace === 186 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 180;
  } else if (selectedFace === 186 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 151;
  } else if (selectedFace === 186 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 174;
  } else if (selectedFace === 186 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 162;
  } else if (selectedFace === 186 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 144;
  } else if (selectedFace === 186 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 168;
  } else if (selectedFace === 186 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 156;
  } else if (selectedFace === 186 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 138;
  }

  else if (selectedFace === 185 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 179;
  } else if (selectedFace === 185 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 150;
  } else if (selectedFace === 185 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 173;
  } else if (selectedFace === 185 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 161;
  } else if (selectedFace === 185 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 143;
  } else if (selectedFace === 185 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 167;
  } else if (selectedFace === 185 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 155;
  } else if (selectedFace === 185 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 137;
  }

  else if (selectedFace === 184 && mouseX >= 68 && mouseX <= 108 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 178;
  } else if (selectedFace === 184 && mouseX >= 108 && mouseX <= 148 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 149;
  } else if (selectedFace === 184 && mouseX >= 148 && mouseX <= 180 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 172;
  } else if (selectedFace === 184 && mouseX >= 180 && mouseX <= 231 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 160;
  } else if (selectedFace === 184 && mouseX >= 231 && mouseX <= 272 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 142;
  } else if (selectedFace === 184 && mouseX >= 272 && mouseX <= 314 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 166;
  } else if (selectedFace === 184 && mouseX >= 314 && mouseX <= 355 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 154;
  } else if (selectedFace === 184 && mouseX >= 355 && mouseX <= 400 && mouseY >= 427 && mouseY <= 467) {
    selectedFace = 136;
  }
}
