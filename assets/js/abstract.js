/* -------------------------------- Language -------------------------------- */
var textInpErr;
var textEmailErr;
var fileErr;

function detectLangError() {
  const currentUrl = window.location.href;
  let url = currentUrl.split("/");
  const langCode = url[3];
  if (langCode === "az") {
    textInpErr = "Boş ola bilməz!";
    textEmailErr = "Email adres yanlışdır!";
    textEmailErr = "Seçili fayl yoxdur";
  } else {
    textInpErr = "It can't be empty!";
    textEmailErr = "No file selected";
  }
}

detectLangError();

/* -------------------------- Native input file JS -------------------------- */
const fileInput1 = document.getElementById("file-input-1");
const fileInput2 = document.getElementById("file-input-2");
const fileInput3 = document.getElementById("file-input-3");
let inp = [fileInput1, fileInput2, fileInput3];
for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("change", () => {
    if (inp[i].value === "") {
      inp[i].nextElementSibling.innerHTML = fileErr;
    } else {
      const realPathArray = inp[i].value.split("\\");
      inp[i].nextElementSibling.innerHTML =
        realPathArray[realPathArray.length - 1];
    }
  });
}

/* --------------------------------- Select Start --------------------------------- */
var select = false;
let overlay = document.querySelector(".overlay");
let selectBox = document.querySelectorAll(".select-list");

function openSelect(event, id) {
  if (select) {
    // Close Select List
    document.getElementById(id).classList.remove("active-select");
    document.getElementById(id).style.height = 0;
    overlay.classList.remove("isOpen");
    select = false;
  } else {
    // Open Select List
    document.getElementById(id).classList.add("active-select");
    // Dinamic height && animation
    if (document.getElementById(id).children.length < 3) {
      document.getElementById(id).style.height = `${
        45 * document.getElementById(id).children.length
      }px`;
    } else {
      document.getElementById(id).style.height = `${45 * 3}px`;
    }
    overlay.classList.add("isOpen");
    if (document.getElementById(id).id === id) {
      // console.log(document.getElementById(id).children)
      let tablinks = document.getElementById(id).children;
      //   Select Item Dom Walking
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", (e) => {
          //   Change Select Text Content
          let parentElementText =
            tablinks[i].parentElement.parentElement.firstElementChild;
          parentElementText.children[0].innerHTML = tablinks[i].textContent;
          parentElementText.parentElement.style.borderColor = "#1f4586";
          // Update Active Item
          for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-item");
          }
          tablinks[i].classList.add("active-item");

          //   Close Select List
          document.getElementById(id).classList.remove("active-select");
          document.getElementById(id).style.height = 0;
          overlay.classList.remove("isOpen");
          select = false;
        });
      }
    }
    select = true;
  }
}
// Close Select && Ovarlay
overlay.addEventListener("click", () => {
  for (let i = 0; i < selectBox.length; i++) {
    selectBox[i].classList.remove("active-select");
    selectBox[i].style.height = 0;
  }
  overlay.classList.remove("isOpen");
  select = false;
});

/* ------------------------------- Select End ------------------------------- */

let textArea = document.querySelectorAll("textarea");
let inpText = document.querySelectorAll('input[type="text"]');
let emailInp = document.querySelector("#email");
let checkboxLive = document.querySelector("#checkbox-live");
let checkboxVirtual = document.querySelector("#checkbox-virtual");
let checkArr = [checkboxLive, checkboxVirtual];

/* -------------------------- Reset textarea error -------------------------- */
for (let i = 0; i < textArea.length; i++) {
  textArea[i].addEventListener("input", () => {
    if (textArea[i].style.borderColor != "#1f4586") {
      textArea[i].style.borderColor = "#1f4586";
    } else {
      return true;
    }
    let size = textArea[i].nextElementSibling.children;
    size[0].innerHTML = Number(size[1].textContent) - textArea[i].value.length;
  });
}

function resetError() {
  // type text inputs
  for (let i = 0; i < inpText.length; i++) {
    inpText[i].addEventListener("input", () => {
      let error = inpText[i].nextElementSibling;
      if (error.textContent === "") {
        return true;
      } else {
        error.innerHTML = "";
      }
    });
  }
  // email
  emailInp.addEventListener("input", () => {
    emailInp.nextElementSibling.innerHTML = "";
  });
  // checkbox
  for (let i = 0; i < checkArr.length; i++) {
    checkArr[i].addEventListener("input", () => {
      for (let j = 0; j < checkArr.length; j++) {
        checkArr[j].parentElement.style.borderColor = "#1f4586";
      }
    });
  }
}
resetError();

