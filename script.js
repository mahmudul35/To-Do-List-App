const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("addNtn");
const listtContainer = document.getElementById("list-container");
addBtn.addEventListener("click", (e) => {
  if (inputBox.value == "") {
    alert("Plese insert task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listtContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTask();
});
listtContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});

//!save local storage
function saveTask() {
  localStorage.setItem("data", listtContainer.innerHTML);
}
//!get data from local storage
let showTask = () => {
  listtContainer.innerHTML = localStorage.getItem("data");
};
showTask();
