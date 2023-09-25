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
    selectHeight(document.getElementById(id));

    overlay.classList.add("isOpen");
    if (document.getElementById(id).id === id) {
      let tablinks = document.getElementById(id).children;
      //   Select Item Dom Walking
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", (e) => {
          //   Change Select Text Content
          let parentElement =
            tablinks[i].parentElement.parentElement.firstElementChild;
          parentElement.children[0].innerHTML =
            tablinks[i].children[0].textContent;
          parentElement.children[1].children[0].innerHTML =
            tablinks[i].children[1].textContent;
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
overlay.addEventListener("click", () => {
  for (let i = 0; i < selectBox.length; i++) {
    selectBox[i].classList.remove("active-select");
    selectBox[i].style.height = 0;
  }
  overlay.classList.remove("isOpen");
  select = false;
});

function selectHeight(select) {
  if (select.children.length < 3) {
    select.style.height = `${45 * select.children.length}px`;
  } else {
    select.style.height = `${45 * 3}px`;
  }
}

function pay(item) {
  let selectText = item.parentElement.children[0].children[0].textContent;

  if (selectText === "Seç" || selectText === "Select") {
    item.classList.add("active-select");
    openSelect(Element, item.id);
    overlay.classList.add("isOpen");
  } else {
    let info = {
      id: item.id,
      selectText,
    };

    axios
      .post("", info)
      .then((res) => {
        if (res) {
          window.location.href = res.data;
        }
      })
      .catch((err) => console.log(err));
  }
}
