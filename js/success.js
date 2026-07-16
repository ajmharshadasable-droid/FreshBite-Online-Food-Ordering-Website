const orderId = localStorage.getItem("orderId");
const customerName = localStorage.getItem("customerName");
const paymentMethod = localStorage.getItem("paymentMethod");
const orderTotal = localStorage.getItem("orderTotal");

document.getElementById("orderId").innerHTML = `
<strong>Order ID:</strong> ${orderId}<br>
<strong>Customer:</strong> ${customerName}<br>
<strong>Payment:</strong> ${paymentMethod}<br>
<strong>Total:</strong> ₹${orderTotal}
`;