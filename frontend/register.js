const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newUser = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value,
    adminAccessCode: document.getElementById("adminCode").value,
  };

  if(!newUser.adminAccessCode) {
    newUser.adminAccessCode = "";
  } else {
    newUser.adminAccessCode =newUser.adminAccessCode.value;
  }

  registerUser(newUser);
}); 
