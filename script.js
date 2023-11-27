const passwordBox = document.getElementById("password");
const length = 16;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "@#$%^&*()_+|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
let password = ""; // Use constants established above to create more randomness/greater pool of characters from each string
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // 26 characters 
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // 26 characters
    password += number[Math.floor(Math.random() * number.length)]; // 10 characters
    password += symbol[Math.floor(Math.random() * symbol.length)]; // 22 characters

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];       
        }
        passwordBox.value = password;
        }
                    
        function copyPassword(){
           passwordBox.select();
           document.execCommand("copy");
        }