
const canvasX = 600;
const canvasY = 575;

const canvasColor = '#000000';

let circleX = 500
let circleY = 525
let mouse = false
let squareX = 0
let squareY = 0
let place = [25,225,425]
let rondom = 0
let miss = false
let kaisuu = 0
let speed = 5
let syokiti = -400
let lineX1 = 200
let lineX2 = 400
let lineY1 = 0
let lineY2 = 0
let lineX3 = 200
let lineX4 = 400
let lineY3 = 143.75
let lineY4 = 287.5
let lineX5 = 200
let lineX6 = 400
let lineY5 = 287.5
let lineY6 = 287.5
let lineX7 = 200
let lineX8 = 400
let lineY7 = 431.25
let lineY8 = 431.25


function setup() {
  
  createCanvas(canvasX, canvasY);
  
  background(canvasColor);
  squareY = -200
  random = Math.floor( Math.random() * 3 )
  squareX = place[random]
  alert("水色の前に進むボールを操作して、クリアを目指そう！赤い四角に触れたらだめだよ。うまく車線変更してよけよう。マウスを押している間は右、離しているときは左に進むよ。")
}


function draw() {
  background(canvasColor)
  fill("#bbbbbb")
  square(lineX1,lineY1,10)
  square(lineX2,lineY2,10)
  square(lineX3,lineY3,10)
  square(lineX4,lineY4,10)
  square(lineX5,lineY5,10)
  square(lineX6,lineY6,10)
  square(lineX7,lineY7,10)
  square(lineX8,lineY8,10)
  lineY1 += speed
  lineY2 += speed
  lineY3 += speed
  lineY4 += speed
  lineY5 += speed
  lineY6 += speed
  lineY7 += speed
  lineY8 += speed
  if(lineY1 > 575){
    lineY1 = 0
    lineY2 = 0
  }
  if(lineY3 > 575){
    lineY3 = 0
    lineY4 = 0
  }
  if(lineY5 > 575){
    lineY5 = 0
    lineY6 = 0
  }
  if(lineY7 > 575){
    lineY7 = 0
    lineY8 = 0
  }
  fill("#ff0030")
  if(squareY > 575){
    squareY = -400
    random = Math.floor( Math.random() * 3 )
  squareX = place[random]
  kaisuu += 1
  if(kaisuu==5){
    alert("5回到達!スピードアップ!")
    speed += 2.5
    mouse = false
  }
  if(kaisuu==10){
    alert("10回到達! 加速")
    speed += 2.5
    mouse = false
  }
  if(kaisuu==20){
    alert("20回到達!高速!")
    speed += 5
    mouse = false
    syokiti = -1000
  }
  if(kaisuu==30){
    alert("30回到達!爆速!")
    speed += 5
    mouse = false
    syokiti = -1500
  }
  if(kaisuu==40){
    alert("40回到達!電光石火!")
    speed += 5
    mouse = false
    syokiti = -2000
  }
  if(kaisuu==50){
    alert("50回到達!CLEAR!  初期化します")
    speed = 5
    kaisuu = 0
    mouse = false
    syokiti = -400
  }
  }
  squareY += speed
  square(squareX,squareY,150)
  fill("#00eeff")
    circle(circleX,circleY,100)
    if(mouse){
      circleX += 7
    }
    if(mouse == false){
      circleX -= 7
    }
    
    if(circleX<0 || circleX>600){
      alert("GAMEOVER OKで最初からやり直します")
      circleX = 500
      kaisuu = 0
      mouse = false
      squareY = -300
      speed = 5
      syokiti = -400
    }
    
    if(squareY>349){
      if(circleX+25>squareX && circleX<squareX+175){
      alert("GAMEOVER OKで最初からやり直します")
      squareY = -300
      kaisuu = 0
      mouse = false
      circleX = 500
      speed = 5
      syokiti = -400
      }
    }
}
function mousePressed(){
  mouse = true
}
function mouseReleased(){
  mouse = false
}
