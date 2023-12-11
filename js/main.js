var quotes = [
    `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    ― Marilyn Monroe`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,
    `“So many books, so little time.”
    ― Frank Zappa`,
    `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch`,
    `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”
    ― William W. Purke`
]
function displayQuotes(){
    document.getElementById("output").innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
}