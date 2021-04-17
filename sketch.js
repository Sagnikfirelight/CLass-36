var gameState=0;
var playerCount;
var database;
var game,player,form;



function setup(){
   createCanvas(400,400);
  database = firebase.database();
  game=new Game();
  game.getState()
  game.start()
  
}

function draw(){
  background("white");
  
    
  
}


