// Search Function

function searchFood() {

    let input = document.getElementById("searchFood").value.toLowerCase();

    let cards = document.querySelectorAll(".food-card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}


// Favourite Heart

let hearts = document.querySelectorAll(".heart");

hearts.forEach(function(heart){

    heart.addEventListener("click",function(){

        heart.classList.toggle("fa-regular");
        heart.classList.toggle("fa-solid");

    });

});


// Add to Cart

let buttons = document.querySelectorAll(".price-cart button");

buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.innerHTML = "✓ Added";

        btn.style.background = "green";

        setTimeout(function(){

            btn.innerHTML = "Add to Cart";

            btn.style.background = "#ff5a00";

        },1500);

    });

});