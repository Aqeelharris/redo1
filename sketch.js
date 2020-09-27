


function setup() {
  createCanvas(800,400);
   polygon =  createSprite(400, 200, 50, 50);

   box1 = new box(330,235,30,40)
   box2 = new box(360,235,30,40)
   box3 = new box(390,235,30,40)
   box4 = new box(420,235,30,40)
   box5 = new box(450,235,30,40)

   box6 = new box(480,195,30,40)
   box7 = new box(510,195,30,40)
   box8 = new box(540,195,30,40)

   box9 = new box(570,155,30,40)
   box10 = new box(600,155,30,40)



}

function draw() {
  background(255,255,255);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  box6.display();
  box7.display();
  box8.display();
  
  box9.display();
  box10.display();
  
  drawSprites();
}