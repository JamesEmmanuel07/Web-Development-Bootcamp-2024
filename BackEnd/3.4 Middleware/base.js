// // Import the 'generate-random-emoji' module and assign it to the variable 'randomEmoji'
// // const randomEmoji = require('generate-random-emoji');

// import randomEmoji from "generate-random-emoji";

// // Call the 'generateEmojis()' function from the 'randomEmoji' object with an integer argument 
// // to generate one random emojis,

// const randomEmojis = randomEmoji.generateEmojis(3);

// // Output of the randomly generated emojis
// console.log(randomEmojis);

// // The output will be an array with one object containing information about the randomly generated emoji.
// // The object will have four properties: 'code', 'name', 'image', and 'category', which provide information about the emoji.
// // [{ code: 'U+1F36B', name: 'chocolate bar', image: '🍫', category: 'Food & Drink'}]

import getSomeCoolEmojis from "get-some-cool-emojis";

console.log(getSomeCoolEmojis(5)); // return 5 emojis 🎉✨🔧🐛💩