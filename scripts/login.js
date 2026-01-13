 const signinBtn = document.getElementById('signinBtn');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const nameInput = document.getElementById('name-input');
  const createAccText = document.getElementById('js-create-acc-text');
  const createAccBtn = document.getElementById('createAccountBtn');
  const loginForm = document.querySelector('form');

  let isSignInMode = false;

  signinBtn.addEventListener('click', function(event) {
    event.preventDefault();
    isSignInMode = !isSignInMode;

    if (isSignInMode) {
      title.textContent = 'Welcome Back';
      description.textContent = 'Sign in to your account';
      nameInput.style.display = 'none';
      createAccText.textContent = 'Sign In';
      signinBtn.innerHTML = `Don't have an account? <span>Sign up</span>`;
    } else {
      title.textContent = 'Create Account';
      description.textContent = 'Join us to start ordering';
      nameInput.style.display = 'block';
      createAccText.textContent = 'Create account';
      signinBtn.innerHTML = `Already have an account? <span>Sign in</span>`;
    }
  });

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (isSignInMode) {
      alert('“Sorry, this feature is not available yet.');
    } else {
      alert('“Sorry, this feature is not available yet.');
    }

    loginForm.reset();
    if (isSignInMode) nameInput.style.display = 'block';
  });