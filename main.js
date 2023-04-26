import './style.css'

const quoteText = document.querySelector(".random-quote"),
quoteBtn = document.querySelector(".btn"),
authorName = document.querySelector(".name");


function randomQuote(){
    quoteBtn.classList.add("search");
    quoteBtn.innerText = "";
    fetch('http://api.quotable.io/random').then(response => response.json()).then(data => {
        quoteText.innerText = data.content;
        authorName.innerText = data.author;
        quoteBtn.classList.remove("search");
        quoteBtn.innerText = "";
    });
}


randomQuote();
quoteBtn.addEventListener('click', () =>{
  randomQuote();
});
