const input = document.getElementById('inputText');
const output = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', function() {
    output.textContent = input.value;
});

const input2 = document.getElementById('inputText2');
const output2 = document.getElementById('outputText2');

input2.addEventListener('input', function() {
    output2.textContent = input2.value;
});
