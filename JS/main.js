// Calling Variables From DOM
let displayValue = document.querySelectorAll(".num");
let interval = 3000;

// For Each Loops
displayValue.forEach((singleVal)=>{
  let startVal = 0;
  let dataVal = Number(singleVal.getAttribute("data-val"));
  let duration = Math.floor(interval / dataVal);
  
  let counter = setInterval((() =>{
    startVal++;
    singleVal.textContent = startVal;
    if (startVal == dataVal) {
      clearInterval(counter)
    }
  }),duration)
});