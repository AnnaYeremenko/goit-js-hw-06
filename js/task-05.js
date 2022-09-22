const textOutput = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

const onInputPriting = event => {
    textOutput.textContent = event.currentTarget.value;
    event.currentTarget.value.trim() === "" ? textOutput.textContent = "Anonymous" : null;
}
input.addEventListener("input", onInputPriting);

