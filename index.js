const passLength = document.getElementById("passLength");
const resultPass = document.getElementById("resultPass");
const button = document.getElementById("submit");
const upp = document.getElementById("upp");
const lower = document.getElementById("lower");
const num = document.getElementById("num");
const symbol = document.getElementById("symbol");

button.onclick = function() {
    let charUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLower = "abcdefghijklmnopqrstuvwxyz";
    let charNum = "0123456789";
    let charSymbol = "!@#$%^&*()_+=<>,.?/|\:;[]{}";
    let passwordLength = Number(passLength.value);
    let passwordChar = [];
    let randomPass = 0;
    let password = [];
    passwordChar += upp.checked ? charUpp : "";
    passwordChar += lower.checked ? charLower : "";
    passwordChar += num.checked ? charNum : "";
    passwordChar += symbol.checked ? charSymbol : "";

    if (passwordLength <= 0) {
        resultPass.textContent = `Password length must be at least 1`;
        return;
    }
    if (passwordChar.length == 0) {
        resultPass.textContent = `Password charachter must be at least 1`;
        return;
    }
    for (i = 0; i < passwordLength; i++) {
        randomPass = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[randomPass];
    }
    resultPass.textContent = password;
}