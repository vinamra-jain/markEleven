const dob = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const resultArea = document.querySelector("#result");

const calculateSum = (dateOfBirth) => {
  let sum = 0;
  for (let i = 0; i < dateOfBirth.length; i++) {
    let digit = parseInt(dob.value.charAt(i));
    if (!isNaN(digit)) {
      sum += digit;
    }
  }
  return sum;
};

checkBtn.addEventListener("click", () => {
  let output = "";
  if (dob.value && luckyNumber.value) {
    const sum = calculateSum(dob.value);
    if (sum % luckyNumber.value === 0) {
      output = "Your Birthday is Lucky";
    } else {
      output = "Your Birthday is Not Lucky, so sad. Better Luck Next Life!";
    }
  } else {
    output = "Enter values in both the fields";
  }

  resultArea.innerText = output;
});
