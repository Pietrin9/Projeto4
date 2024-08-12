function setup() {
  createCanvas(600, 500);
}

function draw() {
  background("purple");
  fill("darkblue");
  textSize(64);
  textAlign(CENTER,CENTER);
  let maximo = width;
  let minimo = 0;
  let palavra = "PIETRIN DA DZ7 <3"
  let aparecer = map(mouseX,0,width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio,300, 250)
  
}
