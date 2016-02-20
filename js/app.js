$(document).ready(function() {
var userInput = prompt("Please enter a number");
	userInput = parseInt(userInput);
	userInput = +userInput;
	Math.floor(userInput) == userInput;

for (var i = 1; i <=userInput; i++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		$("#Integer-list").append("<div>FizzBuzz</div>");
	}

	else if (i % 3 === 0) {
		$("#Integer-list").append("<div>Fizz</div>");
	}

	else if (i % 5 === 0) {
		$("#Integer-list").append("<div>Buzz</div>");
	}

	else {
		$("#Integer-list").append("<div>" + i + "</div>");
	}

}

})

