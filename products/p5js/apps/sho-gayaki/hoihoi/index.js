

const canvasX = 800;
const canvasY = 400;

const canvasColor = '#000000';

let circleX = 200
let circleY = 200
let goX = 0
let goY = 0
let goSin = 0
let goCos = 0
let goTan = 0
let susumuX = 0
let susumuY = 0
let kyori = 7
let byou = 1
let atari = 0
let te = false
let tekigen = 0
let text1 = false
let misukigen = 0
let text2 = false
let catchkigen = 0
let score = 0
let zyuntimer = 60
let timer = 60


function setup() {
  
  createCanvas(canvasX, canvasY);
  
  background(canvasColor);
  alert("画面を飛び回る黄色の円をマウスでクリックしよう。当たれば+5点、外せば-1点だよ。1分以内にできるだけスコアを伸ばそう。")
}


function draw() {
  try{
  background(canvasColor);
  fill("#ffff00")
  zyuntimer -= 1/60
  timer = Math.floor(zyuntimer)
  textSize(15)
  text("残り時間[" + timer + "]",15,15)
  fill("#00ffdd")
  text("スコア[" + score + "]",15,32)
  fill("#00ffff")
  rect(292,65,125,50)
  fill("#000000")
  rect(297,70,115,40)
  if(text1){
    fill("#00ff00")
    textSize(30)
    text("missed!",300,100)
    misukigen += 1
    if(misukigen > 120){
      misukigen = 0
      text1 = false
    }
    }
    if(text2){
    fill("#00ff00")
    textSize(30)
    text("caught!",300,100)
    catchkigen += 1
    if(catchkigen > 120){
      catchkigen = 0
      text2 = false
    }
    }
  fill("#ffff00")
  circle(circleX,circleY,30)
  byou += 1
  if(byou == 20){
  goX = Math.floor( Math.random() * 800 );
  goY = Math.floor( Math.random() * 400 );
  goTan =  (goX-circleX)/(goY-circleY)
  goCos = 1/(goTan**2+1)
  goCos = Math.sqrt(goCos)
  susumuX = goCos*kyori
  goSin = 1-goCos**2
  goSin = Math.sqrt(goSin)
  susumuY = goSin*kyori
  byou = 0
  }
  if(goX-circleX<0){
      if(goY-circleY<0){
      circleX -= susumuX
      circleY -= susumuY
      }else{
        circleX -= susumuX
        circleY += susumuY
      }
     }else{
      if(goY-circleY<0){
        circleX += susumuX
        circleY -= susumuY
       }else{
        circleX += susumuX
        circleY += susumuY
      }
    }
    if(te){
      fill("#ff0000")
      circle(mouseX,mouseY,40)
      tekigen += 1
      if(tekigen > 5){
        te = false
        tekigen = 0
      }
    }
    if(zyuntimer < 1){
      alert("FINISH" + "\n" + "あなたのスコアは" + score + "点です。")
      circleX = 200
      circleY = 200
      goX = 0
      goY = 0
      goSin = 0
      goCos = 0
      goTan = 0
      susumuX = 0
      susumuY = 0
      kyori = 7
      byou = 1
      atari = 0
      te = false
      tekigen = 0
      text1 = false
      misukigen = 0
      text2 = false
      catchkigen = 0
      score = 0
      zyuntimer = 60
      timer = 60
    }
  }catch(e){
    alert(e)
  }
}
function mouseClicked(){
  te = true
  atari = dist(circleX,circleY,mouseX,mouseY)
  if(atari<30){
    score += 5
    text2 = true
    text1 = false
    catchkigen = 0
  }else{
    score -= 1
    text1 = true
    text2 = false
    misskigen = 0
  }
}