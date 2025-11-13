
const canvasX = 280;
const canvasY = 550;

const canvasColor = '#000000';

let minoX1 = 100
let minoY1 = 100
let minoX2 = 100
let minoY2 = 100
let minoX3 = 100
let minoY3 = 100
let minoX4 = 100
let minoY4 = 100
let mino = 6
let hidarihasi = 0
let migihasi = 0
let minosita = 0
let speed = 20
let blockitiX = 0
let blockitiY = 0
let minoX11 = 0
let minoY11 = 0
let minoX22 = 0
let minoY22 = 0
let minoX33 = 0
let minoY33 = 0
let minoX44 = 0
let minoY44 = 0
let roll1 = 0
let roll2 = 0
let roll3 = 0
let roll4 = 0
let roll5 = 0
let roll6 = 0
let roll7 = 0
let byou = 0
let block = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
  ]


function setup() {
  
  createCanvas(canvasX, canvasY);
  
  background(canvasColor);
  if(mino==0){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 120
    minoY4 = 100
    hidarihasi = 120
    migihasi = 140
    minosita = 120
  }else if(mino==1){
    minoX1 = 100
    minoY1 = 40
    minoX2 = 120
    minoY2 = 40
    minoX3 = 120
    minoY3 = 60
    minoX4 = 140
    minoY4 = 60
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }else if(mino==2){
    minoX1 = 100
    minoY1 = 60
    minoX2 = 120
    minoY2 = 40
    minoX3 = 120
    minoY3 = 60
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }else if(mino==3){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 140
    minoY4 = 80
    hidarihasi = 120
    migihasi = 160
    minosita = 100
  }else if(mino==4){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 120
    migihasi = 160
    minosita = 100
  }else if(mino==5){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 140
    minoY3 = 60
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 120
    migihasi = 160
    minosita = 80
  }else{
    minoX1 = 100
    minoY1 = 60
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 40
    minoX4 = 140
    minoY4 = 60
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }
}


