(function() {

    		var input = document.getElementById('userInput');
        var counter = 0;

    		$('#addItemButton').click(function(){
              addListItem(input.value);
    		});

        function addListItem(elementText) {

              var uniqueId = 'customControlValidation' + counter++;

              var newItem = "     <div class='custom-control custom-checkbox mb-3'><input type='checkbox' class='custom-control-input' id='";
          				newItem +=  		uniqueId;
          				newItem += "'   required><label class='custom-control-label' for='";
          				newItem +=      uniqueId;
          				newItem += "'   >";
          				newItem += 			elementText;
          				newItem += "    </label></div>";

              listItemWrapper.insertAdjacentHTML("afterend", newItem);

        }  // ** makeNewElement function ENDS **

        $('#removeButton').click(function(){
          var getItem = document.getElementById('itemWrapper');
          getItem.parentNode.removeChild(getItem);
          return false;
    		});


}());  // ** iife ENDS
