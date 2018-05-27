var app = {

    myProperties: {
        input: document.getElementById('userInput'),
        closeBtns: document.getElementsByClassName('removeButton'),
        counter: 0,
        addListItemButton: document.getElementById('addItemButton')
    },

    addListItem: function (elementText) {

        var uniqueId = 'customControlValidation' + app.myProperties.counter++;

        var newItem = "     <div class='custom-control custom-checkbox mb-3'><input type='checkbox' class='custom-control-input' id='";
          				newItem +=  		uniqueId;
          				newItem += "'   required><label class='custom-control-label' for='";
          				newItem +=      uniqueId;
          				newItem += "'   >";
          				newItem += 			elementText;
          				newItem += "    </label><button type='button' name='button' class='removeButton'>Delete</button></div>";
        listItemWrapper.insertAdjacentHTML("afterend", newItem);
    },

    removeListItem: function (event) {
        event.target.parentNode.remove();
    },

    removeItemListener: function () {
        closeBtns[0].onclick = removeListItem;
    },

    eventListeners: function () {
		 	// console.log(app.myProperties);
  		 	app.myProperties.addListItemButton.onclick = function(){
      		 		alert('something');
              addListItem(input.value);
              removeItemListener();
  		 	};

		 },

    // addListItemButton.addEventListener('click', function () {
    //     addListItem(input.value);
    //     removeItemListener(); //Refreshes and rechecks for ".removeButton" elements
    // });

}
// console.log(app.addListItem("test"));
