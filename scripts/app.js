angular.module('tictactoeApp', [])

.controller('mainCtrl', function($scope){
	$scope.currentPlayer = "X";

	$scope.reset = function() {
		console.log("reset function ran");
	}

	$scope.spaces = [
	{"position": "1a", "text": " ", "value": 0},
	{"position": "1b", "text": " ", "value": 0},
	{"position": "1c", "text": " ", "value": 0},
	{"position": "2a", "text": " ", "value": 0},
	{"position": "2b", "text": " ", "value": 0},
	{"position": "2c", "text": " ", "value": 0},
	{"position": "3a", "text": " ", "value": 0},
	{"position": "3b", "text": " ", "value": 0},
	{"position": "3c", "text": " ", "value": 0},
	]

	$scope.changePlayer = function(space) {
		if ($scope.currentPlayer === "X" && space.value === 0){
			$scope.currentPlayer = "O";
		} else if (!space.value) {
			$scope.currentPlayer = "X";
		}
	}

	$scope.makeMove = function(space) {
		if(!space.value){
			console.log("running:", $scope.currentPlayer);
			space.text = $scope.currentPlayer;
		}
	}

	$scope.setPlayerValue = function(space) {
		if(space.text === "X"){
			space.value = 1;
			console.log("space.value = ", space.value);
		}
		else if(space.text === "O"){
			space.value = 2;
			console.log("space value is now = ", space.value);
		}
	}


})
  