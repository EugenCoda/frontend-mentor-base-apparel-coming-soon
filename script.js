function validateEmail(event) {
  // Prevent the form submit
  event.preventDefault();

  // REGEX taken from this article: https://www.w3resource.com/javascript/form/email-validation.php
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let errorIcon = document.querySelector(".error-icon");
  let errorText = document.querySelector(".error-text");

  //   Grabbing the email provided by the user
  let inputEmail = event.target.elements.email.value;

  if (inputEmail.match(mailformat)) {
    errorIcon.classList.remove("active");
    errorText.classList.remove("active");
    document.form1.email.focus();
    return true;
  } else {
    errorIcon.classList.add("active");
    errorText.classList.add("active");
    document.form1.email.focus();
    return false;
  }
}

let form = document.getElementById("form1");

// attach event listener
form.addEventListener("submit", validateEmail, true);
