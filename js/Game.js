'use strict'

class Game {
	constructor(){
		document.getElementById('start').addEventListener('click', this.startGame.bind(this));
			
	}
	
	renderBoard()
	{
		const board = document.getElementById("game");
		board.className = "board";
		
		for(let i = 0; i < 20; i++){
			for(let j = 0; j < 20; j++){
				const div = document.createElement('div');
				div.className = "board_element";
				div.dataset.y = i;
				div.dataset.x = j;
			
				board.appendChild(div);		
			}
		}	
	}
	
	startGame(){
		console.log("game is started");
		this.renderBoard();
		const snake = new Snake();
	}
	
}

const game = new Game();