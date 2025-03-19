/* darkMode Functionality */
let darkmode = localStorage.getItem("darkmode");

const toggleBtn = document.querySelector("#toggle-btn");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode == "active") enableDarkMode();

toggleBtn.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

/* Calculator Functionality */
let input1 = document.querySelector(".display");
let input2 = document.querySelector(".display2");
let buttons = document.querySelectorAll(".btn");
let allClearBtn = document.querySelector("#all-clear");
let backspaceBtn = document.querySelector("#backspace-btn");
let displayValue = "";

console.log(buttons);
let arr = Array.from(buttons);
// console.log(arr);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      displayValue = eval(displayValue);
      input1.value = displayValue;
      input2.value = "";
    } else {
      displayValue += e.target.innerHTML;
      input2.value = displayValue;
      input1.value = "";
    }
  });
});

allClearBtn.addEventListener("click", (e) => {
  displayValue = "";
  input1.value = displayValue;
  input2.value = displayValue;
});

backspaceBtn.addEventListener("click", (e) => {
  displayValue = displayValue.substring(0, displayValue.length - 1);
  input2.value = displayValue;
});
