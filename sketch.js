let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y

let posicaoHorizontal12; //x
let posicaoVertical12; //y


function setup() {
  createCanvas(400, 400);
  background("black");
  
  
  cor = color(random(255), random(255), random(255));
  circulox = [0, 0, 0];
  circuloy = [random(height), random(height), random(height)];
  
   posicaoHorizontal12 = 0;
  posicaoVertical12 = random(height);
}

function draw() {
  fill(cor);
  circle(circulox[0], circuloy[0], 50);
  circle(circulox[0], circuloy[1], 50);
  
  
 circulox[0]+= random(0, 3);
 circuloy[0]+= random(-3, 3);
  
  circulox[1]+= random(0, 3);
circuloy[1]+=random(-3, 3);
  
  if(mouseIsPressed){
   cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
