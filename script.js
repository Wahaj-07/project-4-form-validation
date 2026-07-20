// Grab all the elements we need
const form = document.getElementById('myForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmError = document.getElementById('confirm-error');
const successMsg = document.getElementById('successMsg');

// Email pattern checker
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password pattern checker (min 8 chars, 1 uppercase, 1 number, 1 symbol)
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

// This function shows an error on a field
function showError(input, errorSpan, message) {
  input.classList.add('error');
  errorSpan.textContent = message;
}

// This function clears an error from a field
function clearError(input, errorSpan) {
  input.classList.remove('error');
  errorSpan.textContent = '';
}

// When form is submitted
form.addEventListener('submit', function(event) {

  // STOP the page from refreshing!
  event.preventDefault();

  // Assume no errors yet
  let isValid = true;

  // --- CHECK NAME ---
  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, 'Full name is required.');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  // --- CHECK EMAIL ---
  if (emailInput.value.trim() === '') {
    showError(emailInput, emailError, 'Email address is required.');
    isValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, emailError, 'Please enter a valid email (e.g. name@email.com).');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // --- CHECK PASSWORD ---
  if (passwordInput.value.trim() === '') {
    showError(passwordInput, passwordError, 'Password is required.');
    isValid = false;
  } else if (!passwordRegex.test(passwordInput.value)) {
    showError(passwordInput, passwordError, 'Min 8 chars, 1 uppercase, 1 number, 1 symbol.');
    isValid = false;
  } else {
    clearError(passwordInput, passwordError);
  }

  // --- CHECK CONFIRM PASSWORD ---
  if (confirmInput.value.trim() === '') {
    showError(confirmInput, confirmError, 'Please confirm your password.');
    isValid = false;
  } else if (confirmInput.value !== passwordInput.value) {
    showError(confirmInput, confirmError, 'Passwords do not match.');
    isValid = false;
  } else {
    clearError(confirmInput, confirmError);
  }

  // --- IF EVERYTHING IS CORRECT ---
  if (isValid) {
successMsg.classList.add('visible');
form.reset();
    form.reset();
  } else {
successMsg.classList.remove('visible');
  }

});