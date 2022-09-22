const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', OnSubmit)
function OnSubmit(evt) {
    evt.preventDefault()
    console.dir(evt.currentTarget)
     const {email, password} = evt.currentTarget.elements;
     const data = {
        email: email.value,
        password: password.value
     }
    if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Ви не заповнили всі поля!");
  }
    console.log(data);
    evt.currentTarget.reset();
}