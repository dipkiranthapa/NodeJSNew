let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];

let result = document.getElementById("result");

/* forEach – display products */
function showProducts() {
  result.innerHTML = "";
  products.forEach(p => {
    result.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
  });
}

/* filter – expensive products */
function showExpensive() {
  result.innerHTML = "";
  let expensive = products.filter(p => p.price > 1000);

  expensive.forEach(p => {
    result.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
  });
}

/* map – discount */
function applyDiscount() {
  result.innerHTML = "";
  let discounted = products.map(p => ({
    name: p.name,
    price: p.price * 0.9
  }));

  discounted.forEach(p => {
    result.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
  });
}

/* find – single product */
function findProduct() {
  result.innerHTML = "";
  let name = document.getElementById("productName").value;

  let product = products.find(p => p.name === name);

  result.innerHTML = product
    ? `${product.name} costs ₹${product.price}`
    : "Product not found ❌";
}
