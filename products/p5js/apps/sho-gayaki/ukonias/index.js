

const canvasX = 800;
const canvasY = 400;

const canvasColor = '#cda16f';

let bord = [
  [1,1,1],
  [0,0,0],
  [2,2,2]
]
let bordX = 0
let bordY = 0
let dragX = 70
let dragY = 70
let blackWin = false
let redWin = false
let redTime = true
let drag = false
let befDragX = 0
let befDragY = 0
let move = 0
let befMove = 0

function setup() {
  createCanvas(canvasX, canvasY);
  background(canvasColor);
}

function draw() {
  try{
  background(canvasColor);
  
  textSize(50)
  fill("#000000")
  if(redTime){
    text("赤のターン",300,60)
  }else{
    text("黒のターン",300,60)
  }
  
  fill("#ff00ff")
  rect(560,10,110,60)
  fill("#ffffff")
  text("パス",560,60)
  
  fill("#0000ff")
  rect(300,70,260,60)
  fill("#ffffff")
  text("ルール説明",300,120)
  
  if(drag){
    fill("#0000ff")
  }else{
    fill("#00ff00")
  }
  square(dragX-20,dragY-20,40)
  fill(canvasColor)
  square(dragX-15,dragY-15,30)
  
  for(let i=0;i<3;i++){
    line(i*100+70,70,i*100+70,270)
  }
  for(let i=0;i<3;i++){
    line(70,i*100+70,270,i*100+70)
  }
  
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      bordX = j*100+70
      bordY = i*100+70
      if(bord[i][j] == 0){
        fill("#ffffff")
        circle(bordX,bordY,20)
      }else if(bord[i][j] == 1){
        fill("#ff0000")
        circle(bordX,bordY,20)
      }else if(bord[i][j] == 2){
        fill("#000000")
        circle(bordX,bordY,20)
      }
    }
  }
  
  blackWin = true
  for(let i=0;i<3;i++){
    if(bord[0][i] != 2){
      blackWin = false
    }
  }
  if(blackWin){
    alert("黒の勝ち！")
    resetgame();
  }
  redWin = true
  for(let i=0;i<3;i++){
    if(bord[2][i] != 1){
      redWin = false
    }
  }
  if(redWin){
    alert("赤の勝ち！")
    resetgame();
  }
  }catch(e){
    alert(e)
  }
}

function keyPressed(){
  try{
  
  if(drag == false){
    if(keyCode==37 && dragX>70){
      dragX -= 100
    }
    if(keyCode==38 && dragY>70){
      dragY -= 100
    }
    if(keyCode==39 && dragX<270){
      dragX += 100
    }
    if(keyCode==40 && dragY<270){
      dragY += 100
    }
  }else{
  
    if(keyCode==37 && dragX>70){
      if(move<1 || befMove == 39){
        if(move>=1){
          move = 0
        }else{
          move += 1
        }
        dragX -= 100
        befMove = 37
      }
    }
    if(redTime == false || befMove == 40){
    if(keyCode==38 && dragY>70){
      if(move<1 || befMove == 40){
        if(move>=1){
          move = 0
        }else{
          move += 1
        }
        dragY -= 100
        befMove = 38
      }
    }
    }
    if(keyCode==39 && dragX<270){
      if(move<1 || befMove == 37){
        if(move>=1){
          move = 0
        }else{
          move += 1
        }
        dragX += 100
        befMove = 39
      }
    }
    if(redTime == true || befMove == 38){
    if(keyCode==40 && dragY<270){
      if(move<1 || befMove == 38){
        if(move>=1){
          move = 0
        }else{
          move += 1
        }
        dragY += 100
        befMove = 40
      }
    }
    }
  }
  
  if(drag){
    if(keyCode==13 && bord[(dragY-70)/100][(dragX-70)/100] == 0){
      bord[befDragY][befDragX] = 0
      drag = false
      move = 0
      befMove = 0
      if(redTime){
        bord[(dragY-70)/100][(dragX-70)/100] = 1
        redTime = false
      }else{
        bord[(dragY-70)/100][(dragX-70)/100] = 2
        redTime = true
      }
    }
    if(keyCode==13 && move==0){
      drag = false
      befMove = 0
    }
  }else if(redTime){
    if(keyCode==13 && bord[(dragY-70)/100][(dragX-70)/100] == 1){
      drag = true
      befDragX = (dragX-70)/100
      befDragY = (dragY-70)/100
    }
  }else{
    if(keyCode==13 && bord[(dragY-70)/100][(dragX-70)/100] == 2){
      drag = true
      befDragX = (dragX-70)/100
      befDragY = (dragY-70)/100
    }
  }
  }catch(e){
    alert(e)
  }
}

function mousePressed(){
  if(mouseX>560 && mouseX<670 && mouseY>10 && mouseY<70){
    drag = false
    move = 0
    befMove = 0
    if(redTime){
      redTime = false
    }else{
      redTime = true
    }
  }
  if(mouseX>300 && mouseX<560 && mouseY>70 && mouseY<130){
    alert("ウコ二アシ"+"\n"+"交互に駒を操作する。駒は縦か横にしか動けない。また、バックもできない。先に反対側に三つの駒を置いたら勝ち。エンターキーで動かす駒を選択して、動かす位置でもう一度エンターを押す。")
  }
}

function resetgame(){
  bord = [
  [1,1,1],
  [0,0,0],
  [2,2,2]
]
  bordX = 0
  bordY = 0
  dragX = 70
  dragY = 70
  blackWin = false
  redWin = false
  redTime = true
  drag = false
  befDragX = 0
  befDragY = 0
  move = 0
  befMove = 0
}
