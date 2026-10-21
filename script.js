
const form = document.getElementById('word-form');
const input = document.getElementById('word-input');
const results = document.getElementById('results');
const exampleButtons = document.querySelectorAll('.example-chip');

// Reverse the word
function wordReverser(word) {
    return word.split('').reverse().join('');
}

// Count vowels
function countVowels(word) {
    const vowels = 'aeiou';
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

// Analyze the word and display the results
function analyzeWord(word) {
    const reversedWord = wordReverser(word);

    const isPalindrome =
        word.toLowerCase() === reversedWord.toLowerCase();

    const vowelCount = countVowels(word);
    const characterCount = word.length;

    // Remove the previous results
    results.replaceChildren();

    // Create and display the result heading
    const heading = document.createElement('h3');
    heading.textContent = 'Your Results';
    results.appendChild(heading);

    // Display original word
    const original = document.createElement('p');
    original.textContent = `Original word: ${word}`;
    results.appendChild(original);

    // Display reversed word
    const reversed = document.createElement('p');
    reversed.textContent = `Reversed word: ${reversedWord}`;
    results.appendChild(reversed);

    // Display palindrome status
    const palindrome = document.createElement('p');
    palindrome.textContent = isPalindrome
        ? 'This is a palindrome!'
        : 'This is not a palindrome.';
    results.appendChild(palindrome);

    // Display vowel count
    const vowels = document.createElement('p');
    vowels.textContent = `Vowels: ${vowelCount}`;
    results.appendChild(vowels);

    // Display character count
    const characters = document.createElement('p');
    characters.textContent = `Characters: ${characterCount}`;
    results.appendChild(characters);
}

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputWord = input.value.trim();

    if (inputWord === '') {
        input.focus();
        return;
    }

    analyzeWord(inputWord);
});

// Handle the four example buttons
exampleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        input.value = button.dataset.word;
        analyzeWord(input.value);
    });
});
