<<<<<<< HEAD
// const myHeading=document.getElementById("test");
// myHeading.innerHTML="Bhai yrr hoga tujhse!!";


var firstName = document.getElementById("firstName");
var firstName = document.getElementById("lastName");
var firstName = document.getElementById("department");

window.addEventListener("DOMContentLoaded", (event) =>{
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var department = document.getElementById("department"); 
    
    function display(){ 
        let firstName=firstName.value;
        let lastName=lastName.value;
        
        greetme(firstName,lastName);
        function greetme(firstName, lastName){
            alert("Hello"+firstName+lastName);
        }
    }
});



function display(){
    let firstName=firstName.value
    let lastName=lastName.value
    
    greetme(firstName,lastName);
    function greetme(firstName, lastName){
        alert("Hello"+firstName+lastName);
    }
}


/*
function display() { 
    if(document.getElementById('male').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("male").value
            + " radio button checked";
    }
    else if(document.getElementById('female').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("female").value
            + " radio button checked";  
    }
    else if(document.getElementById('LGBTQ').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("LGBTQ").value
            + " radio button checked";  
    }
    else {
        alert("No radio button selected");
    }
}
=======
// const myHeading=document.getElementById("test");
// myHeading.innerHTML="Bhai yrr hoga tujhse!!";


var firstName = document.getElementById("firstName");
var firstName = document.getElementById("lastName");
var firstName = document.getElementById("department");

window.addEventListener("DOMContentLoaded", (event) =>{
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var department = document.getElementById("department"); 
    
    function display(){ 
        let firstName=firstName.value;
        let lastName=lastName.value;
        
        greetme(firstName,lastName);
        function greetme(firstName, lastName){
            alert("Hello"+firstName+lastName);
        }
    }
});



function display(){
    let firstName=firstName.value
    let lastName=lastName.value
    
    greetme(firstName,lastName);
    function greetme(firstName, lastName){
        alert("Hello"+firstName+lastName);
    }
}


/*
function display() { 
    if(document.getElementById('male').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("male").value
            + " radio button checked";
    }
    else if(document.getElementById('female').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("female").value
            + " radio button checked";  
    }
    else if(document.getElementById('LGBTQ').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("LGBTQ").value
            + " radio button checked";  
    }
    else {
        alert("No radio button selected");
    }
}
>>>>>>> 6f2d568e745431b8c3f4e7cf47335ef6a4ddcf5b
*/