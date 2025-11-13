
const canvasX = 1000;
const canvasY = 600;

const canvasColor = '#000000';

let circleX = 100
let circleY = 100
let tekiX = 900
let tekiY = 500
let kyoriX = 0
let kyoriY = 0
let kyoritan = 0
let kyoricos = 0
let kyorisin = 0
let x = 0
let y = 0
let atari = 0
let enX = tekiX
let enY = tekiY
let rad = 0
let hankei = 100
let atari1 =0 
let tamaX = tekiX
let tamaY = tekiY
let sokudoX = 0
let sokudoY = 0
let sokudo = true
let atari2 = 0
let gunX = circleX
let gunY = circleY
let gunRad = 0
let gunRadius = 15
let ballX1 = gunX
let ballY1 = gunY
let ballX2 = gunX
let ballY2 = gunY
let ballX3 = gunX
let ballY3 = gunY
let hassya = false
let radius = 10
let tobuRad = gunRad
let taosu1 = 0
let taosu2 = 0
let taosu3 = 0
let tekiHP = 100
let tekihpvarX = 110
let tekihpvarY = 10
let start = false
let sanbai = false
let speedup = false
let ballSize = 10
let size = false
let zyunzanki = 1
let zanki = 1
let sterTime = 30
let circleColor = 0
let hard = false
let tamaSize = 10


function setup() {
  
  createCanvas(canvasX, canvasY);
  
  background(canvasColor);
}


