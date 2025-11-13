
const canvasX = 800;
const canvasY = 400;

let canvasColor = '#00ff00';

let braveX = 350
let braveY = 150
let map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let brave = [
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,2,3,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,2,3,1,0,1,1,1,1,1,0,0,0,0,0,0],
  [0,1,2,3,1,1,8,8,8,8,8,1,1,1,1,0,0],
  [0,1,2,3,1,8,8,8,8,8,8,8,8,8,1,0,0],
  [0,1,2,3,1,8,8,8,8,1,8,8,9,1,0,0,0],
  [0,1,2,3,1,3,1,8,8,1,8,3,9,9,1,0,0],
  [0,1,2,3,1,9,1,1,9,1,1,9,9,1,0,0,0],
  [0,1,1,1,1,1,1,5,1,1,1,1,1,0,0,0,0],
  [1,4,4,4,1,5,1,5,5,5,1,5,1,0,0,0,0],
  [0,1,1,1,1,1,5,5,5,5,5,1,1,1,1,1,1],
  [0,1,5,5,1,6,1,1,1,1,1,1,7,7,7,7,1],
  [0,1,5,5,1,6,6,6,6,6,6,1,7,4,4,7,1],
  [0,0,1,1,1,9,9,9,9,9,9,1,7,4,4,7,1],
  [0,0,0,0,1,6,6,6,6,6,6,6,1,7,7,1,0],
  [0,0,0,0,0,1,8,8,1,8,8,1,0,1,1,0,0],
  [0,0,0,0,0,1,9,9,1,9,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,9,1,1,1,1,0,0,0,0,0]
]
let monkX = 50
let monkY = 0
let monk = [
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,1,5,5,6,5,5,1,0,0,0],
  [0,0,0,0,0,1,5,6,6,6,5,1,0,0,0],
  [0,1,1,1,1,1,5,5,6,5,5,1,0,0,0],
  [1,2,2,2,2,1,6,6,6,6,6,1,1,0,0],
  [1,2,1,1,3,1,1,1,1,1,1,8,8,1,0],
  [1,2,1,3,3,1,8,8,8,8,8,8,7,1,0],
  [0,1,2,1,1,7,7,8,8,8,7,7,9,1,0],
  [0,1,2,3,1,9,9,1,9,1,9,9,9,1,0],
  [0,1,2,3,1,1,1,4,4,4,1,1,1,0,0],
  [0,1,2,3,1,4,1,4,4,4,1,4,1,0,0],
  [0,1,1,1,1,1,4,4,4,4,4,1,1,0,0],
  [0,1,4,4,1,6,1,1,1,1,1,6,6,1,0],
  [0,1,4,4,1,6,5,5,6,5,5,6,1,6,1],
  [0,0,1,1,1,6,5,6,6,6,5,6,1,5,1],
  [0,0,0,0,1,6,5,5,6,5,5,6,1,4,1],
  [0,0,0,0,1,6,5,5,6,5,5,6,1,1,0],
  [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,3,1,1,1,0,0,0,0],
]
let warriorX = 100
let warriorY = 0
let warrior = [
  [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,6,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
  [1,6,7,8,8,1,1,5,5,2,5,5,1,1,2,1],
  [1,6,7,8,8,1,5,4,5,2,5,5,5,5,1,0],
  [1,6,7,8,8,1,5,5,5,2,5,5,5,5,1,0],
  [1,6,1,1,1,1,5,5,5,2,5,5,5,2,1,0],
  [0,1,0,1,9,1,2,2,2,2,2,2,2,2,1,0],
  [0,0,0,1,9,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,9,1,3,1,3,3,3,1,3,1,0,0],
  [0,0,0,1,1,1,1,3,3,3,3,3,1,1,1,0],
  [0,0,1,3,3,1,4,1,1,1,1,1,5,1,5,1],
  [0,0,1,3,3,1,4,4,4,5,5,5,5,1,1,1],
  [0,0,0,1,1,1,4,4,4,5,5,5,5,1,8,1],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,3,1],
  [0,0,0,0,0,0,1,8,8,1,8,8,1,0,1,0],
  [0,0,0,0,0,0,1,5,5,1,5,1,0,0,0,0],
  [0,0,0,0,0,0,0,1,5,1,1,1,1,0,0,0]
]
let wizardX = 150
let wizardY = 0
let wizard = [
  [0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,4,4,4,1,0,0,0],
  [0,1,1,1,1,0,1,4,4,4,4,1,0,0,0,0],
  [1,2,2,2,2,1,4,4,4,4,4,1,0,0,0,0],
  [1,2,1,1,3,1,4,4,4,4,4,4,1,0,0,0],
  [1,2,1,3,3,1,4,4,4,4,4,9,1,1,0,0],
  [0,1,2,1,1,4,9,9,9,9,9,4,4,4,1,1],
  [0,1,2,3,1,4,4,4,4,4,4,4,1,1,0,0],
  [0,1,2,3,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,2,3,1,6,1,6,6,6,1,6,1,9,1,0],
  [0,1,1,1,1,1,6,6,6,6,6,1,1,1,1,0],
  [0,1,6,6,1,4,1,1,1,1,1,1,8,7,1,0],
  [0,1,6,6,1,5,4,4,4,4,1,8,7,8,7,1],
  [0,0,1,1,4,4,4,4,4,4,1,8,8,8,7,1],
  [0,0,1,4,4,4,5,4,4,4,5,1,7,7,1,0],
  [0,0,1,4,4,5,4,4,4,4,4,5,1,1,1,0],
  [0,0,0,1,1,5,4,4,4,4,4,5,1,1,0,0],
  [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0]
]
let enemyX = 400
let enemyY = 100
let enemy01 = [
  [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,1,4,4,4,1,1,0,0,0],
  [0,0,1,1,0,0,1,5,4,5,1,0,0,0,0],
  [0,1,2,3,1,0,0,1,5,1,0,0,0,0,0],
  [0,1,2,3,1,0,1,1,1,1,1,0,0,0,0],
  [0,1,2,3,1,1,2,3,2,3,3,1,0,0,0],
  [0,1,2,3,1,2,2,3,2,3,3,3,1,0,0],
  [0,1,2,3,1,2,2,3,2,3,3,3,1,0,0],
  [0,1,2,3,1,2,1,1,1,1,1,3,1,0,0],
  [0,1,2,3,1,2,1,1,1,1,1,3,1,0,0],
  [0,1,1,1,1,2,2,3,1,3,3,3,1,0,0],
  [1,2,3,3,1,2,2,3,1,3,3,3,1,0,0],
  [0,1,1,1,1,1,2,3,1,3,3,1,1,1,0],
  [0,1,2,2,1,2,1,1,1,1,1,3,1,3,1],
  [0,1,2,3,1,2,2,3,2,3,3,3,1,1,1],
  [0,0,1,1,1,2,2,3,2,3,3,3,1,3,1],
  [0,0,0,0,0,1,1,1,1,1,1,1,1,3,1],
  [0,0,0,0,0,1,2,2,1,2,2,1,0,1,0],
  [0,0,0,0,0,1,3,3,1,3,1,0,0,0,0],
  [0,0,0,0,0,0,1,3,1,1,1,1,0,0,0]
]
let treasure = [
  
]
let start = false
let battle = false
let random = 10
let braveChoice = false
let monkChoice = false
let warriorChoice = false
let wizardChoice = false
let braveAttack = false
let braveGuard = false
let braveItem = false
let braveEscape = false
let monkAttack = false
let monkGuard = false
let monkItem = false
let monkEscape = false
let warriorAttack = false
let warriorGuard = false
let warriorItem = false
let warriorEscape = false
let wizardAttack = false
let wizardGuard = false
let wizardItem = false
let wizardEscape = false
let braveCome = false
let monkCome = false
let warriorCome = false
let wizardCome = false
let attackTime = false
let braveMaxHp = 50
let braveHp = 50
let monkMaxHp = 50
let monkHp = 50
let warriorMaxHp = 50
let warriorHp = 50
let wizardMaxHp = 50
let wizardHp = 50
let enemy01MaxHp = 100
let enemy01Hp = 100
let braveAttackAm = 15
let monkAttackAm = 15
let warriorAttackAm = 15
let wizardAttackAm = 15
let attackAm = 0
let enemyAttackTime = false
let enemyCome = false
let enemyAttackAm = 10
let braveDeath = false
let monkDeath = false
let warriorDeath = false
let wizardDeath = false
let deathValue = 0


