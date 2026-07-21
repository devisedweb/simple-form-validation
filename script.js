const inputEl = document.getElementById("input-el");
const msg = document.getElementById("msg");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputEl.value == "") msg.textContent = "Input field can't be empty!";

  if (inputEl.value !== "") msg.textContent = "Success";
});
