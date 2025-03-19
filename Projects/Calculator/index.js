/* darkMode Functionality */
let darkmode = localStorage.getItem('darkmode');

const toggleBtn = document.querySelector('#toggle-btn');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode','active');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode',null);
}

toggleBtn.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})

/* Calculator Functionality */
let displayValue = '';
document.querySelector('.display').value = displayValue;
document.querySelector('.display2').value = displayValue;
let button = document.querySelectorAll(".btn");

button.addEventListener('click', () => {
  if (button === '='){
    displayValue = eval(displayValue);
    document.querySelector('.display').value = displayValue;
    document.querySelector('.display2').value = ''
  } else if (true ) {
    
  }
  
})

function allClear() {
  displayValue = '';
  document.querySelector('.display2').value = displayValue;
  document.querySelector('.display  ').value = displayValue;
};