function setup() {
  createCanvas(canvasX, canvasY);
  background(canvasColor);
}


function draw() {
  try{
  background(canvasColor);
  noStroke();
  
  if(start){
    canvasColor = "#00ffff"
    textSize(70)
    fill("#ff0000")
    text("勇者エイタと",190,100)
    fill("#00ff00")
    text("四つの秘宝",225,180)
    textSize(30)
    fill("#ff00ff")
    text("Please press enter",270,300)
    if(keyIsDown(13)){
      start = false
      alert("勇者エイタは火、水、風、地の4つの秘宝を求め三人の仲間を連れ、旅に出る")
    }
  }else{
    drawing()
  
  if(battle){
    battlePhase()
  }else{
    canvasColor = "#0000ff"
  }
  }
  }catch(e){
    alert(e)
  }
}

function keyPressed(){
  if(start == false && battle == false){
  
  if(keyCode === UP_ARROW && braveY>0 && battle == false){
    braveY -= 50
    move()
  }
  if(keyCode === DOWN_ARROW && braveY<350 && battle == false){
    braveY += 50
    move()
  }
  if(keyCode === RIGHT_ARROW && braveX<750 && battle == false){
    braveX += 50
    move()
  }
  if(keyCode === LEFT_ARROW && braveX>0 && battle == false){
    braveX -= 50
    move()
  }
  }
}

