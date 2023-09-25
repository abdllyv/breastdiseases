/* -------------------------------- Language -------------------------------- */
var textInpErr;
var textEmailErr;
var textPhoneErr;

function detectLangError() {
  const currentUrl = window.location.href;
  let url = currentUrl.split("/");
  const langCode = url[3];
  if (langCode === "az") {
    textInpErr = "Boş ola bilməz!";
    textPhoneErr =
      "Nömrə başlığı ilə düzgün formada tam qeyd edin(+994 XX XXX XX XX)";
    textEmailErr = "Email adres yanlışdır!";
  } else {
    textInpErr = "It can't be empty!";
    textPhoneErr =
      "Enter in full in the correct form with the number heading (+994 XX XXX XX XX)";
    textEmailErr = "The email address is incorrect!";
  }
}
detectLangError();

/* --------------------------------- Get Dom -------------------------------- */
const formSponsor = document.querySelector("#sponsor-form");
const inp = document.querySelectorAll("input");

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

/* --------------------------------- Submit --------------------------------- */
formSponsor.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;
  /* -------------------------------------------------------------------------- */
  /*                                 START CHECK                                */
  /* -------------------------------------------------------------------------- */
  for (let i = 0; i < inp.length; i++) {
    let scrool;
    // Input Empty Check
    if (inp[i].value.trim() === "") {
      inp[i].nextElementSibling.innerHTML = textInpErr;
      inp[i].scrollIntoView({ behavior: "smooth", block: "center" });
      scrool = i;
      isValid = false;
    }
    // Phone Number Check
    if (inp[i].type === "number") {
      if (!validatePhone(inp[i].value.trim())) {
        formSponsor.elements.phone.nextElementSibling.innerHTML = textPhoneErr;
        scrool = i;
        isValid = false;
      }
    }
    // Email Check
    if (inp[i].type === "email") {
      if (!validateEmail(inp[i].value.trim())) {
        formSponsor.elements.email.nextElementSibling.innerHTML = textEmailErr;
        scrool = i;
        isValid = false;
      }
    }
    inp[scrool]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  /* -------------------------------------------------------------------------- */
  /*                                  END CHECK                                 */
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- SUBMIT --------------------------------- */
  if (isValid) {
    // Result
    let user = {
      name: formSponsor.elements.name.value,
      surname: formSponsor.elements.surname.value,
      mobile: formSponsor.elements.phone.value,
      email: formSponsor.elements.email.value,
      company: formSponsor.company.value,
      conferance: formSponsor.conferance.value,
    };
    console.log(user);

    Swal.fire({
      position: "center",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });

    formSponsor.elements.name.value = "";
    formSponsor.elements.surname.value = "";
    formSponsor.elements.email.value = "";
    formSponsor.elements.phone.value = "";
    formSponsor.company.value = "";
    formSponsor.conferance.value = "";
    /* -------------------------------- SEND DATA ------------------------------- */
    axios
      .post("http://localhost:5000/api/products", user)
      .then((res) => {
        if (res) {
          return true;
        }
      })
      .catch((err) => console.log(err.message));
  }
});

/* ------------------------------- MAil Check ------------------------------- */
function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

/* --------------------------- Phone Number Check --------------------------- */
function validatePhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return re.test(phone);
}