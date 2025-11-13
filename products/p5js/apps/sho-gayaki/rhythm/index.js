

const canvasX = 1000;
const canvasY = 600;

const canvasColor = '#000000';

let upcircleX = 500
let upcircleY = 250
let downcircleX = 500
let downcircleY = 350
let rightcircleX = 550
let rightcircleY = 300
let leftcircleX = 450
let leftcircleY = 300
let upmatoX = 500
let upmatoY = -50
let downmatoX = 500
let downmatoY = 650
let rightmatoX = 1050
let rightmatoY = 300
let leftmatoX = -50
let leftmatoY = 300
let upspeed = 2
let downspeed = 2
let rightspeed = 2
let leftspeed = 2
let score = 0
let mozi = [" ","perfect!","amazing!","nice","oh,no"]
let mozinum = 0
let allnum = 0


function setup() {
  
  createCanvas(canvasX, canvasY);
  
  background(canvasColor);
  alert("矢印キーを使って、的が円に重なった瞬間にボタンを押そう。タイミングによって点数が10,5,3,0点になるよ。満点の500点目指して頑張れ!")
}


function draw() {
  document.getElementById('target').textContent = "SCORE[" + score + "]" + mozi[mozinum];
  background(canvasColor);
  noStroke();
  if(allnum>49){
    if(score<500){
    alert("終了！あなたの得点は" + score + "点です。満点の500点目指して頑張れ!")
    }else{
      alert("終了！あなたの得点は" + score + "点です。満点!")
    }
    upcircleX = 500
    upcircleY = 250
    downcircleX = 500
    downcircleY = 350
    rightcircleX = 550
    rightcircleY = 300
    leftcircleX = 450
    leftcircleY = 300
    upmatoX = 500
    upmatoY = -50
    downmatoX = 500
    downmatoY = 650
    rightmatoX = 1050
    rightmatoY = 300
    leftmatoX = -50
    leftmatoY = 300
    upspeed = 2
    downspeed = 2
    rightspeed = 2
    leftspeed = 2
    score = 0
    mozi = [" ","perfect!","amazing!","nice","oh,no"]
    mozinum = 0
    allnum = 0
  }  
  if(keyIsDown(UP_ARROW)){
    fill("#ff0000")
    if(upcircleY-6<upmatoY && upcircleY+6>upmatoY){
      score += 10
      mozinum = 1
      upmatoY = Math.floor( Math.random() * -450 ) + -50;
      upspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(upcircleY-16<upmatoY && upcircleY+16>upmatoY){
      score += 5
      mozinum = 2
      upmatoY = Math.floor( Math.random() * -450 ) + -50;
      upspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(upcircleY-25<upmatoY && upcircleY+25>upmatoY){
      score += 3
      mozinum = 3
      upmatoY = Math.floor( Math.random() * -450 ) + -50;
      upspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }
  }else{
    fill("#ffff00")
  }
  circle(upcircleX,upcircleY ,50)
  if(keyIsDown(DOWN_ARROW)){
    fill("#ff0000")
    if(downcircleY-6<downmatoY && downcircleY+6>downmatoY){
      score += 10
      mozinum = 1
      downmatoY = Math.floor( Math.random() * 450 ) + 650;
      downspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(downcircleY-16<downmatoY && downcircleY+16>downmatoY){
      score += 5
      mozinum = 2
      downmatoY = Math.floor( Math.random() * 450 ) + 650;
      downspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(downcircleY-25<downmatoY && downcircleY+25>downmatoY){
      score += 3
      mozinum = 3
      downmatoY = Math.floor( Math.random() * 450 ) + 650;
      downspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }
  }else{
    fill("#ffff00")
  }
  circle(downcircleX,downcircleY ,50)
  if(keyIsDown(RIGHT_ARROW)){
    fill("#ff0000")
    if(rightcircleX-6<rightmatoX && rightcircleX+6>rightmatoX){
      score += 10
      mozinum = 1
      rightmatoX = Math.floor( Math.random() * 450 ) + 1050;
      rightspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(rightcircleX-16<rightmatoX && rightcircleX+16>rightmatoX){
      score += 5
      mozinum = 2
      rightmatoX = Math.floor( Math.random() * 450 ) + 1050;
      rightspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(rightcircleX-25<rightmatoX && rightcircleX+25>rightmatoX){
      score += 3
      mozinum = 3
      rightmatoX = Math.floor( Math.random() * 450 ) + 1050;
      rightspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }
  }else{
    fill("#ffff00")
  }
  circle(rightcircleX,rightcircleY ,50)
  if(keyIsDown(LEFT_ARROW)){
    fill("#ff0000")
    if(leftcircleX-6<leftmatoX && leftcircleX+6>leftmatoX){
      score += 10
      mozinum = 1
      leftmatoX = Math.floor( Math.random() * -450 ) + -50;
      leftspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(leftcircleX-16<leftmatoX && leftcircleX+16>leftmatoX){
      score += 5
      mozinum = 2
      leftmatoX = Math.floor( Math.random() * -450 ) + -50;
      leftspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }else if(leftcircleX-25<leftmatoX && leftcircleX+25>leftmatoX){
      score += 3
      mozinum = 3
      leftmatoX = Math.floor( Math.random() * -450 ) + -50;
      leftspeed = Math.floor( Math.random() * 4 ) + 2;
      allnum += 1
    }
  }else{
    fill("#ffff00")
  }
  circle(leftcircleX,leftcircleY ,50)
  fill("#00ffff")
  circle(upmatoX,upmatoY,50)
  circle(downmatoX,downmatoY,50)
  circle(rightmatoX,rightmatoY,50)
  circle(leftmatoX,leftmatoY,50)
  upmatoY += upspeed
  downmatoY -= downspeed
  rightmatoX -= rightspeed
  leftmatoX += leftspeed
  if(upmatoY>299){
    upmatoY = Math.floor( Math.random() * -450 ) + -50;
    upspeed = Math.floor( Math.random() * 4 ) + 2;
    mozinum = 4
    allnum += 1
  }
  if(downmatoY<301){
    downmatoY = Math.floor( Math.random() * 450 ) + 650;
    downspeed = Math.floor( Math.random() * 4 ) + 2;
    mozinum = 4
    allnum += 1
  }
  if(rightmatoX<501){
    rightmatoX = Math.floor( Math.random() * 450 ) + 1050;
    rightspeed = Math.floor( Math.random() * 4 ) + 2;
    mozinum = 4
    allnum += 1
  }
  if(leftmatoX>499){
    leftmatoX = Math.floor( Math.random() * -450 ) + -50;
    leftspeed = Math.floor( Math.random() * 4 ) + 2
    mozinum = 4
    allnum += 1
  }
}
