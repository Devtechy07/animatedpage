const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});
signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // handle login
  alert('Signed in!');
});

document.getElementById('signUpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // handle signup
  alert('Signed up!');
});
