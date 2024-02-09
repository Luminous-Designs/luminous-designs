var themeModal = document.getElementById("theme-modal");
  var themeBtn = document.getElementById("theme-openModalButton");
  var themeCloseButton = document.getElementsByClassName("theme-close-button")[0];
  var themeSubmitButton = document.getElementById("theme-submitInput");
  var themeTextInput = document.getElementById("theme-textInput");
  
  // When the user clicks the button, open the modal
  themeBtn.onclick = function() {
    themeModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  themeCloseButton.onclick = function() {
    themeModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == themeModal) {
      themeModal.style.display = "none";
    }
  }
  
  // When the user clicks on the submit button, store the input and convert it into an array
  themeSubmitButton.onclick = function() {
    var text = themeTextInput.value;
    var themeIdArray = text.split(', ');
    console.log(themeIdArray); // Output array to console for testing
    themeModal.style.display = "none"; // Close the modal
  }