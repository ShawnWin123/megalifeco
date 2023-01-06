
//quote generator function
const generateQuote = function() {
  //quote list
    const quotes = [
    {
        quote: '"The Only One That is stopping you is yourself"',
    },
    {
        quote: '"The way to get started is to quit talking and begin doing."',
    },
    {
        quote: '"You will face many defeats in life, but never let yourself be defeated."',
    },
    {
      quote: '"The only impossible journey is the one you never begin."',
    },
    {
      quote: '"Life is ours to be spent, not to be saved."',
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






