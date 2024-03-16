const textInputField = document.getElementById("text-input");
const checkButtonAction = document.getElementById("check-btn");
const resultField = document.getElementById("result");

checkButtonAction.addEventListener("click", function() {
   const originalText = textInputField.value;
   const inputValue = textInputField.value.toLowerCase().replace(/[^a-z0-9]/g, '');
   const reversedValue = inputValue.split('').reverse().join('');
    if (inputValue === "") {
        alert("Please input a value");
    } else  if (inputValue === reversedValue) {
      resultField.innerText = "' " + originalText + " '" + " - is a palindrome";
    } else {
      resultField.innerText = "' " + originalText + " '" + " - is not a palindrome";
    }
});

document.addEventListener('DOMContentLoaded', function() {
   const palindromeText = document.querySelector('#container2 p');
   const originalText = palindromeText.textContent;
   const isOriginal = true;

   function toggleText() {
       if (isOriginal) {
           palindromeText.textContent = "'saippuakivikauppias' — longest palindrome word in the world";
       } else {
           palindromeText.textContent = originalText;
       }
       isOriginal = !isOriginal;
   }

   setInterval(toggleText, 10000);
});