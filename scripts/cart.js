
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const modal = document.getElementById("cart-modal");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function openCart() {
  modal.style.display = "flex";
  renderCart();
}

function closeCart() {
  modal.style.display = "none";
}

function renderCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const priceNum = parseInt(item.price.replace("₱",""));
    total += priceNum * item.qty;

    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <div>
          <button onclick="changeQty(${index}, -1)">−</button>
          ${item.qty}
          <button onclick="changeQty(${index}, 1)">+</button>
          <button onclick="removeItem(${index})">❌</button>
        </div>
      </div>
    `;
  });

  cartTotal.innerText = "₱" + total;
}

function changeQty(index, amount) {
  cart[index].qty += amount;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// ADD BUTTON LOGIC
document.querySelectorAll(".price-container button").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".order-container");
    const name = item.querySelector("h4").innerText;
    const price = item.querySelector("span").innerText;

    const existing = cart.find(i => i.name === name);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    saveCart();
    openCart();
  });
});

// CLOSE BUTTON
document.getElementById("close-cart").onclick = closeCart;

// PLACE ORDER
document.getElementById("place-order").onclick = () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully");
  cart = [];
  saveCart();
  renderCxart();
  closeCart();
};