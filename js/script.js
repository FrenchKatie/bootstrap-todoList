(function() {
    // var body = document.querySelector("body");
    // var inputWrapper = document.getElementById("inputWrapper");
    // var submitButton = document.getElementById("inputSubmit");
    // // var getUserInput = document.getElementById("userInput");
    // // console.log(getUserInput);
    //
    // function addListItem() {
    //     console.log(getUserInput);
    // }
    // submitButton.addEventListener('click', addListItem , false);

    		//Access input element in DOM/HTML
    		var input = document.getElementById('numbers');

    		// Basic jQuery click event for testing
    		$('button').click(function(){
    			console.dir(input.value);

    			// Function calls
    			// testFalsy(input.value);
    			// turnStringToNumber(input.value);
    			// guess(input.value);
    		});

    		// function testFalsy (val) {
    		// 	console.log(val);
    		// 	val = val.toString();
    		// 	if (val === "22") {
    		// 		console.log('works');
    		// 	}
    		// }
        //
    		// function turnStringToNumber (val) {
    		// 	if (val !== "22") {
    		// 		console.log('yes!');
    		// 	} else {
    		// 		console.log('no!');
    		// 	}
    		// }
        //
    		// function guess (val) {
    		// 			if (val < "22") {
    		// 					console.log('guess higher!');
    		// 			}else if(val === "22"){
    		// 					console.log("you guessed the right number!");
    		// 			}else {
    		// 					console.log('guess lower!');
    		// 			}
    		// }



}());
