var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png"); 
  correndo = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.PNG", "Jake5.png");
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200, 200);
path.addImage(pathImg)
path.velocityY = -2
  //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy = createSprite(200, 200);
boy.addAnimation("correndo", boyImg);
//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.8;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