function draw() {
  background(canvasColor);
  fill("#888888")
  quad(40,100,240,100,240,500,40,500)
  fill("#000000")
  quad(42,100,238,100,238,498,42,498)
  fill("#ffff00")
  noStroke();
  square(minoX1,minoY1,20)
  square(minoX2,minoY2,20)
  square(minoX3,minoY3,20)
  square(minoX4,minoY4,20)
  byou += 1
  if(byou == 20){
  minoY1 += speed
  minoY2 += speed
  minoY3 += speed
  minoY4 += speed
  minosita += speed
  byou = 0
  }
  if(minosita == 500){
    speed = 0
    roll1 = 0
    roll2 = 0
    roll3 = 0
    roll4 = 0
    roll5 = 0
    roll6 = 0
    roll7 = 0
    blockitiX = minoX1/20-2
    blockitiY = minoY1/20-2
    block[blockitiY][blockitiX] = 1
    blockitiX = minoX2/20-2
    blockitiY = minoY2/20-2
    block[blockitiY][blockitiX] = 1
    blockitiX = minoX3/20-2
    blockitiY = minoY3/20-2
    block[blockitiY][blockitiX] = 1
    blockitiX = minoX4/20-2
    blockitiY = minoY4/20-2
    block[blockitiY][blockitiX] = 1
    mino = Math.floor( Math.random() * 7 );
    if(mino==0){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 120
    minoY4 = 100
    hidarihasi = 120
    migihasi = 140
    minosita = 120
  }else if(mino==1){
    minoX1 = 100
    minoY1 = 40
    minoX2 = 120
    minoY2 = 40
    minoX3 = 120
    minoY3 = 60
    minoX4 = 140
    minoY4 = 60
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }else if(mino==2){
    minoX1 = 100
    minoY1 = 60
    minoX2 = 120
    minoY2 = 40
    minoX3 = 120
    minoY3 = 60
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }else if(mino==3){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 140
    minoY4 = 80
    hidarihasi = 120
    migihasi = 160
    minosita = 100
  }else if(mino==4){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 120
    migihasi = 160
    minosita = 100
  }else if(mino==5){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 140
    minoY3 = 60
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 120
    migihasi = 160
    minosita = 80
  }else{
    minoX1 = 100
    minoY1 = 60
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 40
    minoX4 = 140
    minoY4 = 60
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }
  speed = 20
  }
  for(let i=3;i<23;i++){
    for(let e=0;e<10;e++){
      if(block[i][e]==1){
        fill("#ffff00")
        square(20*e+40,20*i+40,20)
      }
    }
  }
  if(minosita%20 == 0 && minosita>=80){
    minoX11 = minoX1/20-2
    minoY11 = (minoY1+20)/20-2
    minoX22 = minoX2/20-2
    minoY22 = (minoY2+20)/20-2
    minoX33 = minoX3/20-2
    minoY33 = (minoY3+20)/20-2
    minoX44 = minoX4/20-2
    minoY44 = (minoY4+20)/20-2
  if(block[minoY11][minoX11]==1 || block[minoY22][minoX22]==1 || block[minoY33][minoX33]==1 || block[minoY44][minoX44]==1){
    speed = 0
    roll1 = 0
    roll2 = 0
    roll3 = 0
    roll4 = 0
    roll5 = 0
    roll6 = 0
    roll7 = 0
    blockitiX = minoX1/20-2
    blockitiY = minoY1/20-2
    block[blockitiY][blockitiX] = 1
    blockitiX = minoX2/20-2
    blockitiY = minoY2/20-2
    block[blockitiY][blockitiX] = 1
    blockitiX = minoX3/20-2
    blockitiY = minoY3/20-2
    block[blockitiY][blockitiX] = 1
    blockitiX = minoX4/20-2
    blockitiY = minoY4/20-2
    block[blockitiY][blockitiX] = 1
    mino = Math.floor( Math.random() * 6 );
    if(mino==0){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 120
    minoY4 = 100
    hidarihasi = 120
    migihasi = 140
    minosita = 120
  }else if(mino==1){
    minoX1 = 100
    minoY1 = 40
    minoX2 = 120
    minoY2 = 40
    minoX3 = 120
    minoY3 = 60
    minoX4 = 140
    minoY4 = 60
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }else if(mino==2){
    minoX1 = 100
    minoY1 = 60
    minoX2 = 120
    minoY2 = 40
    minoX3 = 120
    minoY3 = 60
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }else if(mino==3){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 140
    minoY4 = 80
    hidarihasi = 120
    migihasi = 160
    minosita = 100
  }else if(mino==4){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 80
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 120
    migihasi = 160
    minosita = 100
  }else if(mino==5){
    minoX1 = 120
    minoY1 = 40
    minoX2 = 120
    minoY2 = 60
    minoX3 = 140
    minoY3 = 60
    minoX4 = 140
    minoY4 = 40
    hidarihasi = 120
    migihasi = 160
    minosita = 80
  }else{
    minoX1 = 100
    minoY1 = 60
    minoX2 = 120
    minoY2 = 60
    minoX3 = 120
    minoY3 = 40
    minoX4 = 140
    minoY4 = 60
    hidarihasi = 100
    migihasi = 160
    minosita = 80
  }
  speed = 20
  }
  }
  for(let i=3;i<23;i++){
    if(block[i][0]*block[i][1]*block[i][2]*block[i][3]*block[i][4]*block[i][5]*block[i][6]*block[i][7]*block[i][8]*block[i][9] == 1){
      block[i]=block[0,0,0,0,0,0,0,0,0,0]
      for(let e=i;e>2;e-=1){
        block[e] = block[e-1]
      }
    }
  }
  if(block[2][0]+block[2][1]+block[2][2]+block[2][3]+block[2][4]+block[2][5]+block[2][6]+block[2][7]+block[2][8]+block[2][9]>0){
    alert("GAMEOVER");
    resetgame();
  }
}
function keyPressed(){
  if(keyCode === LEFT_ARROW && hidarihasi>40){
    if(block[minoY1/20-2][(minoX1-20)/20-2]==0 && block[minoY2/20-2][(minoX2-20)/20-2]==0 && block[minoY3/20-2][(minoX3-20)/20-2]==0 && block[minoY4/20-2][(minoX4-20)/20-2]==0){
    minoX1 -= 20
    minoX2 -= 20
    minoX3 -= 20
    minoX4 -= 20
    hidarihasi -= 20
    migihasi -= 20
    }
  }
  if(keyCode === RIGHT_ARROW && migihasi<240){
    if(block[minoY1/20-2][(minoX1+20)/20-2]==0 && block[minoY2/20-2][(minoX2+20)/20-2]==0 && block[minoY3/20-2][(minoX3+20)/20-2]==0 && block[minoY4/20-2][(minoX4+20)/20-2]==0){
    minoX1 += 20
    minoX2 += 20
    minoX3 += 20
    minoX4 += 20
    hidarihasi += 20
    migihasi += 20
    }
  }
  if(keyCode === DOWN_ARROW){
    if(mino==0){
      if(roll1 == 0 || roll1 == 2){
        minoX1 = minoX1-20
        minoY1 = minoY1+40
        minoX2 = minoX2+20
        minoY2 = minoY2+20
        minoX4 = minoX4+40
        minoY4 = minoY4-20
        hidarihasi = minoX1
        migihasi = minoX4+20
        minosita = minoY1+20
        roll1 += 1
      }else{
        minoX1 = minoX1+20
        minoY1 = minoY1-40
        minoX2 = minoX2-20
        minoY2 = minoY2-20
        minoX4 = minoX4-40
        minoY4 = minoY4+20
        hidarihasi = minoX1
        migihasi = minoX1+20
        minosita = minoY4+20
        roll1 += 1
        if(roll1==4){
          roll1 = 0
        }
      }
    }
    if(mino==1){
      if(roll2==0 || roll2==2){
        minoX1 = minoX1+40
        minoY2 = minoY2+40
        hidarihasi = minoX3
        migihasi = minoX1+20
        minosita = minoY2+20
        roll2 += 1
      }else{
        minoX1 = minoX1-40
        minoY2 = minoY2-40
        hidarihasi = minoX1
        migihasi = minoX4+20
        minosita = minoY3+20
        roll2 += 1
        if(roll2==4){
          roll2 = 0
        }
      }
    }
    if(mino==2){
      if(roll3==0 || roll3==2){
        minoX4 = minoX4-40
        minoY2 = minoY2+40
        hidarihasi = minoX1
        migihasi = minoX2+20
        minosita = minoY2+20
        roll3 += 1
      }else{
        minoX4 = minoX4+40
        minoY2 = minoY2-40
        hidarihasi = minoX1
        migihasi = minoX4+20
        minosita = minoY3+20
        roll3 += 1
        if(roll3==4){
          roll3 = 0
        }
      }
    }
    if(mino==3){
      if(roll4==0){
        minoX1 = minoX1+20
        minoY1 = minoY1+20
        minoX3 = minoX3-20
        minoY3 = minoY3-20
        minoX4 = minoX4-40
        migihasi = minoX1+20
        hidarihasi = minoX4
        minosita = minoY4+20
        roll4 += 1
      }else if(roll4==1){
        minoY1 = minoY1+20
        minoX2 = minoX2+20
        minoX3 = minoX3+40
        minoY3 = minoY3-20
        minoX4 = minoX4+20
        minoY4 = minoY4-40
        migihasi = minoX1+20
        hidarihasi = minoX4
        minosita = minoY1+20
        roll4 += 1
      }else if(roll4==2){
        minoX1 = minoX1-40
        minoY1 = minoY1-20
        minoX2 = minoX2-20
        minoY3 = minoY3+20
        minoX4 = minoX4+20
        migihasi = minoX4+20
        hidarihasi = minoX1
        minosita = minoY3+20
        roll4 += 1
      }else{
        minoX1 = minoX1+20
        minoY1 = minoY1-20
        minoX3 = minoX3-20
        minoY3 = minoY3+20
        minoY4 = minoY4+40
        migihasi = minoX4+20
        hidarihasi = minoX1
        minosita = minoY4+20
        roll4 = 0
      }
    }
    if(mino==4){
      if(roll5==0){
        minoX1 = minoX1+20
        minoY1 = minoY1+20
        minoX3 = minoX3-20
        minoY3 = minoY3-20
        minoY4 = minoY4+40
        migihasi = minoX1+20
        hidarihasi = minoX3
        minosita = minoY4+20
        roll5 += 1
      }else if(roll5==1){
        minoY1 = minoY1+20
        minoX2 = minoX2+20
        minoX3 = minoX3+40
        minoY3 = minoY3-20
        minoX4 = minoX4-20
        migihasi = minoX1+20
        hidarihasi = minoX4
        minosita = minoY4+20
        roll5 += 1
      }else if(roll5==2){
        minoX1 = minoX1-40
        minoY1 = minoY1-20
        minoX2 = minoX2-20
        minoY3 = minoY3+20
        minoX4 = minoX4-20
        minoY4 = minoY4-40
        migihasi = minoX3+20
        hidarihasi = minoX4
        minosita = minoY1+20
        roll5 += 1
      }else{
        minoX1 = minoX1+20
        minoY1 = minoY1-20
        minoX3 = minoX3-20
        minoY3 = minoY3+20
        minoX4 = minoX4+40
        migihasi = minoX4+20
        hidarihasi = minoX1
        minosita = minoY3+20
        roll5 = 0
      }
    }
    if(mino == 5){     
    }
    if(mino == 6){
      if(roll6 == 0){
        minoX1 = minoX1+20
        minoY1 = minoY1-20
        minoX3 = minoX3+20
        minoY3 = minoY3+20
        minoX4 = minoX4-20
        minoY4 = minoY4+20
        migihasi = minoX3+20
        hidarihasi = minoX1
        minosita = minoY4+20
        roll6 += 1
      }else if(roll6 == 1){
        minoX1 = minoX1+20
        minoY1 = minoY1+20
        minoX3 = minoX3-20
        minoY3 = minoY3+20
        minoX4 = minoX4-20
        minoY4 = minoY4-20
        migihasi = minoX1+20
        hidarihasi = minoX4
        minosita = minoY3+20
        roll6 += 1
      }else if(roll6 == 2){
        minoX1 = minoX1-20
        minoY1 = minoY1+20
        minoX3 = minoX3-20
        minoY3 = minoY3-20
        minoX4 = minoX4+20
        minoY4 = minoY4-20
        migihasi = minoX1+20
        hidarihasi = minoX3
        minosita = minoY1+20
        roll6 += 1
      }else if(roll6 == 3){
        minoX1 = minoX1-20
        minoY1 = minoY1-20
        minoX3 = minoX3+20
        minoY3 = minoY3-20
        minoX4 = minoX4+20
        minoY4 = minoY4+20
        migihasi = minoX4+20
        hidarihasi = minoX1
        minosita = minoY2+20
        roll6 = 0
      }
    }
  }
}

function resetgame(){
  minoX1 = 100
  minoY1 = 100
  minoX2 = 100
  minoY2 = 100
  minoX3 = 100
  minoY3 = 100
  minoX4 = 100
  minoY4 = 100
  mino = 6
  hidarihasi = 0
  migihasi = 0
  minosita = 0
  speed = 20
  blockitiX = 0
  blockitiY = 0
  minoX11 = 0
  minoY11 = 0
  minoX22 = 0
  minoY22 = 0
  minoX33 = 0
  minoY33 = 0
  minoX44 = 0
  minoY44 = 0
  roll1 = 0
  roll2 = 0
  roll3 = 0
  roll4 = 0
  roll5 = 0
  roll6 = 0
  roll7 = 0
  byou = 0
  block = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
  ]
  minoX1 = 100
  minoY1 = 60
  minoX2 = 120
  minoY2 = 60
  minoX3 = 120
  minoY3 = 40
  minoX4 = 140
  minoY4 = 60
  hidarihasi = 100
  migihasi = 160
  minosita = 80
}

