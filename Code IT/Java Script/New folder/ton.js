function calculateTotal() {
  const trip = document.getElementById("trip").value;
  const tonPrice = document.getElementById("ton").value;

  if (trip && tonPrice) {
    const total = trip * tonPrice;
    document.getElementById("total").innerText = 
      "Total: " + total + " AED";
  } else {
    document.getElementById("total").innerText = 
      "Total: 0 AED";
  }
}



