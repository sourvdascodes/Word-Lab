
let button = document.getElementById('analyze-btn');

button.addEventListener('click', function () {
    let inputWord = document.getElementById('word-input').value;

    function wordReverser(inputWord) {
        let isReversed = inputWord.split('').reverse().join('');

        if (isReversed !== inputWord) {
            return isReversed;
        } else {
            return `The ${inputWord} word is a palindrome.`;
        }
    }

    let result = wordReverser(inputWord);
    console.log(result);
});
