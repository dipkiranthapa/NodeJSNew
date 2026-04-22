window.addEventListener("load", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
// Auto Popup After Few Seconds (Better UX)
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("popup").style.display = "block";
  }, 50000); // 3 seconds delay
});

//Bonus: Auto Close After 5 Seconds
setTimeout(function () {
  document.getElementById("popup").style.display = "none";
}, 10000);
