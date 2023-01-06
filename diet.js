//quote generator function
const generateQuote = function() {
  //quote list
  const quotes = [
    {
      quote: '"Weight Loss Dictats Don’t Apply To All."',
    },
    {
      quote: '"Carbohydrate Aversion Is Not Healthy."',
    },
    {
      quote: '"It’s Not Only What You Eat That Matters."',
    },
    {
      quote: '"Weekdays Aren’t For Punishing Yourself."',
    },
    {
      quote: '"Don’t Attach Moral Value To Food."',
    }

  ];
  //choose random number in the range of the maximum quote number
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  //get the quote by number
  document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
}

//get quote on load or refresh
window.onload = function() {
  generateQuote();
}






//BMI calculator 


const btn = document.getElementById("calculate");

btn.addEventListener("click", function() {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "normal";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "overweight";
  }
  if (BMI >= 30) {
    status = "obese";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Comment : You are <span id="comment" onclick="bmiLink()">${status}</span> !`;
});