function draw() {
  try{
  background(canvasColor);
  if(start){
  if(hard){
    tamaSize = 20
  }else{
    tamaSize = 10
  }
  if(speedup){
    radius = 15
  }else if(hard){
    radius = 5
  }else{
    radius = 10
  }
  if(size){
    ballSize = 20
  }else if(hard){
    ballSize = 5
  }else{
    ballSize = 10
  }
  if(keyIsDown(27)){
    resetgame()
  }
  fill("#ffffff")
  textSize(40)
  text("敵HP",10,40)
  text("残機["+zanki+"]",720,40)
  fill("#ff0000")
  rect(tekihpvarX,tekihpvarY,600,30)
  fill("#5aff19")
  if(hard){
    rect(tekihpvarX,tekihpvarY,tekiHP*3,30)
  }else{
  rect(tekihpvarX,tekihpvarY,tekiHP*6,30)
  }
  if(circleColor == 0){
  fill("#ffff00") 
  }else{
    fill("#de6641")
  }
  circle(circleX,circleY ,30)
  fill("#ff0000")
  circle(tekiX,tekiY,30)
  gunX = gunRadius*Math.cos(gunRad)+circleX
  gunY = gunRadius*Math.sin(gunRad)+circleY
  if(keyIsDown(RIGHT_ARROW)){
    gunRad += 1*Math.PI/45
  }
  if(keyIsDown(LEFT_ARROW)){
    gunRad -= 1*Math.PI/45
  }
  if(keyIsDown(DOWN_ARROW) && hassya == false){
    hassya = true
    tobuRad = gunRad
  }
  if(hassya){
    ballX1 += radius*Math.cos(tobuRad)
    ballY1 += radius*Math.sin(tobuRad)
    ballX2 += radius*Math.cos(tobuRad+1*Math.PI/8)
    ballY2 += radius*Math.sin(tobuRad+1*Math.PI/8)
    ballX3 += radius*Math.cos(tobuRad-1*Math.PI/8)
    ballY3 += radius*Math.sin(tobuRad-1*Math.PI/8)
    if(ballX1>canvasX || ballX1<0 || ballY1>canvasY || ballY1<0){
      hassya = false
      ballX1 = gunX
      ballY1 = gunY
      ballX2 = gunX
      ballY2 = gunY
      ballX3 = gunX
      ballY3 = gunY
    }
  }else{
    ballX1 = gunX
    ballY1 = gunY
    ballX2 = gunX
    ballY2 = gunY
    ballX3 = gunX
    ballY3 = gunY
  }
  fill("#00ffff")
  circle(gunX,gunY,10)
  fill("#00ff00")
  circle(ballX1,ballY1,ballSize)
  if(sanbai){
    circle(ballX2,ballY2,ballSize)
    circle(ballX3,ballY3,ballSize)
    taosu2 = dist(ballX2,ballY2,tekiX,tekiY)
    taosu3 = dist(ballX3,ballY3,tekiX,tekiY)
    if(taosu2<ballSize/2+15 || taosu3<ballSize/2+15){
      if(hassya){
      tekiHP -= 10
      fill("#e6b422")
      circle(tekiX,tekiY,60)
      hassya = false
      }
    }
  }
  taosu1 = dist(ballX1,ballY1,tekiX,tekiY)
  if(taosu1<ballSize/2+15 && hassya){
    tekiHP -= 10
    fill("#e6b422")
    circle(tekiX,tekiY,60)
    hassya = false
    ballX1 = gunX
    ballY1 = gunY
    ballX2 = gunX
    ballY2 = gunY
    ballX3 = gunX
    ballY3 = gunY
  }
  if(tekiHP<=0){
    if(hard){
      alert("CLEAR"+"\n"+"君はプロだ！")
    }else{
    alert("CLEAR")
    }
    resetgame()
  }
  atari = dist(circleX,circleY,tekiX,tekiY)
  atari1 = dist(circleX,circleY,enX,enY)
  atari2 = dist(circleX,circleY,tamaX,tamaY)
   if(atari<30){
    if(sterTime==30){
    background("#b1221a")
    zanki -= 1
    }
    circleColor = 1
    sterTime -= 1
   }else if(atari1<25){
    if(sterTime==30){
    zanki -= 1
    background("#b1221a")
    }
    circleColor = 1
    sterTime -= 1
   }else if(atari2<tamaSize/2+15){
    if(sterTime==30){
    zanki -= 1
    background("#b1221a")
    }
    circleColor = 1
    sterTime -= 1
   }else if(sterTime != 30){
    circleColor = 1
    sterTime -= 1
   }else{
    sterTime = 30
    circleColor = 0
   }
   if(sterTime<=0){
    sterTime = 30
    circleColor = 0
   }
   if(zanki<=0){
    alert("GAMEOVER")
    resetgame()
   }
  if(keyIsDown(65) && circleX>15){
      circleX -= 3; 
    }
    if(keyIsDown(68) && circleX<canvasX-15){
      circleX += 3;
    }
    if(keyIsDown(87) && circleY>15){
      circleY -= 3
    }
    if(keyIsDown(83) && circleY<canvasY-15){
      circleY += 3
    }
    kyoriX = circleX-tekiX
    kyoriY = circleY-tekiY
    if(kyoriX != 0){
      kyoritan = kyoriY/kyoriX
      kyoricos = 1/(kyoritan**2+1)
      kyoricos = Math.sqrt(kyoricos)
      kyorisin = 1-kyoricos**2
      kyorisin = Math.sqrt(kyorisin)
      if(hard){
        x = kyoricos*2.5
        y = kyorisin*2.5
      }else{
      x = kyoricos*2
      y = kyorisin*2
      }
      if(hard){
        if(sokudo){
        if(kyoriX<0){
          if(kyoriY<0){
          sokudoX = kyoricos*7
          sokudoY = kyorisin*7
          }else{
            sokudoX = kyoricos*7
            sokudoY = 0-kyorisin*7
          }
        }else{
          if(kyoriY<0){
            sokudoX = 0-kyoricos*7
            sokudoY = kyorisin*7
          }else{
            sokudoX = 0-kyoricos*7
            sokudoY = 0-kyorisin*7
          }
        }
        sokudo=true
      }
      }else{
      if(sokudo){
        if(kyoriX<0){
          if(kyoriY<0){
          sokudoX = kyoricos*6
          sokudoY = kyorisin*6
          }else{
            sokudoX = kyoricos*6
            sokudoY = 0-kyorisin*6
          }
        }else{
          if(kyoriY<0){
            sokudoX = 0-kyoricos*6
            sokudoY = kyorisin*6
          }else{
            sokudoX = 0-kyoricos*6
            sokudoY = 0-kyorisin*6
          }
        }
        sokudo=true
      }
      }
      if(kyoriX<0){
        if(kyoriY<0){
        tekiX -= x
        tekiY -= y
        }else{
          tekiX -= x
          tekiY += y
        }
      }else{
        if(kyoriY<0){
          tekiX += x
          tekiY -= y
        }else{
          tekiX += x
          tekiY += y
        }
      }
   }
   if(hard){
    rad += 1*Math.PI/30
   }else{
   rad += 1*Math.PI/45
   }
   enX = hankei*Math.cos(rad)+tekiX
   enY = hankei*Math.sin(rad)+tekiY
   tamaX -= sokudoX
   tamaY -= sokudoY
   fill("#00ffff")
   circle(enX,enY ,20)
   fill("#ff00ff")
   circle(tamaX,tamaY,tamaSize)
   if(tamaX>1000 || tamaX<0 || tamaY>600 || tamaY<0){
    tamaX = tekiX
    tamaY = tekiY 
    sokudo = true
   }
  }else{
    fill("#00ff00")
    rect(340,250,335,120)
    fill("#af011c")
    rect(340,380,335,120)
    fill("#ff00ff")
    rect(730,10,260,60)
    fill("#0000ff")
    rect(730,80,60,60)
    fill("#00ff00")
    rect(790,80,140,60)
    fill("#ff0000")
    rect(930,80,60,60)
    fill("#ffffff")
    textSize(50)
    text("ルール説明",735,55)
    text("ー",735,130)
    text("+",940,125)
    textSize(40)
    text("残機"+zyunzanki,790,125)
    if(sanbai == false){
      fill("#0000ff")
      square(10,60,100)
      fill("#ffffff")
      textSize(30)
      text("OFF",15,95)
    }else{
      fill("#ff0000")
      square(10,60,100)
      fill("#ffffff")
      textSize(30)
      text("ON",15,95)
    }
    if(speedup == false){
      fill("#0000ff")
      square(120,60,100)
      fill("#ffffff")
      textSize(30)
      text("OFF",125,95)
    }else{
      fill("#ff0000")
      square(120,60,100)
      fill("#ffffff")
      textSize(30)
      text("ON",125,95)
    }
    if(size == false){
      fill("#0000ff")
      square(230,60,100)
      fill("#ffffff")
      textSize(30)
      text("OFF",235,95)
    }else{
      fill("#ff0000")
      square(230,60,100)
      fill("#ffffff")
      textSize(30)
      text("ON",235,95)
    }
    fill("#ffffff")
    textSize(100)
    text("START",350,350)
    text("鬼ムズ",350,480)
    textSize(50)
    text("三倍",10,50)
    text("速度",120,50)
    text("サイズ",230,50)
    if(keyIsDown(13)){
      start = true
      zanki = zyunzanki
      tekiHP = 100
    }
  }
  }catch(e){
    alert(e)
  }
}

