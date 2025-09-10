const quotes = [
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs " },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon " },
    { text: "A bird doesn't sing because it has an answer, it sings because it has a song.", author: " Maya Angelou " },
    { text: "Happiness is not by chance, but by choice.", author: " Jim Rohn " },
    { text: "Good things happen to those who hustle.", author: "Anaïs Nin" },
    { text: "No guts, no story.", author: "Chris Brady" },
    { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { text: "Once you choose hope, anything’s possible.", author: "Christopher Reeve" },
    { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { text: "If you need inspiration, don’t do it.", author: "Elon Musk" },
    { text: "Inspiration is for amateurs. The rest of us just show up and get to work.", author: "Chuck Close" },
    { text: "When you have a dream, you’ve got to grab it and never let go.", author: "Carol Burnett" },
    { text: "Spread love everywhere you go. Let no one ever come without leaving happier.", author: "Mother Teresa." },
    { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
    { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
    { text: "Find out who you are and do it on purpose.", author: "Dolly Parton" },
    { text: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "Happiness often sneaks in through a door you didn’t know you left open.", author: "John Barrymore" },
    { text: "", author: "" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newBtn = document.getElementById('newQuote');
const addForm = document.getElementById('addQuoteForm');
const newText = document.getElementById('newText');
const newAuthor = document.getElementById('newAuthor');

let lastIndex = -1;

function pickRandom() {
    // Filter out quotes with empty text
    const validQuotes = quotes.filter(q => q.text && q.text.trim() !== '');
    if (validQuotes.length === 0) return { text: 'No quotes yet', author: '' };
    let i = Math.floor(Math.random() * validQuotes.length);
    // Find the index in the original array for lastIndex logic
    let originalIndex = quotes.indexOf(validQuotes[i]);
    if (validQuotes.length > 1) {
        while (originalIndex === lastIndex) {
            i = Math.floor(Math.random() * validQuotes.length);
            originalIndex = quotes.indexOf(validQuotes[i]);
        }
    }
    lastIndex = originalIndex;
    return validQuotes[i];
}

function showQuote(q) {
    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.textContent = '"' + q.text + '"';
        authorEl.textContent = q.author ? '— ' + q.author : '';
        quoteEl.style.opacity = 1;
    }, 200);
}

function newQuote() { showQuote(pickRandom()); }

newBtn.addEventListener('click', newQuote);
document.addEventListener('keydown', e => { if (e.key.toLowerCase() === 'n') newQuote(); });


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = newText.value.trim();
    const author = newAuthor.value.trim();
    if (!text) return;
    quotes.push({ text, author });
    newText.value = ''; newAuthor.value = '';
    showQuote({ text, author });
    lastIndex = quotes.length - 1;
});

window.addEventListener('load', newQuote);
