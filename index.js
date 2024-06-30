const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnEL=document.getElementById("button")
let getpassword1El=document.getElementById("getpassword1")
let getpassword2El=document.getElementById("getpassword2")
let passwordLength = 10

btnEL.addEventListener("click", popupPassword)

function getCharacter() {
    let newCharacters = Math.floor(Math.random() * characters.length)
    return characters[newCharacters]
}//create new characters/

function createPassword() {
    let  password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += getCharacter()         
    }
    return password
}
//transform characters to a line of password//

function popupPassword() {
    getpassword1El.textContent=createPassword()
    getpassword2El.textContent=createPassword()
    }
//run it and get password twice. //
