




function myFunction(a, b){
  document.getElementById("text").innerHTML = a + b;
}

document.getElementById("btn").addEventListener("click", function (){
  myFunction(1, 200);
});



