//quote generator function
const generateQuote = function() {
  //quote list
  const quotes = [
    {
      quote: '"Sometimes the most productive thing you can do is relax."',
    },
    {
      quote: '"The more relaxed you get, the better you do."',
    },
    {
      quote: '"Inhale peace, Exhale stress."',
    },
    {
      quote: '"It’s all about finding the calm in the chaos."',
    },
    {
      quote: '"Your mind is like water. When it is agitated it becomes difficult to see. But if you allow it to settle it becomes clear."',
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