(function() {

    		var input = document.getElementById('userInput');
        var closeBtns = document.getElementsByClassName('removeButton');
        var counter = 0;


    		$('#addItemButton').click(function(){
              addListItem(input.value);
              closeBtns[0].onclick = removeListItem;
              console.log(closeBtns);
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
          				newItem += "    </label><button type='button' name='button' class='removeButton'>Remove</button></div>";

              listItemWrapper.insertAdjacentHTML("afterend", newItem);



                // $(".removeButton").click(function(event) {
                //   console.log('click function');
                //   removeListItem();
                // });


        }  // ** makeNewElement function ENDS **





        function removeListItem(event){
          console.log('working')
              console.log(event.target.parentNode);

              event.target.parentNode.remove();
              console.log(event.target.parentNode);
        }



}());  // ** iife ENDS
