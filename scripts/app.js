angular.module('tictactoeApp', [])

.controller('mainCtrl', function($scope){
	$scope.currentPlayer = "X";
	$scope.turn = 0;
	$scope.winner = false;

	$scope.spaces = [
	//row 1
	{"player": " ", "value": 0}, //$scope.spaces[0].player
	{"player": " ", "value": 0}, //$scope.spaces[1].player
	{"player": " ", "value": 0}, //$scope.spaces[2].player
	//row 2
	{"player": " ", "value": 0}, //$scope.spaces[3].player
	{"player": " ", "value": 0}, //$scope.spaces[4].player
	{"player": " ", "value": 0}, //$scope.spaces[5].player
	//row 3
	{"player": " ", "value": 0}, //$scope.spaces[6].player
	{"player": " ", "value": 0}, //$scope.spaces[7].player
	{"player": " ", "value": 0}, //$scope.spaces[8].player
	]

	$scope.checkWin = function() {
		if($scope.turn > 4) {
		if($scope.spaces[0].value == $scope.spaces[1].value && $scope.spaces[1].value == $scope.spaces[2].value && $scope.spaces[0].value != 0) {
			$scope.gameOver();
			return $scope.spaces[0].player + " WINS!";
		}
		else if($scope.spaces[3].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[5].value && $scope.spaces[3].value != 0) {
			$scope.gameOver();
			return $scope.spaces[3].player + " WINS!";
		}
		else if($scope.spaces[6].value == $scope.spaces[7].value && $scope.spaces[7].value == $scope.spaces[8].value && $scope.spaces[6].value != 0) {
			$scope.gameOver();
			return $scope.spaces[6].player + " WINS!";
		}
		else if($scope.spaces[0].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[8].value && $scope.spaces[0].value != 0) {
			$scope.gameOver();
			return $scope.spaces[0].player + " WINS!";
		}
		else if($scope.spaces[2].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[6].value && $scope.spaces[2].value != 0) {
			$scope.gameOver();
			return $scope.spaces[2].player + " WINS!";
		}
		else if($scope.spaces[0].value == $scope.spaces[3].value && $scope.spaces[3].value == $scope.spaces[6].value && $scope.spaces[0].value != 0) {
			$scope.gameOver();
			return $scope.spaces[0].player + " WINS!";
		}
		else if($scope.spaces[1].value == $scope.spaces[4].value && $scope.spaces[4].value == $scope.spaces[7].value && $scope.spaces[1].value != 0) {
			$scope.gameOver();
			return $scope.spaces[1].player + " WINS!";
		}
		else if($scope.spaces[2].value == $scope.spaces[5].value && $scope.spaces[5].value == $scope.spaces[8].value && $scope.spaces[2].value != 0) {
			$scope.gameOver();
			return $scope.spaces[2].player + " WINS!";
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
	}

	$scope.makeMove = function(space) {
		if(space.player === " "){
			space.player = $scope.currentPlayer;
			$scope.turn += 1;
		}
	}

	$scope.reset = function() {
		$scope.winner = false;
		for(var i = 0; i < $scope.spaces.length; i++){
			$scope.spaces[i].player = " ";
			$scope.spaces[i].value = 0;
		}
			$scope.turn = 0;
			$scope.currentPlayer = "X";
	}

	$scope.gameOver = function() {
		for(var i = 0; i < $scope.spaces.length; i++){
			if($scope.spaces[i].player === " "){
			$scope.spaces[i].player = "-";
		}
		}
		$scope.winner = true;
	}
})
  