function drawing(){
   
  for(let i=0;i<18;i++){
    for(let j=0;j<17;j++){
      if(brave[i][j] != 0){
        if(brave[i][j] == 1){
          fill("#000000")
        }else if(brave[i][j] == 2){
          fill("#ffffff")
        }else if(brave[i][j] == 3){
          fill("#bbbbbb")
        }else if(brave[i][j] == 4){
          fill("#ff0000")
        }else if(brave[i][j] == 5){
          fill("#fce2c4")
        }else if(brave[i][j] == 6){
          fill("#0000ff")
        }else if(brave[i][j] == 7){
          fill("#ffff00")
        }else if(brave[i][j] == 8){
          fill("#888888")
        }else if(brave[i][j] == 9){
          fill("#444444")
        }
        square(j*2.7+braveX,i*2.7+braveY,2.7)
      }
    }
  }
  if(braveDeath){
    fill("#ff0000")
    quad(braveX,braveY+5,braveX+5,braveY,braveX+50,braveY+45,braveX+45,braveY+50)
    quad(braveX+45,braveY,braveX+50,braveY+5,braveX+5,braveY+50,braveX,braveY+45)
  }
  if(battle){
  
  for(let i=0;i<19;i++){
    for(let j=0;j<15;j++){
      if(monk[i][j] != 0){
        if(monk[i][j] == 1){
          fill("#000000")
        }else if(monk[i][j] == 2){
          fill("#a99663")
        }else if(monk[i][j] == 3){
          fill("#5c5d31")
        }else if(monk[i][j] == 4){
          fill("#fce2c4")
        }else if(monk[i][j] == 5){
          fill("#ff00ff")
        }else if(monk[i][j] == 6){
          fill("#ffffff")
        }else if(monk[i][j] == 7){
          fill("#bbbbbb")
        }else if(monk[i][j] == 8){
          fill("#888888")
        }else if(monk[i][j] == 9){
          fill("#444444")
        }
        square(monkX+j*2.6,monkY+i*2.6,2.6)
      }
    }
  }
  if(monkDeath){
    fill("#ff0000")
    quad(monkX,monkY+5,monkX+5,monkY,monkX+50,monkY+45,monkX+45,monkY+50)
    quad(monkX+45,monkY,monkX+50,monkY+5,monkX+5,monkY+50,monkX,monkY+45)
  }
  
  for(let i=0;i<17;i++){
    for(let j=0;j<16;j++){
      if(warrior[i][j] != 0){
        if(warrior[i][j] == 1){
          fill("#000000")
        }else if(warrior[i][j] == 2){
          fill("#ffff00")
        }else if(warrior[i][j] == 3){
          fill("#fce2c4")
        }else if(warrior[i][j] == 4){
          fill("#65bbe9")
        }else if(warrior[i][j] == 5){
          fill("#0072bc")
        }else if(warrior[i][j] == 6){
          fill("#bbbbbb")
        }else if(warrior[i][j] == 7){
          fill("#888888")
        }else if(warrior[i][j] == 8){
          fill("#444444")
        }else if(warrior[i][j] == 9){
          fill("#6a3300")
        }
        square(warriorX+j*2.9,warriorY+i*2.9,2.9)
      }
    }
  }
  if(warriorDeath){
    fill("#ff0000")
    quad(warriorX,warriorY+5,warriorX+5,warriorY,warriorX+50,warriorY+45,warriorX+45,warriorY+50)
    quad(warriorX+45,warriorY,warriorX+50,warriorY+5,warriorX+5,warriorY+50,warriorX,warriorY+45)
  }
  
  for(let i=0;i<18;i++){
    for(let j=0;j<16;j++){
      if(wizard[i][j] != 0){
        if(wizard[i][j] == 1){
          fill("#000000")
        }else if(wizard[i][j] == 2){
          fill("#a99663")
        }else if(wizard[i][j] == 3){
          fill("#5c5d31")
        }else if(wizard[i][j] == 4){
          fill("#005739")
        }else if(wizard[i][j] == 5){
          fill("#005d4d")
        }else if(wizard[i][j] == 6){
          fill("#fce2c4")
        }else if(wizard[i][j] == 7){
          fill("#afdfe4")
        }else if(wizard[i][j] == 8){
          fill("#65bbe9")
        }else if(wizard[i][j] == 9){
          fill("#ffff00")
        }
        square(wizardX+j*2.7,wizardY+i*2.7,2.7)
      }
    }
  }
  if(wizardDeath){
    fill("#ff0000")
    quad(wizardX,wizardY+5,wizardX+5,wizardY,wizardX+50,wizardY+45,wizardX+45,wizardY+50)
    quad(wizardX+45,wizardY,wizardX+50,wizardY+5,wizardX+5,wizardY+50,wizardX,wizardY+45)
  }
  
  for(let i=0;i<20;i++){
    for(let j=0;j<15;j++){
      if(enemy01[i][j] != 0){
        if(enemy01[i][j] == 1){
          fill("#000000")
        }else if(enemy01[i][j] == 2){
          fill("#888888")
        }else if(enemy01[i][j] == 3){
          fill("#444444")
        }else if(enemy01[i][j] == 4){
          fill("#ff0000")
        }else if(enemy01[i][j] == 5){
          fill("#7b1818")
        }
        square(enemyX+j*2.5,enemyY+i*2.5,2.5)
      }
    }
  }
  }
  if(braveHp <= 0){
    braveHp = 0
    braveDeath = true
  }
  if(monkHp <= 0){
    monkHp = 0
    monkDeath = true
  }
  if(warriorHp <= 0){
    warriorHp = 0
    warriorDeath = true
  }
  if(wizardHp <= 0){
    wizardHp = 0
    wizardDeath = true
  }
  if(braveDeath && monkDeath && warriorDeath && wizardDeath){
    gameFinish()
  }
}

