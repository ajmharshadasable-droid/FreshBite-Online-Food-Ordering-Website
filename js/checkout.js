// Get subtotal from localStorage
let subtotal = Number(localStorage.getItem("cartTotal")) || 0;

const deliveryCharge = 40;
let discount = 0;

// Calculate Total
let total = subtotal + deliveryCharge;

// Show Order Summary
document.getElementById("checkoutSubtotal").innerText = "₹" + subtotal;
document.getElementById("checkoutTotal").innerText = "₹" + total;


// ================= Coupon Code =================

document.getElementById("applyCoupon").addEventListener("click", function () {

    const code = document.getElementById("couponCode").value.toUpperCase();

    if (code === "FRESH10") {

        discount = 10;

        document.getElementById("couponMessage").innerText =
            "✅ Coupon Applied! 10% OFF";

    }

    else if (code === "WELCOME20") {

        discount = 20;

        document.getElementById("couponMessage").innerText =
            "✅ Coupon Applied! 20% OFF";

    }

    else {

        discount = 0;

        document.getElementById("couponMessage").innerText =
            "❌ Invalid Coupon";

    }

    total = Math.round(
        subtotal - (subtotal * discount / 100) + deliveryCharge
    );

    document.getElementById("checkoutTotal").innerText = "₹" + total;

});


// ================= Place Order =================

document.getElementById("checkoutForm").addEventListener("submit", function (e) {

    e.preventDefault();

    // Form Data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pincode = document.getElementById("pincode").value;

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    // Delivery Time
    const deliveryTime = document.getElementById("deliveryTime").value;

    // Generate Order ID
    const orderId = "FB" + Math.floor(Math.random() * 900000 + 100000);

    // Save Details
    localStorage.setItem("orderId", orderId);
    localStorage.setItem("customerName", name);
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("customerPhone", phone);
    localStorage.setItem("customerAddress", address);
    localStorage.setItem("customerCity", city);
    localStorage.setItem("customerPincode", pincode);
    localStorage.setItem("paymentMethod", payment);
    localStorage.setItem("deliveryTime", deliveryTime);
    localStorage.setItem("orderTotal", total);

    // Clear Cart
    localStorage.removeItem("cartTotal");

    // Reset Form
    document.getElementById("checkoutForm").reset();

    // Redirect
    window.location.href = "success.html";

});