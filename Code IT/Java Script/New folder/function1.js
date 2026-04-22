// // //if else in function
// // function myFunction(){
// //   let hours = new Date().getHours;
// //   let timing = "";

// //   if (hours < 12){
// //     timing = "Good Moring";

// //   }

// //   else if (hours < 18)  {
// //     timing = "Good Evening";
// //   }

// //   else{
// //     timing = "good night";
// //   }

// //   return timing;
// // }

// // console.log(myFunction());


// // //For each
// // let box = ["ram","hari","Shyam"];
// // box.forEach((e)=>{
// // console.log(e);
// // });

// // // Transfer Data

// // let box = ["shyam", "hari", "kiran"];
// // let newBox = [];

// // box.forEach(b => {
// //   newBox.push("Mr " + b);
// // });

// // console.log(newBox);





// // let userName = ["hari", "Shyam", "Subash"];

// // userName.forEach((b)=>{
// // console.log(b);
// // });


// // Arrow Funcation

// let sayHello = (a,b) =>{
// let c = a * b;
// console.log(c);
// }
// sayHello(5,9);



// // Default Parameter
// function myFunction (name){
//   console.log("Hlo " + name);
// }

// myFunction("hari")

// // Function Express
// let myFunction = function (a,b){
//   return a * b;
// };
// console.log(myFunction(4,2));


// let count  = 1;
// while( count <= 10){
//   console.log("dipkiran" + count);
//   count++;
// }


// let users = [
//   {username : "admin", password : "1234"},
//   {username: "user1",  password: "1234"}
// ];

// let loginUser = users.find(
//   u => u.username === "admin" && u.password === "1234"
  
// )

// if(loginUser){
//   console.log("Loain Succesfull");
// }

// else{
//   console.log( "invalid Creditials");
// }


// console.log(typeof users);


// let user = [
//   {username : "admin", password: "1234"},

// ];



 const button = document.getElementById("toggleBtn");
 const text = document.getElementById("mytext");

  // Add click event to toggle text
    button.addEventListener("click", function() {
    if (text.style.display === "none") {
      text.style.display = "block";      // Show text
      button.textContent = "Hide Text";   // Update button text
    } else {
      text.style.display = "none";       // Hide text
      button.textContent = "Show Text";  // Update button text
    }
  });