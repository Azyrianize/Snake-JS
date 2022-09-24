'use strict'

const snakeElements = [];
let food;
let snakeDirection = translateNumberToDirection(getRandomInt(0,3));

function getRandomInt(min, max){
	return Math.floor(Math.random()*(max-min)) + min;
}