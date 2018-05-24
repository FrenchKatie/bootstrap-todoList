(function() {
        // Global variables
        //----------------------------
    		var input = document.getElementById('userInput');
        var closeBtns = document.getElementsByClassName('removeButton'); //Listens for the buttons, will create array
        var counter = 0;


        // Click function using jquery
        //----------------------------
    		// $('#addItemButton').click(function(){
        //       addListItem(input.value);
        //       removeItemListener(); //Refreshes and rechecks for ".removeButton" elements
    		// });


        // Click function using vanilla JS
        //--------------------------------
        var addListItemButton = document.getElementById('addItemButton');

        addListItemButton.addEventListener('click', function () {
              addListItem(input.value);
              removeItemListener(); //Refreshes and rechecks for ".removeButton" elements
        });



        // Two other options to get my dynamic functions working
        //------------------------------------------------------
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



        // Adding HTML to the dom containing the users input
        //--------------------------------------------------
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



        // Using Jquery to remove the selected list item
        //----------------------------------------------
        function removeListItem(event){ //This function gets fired in the removeItemListener function.
              event.target.parentNode.remove();
        } // ** removeListItem function ENDS **


        // JS function used to listen for the variable closeBtns every time a new item
        // is added, if found a closeBtns then execute the removeListItem function
        //----------------------------------------------------------------------------
        function removeItemListener() {
              closeBtns[0].onclick = removeListItem; //calls removeListItem function
        }  // ** removeButtonListener function ends **


        function editListItem () {
          // node.nodeValue="new value"; //****google this!!!
        }


}());  // ** iife ENDS
