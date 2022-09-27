'use strict'

class Game {
	constructor(){
		this.startButton = document.getElementById('start')
		this.endButton = document.getElementById('end')
		this.changePlayerButton = document.getElementById('changePlayer')
		
		this.startButton.addEventListener('click', this.startGame.bind(this));
		this.endButton.addEventListener('click', this.endGame.bind(this));
		this.changePlayerButton.addEventListener('click', this.changePlayer.bind(this));
		
		let _snake;
		let _score;
		
		this.setSnake = function(object){
			return _snake = object;
		}
	
		this.getSnake = function(){
			return _snake;
		};
		
		this.setScore = function(object){
			return _score = object;
		}
	
		this.getScore = function(){
			return _score;
		};
		
		const score = new Score();
		this.setScore(score);
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
	
	renderScore()
	{
		const points = document.getElementById("points");
		const maxPoints = document.getElementById("maxPoints");
		const player = document.getElementById("player");
		
		this.getScore().setPoints("0");
		this.getScore().setMaxPoints("0");
		
		points.innerHTML = this.getScore().getPoints();
		maxPoints.innerHTML = this.getScore().getMaxPoints();
		player.innerHTML = this.getScore().getPlayer();	
	}
	
	saveScore()
	{
		
		let foodPoints = this.getSnake().getFoodPoints();
		let maxScore = this.getScore().getMaxPoints();
		
		if(foodPoints >= maxScore)
		{
			this.getScore().setMaxPoints(foodPoints);
			maxPoints.innerHTML = this.getScore().getMaxPoints();
		}	
	}
	
	showScore()
	{
		points.innerHTML = this.getScore().getPoints();
		maxPoints.innerHTML = this.getScore().getMaxPoints();
		player.innerHTML = this.getScore().getPlayer();	
	}
	
	startGame(){
		logo.style.display = "none";
		gameOver.style.display = "none";
		this.startButton.disabled = true;
		this.endButton.disabled = false;
		this.renderBoard();
		this.showScore();
		const snake = new Snake();
		this.setSnake(snake);
		this.getSnake().moveSnake();
		this.createFood();
	}
	
	endGame(){
		const board = document.getElementById("game");
		const boardElements = document.querySelectorAll(".board_element");
		const logo = document.getElementById("logo");
		const gameOver = document.getElementById("gameOver");
		
		this.startButton.disabled = false;
		this.endButton.disabled = true;
		
		boardElements.forEach(boardElement => {boardElement.remove()});
		board.classList.remove("board");
		
		if(gameOver.style.display !== "block"){
			logo.style.display = "block";
			logo.style.height = "100%";	
		}
		
		this.saveScore();
		this.getSnake().stopMoveSnake();
		this.setSnake(null);
	}
	
	changePlayer(){
		const guestPanel = document.getElementById("guestPanel");
		const playerPanel = document.getElementById("playerPanel");

		this.setSnake(null);
		this.setScore(null);
		guestPanel.style.display = "block";
		playerPanel.style.display = "none";

		
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