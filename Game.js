class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
	  player.getCount();
     
      form = new Form()
      form.display();
    }
	player1 = createSprite(10,displayHeight - 150,20,20)
	player2 = createSprite(10,displayHeight - 100,20,20);
	players = [player1,player2];
  }

  play(){
    form.hide();
  
  
    
    
	Player.getPlayerInfo();
	
    if(allPlayers !== undefined){
		background("white");
		var x;
        var y = displayHeight - 200;
		var index = 0;
		
		for(var plr in allPlayers){
			
			index += 1;
			
			x = allPlayers[plr].distance 
			y += 50
			
			players[index-1].x = x;
			players[index-1].y = y;
			
			if(index === player.index){
			   players[index-1].shapeColor = "red"
			   
			   camera.position.x = players[index-1].x
			   camera.position.y = displayHeight - 100
			   
			   console.log(camera.position.x)
			}
			
			
		}
		if(keyIsDown(RIGHT_ARROW) && player.index !== null){
			player.distance +=10
			player.updateName();
		}
		drawSprites();
		
	}
    
    
  }

  end(){
    
  }
}
