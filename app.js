


function generate(){
let password ="";
const uppercase = document.getElementById("Uppercase").checked ;
const Lowercase = document.getElementById("Lowercase").checked ;
const Numbers = document.getElementById("Numbers").checked ;
const specialchars = document.getElementById("Special_characters").checked ;
const length = document.getElementById("length").value ;

if(uppercase|| Lowercase||Numbers||specialchars){
    const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const low = up.toLowerCase();
    const num = "0123456789";
    const spch = "!@#$%^&*_+?";
    let rawpassword ="";

    rawpassword += uppercase?up:"";
    rawpassword += Lowercase?low:"";
    rawpassword += Numbers?num:"";
    rawpassword += specialchars?spch:"";
    

    for(let i =0 ; i<length ; i++){
        const index = Math.floor(Math.random()*rawpassword.length);
        password += rawpassword[index];
        
        
    }
    
    document.getElementById("results").textContent = `Your Generated Password Is : ${password}`;
}
else{
    alert("Please select atleast one parameters")
}
}

