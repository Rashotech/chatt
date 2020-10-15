
/** JS Code For Hamburger Menu **/
/** Declaring Variables **/
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const chat_box = document.getElementById("chatbox");

// chat_box.style.display = "none";

const chatboxButton = document.getElementById("chatBoxButton");
const logInPage = document.getElementById("log-page");
const signUpPage = document.getElementById("sign-page");
const logInTab = document.querySelector("#login-tab");
const signUpTab = document.querySelector("#signup-tab");


/** Toggle mobile menu **/
function toggleMenu() {
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-bars\"></i>";
    } else {
        navbar.classList.add("show");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-times\"></i>";
    }
}
 
/** Event Listener **/
toggle.addEventListener("click", toggleMenu, false);

//##Declaration of functions for faq answers##//

function answers1(){
    let x= document.getElementById("answer1")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers2(){
    let x= document.getElementById("answer2")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers3(){
    let x= document.getElementById("answer3")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers4(){
    let x= document.getElementById("answer4")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers5(){
    let x= document.getElementById("answer5")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers6(){
    let x= document.getElementById("answer6")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers7(){
    let x= document.getElementById("answer7")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function toggleChatBox(e){

    e.preventDefault();

    if(chat_box.style.display == "none"){
        chat_box.style.display = "block"
    }else{
        chat_box.style.display = "none"
    }
    
}

chatboxButton.addEventListener("click", toggleChatBox, false);

// toggleChatBox();

// LOGIN AND SIGN UP TAB

function tabForm(param) {
    if(param === 'signup'){
        logInTab.style.display = "none";
        signUpTab.style.display = "block";
        signUpPage.classList.add("current");
        logInPage.classList.remove("current");
    } else {
        logInTab.style.display = "block";
        signUpTab.style.display = "none";
        logInPage.classList.add("current");
        signUpPage.classList.remove("current");
    }
}

function reveal(x){
    if(document.getElementById(x).style.display === "none"){
        document.getElementById(x).style.display = "block";
    } else {
        document.getElementById(x).style.display = "none";
    }
}