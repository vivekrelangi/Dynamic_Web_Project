function myDisplayer(some) {
    // document.getElementById("demo").innerHTML = some;
    console.log(some)
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);