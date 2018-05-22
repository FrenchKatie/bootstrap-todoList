(function() {

    		var input = document.getElementById('userInput');
        // var userInputText = input.value;

    		$('button').click(function(){
              makeNewElement(input.value);
    			    console.dir(input.value); //why does this not work when i use the variable "userInputText"
    		});

        function makeNewElement(elementText) {
              var counter = 0;
              window.uniqueId = function(){
                  return 'customControlValidation' + counter++
              }
              var newItem = "     <input type='checkbox' class='custom-control-input' id='";
          				newItem +=  		uniqueId;
          				newItem += "'   required><label class='custom-control-label' for='";
          				newItem +=      uniqueId;
          				newItem += "'   >";
          				newItem += 			elementText;
          				newItem += "    </label><br>";
              // customControlValidation1.insertAdjacentHTML("afterend", "<label class='custom-control-label' for='customControlValidation1'>" + elementText + "</label><br>");
              // listItemWrapper.insertAdjacentHTML("afterend", "<input type='checkbox' class='custom-control-input' id='" + elementText + "' required><label class='custom-control-label' for='" + elementText + "'>" + elementText + "</label><br>");
              listItemWrapper.insertAdjacentHTML("afterend", newItem);


        }  // ** makeNewElement function ENDS **


        // *** Will need to change the jquery click event to vanilla JS when I get it working *** //
        // function makeNewElement() {
        //     console.log(getUserInput);
        // }
        // submitButton.addEventListener('click', makeNewElement , false);



}());  // ** iife ENDS
