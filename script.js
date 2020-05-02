function myKeyPress(e) {
  
  /* TODO1: retrieve the value from the text input */
  var inputNum = document.getElementById("textinput").value;
  var mytextbox = "my textbox element";

  
  if (window.event) {
    // IE
    keyPressed = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var fixedNum = formatPhoneNumber(inputNum);

}

function formatPhoneNumber(value) {
 
  if (value.length > 3 && value.length <= 6)
    value = value.slice(0, 3) + "-" + value.slice(3);
  else if (value.length > 6)
    value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);

  return value;
}
  
