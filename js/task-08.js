const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Sorry, but all fields must be filled");
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  event.currentTarget.reset();
}
