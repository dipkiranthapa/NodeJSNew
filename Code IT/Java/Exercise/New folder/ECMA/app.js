//  Password attempt using while loop
/*  
let password = "admin123";
let attempt = 3;

while (attempt > 0 ){
  let password = prompt ("Enter your Password");

  if (password === "admin123"){
    alert("Login Successfull");
    break;
  }
  else{
    attempt--;
    alert("wrong password. Attempts left" + attempt);
  }
}

if(attempt===0){
  alert("Account Locked");
}

*/

// let total = 0;
// let price = 1;

// while (price !== 0) {
//   price = Number(prompt("Enter item price (0 to finish):"));
//   total = total + price;
// }

// alert("Total bill: $" + total);



// let secretNumber = 7;
// let guess = 0;

// while (guess !== secretNumber) {
//   guess = Number(prompt("Guess the number (1-10):"));
// }

// alert("Correct! You guessed it.");


// let tank = 0;

// while (tank < 50) {
//   let fuel = Number(prompt("Add fuel (liters):"));
//   tank = tank + fuel;
// }

// alert("Tank is full!");


// let tank = 0;

// while (tank < 50){
//  let fuel = Number (prompt ("Add Fuel"));
//   tank = tank + fuel;
// }

// alert("tank full");
function checkResult() {
  let marks = Number(document.getElementById("marks").value);
  let output = document.getElementById("output");

  output.innerText = "Checking result...";
  output.style.color = "black";

  resultPromise(marks)
    .then(function (message) {
      output.style.color = "green";
      output.innerText = message;
    })
    .catch(function (error) {
      output.style.color = "red";
      output.innerText = error;
    });
}

function resultPromise(marks) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 50 && marks <= 100) {
        resolve("🎉 Pass! Congratulations");
      } else if (marks >= 0 && marks < 50) {
        reject("❌ Fail! Try again");
      } else {
        reject("⚠️ Invalid marks");
      }
    }, 1500);
  });
}
