'use strict'

class Game {
	constructor(){
		this.startButton = document.getElementById('start')
		this.endButton = document.getElementById('end')
		
		this.startButton.addEventListener('click', this.startGame.bind(this));
		this.endButton.addEventListener('click', this.endGame.bind(this));
		
		let _snake;
		
		this.setSnake = function(object){
			return _snake = object;
		}
	
		this.getSnake = function(){
			return _snake;
		};
	}
	
	renderBoard()
	{
		const board = document.getElementById("game");
		const logo = document.getElementById("logo");
		board.className = "board";
		
		for(let i = 0; i < 20; i++){
			for(let j = 0; j < 20; j++){
				const div = document.createElement('div');
				div.className = "board_element";
				div.dataset.x = j;
				div.dataset.y = i;
				
				board.appendChild(div);		
			}
		}	
	}
	
	startGame(){
		logo.style.display = "none";
		this.startButton.disabled = true;
		this.endButton.disabled = false;
		this.renderBoard();
		const snake = new Snake();
		this.setSnake(snake);
		this.getSnake().moveSnake();
		this.createFood();
	}
	
	endGame(){
		const board = document.getElementById("game");
		const boardElements = document.querySelectorAll(".board_element");
		const logo = document.getElementById("logo");
		this.startButton.disabled = false;
		
		boardElements.forEach(boardElement => {boardElement.remove()});
		board.classList.remove("board");
		logo.style.display = "block";
		logo.style.height = "100%";
		
		this.getSnake().stopMoveSnake();
		this.setSnake(null);
	}
	
	createFood(){
		let xPosition;
		let yPosition
		
		do{
			yPosition = this.getSnake().getRandomInt(0, 19);
			xPosition = this.getSnake().getRandomInt(0, 19);
			
		} while(this.getSnake().getSnakeElements().some(({dataset}) => dataset.x == xPosition && dataset.y == yPosition));
		
		let food = document.querySelector(`[data-x="${xPosition}"][data-y="${yPosition}"]`);	
		food.classList.add("food");
		this.getSnake().setFood(food);
	}
	
}

const game = new Game();