angular.module('tictactoeApp', [])

.controller('mainCtrl', function($scope){
	$scope.currentPlayer = "X";

	$scope.reset = function() {
		console.log("reset function ran");
	}

	$scope.spaces = [
	{"position": "1a"},
	{"position": "1b"},
	{"position": "1c"},
	{"position": "2a"},
	{"position": "2b"},
	{"position": "2c"},
	{"position": "3a"},
	{"position": "3b"},
	{"position": "3c"},
	]

	$scope.changePlayer = function() {
		if ($scope.currentPlayer === "X"){
			$scope.currentPlayer = "O";
		} else {
			$scope.currentPlayer = "X";
		}
	}

})
  