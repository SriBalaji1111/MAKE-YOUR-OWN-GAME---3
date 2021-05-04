var player1,player2;

var database;
var player1Img,player2Img;
var allPlayers;
var form;
var game;
var player;
var players = [];

var playerCount = 0;
var gameState = 0;

function preload(){
	
}

function setup(){
	var canvas = createCanvas(displayWidth,displayHeight);

	database = firebase.database();
	
	game = new Game();
	
	game.getState();

	if(gameState === 0){
		game.start()
	}
	

}
function draw(){
	
	if(playerCount === 2){
		game.update(1);			
	}
	
	
	if(gameState === 1){
		
		game.play();
		
	}
	
}