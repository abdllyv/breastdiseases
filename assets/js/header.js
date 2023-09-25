/* ----------------------- Desktop Dropdown Open Close ---------------------- */
let dropdown = document.querySelectorAll(".dropdown");
let overlay = document.querySelector(".overlay");
// open
for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", () => {
    dropdown[i].lastElementChild.classList.add("isOpen");
    overlay.classList.add("isOpenOverlay");
  });
  //   console.log(dropdown[i].lastElementChild);
}
// close
overlay.addEventListener("click", () => {
  overlay.classList.remove("isOpenOverlay");
  overlay.classList.remove("mobileActive");
  document.querySelector(".side-bar").classList.remove("isOpenMenu");
  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].lastElementChild.classList.remove("isOpen");
  }
});

/* ---------------------------- Burger Menu Open ---------------------------- */
let mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", (e) => {
  document.querySelector(".side-bar").classList.add("isOpenMenu");
  overlay.classList.add("mobileActive");
});
/* ---------------------------- Burger Menu Close --------------------------- */
let closeDrop = document.querySelector("#closeDrop");
closeDrop.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.remove("isOpenMenu");
  overlay.classList.remove("mobileActive");
});




function allCloseDrop() {
  for (let i = 0; i < dropMobile.length; i++) {
    dropMobile[i].classList.remove("activeSelect");
    dropMobile[i].nextElementSibling.classList.remove("active-mobile-drop");
    dropMobile[i].nextElementSibling.removeAttribute("style");
  }
}
/* ----------------------------- Change Language ---------------------------- */
let currentLang = document.querySelector(".language-mobile");
function changeLang(element, lang) {
  const currentUrl =  window.location.href;
  let url = currentUrl.split("/");
  const langCode = url[3];
  if (langCode === lang) {
    return true;
  } else {
    url[3] = lang;
    let newLink = url.join("/");
    element.href = newLink;
    element.setAttribute("href", newLink);
    element.click();
  }
}

/* ----------------------------- Dedect Language ---------------------------- */
function dedectLanguage() {
  const currentUrl =  window.location.href;
  let url = currentUrl.split("/");
  for (let i = 0; i < url.length; i++) {
    if (url[i] !== "az") {
      currentLang.innerText = "İngilis";
    } else {
      currentLang.innerText = "Azerbaycan";
    }
  }
}
dedectLanguage();

/* ---------------------------- Mobile Drop Down ---------------------------- */
let dropMobile = document.querySelectorAll(".dropdown-mobile");
for (let i = 0; i < dropMobile.length; i++) {
  let isOpen = false;
  dropMobile[i].addEventListener("click", () => {
    allCloseDrop();
    if (isOpen) {
      dropMobile[i].classList.remove("activeSelect");
      dropMobile[i].nextElementSibling.classList.remove("active-mobile-drop");
      dropMobile[i].nextElementSibling.removeAttribute("style");

      isOpen = false;
    } else {
      dropMobile[i].classList.add("activeSelect");
      dropMobile[i].nextElementSibling.classList.add("active-mobile-drop");
      dropMobile[i].nextElementSibling.setAttribute(
        "style",
        `height: ${36 * dropMobile[i].nextElementSibling.children.length}px ;`
      );
      isOpen = true;
    }
  });
}
