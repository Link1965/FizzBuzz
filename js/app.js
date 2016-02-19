$(document).ready(function() {
for (var i = 1; i < 101; i++) {
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

