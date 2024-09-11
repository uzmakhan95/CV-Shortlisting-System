document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const resultDiv = document.getElementById('result');

    resultDiv.textContent = 'Processing...';

    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const result = doc.querySelector('.result').textContent;
        resultDiv.textContent = result;
    })
    .catch(error => {
        resultDiv.textContent = 'An error occurred. Please try again.';
    });
});
