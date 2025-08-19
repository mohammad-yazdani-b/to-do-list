let $ = document;
let ulElem = $.querySelector(".ulList");
let inputElem = $.querySelector("#newItem");
let deleteElem = $.querySelector(".icon");

function addNewToDo(newToDoValue) {
  let newLi = $.createElement("li");
  newLi.className = "liList";

  let newToDoTitle = $.createElement("a");
  newToDoTitle.innerHTML = newToDoValue;
  newToDoTitle.className = "listTitle";

  let icon = $.createElement("i");
  icon.className = "fa-solid fa-trash-can icon";

  newLi.append(newToDoTitle, icon);
  ulElem.append(newLi);
}

inputElem.addEventListener("keydown", (e) => {
  let newToDoValue = e.target.value;
  if (e.key === "Enter") {
    addNewToDo(newToDoValue);
    inputElem.value = "";
  }
});

ulElem.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon")) {
    e.target.parentElement.remove();
    console.log(e);
  }
});
