//Simple Function
function sayHello (a,b){
  let c = (a + b);
  console.log (c);
}

//Function Expression

let sayHello = function (a, b){
  let c = (a + b);
  console.log(c);
}

// Arrow Function
let sayHello = (a,b) = >{
  let c = (a + b);
  console.log(c);
}



function greet (name, age, gender){
  return `Hello ${name}! you are ${age} years old ${gender}`;
}

document.getElementById("demo").innerHTML = greet ("jhon", 21 , "male");