
const form = document.getElementById('word-form');
const input = document.getElementById('word-input');
const results = document.getElementById('results');
const exampleButtons = document.querySelectorAll('.example-chip');

function wordReverser(word) {
    return word.split('').reverse().join('');
}

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

function analyzeWord(word) {
    const reversedWord = wordReverser(word);
    const isPalindrome = word.toLowerCase() === reversedWord.toLowerCase();
    const vowelCount = countVowels(word);
    const characterCount = word.length;

    results.replaceChildren();

    const resultTitle = document.createElement('p');
    resultTitle.textContent = 'ANALYSIS RESULT';
    results.appendChild(resultTitle);

    const original = document.createElement('p');
    original.textContent = `Original word: ${word}`;
    results.appendChild(original);

    const reversed = document.createElement('p');
    reversed.textContent = `Reversed word: ${reversedWord}`;
    results.appendChild(reversed);

    const palindrome = document.createElement('p');
    palindrome.textContent = isPalindrome
        ? 'This is a palindrome!'
        : 'This is not a palindrome.';
    results.appendChild(palindrome);

    const vowels = document.createElement('p');
    vowels.textContent = `Vowels: ${vowelCount}`;
    results.appendChild(vowels);

    const characters = document.createElement('p');
    characters.textContent = `Characters: ${characterCount}`;
    results.appendChild(characters);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputWord = input.value.trim();

    if (inputWord === '') {
        results.textContent = 'Please enter a word first.';
        return;
    }

    analyzeWord(inputWord);
});

exampleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        input.value = button.dataset.word;
        analyzeWord(input.value);
    });
});
