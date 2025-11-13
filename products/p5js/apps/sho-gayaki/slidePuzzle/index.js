

const canvasX = 1000;
const canvasY = 500;

const canvasColor = '#000000';

let block3 = [
  [1,2,3],
  [4,5,6],
  [7,8,0]
]
let block4 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,0]
]
let block5 = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,0]
]
let block6 = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18],
  [19,20,21,22,23,24],
  [25,26,27,28,29,30],
  [31,32,33,34,35,0]
]
let block7 = [
  [1,2,3,4,5,6,7],
  [8,9,10,11,12,13,14],
  [15,16,17,18,19,20,21],
  [22,23,24,25,26,27,28],
  [29,30,31,32,33,34,35],
  [36,37,38,39,40,41,42],
  [43,44,45,46,47,48,0]
]
let block8 = [
  [1,2,3,4,5,6,7,8],
  [9,10,11,12,13,14,15,16],
  [17,18,19,20,21,22,23,24],
  [25,26,27,28,29,30,31,32],
  [33,34,35,36,37,38,39,40],
  [41,42,43,44,45,46,47,48],
  [49,50,51,52,53,54,55,56],
  [57,58,59,60,61,62,63,0]
]
let block9 = [
  [1,2,3,4,5,6,7,8,9],
  [10,11,12,13,14,15,16,17,18],
  [19,20,21,22,23,24,25,26,27],
  [28,29,30,31,32,33,34,35,36],
  [37,38,39,40,41,42,43,44,45],
  [46,47,48,49,50,51,52,53,54],
  [55,56,57,58,59,60,61,62,63],
  [64,65,66,67,68,69,70,71,72],
  [73,74,75,76,77,78,79,80,0]
  ]
let block10 = [
  [1,2,3,4,5,6,7,8,9,10],
  [11,12,13,14,15,16,17,18,19,20],
  [21,22,23,24,25,26,27,28,29,30],
  [31,32,33,34,35,36,37,38,39,40],
  [41,42,43,44,45,46,47,48,49,50],
  [51,52,53,54,55,56,57,58,59,60],
  [61,62,63,64,65,66,67,68,69,70],
  [71,72,73,74,75,76,77,78,79,80],
  [81,82,83,84,85,86,87,88,89,90],
  [91,92,93,94,95,96,97,98,99,0]
  ]
let side = 3

function setup() {
  createCanvas(canvasX, canvasY);
  background(canvasColor);
}

function draw() {
  if(side == 3){
    block = block3
  }else if(side == 4){
    block = block4
  }else if(side == 5){
    block = block5
  }else if(side == 6){
    block = block6
  }else if(side == 7){
    block = block7
  }else if(side == 8){
    block = block8
  }else if(side == 9){
    block = block9
  }else{
    block = block10
  }
  background(canvasColor);
  fill("#00ff00")
  square(600,100,50)
  square(650,100,50)
  square(700,100,50)
  square(750,100,50)
  square(800,100,50)
  square(850,100,50)
  square(900,100,50)
  square(950,100,50)
  textSize(40)
  fill("#000000")
  text("3",610,145)
  text("4",660,145)
  text("5",710,145)
  text("6",760,145)
  text("7",810,145)
  text("8",860,145)
  text("9",910,145)
  text("10",950,145)
  fill("#777777")
  square(100,30,400)
  for(let i=0;i<side;i++){
    for(let j=0;j<side;j++){
      if(block[i][j] != 0){
      fill("#ffffff")
      square(j*400/side+100,i*400/side+30,400/side)
      textSize(400/side-20)
      fill("#000000")
      text(block[i][j],j*400/side+100,i*400/side+20+400/side)
      }
    }
  }
}

function keyPressed(){
  if(keyCode == 37){
    for(let i=0;i<side;i++){
    for(let j=0;j<side-1;j++){
      if(block[i][j] == 0){
        block[i][j] = block[i][j+1]
        block[i][j+1] = 0
        i=15
        j=15
      }
    }
  }
  }
  if(keyCode == 39){
    for(let i=0;i<side;i++){
    for(let j=1;j<side;j++){
      if(block[i][j] == 0){
        block[i][j] = block[i][j-1]
        block[i][j-1] = 0
        i=15
        j=15
      }
    }
  }
  }
  if(keyCode == 38){
    for(let i=0;i<side-1;i++){
    for(let j=0;j<side;j++){
      if(block[i][j] == 0){
        block[i][j] = block[i+1][j]
        block[i+1][j] = 0
        i=15
        j=15
      }
    }
  }
  }
  if(keyCode == 40){
    for(let i=1;i<side;i++){
    for(let j=0;j<side;j++){
      if(block[i][j] == 0){
        block[i][j] = block[i-1][j]
        block[i-1][j] = 0
        i=15
        j=15
      }
    }
  }
  }
}

function mousePressed(){
  if(mouseX>600 && mouseX<650 && mouseY>100 && mouseY<150){
    side = 3
  }
  if(mouseX>650 && mouseX<700 && mouseY>100 && mouseY<150){
    side = 4
  }
  if(mouseX>700 && mouseX<750 && mouseY>100 && mouseY<150){
    side = 5
  }
  if(mouseX>750 && mouseX<800 && mouseY>100 && mouseY<150){
    side = 6
  }
  if(mouseX>800 && mouseX<850 && mouseY>100 && mouseY<150){
    side = 7
  }
  if(mouseX>850 && mouseX<900 && mouseY>100 && mouseY<150){
    side = 8
  }
  if(mouseX>900 && mouseX<950 && mouseY>100 && mouseY<150){
    side = 9
  }
  if(mouseX>950 && mouseX<1000 && mouseY>100 && mouseY<150){
    side = 10
  }
}
