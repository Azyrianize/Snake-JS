'use strict'

class Snake {
	constructor(){
		this._snakeDirection;
		this._snakeElements = this.initSnake();
		this._foodElement = 0;
		this._gameIntervalID = 0;	
	}

	getSnakeDirection = function(){
			return this._snakeDirection;
	}
	
	getSnakeElements = function(){
		console.log(this._snakeElements);
		return this._snakeElements;
	}
	
	setFood = function(value){
		return this._foodElement = value;
	}
	
	getFood = function(){
		return this._foodElement;
	}
	
	getGameIntervalID = function(){
		return this._gameIntervalID;
	}
	
	setGameIntervalID = function(value){
		this._gameIntervalID = value;
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

	initSnakeDirection(){	
		let direction = this.translateNumberToDirection(this.getRandomInt(0,4));
		return this._snakeDirection = direction;
	}
	
	setSnakeDirection(value){	
		return this._snakeDirection = value;
	}

	initSnake()
	{
		let xPosition = this.getRandomInt(5, 15);
		let yPosition = this.getRandomInt(5, 15);
		let snakeElements = [];
		this.initSnakeDirection();
		let direction = this.getSnakeDirection();   
	
		for(let i = 0; i < 3; i++){
			if(direction === 'up') yPosition--;
			if(direction === 'down') yPosition++;
			if(direction === 'left') xPosition--;
			if(direction === 'right') xPosition++;
					
			const snakeElement = document.querySelector(`[data-x="${xPosition}"][data-y="${yPosition}"]`);
			
			snakeElement.classList.add("snake");
			snakeElements.unshift(snakeElement);
		}
			
		this.controlSnake();	
			
		return snakeElements;
	}
	
	isGameOver(x, y)
	{
		let snakeElements = this.getSnakeElements(); 
		if(x < 0 || x>19 || y<0 || y>19 || 
			snakeElements.some(({dataset}) => dataset.x == x && dataset.y == y)){
			console.log("Game Over");
			return true;
		} else {
			return false;
		}
	}
	
	
	moveSnake()
	{
		let snakeElements = this.getSnakeElements();
		let snakeStart = true;
		let that = this;
			
		let gameInterval = setInterval(function(){
				if(snakeStart){
					snakeStart = false;
					that.setGameIntervalID(gameInterval);
				}
			
				let nextY = snakeElements[0]["dataset"]["y"];
				let nextX = snakeElements[0]["dataset"]["x"];
				if(that.getSnakeDirection() === "up") nextY--;
				if(that.getSnakeDirection() === "down") nextY++;					
				if(that.getSnakeDirection() === "left") nextX--;
				if(that.getSnakeDirection() === "right") nextX++;
				
				if(that.isGameOver(nextX, nextY))
				{
					console.log(nextX, nextY);
					that.stopMoveSnake();
				}
				else {
					const nextSnakeElement = document.querySelector(`[data-x="${nextX}"][data-y="${nextY}"]`);	
					nextSnakeElement.classList.add("snake");
					snakeElements.unshift(nextSnakeElement);
					
					if(nextSnakeElement !== that.getFood())
					{
						snakeElements.pop().classList.remove("snake");	
					} else {
						that.getFood().classList.remove("food");
						game.createFood();
					}
				}
		}, 200);	
		
	}
	
	stopMoveSnake()
	{
		let gameIntervalID = this.getGameIntervalID();
		//console.log(gameIntervalID);
		clearInterval(gameIntervalID);	
		
	}
	
	controlSnake()
	{
		let that = this;
		window.addEventListener("keydown", function(e){
			if(e.keyCode === 37){
				if(that.getSnakeDirection() !== "right") that.setSnakeDirection("left");
			}
			
			if(e.keyCode === 38){
				if(that.getSnakeDirection() !== "down") that.setSnakeDirection("up");
			}
			
			if(e.keyCode === 39){
				if(that.getSnakeDirection() !== "left") that.setSnakeDirection("right");
			}
			
			if(e.keyCode === 40){
				if(that.getSnakeDirection() !== "up") that.setSnakeDirection("down");
			}
			
		});
		
	}

}


