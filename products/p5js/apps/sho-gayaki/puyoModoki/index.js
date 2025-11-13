
const canvasX = 260;
const canvasY = 480;

const canvasColor = '#000000';

let puyocolor = ["#ff0000","#0000ff","#ffff00","#00ff00"]
let puyo1X = 115
let puyo1Y = 25
let puyo1color = Math.floor( Math.random() * 4)
let puyo2X = 115
let puyo2Y = 55
let puyo2color = Math.floor( Math.random() * 4)
let puyoroll = 0
let puyo1Xblock = 0
let puyo1Yblock = 0
let puyo2Xblock = 0
let puyo2Yblock = 0
let block = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
]
let puyofall = 0
let speed = 30
let puyosuu = 1


function setup() {
  
  createCanvas(canvasX, canvasY);
  
  background(canvasColor);
}


function draw() {
  background(canvasColor);
  noStroke();
  fill("#777777")
  quad(38,100,222,100,222,462,38,462)
  fill(canvasColor)
  quad(40,100,220,100,220,460,40,460)
  fill(puyocolor[puyo1color])
  circle(puyo1X,puyo1Y,30)
  fill(puyocolor[puyo2color])
  circle(puyo2X,puyo2Y,30)
  puyofall += 1
  if(puyofall == 30){
    puyofall = 0
    puyo1Y += speed
    puyo2Y += speed
  }
  if(puyo1Y == 445 || puyo2Y == 445){
    speed = 0
    puyo1Xblock = (puyo1X-55)/30
    puyo1Yblock = (puyo1Y-115)/30
    block[puyo1Yblock][puyo1Xblock] = puyo1color+1
    puyo2Xblock = (puyo2X-55)/30
    puyo2Yblock = (puyo2Y-115)/30
    block[puyo2Yblock][puyo2Xblock] = puyo2color+1
    puyo1X = 115
    puyo1Y = 25
    puyo1color = Math.floor( Math.random() * 4)
    puyo2X = 115
    puyo2Y = 55
    puyo2color = Math.floor( Math.random() * 4)
    puyoroll = 0 
    speed = 30
  }
  puyo1Xblock = (puyo1X-55)/30
  puyo1Yblock = (puyo1Y-115)/30+1
  puyo2Xblock = (puyo2X-55)/30
  puyo2Yblock = (puyo2Y-115)/30+1
  if(puyo1Yblock>=0 && puyo2Yblock>=0){
  if(block[puyo1Yblock][puyo1Xblock]>0){
    if(puyoroll == 1 || puyoroll == 3){
      for(let a=0;a<12;a++){
        if(block[a][puyo2Xblock]>0){
          puyo2Y = (a-1)*30+115
          a = 12
        }else if(a==11){
          puyo2Y = 445
        }
      }
    }
    speed = 0
    puyo1Xblock = (puyo1X-55)/30
    puyo1Yblock = (puyo1Y-115)/30
    block[puyo1Yblock][puyo1Xblock] = puyo1color+1
    puyo2Xblock = (puyo2X-55)/30
    puyo2Yblock = (puyo2Y-115)/30
    block[puyo2Yblock][puyo2Xblock] = puyo2color+1
    puyo1X = 115
    puyo1Y = 25
    puyo1color = Math.floor( Math.random() * 4)
    puyo2X = 115
    puyo2Y = 55
    puyo2color = Math.floor( Math.random() * 4)
    puyoroll = 0 
    speed = 30
  }else if(block[puyo2Yblock][puyo2Xblock]>0){
    if(puyoroll == 1 || puyoroll == 3){
      for(let u=0;u<12;u++){
        if(block[u][puyo1Xblock]>0){
          puyo1Y = (u-1)*30+115
          u = 12
        }else if(u==11){
          puyo1Y = 445
        }
      }
    }
    speed = 0
    puyo1Xblock = (puyo1X-55)/30
    puyo1Yblock = (puyo1Y-115)/30
    block[puyo1Yblock][puyo1Xblock] = puyo1color+1
    puyo2Xblock = (puyo2X-55)/30
    puyo2Yblock = (puyo2Y-115)/30
    block[puyo2Yblock][puyo2Xblock] = puyo2color+1
    puyo1X = 115
    puyo1Y = 25
    puyo1color = Math.floor( Math.random() * 4)
    puyo2X = 115
    puyo2Y = 55
    puyo2color = Math.floor( Math.random() * 4)
    puyoroll = 0 
    speed = 30
  }
  }
    for(let i=0;i<12;i++){
      for(let e=0;e<6;e++){
        if(block[i][e]>0){
          color = block[i][e]
          if(e<5){
          if(block[i][e+1]==color){
            for(let a=i;a>0;a-=1){
              block[a][e] = block[a-1][e]
              block[a][e+1] = block[a-1][e+1]
            }
          }
          }
          if(i>0){
          if(block[i-1][e]==color){
            for(let a=i;a>1;a-=1){
              block[a][e] = block[a-2][e]
            }
          }
          }
        }
      }
    }
  for(let i=0;i<12;i++){
    for(let e=0;e<6;e++){
      if(block[i][e]==1){
        fill("#ff0000")
        circle(e*30+55,i*30+115,30)
      }else if(block[i][e]==2){
        fill("#0000ff")
        circle(e*30+55,i*30+115,30)
      }else if(block[i][e]==3){
        fill("#ffff00")
        circle(e*30+55,i*30+115,30)
      }else if(block[i][e]==4){
        fill("#00ff00")
        circle(e*30+55,i*30+115,30)
      }
    }
  }
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW && puyo1X<205 && puyo2X<205){
    puyo1X += 30
    puyo2X += 30
  }
  if(keyCode === LEFT_ARROW && puyo1X>55 && puyo2X>55){
    puyo1X -= 30
    puyo2X -= 30
  }
  if(keyCode === UP_ARROW){
    if(puyoroll == 0 && puyo2X>55){
      puyo2X -= 30
      puyo2Y -= 30
      puyoroll += 1
    }else if(puyoroll == 1){
      puyo2X += 30
      puyo2Y -= 30
      puyoroll += 1
    }else if(puyoroll == 2 && puyo2X<205){
      puyo2X += 30
      puyo2Y += 30
      puyoroll += 1
    }else if(puyoroll == 3){
      puyo2X -= 30
      puyo2Y += 30
      puyoroll = 0
    }
  }
}