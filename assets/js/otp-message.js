// /* -------------------------------- Language -------------------------------- */

var textInpErr;
var textEmailErr;
function detectLangError() {
  const currentUrl = window.location.href;
  let url = currentUrl.split("/");
  const langCode = url[3];
  if (langCode === "az") {
    textInpErr = "Boş ola bilməz!";
    textEmailErr = "Email adres yanlışdır!";
  } else {
    textInpErr = "It can't be empty!";
    textEmailErr = "The email address is incorrect!";
  }
}

detectLangError();

/* --------------------------------- Get Dom -------------------------------- */
const formOtpMessage = document.querySelector("#otp-message");
const emailInp = document.querySelector("#otp-message-email");
const emailEror = document.querySelector("#otp-message-email-error");

/* --------------------------  Error reset -------------------------- */
function resetError() {
  emailInp.addEventListener("input", () => {
    if (emailEror.textContent === "") {
      return true;
    } else {
      emailEror.innerHTML = "";
    }
  });
}
resetError();

/* --------------------------------- Submit --------------------------------- */
formOtpMessage.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  // Email Check
  if (emailInp.value.trim() === "") {
    emailEror.innerHTML = textInpErr;
    isValid = false;
  } else if (!validateEmail(emailInp.value.trim())) {
    emailEror.innerHTML = textEmailErr;
    isValid = false;
  }

  // Result
  if (isValid) {
    let user = {
      email: emailInp.value,
    };
    // Delete
    console.log(user);
    //
  }
  axios
    .post("", user)
    .then((res) => {
      if (res) {
        return true;
      } else {
        emailInp.value = "";
      }
    })
    .catch((err) => console.log(err.message));
});

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}
