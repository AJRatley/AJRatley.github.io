function setup() {
  createCanvas(600,600);
  background(240,200,200);

}


function draw() {
  background(240,200,200);
    noStroke();

    //hair
    fill (100,60,60);
    rect (90,90,400,550,200);
 
    //neck
    fill (230, 197, 159);
    rect (210,505,150,140);
    
    //left ear
    fill (230, 197, 159);
    ellipse (130,340,50,130);
    
    //right ear
    fill (230, 197, 159);
    ellipse (442,340,50,130);
    
    //left ear piercing
    noStroke();
    fill (180);
    ellipse (120,390,5,5);
    
    //left earring
    stroke(140);
    strokeWeight (2);
    line (130,395,130,410);
    
    //right ear piercing
    noStroke();
    fill (170);
    ellipse (450,387,5,5);
    
    //right earring
    stroke(140);
    strokeWeight (2);
    line (442,395,442,410);
    
    noStroke();
    
    //face
    fill (230, 197, 159);
    rect (138,145,300,400,200);
 
    strokeWeight(1);
 
    //left seclar
    fill (255);
    stroke(1);
    ellipse (225,310,72,48);
 
    //right seclar
    fill (255);
    stroke(1);
    ellipse (350,310,70,48);
 
    //right iris
    fill (66, 120, 163,150);
    stroke(1);
    ellipse (350,310,40,48);
 
    //left iris
    fill (66, 120, 163,150);
    stroke(1);
    ellipse (225,310,40,48);
 
    //right pupil
    fill (0);
    ellipse (350,310,20,20);
 
    //left pupil
    fill (0);
    ellipse (225,310,20,20);
 
    //mouth
    noStroke();
    fill (200,0,0);
    bezier (225,450,255,490,315,490,340,450);
    ellipse (255,450,55,18);
    ellipse (310,450,55,18);
    
   
    //nose
    stroke(1);
    noFill();
    bezier (258,380,262,405,307,405,308,380);
    
    //nose piercing
    noStroke();
    fill (170);
    ellipse (298,387,5,5);
    
    //nose ring
    stroke(140);
    strokeWeight (2);
    line (270,387,268,400);
 
    noStroke();
     
    //left eyebrow
    fill (100,60,60);
    rect (175,250,90,15,20);
 
    //right eyebrow
    fill (100,60,60);
    rect (310,250,90,15,20);
 
}
