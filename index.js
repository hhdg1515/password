const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let btnEL=document.getElementById("button");
let getpassword1El=document.getElementById("getpassword1");
let getpassword2El=document.getElementById("getpassword2");
let passwordLength = 16;

function getpasswords() {
    let password1="";
    let password2="";
    for (let i = 0; i < passwordLength; i++){
        let newpassword = Math.floor(Math.random() * characters.length);
        password1+=characters[newpassword];
        password2+=characters[newpassword];
        }
        getpassword1El.textContent=password1;
        getpassword2El.textContent=password2;
}

 btnEL.addEventListener("click", function() {
     getpasswords()
})
