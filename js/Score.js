'use strict'

class Score {
	constructor(){
		this._player = "";
		this._points = 0;
		this._maxPoints = 0;
		this._topListPlayers;

		this.buttonSubmit = document.getElementById("buttonSubmit");
		this.buttonSubmit.addEventListener('click', this.playerJoined.bind(this));
	}
	
	setPoints = function(value){
			return this._points = value;
	}
	
	getPoints = function(){
			return this._points;
	}
	
	setMaxPoints = function(value){
			return this._maxPoints = value;
	}
	
	getMaxPoints = function(){
			return this._maxPoints;
	}
	
	setPlayer = function(value){
			return this._player = value;
	}
	
	getPlayer = function(){
			return this._player;
	}
	
	
	playerJoined = function(){
		const txtNickname = document.getElementById("txtNickname");
		const guestPanel = document.getElementById("guestPanel");
		const playerPanel = document.getElementById("playerPanel");
		

		if(txtNickname.value !== "")
		{
			this.setPlayer(txtNickname.value);
			guestPanel.style.display = "none";
			playerPanel.style.display = "block";
			txtNickname.value = "";
		} else {
			console.log("Nickname cannot be empty");
		}
		
		game.renderScore();
	}
	
	addTopList(){
		
	}
	
}