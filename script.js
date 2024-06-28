let decimal = document.querySelector(".decimal");
let binary = document.querySelector(".binary");
let alertRed = document.querySelector(".wrong-number");

decimal.addEventListener("input", () => {
  let decimalVal = decimal.value;
  let binaryNum = "";
  while (decimalVal > 0) {
    binaryNum = (decimalVal % 2) + binaryNum;
    decimalVal = Math.floor(decimalVal / 2);
  }
  binary.value = binaryNum;
});

binary.addEventListener("input", () => {
  let binaryVal = binary.value;
  let stringConv = binaryVal.toString();
  let result = 0;
  for (let i = 0; i < stringConv.length; i++) {
    if (stringConv[i] === "0" || stringConv[i] === "1") {
      result += Number(stringConv[i]) * Math.pow(2, stringConv.length - 1 - i);
      decimal.value = result;
    } else {
      alertRed.style.display = "block";
    }
  }
  if (stringConv.length === 0) {
    alertRed.style.display = "none";
  }
});
