

const canvasX = 800;
const canvasY = 600;

let canvasColor = '#000000';
let circleX = 100
let circleY = 100
let zyunbyou = 60
let hyouzibyou = 0
let byou = 0
let gyaku = 0
let pointX = 700
let pointY = 500
let kyori = 0
let score = 0

function setup() {
  createCanvas(canvasX, canvasY);
  background(canvasColor);
  alert("自分の玉を操作して、黄色の玉をゲットしよう。とれたら+1点。自分の玉が水色の時は変わらないけど、赤色の時は上下左右反対に動くよ。端っこに触れたら、その時点で終了、1分たったら終了だよ。")
}

function draw() {
  background(canvasColor);
  noStroke();
  byou += 1
  zyunbyou -= 1/60
  hyouzibyou = Math.floor(zyunbyou)
  if(byou>10){
    gyaku = Math.floor( Math.random() * 2 );
    byou = Math.floor( Math.random() * -99 );
  }
  if(gyaku == 0){
    canvasColor = "#c0c0c0"
    fill("#133463")
    textSize(20)
    text("残り時間[" + hyouzibyou + "]",0,20)
    fill("#133463")
    text("スコア[" + score + "]",0,43)
    textSize(50)
    fill("#ffffff")
    text("NORMAL",300,325)
    fill("#00ffff")
    if(keyIsDown(RIGHT_ARROW)){
      circleX += 5
    }
    if(keyIsDown(LEFT_ARROW)){
      circleX -= 5
    }
    if(keyIsDown(UP_ARROW)){
      circleY -= 5
    }
    if(keyIsDown(DOWN_ARROW)){
      circleY += 5
    }
  }else{
    canvasColor = "#950042"
    fill("#ff00ff")
    textSize(20)
    text("残り時間[" + hyouzibyou + "]",0,20)
    fill("#ff00ff")
    text("スコア[" + score + "]",0,43)
    textSize(50)
    fill("#ffffff")
    text("REVERSE",275,325)
    fill("#ff0000")
    if(keyIsDown(RIGHT_ARROW)){
      circleX -= 5
    }
    if(keyIsDown(LEFT_ARROW)){
      circleX += 5
    }
    if(keyIsDown(UP_ARROW)){
      circleY += 5
    }
    if(keyIsDown(DOWN_ARROW)){
      circleY -= 5
    }
  }
  if(circleX > 790 || circleX < 0){
    finish()
  }
  if(circleY > 590 || circleY < 0){
    finish()
  }
  kyori = dist(circleX,circleY,pointX,pointY)
  if(kyori<30){
    pointX = Math.floor( Math.random() * 700 ) + 50
    pointY = Math.floor( Math.random() * 500 ) + 50
    score += 1
  }
  circle(circleX,circleY,30)
  fill("#ffff00")
  circle(pointX,pointY,30)
  if(zyunbyou<1){
    finish()
  }
}

function finish(){
  alert("FINISH" + "\n" + "あなたのスコアは" + score + "点です")
  circleX = 100
  circleY = 100
  zyunbyou = 60
  hyouzibyou = 0
  byou = 0
  gyaku = 0
  pointX = 700
  pointY = 500
  kyori = 0
  score = 0
}
