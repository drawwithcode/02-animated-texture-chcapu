let corpi = [];
let numeroCorpi = 200;

let dimMin;
let aumento;
let vel;


function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  colorMode(HSB,360,100,100,100);

  dimMin = 2;
  aumento = 0.03;
  vel = 1;

  for (let i=0; i<numeroCorpi; i++) {
    corpi[i] = generateCorpi(i);
  }
}

function draw() {
  background(0,100-vel*9.5);
  noStroke();

  for (let i=0; i < corpi.length; i++) {
    animateCorpi (corpi[i]);
    drawCorpi (corpi[i]);
  }

  //velocità variabile
  vel = map(mouseX,0,width,0,10);

}

function generateCorpi(numero) {
  return {
    x: random(width),
    y: random(height),
    distanza: numero,
    color: map(random(),0,1,0,100+numero),
    velocita: {
      x: random(numero/50),
      y: 0,
    }
  }
}

function drawCorpi (corpo) {
  let dim = dimMin + (corpo.distanza * aumento);
  dim = exp(dim/2);

  if(dim<8) {
    fill("white");
  } else {
    fill(corpo.color,90, 100, 70);
  }

  ellipse(corpo.x,corpo.y,dim,dim);

}

function animateCorpi(corpo) {
  corpo.x += corpo.velocita.x*vel
  corpo.x %= width

  corpo.y += corpo.velocita.y*vel
  corpo.y %= height
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
