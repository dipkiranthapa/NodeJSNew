// External Java Script

const { jsx } = require("react/jsx-runtime");

// let i = 0;
// for (let i = 0; i < 10; i++){
//   if (i % 2 === 0)
//   console.log(i);
// }



// let name = ["dipkiran", "thapa"];
// name[0] = "dip";
// console.log(name);





/* Normal Function  Comment
function myFunction(a,b){
  let c = (a+b);
  console.log(c);
}
myFunction(1,5); 

*/

// Expression Function


// let score = 10;
// score = 20;
// score = 100;
// console.log (score);

// backticks```
// let hi = "Shyam";
// let greeting = `hello ${hi}`;
// console.log(hi);




js

const btn = document.getElementById("approvalBtn");

btn.addEventListener("click", function () {
  btn.textContent = "Approved";
  btn.classList.remove("pending");
  btn.classList.add("approved");
  btn.disabled = true; // optional: prevent clicking again
});


------------------------

CSS

.pending {
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.approved {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: default;
}


======================

HTMLAllCollection
<button id="approvalBtn" class="pending">
  Approval Pending
</button>