function move(){
  
  random = Math.floor( Math.random() * 21 )
  
  if(random == 0){
    battle = true
    alert("敵が現れた！")
    braveChoice = true
    monkChoice = false
    warriorChoice = false
    wizardChoice = false
    braveX = 600
  braveY = 50
  monkX = 600
  monkY = 100
  warriorX = 600
  warriorY = 150
  wizardX = 600
  wizardY = 200
  braveStop = false
  monkStop = false
  warriorStop = false
  wizardStop = false
  enemy01Hp = enemy01MaxHp
  attackTime = false
  }
}

function battlePhase(){
  canvasColor = "#cf355d"
  textSize(18)
  fill("#ffffff")
  text("たたかう",10,30)
  text("ぼうぎょ",10,60)
  text("にげる",10,90)
  text(braveHp+"/"+braveMaxHp,660,80)
  text(monkHp+"/"+monkMaxHp,660,130)
  text(warriorHp+"/"+warriorMaxHp,660,180)
  text(wizardHp+"/"+wizardMaxHp,660,230)
  if(attackTime){
    if(braveTime){
      if(braveAttack){
        if(braveCome){
          textSize(15)
          fill("#ffffff")
          text(attackAm,enemyX+25,enemyY+40)
          if(braveX == 600){
            braveTime = false
            monkTime = true
            braveCome = false
            braveAttack = false
          }else{
            braveX += 5
          }
        }else if(braveX==500){
          attackAm = Math.floor( Math.random() * 20 ) + braveAttackAm-10
          braveCome = true
          enemy01Hp -= attackAm
        }else{
          braveX -= 5
        }
      }else if(braveEscape){
        braveX += 3
        if(braveX > 800){
          alert("にげた")
          braveX = 600
          braveX = 350
          braveY = 150
          battleFinish()
        }
      }else{
        braveTime = false
        monkTime =true
      }
    }else if(monkTime){
      if(monkAttack){
        if(monkCome){
          textSize(15)
          fill("#ffffff")
          text(attackAm,enemyX+25,enemyY+40)
          if(monkX == 600){
            monkTime = false
            warriorTime = true
            monkCome = false
            monkAttack = false
          }else{
            monkX += 5
          }
        }else if(monkX==500){
          attackAm = Math.floor( Math.random() * 20 ) + monkAttackAm-10
          monkCome = true
          enemy01Hp -= attackAm
        }else{
          monkX -= 5
        }
      }else if(monkEscape){
        monkX += 3
        if(monkX > 800){
          alert("にげた")
          monkX = 600
          braveX = 350
          braveY = 150
          battleFinish()
        }
      }else{
        monkTime = false
        warriorTime =true
      }
    }else if(warriorTime){
      if(warriorAttack){
        if(warriorCome){
          textSize(15)
          fill("#ffffff")
          text(attackAm,enemyX+25,enemyY+40)
          if(warriorX == 600){
            warriorTime = false
            wizardTime = true
            warriorCome = false
            warriorAttack = false
          }else{
            warriorX += 5
          }
        }else if(warriorX==500){
          attackAm = Math.floor( Math.random() * 20 ) + warriorAttackAm-10
          warriorCome = true
          enemy01Hp -= attackAm
        }else{
          warriorX -= 5
        }
      }else if(warriorEscape){
        warriorX += 3
        if(warriorX > 800){
          alert("にげた")
          braveX = 350
          braveY = 150
          warriorX = 600
          battleFinish()
        }
      }else{
        warriorTime = false
        wizardTime =true
      }
    }else if(wizardTime){
      if(wizardAttack){
        if(wizardCome){
          textSize(15)
          fill("#ffffff")
          text(attackAm,enemyX+25,enemyY+40)
          if(wizardX == 600){
            wizardTime = false
            attackTime = false
            enemyAttackTime = true
            random = Math.floor( Math.random() * 4 )
            wizardCome = false
            wizardAttack = false
          }else{
            wizardX += 5
          }
        }else if(wizardX==500){
          attackAm = Math.floor( Math.random() * 20 ) + wizardAttackAm-10
          wizardCome = true
          enemy01Hp -= attackAm
        }else{
          wizardX -= 5
        }
      }else if(wizardEscape){
        wizardX += 3
        if(wizardX > 800){
          alert("にげた")
          wizardX = 600
          braveX = 350
          braveY = 150
          battleFinish()
        }
      }else{
        wizardTime = false
        attackTime = false
        random = Math.floor( Math.random() * 4 )
        enemyAttackTime = true
      }
    }
  }
  if(enemyAttackTime){
    if(enemyCome){
      if(enemyX == 400){
        enemyCome = false
        enemyAttackTime = false
        braveChoice = true
      }else{
        enemyX -= 5
      }
      fill("#ffffff")
      textSize(20)
      if(random == 0){
        text(attackAm,braveX+25,braveY+40)
      }else if(random == 1){
        text(attackAm,monkX+25,monkY+40)
      }else if(random == 2){
        text(attackAm,warriorX+25,warriorY+40)
      }else{
        text(attackAm,wizardX+25,wizardY+40)
      }
    }else if(enemyX == 500){
      enemyCome = true
      attackAm = Math.floor( Math.random() * 20 ) + enemyAttackAm-10
      textSize(15)
      fill("#ffff00")
      if(random == 0){
        if(braveGuard){
          attackAm -= 5
          if(attackAm<0){
            attackAm = 0
          }
        }
        braveHp -= attackAm
      }else if(random == 1){
         if(monkGuard){
          attackAm -= 5
          if(attackAm<0){
            attackAm = 0
          }
        }
        monkHp -= attackAm
      }else if(random == 2){
         if(warriorGuard){
          attackAm -= 5
          if(attackAm<0){
            attackAm = 0
          }
        }
        warriorHp -= attackAm
      }else{
         if(wizardGuard){
          attackAm -= 5
          if(attackAm<0){
            attackAm = 0
          }
        }
        wizardHp -= attackAm
      }
    }else{
      enemyX += 5
    }
  }
  if(enemy01Hp<=0){
    alert("敵を倒した")
    deathValue += 1
    braveX = 350
    braveY = 150
    battleFinish()
    }
  
  if(braveChoice){
     if(braveCome){
      braveX += 10
      if(braveX == 600){
        braveCome = false
        braveChoice = false
        monkChoice = true
      }
    }else if(braveX==500){
      braveStop = true
    }else{
      braveX -= 10
    }
    if(braveDeath){
      braveChoice = false
      braveCome = false
      monkChoice = true
      braveX = 600
    }
  }
  if(monkChoice){
     if(monkCome){
      monkX += 10
      if(monkX == 600){
        monkCome = false
        monkChoice = false
        warriorChoice = true
      }
    }else if(monkX==500){
      monkStop = true
    }else{
      monkX -= 10
    }
    if(monkDeath){
      monkChoice = false
      monkCome = false
      warriorChoice = true
      monkX = 600
    }
  }
  if(warriorChoice){
     if(warriorCome){
      warriorX += 10
      if(warriorX == 600){
        warriorCome = false
        warriorChoice = false
        wizardChoice = true
      }
    }else if(warriorX==500){
      warriorStop = true
    }else{
      warriorX -= 10
    }
    if(warriorDeath){
      warriorChoice = false
      warriorCome = false
      wizardChoice = true
      warriorX = 600
    }
  }
  if(wizardChoice){
     if(wizardCome){
      wizardX += 10
      if(wizardX == 600){
        wizardCome = false
        wizardChoice = false
        attackTime = true
        braveTime = true
      }
    }else if(wizardX==500){
      wizardStop = true
    }else{
      wizardX -= 10
    }
    if(wizardDeath){
      wizardCome = false
        wizardChoice = false
        attackTime = true
        braveTime = true
        wizardX = 600
    }
  }
}

