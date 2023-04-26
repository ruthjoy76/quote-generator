import './style.css'

const quoteText = document.querySelector(".random-quote"),
quoteBtn = document.querySelector(".btn"),
authorName = document.querySelector(".name");


function randomQuote(){
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          quoteText.textContent = `“${data.content}”`;
          authorName.textContent = `-${data.author}-`; 
        });
  }

randomQuote();
quoteBtn.addEventListener('click', () =>{
  randomQuote();
});