// Validation
let formAbstract = document.querySelector("#abstract-form");
formAbstract.addEventListener("submit", (event) => {
  event.preventDefault();
  let nameInp = document.querySelector("#name");
  let selectFirst = document.querySelector("#select-first-text");
  let selectsecond = document.querySelector("#select-second-text");
  let selectThird = document.querySelector("#select-third-text");
  let selectFourth = document.querySelector("#select-fourth-text");
  let personalNameInp = document.querySelector("#personal-name");
  let personalSurnameInp = document.querySelector("#personal-surname");
  let fatherNameInp = document.querySelector("#father-name");
  let countryInp = document.querySelector("#country");
  let townInp = document.querySelector("#town");
  let companyNameInp = document.querySelector("#company-name");
  let summaryTextarea = document.querySelector("#summary");
  let methodsTextarea = document.querySelector("#methods");
  let resultsTextarea = document.querySelector("#results");
  let discussionTextarea = document.querySelector("#discussion");
  let imgFirst = document.querySelector("#file-input-1");
  let wordFile = document.querySelector("#file-input-2");
  let imgSecond = document.querySelector("#file-input-3");
  let keyWordFirstInp = document.querySelector("#key-word-first");
  let keyWordSecondInp = document.querySelector("#key-word-second");
  let keyWordThirdtInp = document.querySelector("#key-word-third");
  let optionCheckboxFirst = document.querySelector("#first-text");
  let optionCheckboxSecond = document.querySelector("#second-text");
  let optionCheckboxThird = document.querySelector("#third-text");
  let selectText = document.querySelectorAll(".text");
  var isValid;
  isValid = true;
  /* ----------------------- Type text INPUT value check ---------------------- */
  for (let i = 0; i < inpText.length; i++) {
    if (inpText[i].value.trim() === "") {
      inpText[i].nextElementSibling.innerHTML = textInpErr;
      inpText[i].scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ------------------------------ Select Check ------------------------------ */
  for (let i = 0; i < selectText.length; i++) {
    if (
      selectText[i].textContent === "Seç" ||
      selectText[i].textContent === "Choose"
    ) {
      let selectTextParent = selectText[i].parentElement.parentElement;
      selectTextParent.style.borderColor = "#ff014f";
      selectTextParent.scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ----------------------------- Textarea check ----------------------------- */
  for (let i = 0; i < textArea.length; i++) {
    if (textArea[i].value.trim() === "") {
      textArea[i].style.borderColor = "#ff014f";
      textArea[i].scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ------------------------------- Email Check ------------------------------ */
  if (emailInp.value.trim() === "") {
    emailInp.nextElementSibling.innerHTML = textInpErr;
    emailInp.scrollIntoView({ behavior: "smooth", block: "center" });
    isValid = false;
  } else if (!validateEmail(emailInp.value.trim())) {
    emailInp.nextElementSibling.innerHTML = textEmailErr;
    emailInp.scrollIntoView({ behavior: "smooth", block: "center" });
    isValid = false;
  }

  /* --------------------------- Check Virtual Live --------------------------- */
  if (checkboxLive.checked === false && checkboxVirtual.checked === false) {
    checkboxLive.parentElement.style.borderColor = "#ff014f";
    checkboxVirtual.parentElement.style.borderColor = "#ff014f";
    checkboxLive.parentElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    isValid = false;
  }

  if (isValid) {
    const formData = new FormData();
    formData.append("name", nameInp.value);
    formData.append("selectFirst ", selectFirst.textContent);
    formData.append("selectsecond ", selectsecond.textContent);
    formData.append("selectThird ", selectThird.textContent);
    formData.append("selectFourth ", selectFourth.textContent);
    formData.append("checkboxLive ", checkboxLive.checked);
    formData.append("checkboxVirtual", checkboxVirtual.checked);
    formData.append("personalName", personalNameInp.value);
    formData.append("personalSurname", personalSurnameInp.value);
    formData.append("fatherName", fatherNameInp.value);
    formData.append("country", countryInp.value);
    formData.append("town", townInp.value);
    formData.append("email", emailInp.value);
    formData.append("companyName", companyNameInp.value);
    formData.append("summaryTextarea", summaryTextarea.value);
    formData.append("methodsTextarea", methodsTextarea.value);
    formData.append("resultsTextarea", resultsTextarea.value);
    formData.append("discussionTextarea", discussionTextarea.value);
    formData.append("img1", imgFirst.files[0]);
    formData.append("word", wordFile.files[0]);
    formData.append("img2", imgSecond.files[0]);
    formData.append("keyWordFirst", keyWordFirstInp.value);
    formData.append("keyWordSecond", keyWordSecondInp.value);
    formData.append("keyWordThird", keyWordThirdtInp.value);
    formData.append("optionCheckboxFirst", optionCheckboxFirst.checked);
    formData.append("optionCheckboxSecond", optionCheckboxSecond.checked);
    formData.append("optionCheckboxThird", optionCheckboxThird.checked);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    /* -------------------------------- SEND DATA ------------------------------- */
    axios
      .post("http://localhost:5000/api/products", formData)
      .then((res) => {
        if (res) {
          Swal.fire({
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((err) => console.log(err.message));
  }
});
/* ------------------------------- CHECK EMAIL ------------------------------ */
function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}
