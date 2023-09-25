// /* -------------------------------- Language -------------------------------- */

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
    textPhoneErr =
      "Nömrə başlığı ilə düzgün formada tam qeyd edin(+994 XX XXX XX XX)";
    textEmailErr = "Email adres yanlışdır!";
    textPasswordErr =
      "Min bir böyük simvol,min bir kiçik simvol,min 8 simvol,max 18 simvol";
    textSamePassErr = "Parol eyni deyl!";
  } else {
    textInpErr = "It can't be empty!";
    textPhoneErr =
      "Enter in full in the correct form with the number heading (+994 XX XXX XX XX)";
    textEmailErr = "The email address is incorrect!";
    textPasswordErr =
      "One thousand uppercase characters, one thousand lowercase characters, one thousand 8 characters, max 18 characters";
    textSamePassErr = "The password is not the same!";
  }
}
detectLangError();

/* --------------------------------- Get Dom -------------------------------- */
const formRegister = document.querySelector("#register");
const inp = document.querySelectorAll(".inp");
const password = document.querySelectorAll(".password");
const visiblePass = document.querySelector("#register-checkbox");
const samePasswordError = document.querySelector(
  "#register-same-passwood-error"
);

/* ---------------------------- Input Type Change --------------------------- */
visiblePass.addEventListener("change", () => {
  for (let i = 0; i < password.length; i++) {
    if (password[i].type === "password") {
      password[i].setAttribute("type", "text");
    } else {
      password[i].setAttribute("type", "password");
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
  for (let i = 0; i < password.length; i++) {
    password[i].addEventListener("change", () => {
      samePasswordError.innerHTML = "";
    });
  }
}
checkSamePassword();

/* --------------------------------- Submit --------------------------------- */
formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInp = document.querySelector("#register-name");
  const nameEror = document.querySelector("#register-name-error");
  const surnameInp = document.querySelector("#register-surname");
  const surnameEror = document.querySelector("#register-surname-error");
  const emailInp = document.querySelector("#register-email");
  const emailEror = document.querySelector("#register-email-error");
  const phoneInp = document.querySelector("#register-phone");
  const phoneEror = document.querySelector("#register-phone-error");
  const privateInfoInp = document.querySelector("#register-private-info");
  const privateInfoEror = document.querySelector(
    "#register-private-info-error"
  );
  const passwordInp = document.querySelector("#register-password");
  const passwordEror = document.querySelector("#register-password-error");
  const repasswordInp = document.querySelector("#register-repassword");
  const repasswordEror = document.querySelector("#register-repassword-error");
  let isValid = true;

  // Name Check
  if (nameInp.value.trim() === "") {
    nameEror.innerHTML = textInpErr;
    isValid = false;
  }

  // Surname Check
  if (surnameInp.value.trim() === "") {
    surnameEror.innerHTML = textInpErr;
    isValid = false;
  }

  // Email Check
  if (emailInp.value.trim() === "") {
    emailEror.innerHTML = textInpErr;
    isValid = false;
  } else if (!validateEmail(emailInp.value.trim())) {
    emailEror.innerHTML = textEmailErr;
    isValid = false;
  }

  // Phone Number Check
  if (phoneInp.value.trim() === "") {
    phoneEror.innerHTML = textInpErr;
    isValid = false;
  } else if (!validatePhone(phoneInp.value.trim())) {
    phoneEror.innerHTML = textPhoneErr;
    isValid = false;
  }

  // Private İnfo Check
  if (privateInfoInp.value.trim() === "") {
    privateInfoEror.innerHTML = textInpErr;
    isValid = false;
  }
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

  /* --------------------------- Check Same Password -------------------------- */
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
  if (isValid) {
    // Result
    let user = {
      email: emailInp.value,
      password: passwordInp.value,
      fullname: `${nameInp.value}  ${surnameInp.value}`,
      idcard: privateInfoInp.value,
      phone: phoneInp.value,
    };
    // delete
    console.log(user);
    // 
    axios
      .post("", user)
      .then((res) => {
        if (res.status === "error") {
          responseError.innerHTML = res.message;
        } else {
          nameInp.value = "";
          surnameInp.value = "";
          emailInp.value = "";
          phoneInp.value = "";
          privateInfoInp.value = "";
          passwordInp.value = "";
          repasswordInp.value = "";
        }
      })
      .catch((err) => console.log(err.message));
  }
});

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}
function validatePhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return re.test(phone);
}
function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z]).{8,18}$/;
  return re.test(password);
}
