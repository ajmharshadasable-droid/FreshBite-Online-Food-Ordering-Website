const deliveryCharge = 40;

const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

const cartCards = document.querySelectorAll(".cart-card");

// Update Total Function
function updateTotal() {

    let subtotal = 0;

    document.querySelectorAll(".cart-card").forEach(card => {

        const qty = parseInt(card.querySelector(".qty").innerText);
        const price = parseInt(card.querySelector(".price").dataset.price);

        subtotal += qty * price;

    });

    subtotalElement.innerText = "₹" + subtotal;
    totalElement.innerText = "₹" + (subtotal + deliveryCharge);

    // Save subtotal for checkout page
    localStorage.setItem("cartTotal", subtotal);

}

// Quantity & Remove Buttons
cartCards.forEach(card => {

    const plus = card.querySelector(".plus");
    const minus = card.querySelector(".minus");
    const qty = card.querySelector(".qty");
    const remove = card.querySelector(".remove-btn");

    // Increase Quantity
    plus.addEventListener("click", () => {

        qty.innerText = parseInt(qty.innerText) + 1;

        updateTotal();

    });

    // Decrease Quantity
    minus.addEventListener("click", () => {

        if (parseInt(qty.innerText) > 1) {

            qty.innerText = parseInt(qty.innerText) - 1;

            updateTotal();

        }

    });

    // Remove Item
    remove.addEventListener("click", () => {

        card.remove();

        updateTotal();

    });

});

// Checkout Button
document.getElementById("checkoutBtn").addEventListener("click", () => {

    // Save latest subtotal before checkout
    let subtotal = 0;

    document.querySelectorAll(".cart-card").forEach(card => {

        const qty = parseInt(card.querySelector(".qty").innerText);
        const price = parseInt(card.querySelector(".price").dataset.price);

        subtotal += qty * price;

    });

    localStorage.setItem("cartTotal", subtotal);

    window.location.href = "checkout.html";

});

// Initial Total
updateTotal();