let count = 2;
function validate() {
  let userName = document.getElementById("userName").value;
  let passwordInput = document.getElementById("userNIP").value;
  let valid = false;

  let userArray = ["username1", "username2", "username3", "username4"]; // as many as you like - no comma after final entry
  let passwordArray = [1234, 5678, 9512, 7532]; // the corresponding passwords;

  for (let i = 0; i < userArray.length; i++) {
    if (userName == userArray[i] && passwordInput == passwordArray[i]) {
      valid = true;
      break;
    }
  }

  if (valid) {
    alert(
      "Login was successfully processed.  You will be redirected to the members page now."
    );
    window.location =
      "/home/carlosmarin/Escritorio/Keyboard/ATM/Login-SignIn/trollface.html";
    return false;
  }

  let tries = " tries";
  if (count == 1) {
    tries = " try";
  }
  //*! allowed tries for invalid credencial
  if (count >= 1) {
    alert(
      "Invalid user name and/or password.  You have " + count + tries + " left."
    );
    document.myform.userName.value = "";
    document.myform.NIP.value = "";
    setTimeout("document.myform.userName.focus()", 25);
    setTimeout("document.myform.userName.select()", 25);
    count--;
  } else {
    alert("Still incorrect! You have no more tries left!");
    document.myform.userName.value = "No more tries allowed!";
    document.myform.NIP.value = "";
    document.myform.userName.disabled = true;
    document.myform.NIP.disabled = true;
    return false;
  }
}