function resetgame(){
  circleX = 100
  circleY = 100
  tekiX = 900
  tekiY = 500
  kyoriX = 0
  kyoriY = 0
  kyoritan = 0
  kyoricos = 0
  kyorisin = 0
  x = 0
  y = 0
  atari = 0
  enX = tekiX
  enY = tekiY
  rad = 0
  hankei = 100
  atari1 =0 
  tamaX = tekiX
  tamaY = tekiY
  sokudoX = 0
  sokudoY = 0
  sokudo = true
  atari2 = 0
  gunX = circleX
  gunY = circleY
  gunRad = 0
  gunRadius = 15
  ballX1 = gunX
  ballY1 = gunY
  ballX2 = gunX
  ballY2 = gunY
  ballX3 = gunX
  ballY3 = gunY
  hassya = false
  radius = 10
  tobuRad = gunRad
  taosu1 = 0
  taosu2 = 0
  taosu3 = 0
  tekiHP = 100
  tekihpvarX = 110
  tekihpvarY = 10
  start = false
  zanki = zyunzanki
  sterTime = 30
  hard = false
}

function mousePressed(){
  if(start == false){
    if(mouseX>10 && mouseX<110 && mouseY>60 && mouseY<160){
      if(sanbai){
        sanbai = false
      }else{
        sanbai = true
      }
    }
    if(mouseX>120 && mouseX<220 && mouseY>60 && mouseY<160){
      if(speedup){
        speedup = false
      }else{
        speedup = true
      }
    }
    if(mouseX>230 && mouseX<330 && mouseY>60 && mouseY<160){
      if(size){
        size = false
      }else{
        size = true
      }
    }
    if(mouseX>730 && mouseX<790 && mouseY>80 && mouseY<140){
      if(zyunzanki>1){
        zyunzanki -= 1
      }
    }
    if(mouseX>930 && mouseX<990 && mouseY>80 && mouseY<140){
      zyunzanki += 1
    }
    if(mouseX>340 && mouseX<675 && mouseY>380 && mouseY<500){
      start = true
      zyunzanki = 1
      zanki = zyunzanki
      hard = true
      tekiHP = 200
      sanbai = false
      speedup = false
      size = false
    }
    if(mouseX>730 && mouseX<990 && mouseY>10 && mouseY<70){
      alert("自分のボールを操作して、敵を倒す。WASDで上下左右の移動、→←で砲台の移動、↓で銃を発射。弾を敵にあてると、敵のHPが減る。敵のHPを0にすれば勝ち。ホームで、三倍をONにすれば、弾が三つ発射され、速度をONにすれば、弾の速さが早くなり、サイズをONにすれば、弾が大きくなる。Escを押せば途中からでもホームに戻れる。")
    }
    if(mouseX>340 && mouseX<675 && mouseY>250 && mouseY<370){
      start = true
      tekiHP = 100
      zanki = zyunzanki
    }
  }
}
function keyPressed(){
  if(keyCode==49){
    if(sanbai){
      sanbai = false
    }else{
      sanbai = true
    }
  }
  if(keyCode==50){
    if(speedup){
      speedup = false
    }else{
      speedup = true
    }
  }
  if(keyCode==51){
    if(size){
      size = false
    }else{
      size = true
    }
  }
}
