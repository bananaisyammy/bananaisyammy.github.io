

const canvasX = 800;
const canvasY = 600;

const canvasColor = '#000000';

let circleX = 100
let circleY = 300
let speed = 0
let upJump = false
let upJumpAmount = 16
let downJump = false
let downJumpAmount = 15
let getX1 = 1000
let getX2 = 1000
let getX3 = 1300
let mato = 0
let getPoint = false
let getPoint2 = false
let score = 0
let kyori = 0
let kyori2 = 0
let zyuntimer = 60
let timer = 60

function setup() {
  createCanvas(canvasX, canvasY);
  background(canvasColor);
  alert("↑でジャンプ。下で沈んでから大ジャンプ。←、→で左右に移動。この操作を使って上を流れる青、黄の玉と、下を流れる緑の玉をゲットしよう。青、黄は3点、緑は5点ゲット。1分間でできるだけスコアを伸ばそう。")
}

function draw() {
  background(canvasColor);
  zyuntimer -= 1/60
  timer = Math.floor(zyuntimer)
  fill("#00ff00")
  textSize(20)
  text("スコア[" + score + "]",0,20)
  fill("#ff00ff")
  text("残り[" + timer + "]秒",0,43)
  getX1 -= 5
  getX2 -= 5
  getX3 -= 7
  if(getX3<-50){
    getX3 = 900
    getPoint2 = false
  }
  if(getX1<-100){
    getX1 = 1000
    getX2 = 1000
    getPoint = false
    mato = Math.floor( Math.random() * 2 );
  }
  fill("#00ffff")
  rect(0,300,canvasX,300)
  fill("#ff0000")
  circle(circleX,circleY,30)
  if(getPoint2 == false){
    fill("#00ff00")
    circle(getX3,430,30)
    kyori2 = dist(circleX,circleY,getX3,430)
    if(kyori2<30){
      getPoint2 = true
      score += 5
    }
  }
  if(mato == 0 && getPoint == false){
  fill("#ffff00")
  circle(getX1,170,30)
  kyori = dist(circleX,circleY,getX1,170)
  if(kyori<30){
    getPoint = true
    score += 3
  }
  }else if(getPoint == false){
  fill("#00ffff")
  circle(getX2,90,30)
  kyori = dist(circleX,circleY,getX2,90)
  if(kyori<30){
    getPoint = true
    score += 3
  }
  }
  if(keyIsDown(RIGHT_ARROW)){
    speed += 0.1
  }else if(keyIsDown(LEFT_ARROW)){
    speed -= 0.1
  }else{
    if(speed>0){
      speed -= 0.02
    }else if(speed<0){
      speed += 0.02
    }
  }
  if(keyIsDown(UP_ARROW) && downJump == false){
    upJump = true
  }else if(keyIsDown(DOWN_ARROW) && upJump == false){
    downJump = true
  }
  if(upJump){
    circleY -= upJumpAmount
    upJumpAmount -= 1
    if(circleY>299){
      circleY = 300
      upJumpAmount = 16
      upJump = false
    }
  }
  if(downJump){
    circleY += downJumpAmount
    downJumpAmount -= 1
    if(circleY<301){
      upJump = true
      upJumpAmount = 20 
      downJumpAmount = 15
      downJump = false
    }
  }
  if(circleX < 15){
    speed = 0
    circleX = 15
  }
  if(circleX > 785){
    speed = 0
    circleX = 785
  }
  circleX += speed
  if(zyuntimer<1){
    alert("FINISH"+"\n"+"あなたのスコアは"+score+"点です。")
    circleX = 100
    circleY = 300
    speed = 0
    upJump = false
    upJumpAmount = 16
    downJump = false
    downJumpAmount = 15
    getX1 = 1000
    getX2 = 1000
    getX3 = 1300
    mato = 0
    getPoint = false
    getPoint2 = false
    score = 0
    kyori = 0
    kyori2 = 0
    zyuntimer = 60
    timer = 60
  }
}
