const quotes = [
  {
    quote: "Dreams come true. Without that possibility, nature would not incite us to have them.",
    author: "John Updike",
  },
  {
    quote: "Failure is a detour; Not a dead-end street.",
    author: "Zig Ziglar",
  },
  {
    quote: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "First, think. Second, believe. Third, dream. And finally, dare.",
    author: "Walt Disney",
  },
  {
    quote: "Nothing is stronger than habit.",
    author: "Publius Naso Ovidius",
  },
  {
    quote: "There is no substitue for hard work.",
    author: "Thomas A.Edison",
  },
  {
    quote: "The real secret of success is enthusiasm.",
    author: "Walter Percy Chrysler",
  },
  {
    quote: "We can do anything we want to if we stick to it long enough.",
    author: "Helen Keller",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The darkest hours are just before dawn.",
    author: "",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
