/* -------------------------------- Language -------------------------------- */

var textInpErr;
var textEmailErr;

function detectLangError() {
  const currentUrl = "https://breastdiseases.az/en/survey";
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
const formSingIn = document.querySelector("#sing-in");
const inp = document.querySelectorAll(".inp");
const passwordInp = document.querySelector("#loginPassword");
const visiblePass = document.querySelector("#loginCheckbox");
const responseError = document.querySelector("#loqin-respons-error");

/* ---------------------------- Input Type Change --------------------------- */
visiblePass.addEventListener("change", () => {
  if (passwordInp.type === "password") {
    passwordInp.setAttribute("type", "text");
  } else {
    passwordInp.setAttribute("type", "password");
  }
});

/* --------------------------  Error reset -------------------------- */
function resetError() {
  for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener("input", () => {
      let error = inp[i].nextElementSibling;
      if (error.textContent === "") {
        return true;
      } else {
        error.innerHTML = "";
      }
    });
  }
}
resetError();

/* --------------------------- Response Error Reset -------------------------- */
function responsError() {
  for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener("input", () => {
      if (responseError.textContent === "") {
        return true;
      } else {
        responseError.innerHTML = "";
      }
    });
  }
}
responsError();

/* --------------------------------- Submit --------------------------------- */
formSingIn.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInp = document.querySelector("#loginEmail");
  const emailEror = document.querySelector("#loqin-email-error");
  const passwordEror = document.querySelector("#loqin-password-error");
  let isValid = true;

  // Email Check
  if (emailInp.value.trim() === "") {
    emailEror.innerHTML = textInpErr;
    isValid = false;
  } else if (!validateEmail(emailInp.value.trim())) {
    emailEror.innerHTML = textEmailErr;
    isValid = false;
  }

  // Password Check
  if (passwordInp.value.trim() === "") {
    passwordEror.innerHTML = textInpErr;
    isValid = false;
  }

  // Result
  if (isValid) {
    let user = {
      username: emailInp.value,
      password: passwordInp.value,
    };

    // Delete
    console.log(user);
    //
    axios
      .post("http://localhost:5000/api/products", user)
      .then((res) => {
        if (res.status === "error") {
          responseError.innerHTML = res.message;
        } else {
          emailInp.value = "";
          passwordInp.value = "";
        }
      })
      .catch((err) => console.log(err.message));
  }
});

/* ------------------------------- Email Regex ------------------------------ */
function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}
