angular.module('tictactoeApp', [])

.controller('mainCtrl', function($scope){
	$scope.currentPlayer = "X";
	$scope.turn = 0;
	$scope.winner = false;

	$scope.spaces = [
	//row 1
	{"player": " ", "value": 10}, //$scope.spaces[0].player
	{"player": " ", "value": 11}, //$scope.spaces[1].player
	{"player": " ", "value": 12}, //$scope.spaces[2].player
	//row 2
	{"player": " ", "value": 13}, //3
	{"player": " ", "value": 14},//4
	{"player": " ", "value": 15}, //5
	//row 3
	{"player": " ", "value": 16}, //6
	{"player": " ", "value": 17}, //7
	{"player": " ", "value": 18}, //8
	]

	$scope.checkWin = function() {
		if($scope.turn > 4) {
		if($scope.spaces[0].value == $scope.spaces[1].value && $scope.spaces[1].value == $scope.spaces[2].value) {
			$scope.gameOver();
			return $scope.spaces[0].player;
		}
		else if($scope.spaces[3].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[5].value) {
			$scope.gameOver();
			return $scope.spaces[3].player;
		}
		else if($scope.spaces[6].value == $scope.spaces[7].value && $scope.spaces[7].value == $scope.spaces[8].value) {
			$scope.gameOver();
			return $scope.spaces[6].player;
		}
		else if($scope.spaces[0].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[8].value) {
			$scope.gameOver();
			return $scope.spaces[0].player;
		}
		else if($scope.spaces[2].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[6].value) {
			$scope.gameOver();
			return $scope.spaces[2].player;
		}
		else if($scope.spaces[0].value == $scope.spaces[3].value && $scope.spaces[3].value == $scope.spaces[6].value) {
			$scope.gameOver();
			return $scope.spaces[0].player;
		}
		else if($scope.spaces[1].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[7].value) {
			$scope.gameOver();
			return $scope.spaces[0].player;
		}
		else if($scope.spaces[2].value == $scope.spaces[5].value && $scope.spaces[5].value == $scope.spaces[8].value) {
			$scope.gameOver();
			return $scope.spaces[0].player;
		}
		else if ($scope.turn === 9) {
		$scope.gameOver();
		return "It's a tie!";
	}
	}
}

	$scope.changePlayer = function(space) {
		if ($scope.currentPlayer === "X" && space.player === "X"){
			$scope.currentPlayer = "O";
		} else if (space.player === "O" && space.player === "O") {
			$scope.currentPlayer = "X";
		}
	}

	$scope.setPlayer = function(space){
		if(space.player === "X"){
			space.value = 1;
		}
		else if(space.player === "O"){
			space.value = 2;
		}
		console.log("player value: ", space.value);
	}

	$scope.makeMove = function(space) {
		if(space.player === " "){
			console.log("player: ", $scope.currentPlayer);
			space.player = $scope.currentPlayer;
			$scope.turn += 1;
			console.log ("turn number: ", $scope.turn);
		}
	}

	$scope.reset = function() {
		console.log("reset func running");
		$scope.winner = false;
		console.log('scope.winner', $scope.winner);
		for(var i = 0; i < $scope.spaces.length; i++){
			$scope.spaces[i].player = " ";
			$scope.spaces[i].value = 0;
			$scope.turn = 0;
			$scope.currentPlayer = "X";
		}
	}

	$scope.gameOver = function() {
		$scope.winner = true;
	}

})
  