let cart = [];

function addToCart(name, price) {
  const item = cart.find((p) => p.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();
}

function updateQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty === 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <div class="cart-item">
        <span>${item.name} ($${item.price})</span>
        <div>
          <button onclick="updateQty(${index}, -1)">-</button>
          ${item.qty}
          <button onclick="updateQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
  });
}

function calculateTotal() {
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.qty;
  });

  // Coupon
  let discount = 0;
  const coupon = document.getElementById("coupon").value;
  if (coupon === "SAVE10") discount = subtotal * 0.1;

  const afterDiscount = subtotal - discount;

  // Tax
  const taxType = document.getElementById("taxType").value;
  const taxRate = taxType === "gst" ? 0.05 : 0.1;
  const tax = afterDiscount * taxRate;

  // Shipping
  const shipping = subtotal > 500 ? 0 : 50;

  const total = afterDiscount + tax + shipping;

  document.getElementById("subtotal").innerText = `Subtotal: $${subtotal}`;
  document.getElementById("discount").innerText = `Discount: $${discount}`;
  document.getElementById("tax").innerText = `Tax: $${tax.toFixed(2)}`;
  document.getElementById("shipping").innerText = `Shipping: $${shipping}`;
  document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}

// Click Add to Cart → item added or quantity increased

// + / - buttons manage quantity

// Coupon applies discount

// GST / VAT switch changes tax

// Shipping free above threshold
