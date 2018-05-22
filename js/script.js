(function() {

    		var input = document.getElementById('userInput');
        // var userInputText = input.value;

    		$('button').click(function(){
              makeNewElement(input.value);
    			    console.dir(input.value); //why does this not work when i use the variable "userInputText"
    		});

        function makeNewElement(elementText) {
              customControlValidation1.insertAdjacentHTML("afterend", "<label class='custom-control-label' for='customControlValidation1'>" + elementText + "</label><br>");
        }


// *** Will need to change the jquery click event to vanilla JS when I get it working *** //
        // function addListItem() {
        //     console.log(getUserInput);
        // }
        // submitButton.addEventListener('click', addListItem , false);



}());
