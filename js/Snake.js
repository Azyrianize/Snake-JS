'use strict'

class Snake {
	constructor(){
		this._snakeDirection = this.setSnakeDirection();
		let _snakeElements = this.initSnake();
		this._food = "0";

		//this.getSnakeDirection = function(){
		//	return _snakeDirection;
		//}
		
		this.getFood = function(){
			return this._food;
		}
	}

	getSnakeDirection = function(){
			return this._snakeDirection;
	}
		
	getRandomInt(min, max){
		return Math.floor(Math.random()*(max-min)) + min;
	}
	
	translateNumberToDirection(value){
		if(value === 0) return "up";
		if(value === 1) return "right";
		if(value === 2) return "down";
		if(value === 3) return "left";
	}

	setSnakeDirection(){	
		let direction = this.translateNumberToDirection(this.getRandomInt(0,3));
		
		console.log(direction);
		return direction
	}

	initSnake()
	{
		let xPosition = this.getRandomInt(5, 15);
		let yPosition = this.getRandomInt(5, 15);
		let snakeElements = [];
		let direction = this.getSnakeDirection();             
	
		for(let i = 0; i < 3; i++){
			if(direction === 'up') yPosition--;
			if(direction === 'down') yPosition++;
			if(direction === 'left') xPosition--;
			if(direction === 'right') xPosition++;
					
			const snakeElement = document.querySelector(`[data-y="${yPosition}"][data-x="${xPosition}"]`);
			
			snakeElement.classList.add("snake");
			snakeElements.unshift(snakeElement);
		}
			
		return snakeElements;
	}

}


