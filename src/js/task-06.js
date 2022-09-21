const inputRef = document.querySelector('#validation-input');
const correctInputLeng = document.querySelector('[data-length]')
const coorectInputLengthToNumbe = Number(correctInputLeng.attributes[2].textContent)

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length === coorectInputLengthToNumbe) {
        inputRef.classList.remove('invalid');
        return inputRef.classList.add('valid');
    } else {
        inputRef.classList.remove('valid');
        return inputRef.classList.add('invalid');
    }
});
