angular.module('tictactoeApp', [])

.controller('mainCtrl', function($scope){
	$scope.currentPlayer = "X";

	$scope.spaces = [
	{"position": "1", "value": " "},
	{"position": "2", "value": " "},
	{"position": "3", "value": " "},
	{"position": "4", "value": " "},
	{"position": "5", "value": " "},
	{"position": "6", "value": " "},
	{"position": "7", "value": " "},
	{"position": "8", "value": " "},
	{"position": "9", "value": " "},
	]

	$scope.changePlayer = function(space) {
		if ($scope.currentPlayer === "X" && space.value === "X"){
			$scope.currentPlayer = "O";
		} else if (space.value === "O" && space.value === "O") {
			$scope.currentPlayer = "X";
		}
	}

	$scope.makeMove = function(space) {
		if(space.value === " "){
			console.log("running:", $scope.currentPlayer);
			space.value = $scope.currentPlayer;
		}
	}

	$scope.reset = function() {
		console.log($scope.spaces.value);
		$scope.spaces.value = " ";
		console.log($scope.spaces.value);
	}

})
  