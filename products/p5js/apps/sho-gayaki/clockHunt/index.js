

const canvasX = 1000;
const canvasY = 700;

const canvasColor = '#ffff00';

let centerX = 500
let centerY = 350
let rad = 0
let rad2 = 1*Math.PI
let hankei = 200
let hankei2 = 200
let circleX1 = centerX+200
let circleY1 = centerY
let circleX2 = centerX-200
let circleY2 = centerY
let kyori = 200
let byou = 0
let byou2 = 0


function setup() {
  
  createCanvas(canvasX, canvasY);
  
  background(canvasColor);
  alert("鬼と逃げを決める。左の人はAを押すと時計回り、Dを押すと反時計回りに回る。右の人は左矢印を押すと時計回り、右矢印を押すと反時計回りに回る。また、左の人は、Wを押すと外側、Sを押すと内側を回るようになる。右の人は、上矢印を押すと外側、下矢印を押すと内側を回るようになる。逃げに触れれば鬼の勝ち、30秒逃げ切れば逃げの勝ち。")
}


function draw() {
  document.getElementById('target').textContent = "残り時間[" + byou2 + "]";
  background(canvasColor);
  fill("#ffff00")
  if(keyIsDown(LEFT_ARROW)){
    rad += 1*Math.PI/50
  }
  if(keyIsDown(RIGHT_ARROW)){
    rad -= 1*Math.PI/50
  }
  if(keyIsDown("A".charCodeAt(0))){
    rad2 += 1*Math.PI/50
  }
  if(keyIsDown("D".charCodeAt(0))){
    rad2 -= 1*Math.PI/50
  }
  if(keyIsDown(UP_ARROW) && hankei<325){
    hankei += 1
  }
  if(keyIsDown(DOWN_ARROW) && hankei>50){
    hankei -= 1
  }
  if(keyIsDown("W".charCodeAt(0)) && hankei2<325){
    hankei2 += 1
  }
  if(keyIsDown("S".charCodeAt(0)) && hankei2>50){
    hankei2 -= 1
  }
  circleX2 = hankei2*Math.cos(rad2)+centerX
  circleY2 = hankei2*Math.sin(rad2)+centerY
  circleX1 = hankei*Math.cos(rad)+centerX
    circleY1 = hankei*Math.sin(rad)+centerY
  line(circleX1,circleY1,centerX,centerY)
  line(circleX2,circleY2,centerX,centerY)
  fill("#ff0000")
  circle(centerX,centerY,50)
  fill("#0000ff")
  circle(circleX1,circleY1,50)
  fill("#00ff00")
  circle(circleX2,circleY2,50)
  kyori = dist(circleX1,circleY1,circleX2,circleY2)
  if(kyori<40){
    alert("鬼の勝ち")
    centerX = 500
    centerY = 350
    rad = 0
    rad2 = 1*Math.PI
    hankei = 200
    hankei2 = 200
    circleX1 = centerX+200
    circleY1 = centerY
    circleX2 = centerX-200
    circleY2 = centerY
    kyori = 200
    byou = 0
    byou2 = 0
  }
  byou += 1/60
  byou2 = Math.floor(byou)
  byou2 = 30-byou2
  if(byou>30){
    alert("逃げの勝ち")
    centerX = 500
    centerY = 350
    rad = 0
    rad2 = 1*Math.PI
    hankei = 200
    hankei2 = 200
    circleX1 = centerX+200
    circleY1 = centerY
    circleX2 = centerX-200
    circleY2 = centerY
    kyori = 200
    byou = 0
    byou2 = 0
  }
}
