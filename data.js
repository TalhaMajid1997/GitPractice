// Array of random quotes
const quotes = [
  "The early bird catches the worm!",
  "Life is what happens when you're busy making other plans.",
  "Keep calm and code on.",
  "Do or do not. There is no try.",
  "In the middle of difficulty lies opportunity.",
];

// Function to pick a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to randomly decide if it adds an emoji
function decorateQuote(quote) {
  const emojis = ["✨", "🔥", "🌈", "💡", "🎉"];
  return Math.random() > 0.5
    ? `${quote} ${emojis[Math.floor(Math.random() * emojis.length)]}`
    : quote;
}

// Display the quote in an alert
alert(decorateQuote(getRandomQuote()));