function mousePressed(){
  if(braveStop){
    if(mouseX>10 && mouseX<72){
      if(mouseY>10 && mouseY<30){
        braveAttack = true
        alert("たたかう")
        braveStop = false
        braveCome = true
      }
      if(mouseY>40 && mouseY<60){
        braveGuard = true
        alert("ぼうぎょ")
        braveStop = false
        braveCome = true
      }
      if(mouseY>70 && mouseY<90){
        braveEscape = true
        alert("にげる")
        braveStop = false
        braveCome = true
      }
    }
  }
  if(monkStop){
    if(mouseX>10 && mouseX<72){
      if(mouseY>10 && mouseY<30){
        monkAttack = true
        alert("たたかう")
        monkStop = false
        monkCome = true
      }
      if(mouseY>40 && mouseY<60){
        monkGuard = true
        alert("ぼうぎょ")
        monkStop = false
        monkCome = true
      }
      if(mouseY>70 && mouseY<90){
        monkEscape = true
        alert("にげる")
        monkStop = false
        monkCome = true
      }
    }
  }
  if(warriorStop){
    if(mouseX>10 && mouseX<72){
      if(mouseY>10 && mouseY<30){
        warriorAttack = true
        alert("たたかう")
        warriorStop = false
        warriorCome = true
      }
      if(mouseY>40 && mouseY<60){
        warriorGuard = true
        alert("ぼうぎょ")
        warriorStop = false
        warriorCome = true
      }
      if(mouseY>70 && mouseY<90){
        warriorEscape = true
        alert("にげる")
        warriorStop = false
        warriorCome = true
      }
    }
  }
  if(wizardStop){
    if(mouseX>10 && mouseX<72){
      if(mouseY>10 && mouseY<30){
        wizardAttack = true
        alert("たたかう")
        wizardStop = false
        wizardCome = true
      }
      if(mouseY>40 && mouseY<60){
        wizardGuard = true
        alert("ぼうぎょ")
        wizardStop = false
        wizardCome = true
      }
      if(mouseY>70 && mouseY<90){
        wizardEscape = true
        alert("にげる")
        wizardStop = false
        wizardCome = true
      }
    }
  }
}

