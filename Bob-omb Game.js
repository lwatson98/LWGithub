$(document).ready(function() { 
	var chances = 15;
	var combinationList = [2, 9, 4];
	var correct = [false, false, false];
	
	// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Scramble the combination.
	var scramble = function() {
		for (var i = 0; i < combinationList.length; i++) {
			combinationList[i] = getRandomInt(1,10);
		}
	};

	// we'll compare i to the input located at "#" + i
	//var guess = 

	var restart = function() {
		// write the scrable function here
		chances = 15;
		$("input").val("");
		// var first = $("#0").val();
		// console.log("#0 = " + first);
		correct = [ false, false, false];
		

	};
	var compare = function(i) {
		if (Number( $("#" + i).val() ) === combinationList[i]){
			correct[i] = true;
			$("#right").text(correct.toString());
			if ( correct[0] && correct[1] && correct[2] === true){
				alert("You win press restart to play again");
				restart();
			}
		}
		else {
			chances--;
			$("#chances").text(chances);
			if (chances === 0){
				alert("You lose, press restart to play again");
			}
		}
		

	}
	// Listen to the start button.
	$("#startButton").click(restart);
	// http://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
	// Listen to the first input.
	$("#0").keypress(
		function(e){
			if (e.which === 13){
				compare(0);
			}
		}
	);

	$("#1").keypress(
		function(e){
			if (e.which === 13){
				compare(1);
			}
		}
	);

	$("#2").keypress(
		function(e){
			if (e.which === 13){
				compare(2);
			}
		}
	);

});
