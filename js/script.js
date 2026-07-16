let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

}

topBtn.onclick = function () {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
function searchfood(){
    let food = document.getElementById("search").value;
if(food == ""){
    alert("please Enter food name.");
}else{
    alert("searching for "+ food);
}}
function ordernow(){
    alert("your order has been placed succesfully!");
}
function login(){
    alert("login page coming soon!");
}
function likefood()  {

    let heart = document.getElementById("heart");

    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");

    heart.style.color = "red";
}
window.onload = function () {
    alert("Welcome to FreshBite!");
}
function topfunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function searchfood() {

    let search = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".food-card");

    cards.forEach(function(card) {

        let name = card.getAttribute("data-name");

        if (name.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}