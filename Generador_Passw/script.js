// Elementos del DOM
const lengthInput = document.getElementById('length');
const includeLowercase = document.getElementById('include-lowercase');
const includeUppercase = document.getElementById('include-uppercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const passwordDisplay = document.getElementById('password-display');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');

// Caracteres posibles
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+=-{}[]<>?/|';

// Genera una contraseña aleatoria en función de los criterios seleccionados
function generatePassword() {
    let availableChars = '';
    if (includeLowercase.checked) availableChars += lowercaseChars;
    if (includeUppercase.checked) availableChars += uppercaseChars;
    if (includeNumbers.checked) availableChars += numberChars;
    if (includeSymbols.checked) availableChars += symbolChars;

    const length = parseInt(lengthInput.value);
    if (availableChars === '' || isNaN(length)) {
        passwordDisplay.textContent = 'Seleccione al menos un tipo de carácter y una longitud válida';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    passwordDisplay.textContent = password;
}

// Copiar la contraseña generada al portapapeles
function copyPassword() {
    const password = passwordDisplay.textContent;
    if (password === 'Aquí aparecerá tu contraseña' || password === 'Seleccione al menos un tipo de carácter y una longitud válida') {
        alert('No hay contraseña para copiar.');
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        alert('Contraseña copiada al portapapeles.');
    }).catch(() => {
        alert('Error al copiar la contraseña.');
    });
}

// Event listeners
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);