const btnEncrypt = document.getElementById('btnEncrypt');
const keyEncrypt = document.getElementById('keyEncrypt');
const textEncrypt = document.getElementById('textEncrypt');

const btnDecrypt = document.getElementById('btnDecrypt');
const keyDecrypt = document.getElementById('keyDecrypt');
const textDecrypt = document.getElementById('textDecrypt');

btnEncrypt.addEventListener('click', () => {
    console.log(textEncrypt.value, keyEncrypt.value);
    textDecrypt.value = encrypt(textEncrypt.value, keyEncrypt.value);

});

btnDecrypt.addEventListener('click', () => {
    console.log(textDecrypt.value, keyDecrypt.value);
    textEncrypt.value = decrypt(textDecrypt.value, keyDecrypt.value);
});

function encrypt(value, key) {
    try {
        return CryptoJS.AES.encrypt(JSON.stringify(value), key, null).toString();
    } catch (e) {
        return null;
    }
}

function decrypt(ciphered, key) {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphered, key, null);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (e) {
        return null;
    }
}
