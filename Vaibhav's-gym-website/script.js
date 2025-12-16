function toggleLoginPassword() {
  const pass = document.getElementById("loginPassword");
  const btn = document.getElementById("toggleBtn");
  const pass1= document.getElementById("loginPassword1");
  const btn1 = document.getElementById("toggleBtn1");
  const pass2= document.getElementById("loginPassword2");
  const btn2 = document.getElementById("toggleBtn2");


  if (pass.type === "password") {
    pass.type = "text";
    btn.innerText = "Hide";
    pass1.type="text";
    btn1.innerText="Hide";
    pass2.type="text";
    btn2.innerText="Hide";
  } else {
    pass.type = "password";
    btn.innerText = "Show";
    pass1.type="password";
    btn1.innerText="Show";
    pass2.type="password";
    btn2.innerText="Show";
  }
}
//  DARK MODE TOGGLE SCRIPT USEFUL FOR FUTURE 
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // change icon
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️";
  } else {
    toggleBtn.innerText = "🌙";
  }
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<FORM SUBMISSION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function submitContactForm() {
  const msg = document.getElementById("contactSuccess");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 4000);
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Login modal SUbmission >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function loginUser() {
  const msg = document.getElementById("loginSuccess");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Sign-up modal SUbmission >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function signupUser() {
  const msg = document.getElementById("signupSuccess");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Contact-form submission with validation, loader and success message>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function submitContactForm() {
  const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
  const loader = document.getElementById("contactLoader");
  const success = document.getElementById("contactSuccess");

  // Validation
  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("Please fill all fields");
      return;
    }
  }

  // Show loader
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    success.style.display = "block";

    // Clear form
    inputs.forEach(input => input.value = "");

    setTimeout(() => {
      success.style.display = "none";
    }, 4000);
  }, 1500);
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Login-Modal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function loginUser() {
  const email = document.querySelector("#loginModal input[type='text']");
  const password = document.querySelector("#loginPassword");
  const loader = document.getElementById("loginLoader");
  const success = document.getElementById("loginSuccess");

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Enter email and password");
    return;
  }

  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    success.style.display = "block";

    setTimeout(() => {
      success.style.display = "none";
      bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
      email.value = "";
      password.value = "";
    }, 1500);
  }, 1200);
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Sign-up-Modal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function signupUser() {
  const inputs = document.querySelectorAll("#signupModal input");
  const loader = document.getElementById("signupLoader");
  const success = document.getElementById("signupSuccess");

  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("Fill all signup fields");
      return;
    }
  }

  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    success.style.display = "block";

    setTimeout(() => {
      success.style.display = "none";
      bootstrap.Modal.getInstance(document.getElementById("signupModal")).hide();
      inputs.forEach(i => i.value = "");
    }, 1500);
  }, 1200);
}




