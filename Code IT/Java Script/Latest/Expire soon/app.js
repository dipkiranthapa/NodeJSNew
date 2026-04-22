const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  const expireDate = new Date();
  const today = new Date();

  const diffTime = expireDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  text.textContent = diffTime;

  // Expired
  if (diffDays < 0) {
    text.style.backgroundColor = "yellow";
    text.textContent += " (Expired)";
  }

  // 4 days before expire
  else if (diffDays <= 4) {
    text.style.color = "red";
    text.textContent += " (Expire Very Soon)";
  }

  // 10 days before expire
  else if (diffDays <= 10) {
    text.style.color = "orange";
    text.textContent += " (Expire Soon)";
  } else {
    text.style.color = "green";
    text.textContent += " (Valid)";
  }
});
