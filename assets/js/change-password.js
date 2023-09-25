 /* -------------------------------- Language -------------------------------- */
var textInpErr;
var textEmailErr;
var textPasswordErr;
var textPhoneErr;
var textSamePassErr;

function detectLangError() {
  const currentUrl = window.location.href;
  let url = currentUrl.split("/");
  const langCode = url[3];
  if (langCode === "az") {
    textInpErr = "Boş ola bilməz!";
    textPasswordErr =
      "Min bir böyük simvol,min bir kiçik simvol,min 8 simvol,max 18 simvol";
    textSamePassErr = "Parol eyni deyl!";
  } else {
    textInpErr = "It can't be empty!";
    textPasswordErr =
      "One thousand uppercase characters, one thousand lowercase characters, one thousand 8 characters, max 18 characters";
    textSamePassErr = "The password is not the same!";
  }
}
detectLangError();

/* --------------------------------- Get Dom -------------------------------- */
const formChangePassword = document.querySelector("#change-password-form");
const visiblePass = document.querySelector("#change-pass-visible");
const inp = document.querySelectorAll(".inp");
const samePasswordError = document.querySelector(
  "#change-password-same-passwood-error"
);

//* ---------------------------- Input Type Change --------------------------- */
visiblePass.addEventListener("change", () => {
  for (let i = 0; i < inp.length; i++) {
    if (inp[i].type === "password") {
      inp[i].setAttribute("type", "text");
    } else {
      inp[i].setAttribute("type", "password");
    }
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

function checkSamePassword() {
  for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener("change", () => {
      samePasswordError.innerHTML = "";
    });
  }
}
checkSamePassword();

/* --------------------------------- Submit --------------------------------- */
formChangePassword.addEventListener("submit", (event) => {
  event.preventDefault();
  const passwordInp = document.querySelector("#change-password");
  const repasswordInp = document.querySelector("#change-repassword");
  const passwordEror = document.querySelector("#change-password-error");
  const repasswordEror = document.querySelector("#change-repassword-error");
  let isValid = true;

  //  Password Check
  if (passwordInp.value.trim() === "") {
    passwordEror.innerHTML = textInpErr;
    isValid = false;
  } else if (!validatePassword(passwordInp.value.trim())) {
    passwordEror.innerHTML = textPasswordErr;
    isValid = false;
  }

  //  RePassword Check
  if (repasswordInp.value.trim() === "") {
    repasswordEror.innerHTML = textInpErr;
    isValid = false;
  } else if (!validatePassword(repasswordInp.value.trim())) {
    repasswordEror.innerHTML = textPasswordErr;
    isValid = false;
  }
  /* --------------------------- Checl Same Password -------------------------- */
  if (
    repasswordInp.value.trim() !== "" &&
    passwordInp.value.trim() !== "" &&
    passwordEror.textContent === "" &&
    repasswordEror.textContent === "" &&
    repasswordInp.value !== passwordInp.value
  ) {
    samePasswordError.innerHTML = textSamePassErr;
    isValid = false;
  }

  // Result
  if (isValid) {
    let user = {
      password: passwordInp.value,
    };
    // delete
    console.log(user);
    //
    axios
      .post("", user)
      .then((res) => {
        if (res) {
          return true;
        } else {
          passwordInp.value = "";
          repasswordInp.value = "";
        }
      })
      .catch((err) => console.log(err.message));
  }
});
function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z]).{8,18}$/;
  return re.test(password);
}
