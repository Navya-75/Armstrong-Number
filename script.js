function checkArmstrong() {
  const num = document.getElementById("number").value;
  if (num === "" || isNaN(num)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  const numStr = num.toString();
  const power = numStr.length;
  let sum = 0;

  for (let digit of numStr) {
    sum += Math.pow(parseInt(digit), power);
  }

  if (sum === parseInt(num)) {
    document.getElementById("result").innerText = num + " is an Armstrong Number.";
  } else {
    document.getElementById("result").innerText = num + " is NOT an Armstrong Number.";
  }
}
