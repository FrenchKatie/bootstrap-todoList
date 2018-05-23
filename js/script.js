(function() {

    		var input = document.getElementById('userInput');
        var closeBtns = document.getElementsByClassName('removeButton'); //Listens for the buttons, will create array
        var counter = 0;


    		$('#addItemButton').click(function(){
              addListItem(input.value);
              removeItemListener(); //Refreshes and rechecks for ".removeButton" elements
    		});


        // $('body').on('click', '.removeButton', function() {
        //   console.log('another');
        //   removeListItem();
        // });

        // closeBtns[0].onclick = removeListItem;
        // $(".removeButton").click(function(event) {
        //   console.log('click function');
        //   removeListItem();
        // });
        //


        function addListItem(elementText) {

              var uniqueId = 'customControlValidation' + counter++;

              var newItem = "     <div class='custom-control custom-checkbox mb-3'><input type='checkbox' class='custom-control-input' id='";
          				newItem +=  		uniqueId;
          				newItem += "'   required><label class='custom-control-label' for='";
          				newItem +=      uniqueId;
          				newItem += "'   >";
          				newItem += 			elementText;
          				newItem += "    </label><button type='button' name='button' class='removeButton'>Delete</button></div>";

              listItemWrapper.insertAdjacentHTML("afterend", newItem);

              // $(".removeButton").click(function(event) {
              //   console.log('click function');
              //   removeListItem();
              // });

        }  // ** addListItem function ENDS **



        function removeListItem(event){ //This function gets fired in the removeItemListener function.
              event.target.parentNode.remove();
        } // ** removeListItem function ENDS **



        function removeItemListener() {
              closeBtns[0].onclick = removeListItem; //calls removeListItem function
        }  // ** removeButtonListener function ends **


        function editListItem () {
          // node.nodeValue="new value"; //****google this!!!
        }


}());  // ** iife ENDS
