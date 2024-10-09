let userName = document.getElementById("userName");
let userMessage = document.getElementById("userMessage");
let userEmail = document.getElementById("userEmail");

//reset input field

let resetHandler = function () {
  userName.value = "";
  userMessage.value = "";
  userEmail.value = "";
};

//handle submit

let submitHandler = function () {
  if (
    userName.value === "" ||
    userEmail.value === "" ||
    userMessage.value === ""
  ) {
    alert("Please provide all fields");
  } else {
    const contactFormData =
      userName.value + " " + userEmail.value + " " + userMessage.value;

    localStorage.setItem("formData", contactFormData);
    alert("Your Message Sent Successfully ");
    resetHandler();
  }
};
