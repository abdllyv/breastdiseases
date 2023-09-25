// /* -------------------------------- Language -------------------------------- */

var textInpErr;
var textStopErr;

function detectLangError() {
  const currentUrl = window.location.href;
  let url = currentUrl.split("/");
  const langCode = url[3];
  if (langCode === "az") {
    textInpErr = "Boş ola bilməz!";
    textStopErr = "Bu kodun vaxtı bitib";
  } else {
    textInpErr = "It can't be empty!";
    textStopErr = "This code has expired";
  }
}

detectLangError();

let minuteSpan = document.querySelector(".minute");
let secondSpan = document.querySelector(".second");
let sendOtp = document.querySelector(".send-otp");
var timer;

/* -------------------------------- Otp Timer ------------------------------- */

function timeHandle() {
  if (minuteSpan.textContent === "0" && secondSpan.textContent === "00") {
    stopInteval();
    return true;
  } else {
    if (Number(secondSpan.textContent) > 0) {
      if (Number(secondSpan.textContent) < 11) {
        secondSpan.innerHTML = `0${Number(secondSpan.textContent) - 1}`;
      } else {
        secondSpan.innerHTML = Number(secondSpan.textContent) - 1;
      }
    } else {
      minuteSpan.innerHTML = 0;
      secondSpan.innerHTML = 59;
    }
  }
}

// Start Interval
function startInterval() {
  timer = setInterval(() => {
    timeHandle();
  }, 1000);
}
startInterval();

// Stop Interval
function stopInteval() {
  clearInterval(timer);
}

/* ------------------------------- Reset Time ------------------------------- */
sendOtp.addEventListener("click", () => {
  minuteSpan.innerHTML = 1;
  secondSpan.innerHTML = 59;
  stopInteval();
  startInterval();
});

/* --------------------------------- Get Dom -------------------------------- */
const formOtp = document.querySelector("#otp-form");
const otpInp = document.querySelector("#otp-code");
const otpEror = document.querySelector("#otp-code-err");
/* --------------------------  Error reset -------------------------- */
function resetError() {
  otpInp.addEventListener("input", () => {
    let error = otpInp.nextElementSibling;
    if (error.textContent === "") {
      return true;
    } else {
      error.innerHTML = "";
    }
  });
}
resetError();

/* --------------------------------- Submit --------------------------------- */
formOtp.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // Otp Check
  if (otpInp.value.trim() === "") {
    otpEror.innerHTML = textInpErr;
    isValid = false;
  }
  // Result
  if (isValid) {
    if (minuteSpan.textContent === "0" && secondSpan.textContent === "00") {
      otpEror.innerHTML = textStopErr;
    } else {
      let user = {
        otp: otpInp.value,
      };
      console.log(user);
      axios
        .post("", user)
        .then((res) => {
          if (res.status === "error") {
            otpEror.innerHTML = res.message;
          } else {
            emailInp.value = "";
            passwordInp.value = "";
          }
        })
        .catch((err) => console.log(err.message));

      otpInp.value = "";
    }
  }
});

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}
