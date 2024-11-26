const form = document.getElementById("form");
const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const updateUI = () => {
  output.textContent = "";
  const inputValue = numInput.value;
  const validationError = validateInput(inputValue);
  if (validationError) {
    output.textContent = validationError;
    output.classList.add("alert");
    return;
  }
  output.classList.remove("alert");
  const num = parseInt(inputValue, 10);
  const romanNumeral = convertToRoman(num);
  output.classList.remove("hidden");
  output.textContent = romanNumeral;
};

const convertToRoman = (num) => {
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  romanMap.forEach(({ value, numeral }) => {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  });
  return result;
};

const validateInput = (inp) => {
  const num = parseInt(inp, 10);
  output.classList.remove("hidden");
  return !inp
    ? "Please enter a valid number"
    : isNaN(num)
    ? "Please enter a valid number"
    : num < 1
    ? "Please enter a number greater than or equal to 1"
    : num > 3999
    ? "Please enter a number less than or equal to 3999"
    : null;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  updateUI();
});

convertBtn.addEventListener("click", () => {
  updateUI();
});