function battleFinish(){
     attackTime = false
     braveTime = false
     monkTime = false
     warriorTime = false
     wizardTime = false
     braveAttack = false
     braveGuard = false
     braveEscape = false
     monkAttack = false
     monkGuard = false
     monkEscape = false
     warriorAttack = false
     warriorGuard = false
     warriorEscape = false
     wizardAttack = false
     wizardGuard = false
     wizardEscape = false
     braveCome = false
     monkCome = false
     warriorCome = false
     wizardCome = false
     battle = false 
}

function gameFinish(){
  alert("GAMEOVER" + "\n" + "あなたが倒した敵の数は" + deathValue)
   canvasColor = '#00ff00';
 braveX = 350
 braveY = 150
 brave = [
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,2,3,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,2,3,1,0,1,1,1,1,1,0,0,0,0,0,0],
  [0,1,2,3,1,1,8,8,8,8,8,1,1,1,1,0,0],
  [0,1,2,3,1,8,8,8,8,8,8,8,8,8,1,0,0],
  [0,1,2,3,1,8,8,8,8,1,8,8,9,1,0,0,0],
  [0,1,2,3,1,3,1,8,8,1,8,3,9,9,1,0,0],
  [0,1,2,3,1,9,1,1,9,1,1,9,9,1,0,0,0],
  [0,1,1,1,1,1,1,5,1,1,1,1,1,0,0,0,0],
  [1,4,4,4,1,5,1,5,5,5,1,5,1,0,0,0,0],
  [0,1,1,1,1,1,5,5,5,5,5,1,1,1,1,1,1],
  [0,1,5,5,1,6,1,1,1,1,1,1,7,7,7,7,1],
  [0,1,5,5,1,6,6,6,6,6,6,1,7,4,4,7,1],
  [0,0,1,1,1,9,9,9,9,9,9,1,7,4,4,7,1],
  [0,0,0,0,1,6,6,6,6,6,6,6,1,7,7,1,0],
  [0,0,0,0,0,1,8,8,1,8,8,1,0,1,1,0,0],
  [0,0,0,0,0,1,9,9,1,9,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,9,1,1,1,1,0,0,0,0,0]
]
 monkX = 50
 monkY = 0
 monk = [
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,1,5,5,6,5,5,1,0,0,0],
  [0,0,0,0,0,1,5,6,6,6,5,1,0,0,0],
  [0,1,1,1,1,1,5,5,6,5,5,1,0,0,0],
  [1,2,2,2,2,1,6,6,6,6,6,1,1,0,0],
  [1,2,1,1,3,1,1,1,1,1,1,8,8,1,0],
  [1,2,1,3,3,1,8,8,8,8,8,8,7,1,0],
  [0,1,2,1,1,7,7,8,8,8,7,7,9,1,0],
  [0,1,2,3,1,9,9,1,9,1,9,9,9,1,0],
  [0,1,2,3,1,1,1,4,4,4,1,1,1,0,0],
  [0,1,2,3,1,4,1,4,4,4,1,4,1,0,0],
  [0,1,1,1,1,1,4,4,4,4,4,1,1,0,0],
  [0,1,4,4,1,6,1,1,1,1,1,6,6,1,0],
  [0,1,4,4,1,6,5,5,6,5,5,6,1,6,1],
  [0,0,1,1,1,6,5,6,6,6,5,6,1,5,1],
  [0,0,0,0,1,6,5,5,6,5,5,6,1,4,1],
  [0,0,0,0,1,6,5,5,6,5,5,6,1,1,0],
  [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,3,1,1,1,0,0,0,0],
]
 warriorX = 100
 warriorY = 0
 warrior = [
  [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,6,1,1,1,1,0,1,1,1,1,1,0,1,1,1],
  [1,6,7,8,8,1,1,5,5,2,5,5,1,1,2,1],
  [1,6,7,8,8,1,5,4,5,2,5,5,5,5,1,0],
  [1,6,7,8,8,1,5,5,5,2,5,5,5,5,1,0],
  [1,6,1,1,1,1,5,5,5,2,5,5,5,2,1,0],
  [0,1,0,1,9,1,2,2,2,2,2,2,2,2,1,0],
  [0,0,0,1,9,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,9,1,3,1,3,3,3,1,3,1,0,0],
  [0,0,0,1,1,1,1,3,3,3,3,3,1,1,1,0],
  [0,0,1,3,3,1,4,1,1,1,1,1,5,1,5,1],
  [0,0,1,3,3,1,4,4,4,5,5,5,5,1,1,1],
  [0,0,0,1,1,1,4,4,4,5,5,5,5,1,8,1],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,3,1],
  [0,0,0,0,0,0,1,8,8,1,8,8,1,0,1,0],
  [0,0,0,0,0,0,1,5,5,1,5,1,0,0,0,0],
  [0,0,0,0,0,0,0,1,5,1,1,1,1,0,0,0]
]
 wizardX = 150
 wizardY = 0
 wizard = [
  [0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,4,4,4,1,0,0,0],
  [0,1,1,1,1,0,1,4,4,4,4,1,0,0,0,0],
  [1,2,2,2,2,1,4,4,4,4,4,1,0,0,0,0],
  [1,2,1,1,3,1,4,4,4,4,4,4,1,0,0,0],
  [1,2,1,3,3,1,4,4,4,4,4,9,1,1,0,0],
  [0,1,2,1,1,4,9,9,9,9,9,4,4,4,1,1],
  [0,1,2,3,1,4,4,4,4,4,4,4,1,1,0,0],
  [0,1,2,3,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,2,3,1,6,1,6,6,6,1,6,1,9,1,0],
  [0,1,1,1,1,1,6,6,6,6,6,1,1,1,1,0],
  [0,1,6,6,1,4,1,1,1,1,1,1,8,7,1,0],
  [0,1,6,6,1,5,4,4,4,4,1,8,7,8,7,1],
  [0,0,1,1,4,4,4,4,4,4,1,8,8,8,7,1],
  [0,0,1,4,4,4,5,4,4,4,5,1,7,7,1,0],
  [0,0,1,4,4,5,4,4,4,4,4,5,1,1,1,0],
  [0,0,0,1,1,5,4,4,4,4,4,5,1,1,0,0],
  [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0]
]
 enemyX = 400
 enemyY = 100
 enemy01 = [
  [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,1,4,4,4,1,1,0,0,0],
  [0,0,1,1,0,0,1,5,4,5,1,0,0,0,0],
  [0,1,2,3,1,0,0,1,5,1,0,0,0,0,0],
  [0,1,2,3,1,0,1,1,1,1,1,0,0,0,0],
  [0,1,2,3,1,1,2,3,2,3,3,1,0,0,0],
  [0,1,2,3,1,2,2,3,2,3,3,3,1,0,0],
  [0,1,2,3,1,2,2,3,2,3,3,3,1,0,0],
  [0,1,2,3,1,2,1,1,1,1,1,3,1,0,0],
  [0,1,2,3,1,2,1,1,1,1,1,3,1,0,0],
  [0,1,1,1,1,2,2,3,1,3,3,3,1,0,0],
  [1,2,3,3,1,2,2,3,1,3,3,3,1,0,0],
  [0,1,1,1,1,1,2,3,1,3,3,1,1,1,0],
  [0,1,2,2,1,2,1,1,1,1,1,3,1,3,1],
  [0,1,2,3,1,2,2,3,2,3,3,3,1,1,1],
  [0,0,1,1,1,2,2,3,2,3,3,3,1,3,1],
  [0,0,0,0,0,1,1,1,1,1,1,1,1,3,1],
  [0,0,0,0,0,1,2,2,1,2,2,1,0,1,0],
  [0,0,0,0,0,1,3,3,1,3,1,0,0,0,0],
  [0,0,0,0,0,0,1,3,1,1,1,1,0,0,0]
]
 treasure = [
  
]
 start = false
 battle = false
 random = 10
 braveChoice = false
 monkChoice = false
 warriorChoice = false
 wizardChoice = false
 braveAttack = false
 braveGuard = false
 braveItem = false
 braveEscape = false
 monkAttack = false
 monkGuard = false
 monkItem = false
 monkEscape = false
 warriorAttack = false
 warriorGuard = false
 warriorItem = false
 warriorEscape = false
 wizardAttack = false
 wizardGuard = false
 wizardItem = false
 wizardEscape = false
 braveCome = false
 monkCome = false
 warriorCome = false
 wizardCome = false
 attackTime = false
 braveMaxHp = 50
 braveHp = 50
 monkMaxHp = 50
 monkHp = 50
 warriorMaxHp = 50
 warriorHp = 50
 wizardMaxHp = 50
 wizardHp = 50
 enemy01MaxHp = 100
 enemy01Hp = 100
 braveAttackAm = 15
 monkAttackAm = 15
 warriorAttackAm = 15
 wizardAttackAm = 15
 attackAm = 0
 enemyAttackTime = false
 enemyCome = false
 enemyAttackAm = 10
 braveDeath = false
 monkDeath = false
 warriorDeath = false
 wizardDeath = false
 deathValue = 0
}

