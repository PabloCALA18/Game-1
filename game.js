let sprPlayer;
let sprEnemies;
let puntitos = 0;
let vida = 3;
let sprFinal;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Creo el jugador
  sprPlayer = createSprite(width / 2, height - 80, 80, 60);
  sprPlayer.shapeColor = color(255, 0, 0);

  sprFinal = createSprite(0 , height , 3000, 30);
  sprFinal.shapeColor = color(255,0,0);

 
    sprEnemies = createSprite(random(width), random(-100), 40);
    sprEnemies.shapeColor = color(255, 0, 128);
    sprEnemies.velocity.y = 3
 
  

}
function draw() {
  background(50);

  drawSprites();
  fill(255);
  text('Vidas ' + vida,20,40);

  fill(255);
  text('Puntos ' + puntitos ,20,70);
  
  if (sprEnemies.overlap(sprPlayer)) {
       vidas()
  }

  if (sprEnemies.overlap(sprFinal)) {
    puntos()
}
  if(vida === 0){
    gameOver()
  }
}

function vidas(){
  vida+= -1;
  sprEnemies.position.y = -100;
  sprEnemies.position.x = random(width);
}
function puntos(){
 puntitos++;
 sprEnemies.position.y = -100;
 sprEnemies.position.x = random(width);
}
function gameOver(){
 background(150)
 fill(255,0,0)
 text('GAME OVER',windowWidth/2, windowHeight/2 )
 text('Puntuación '+ puntitos,windowWidth/2, windowHeight/2 - 100 )
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    sprPlayer.setSpeed(5.5, 0);
  }
  if (keyCode == LEFT_ARROW) {
    sprPlayer.setSpeed(5.5, 180);
  }
  if (key == ' ') {
    sprPlayer.setSpeed(0, 0);
  }
  return false
}