document.getElementById('scan-button').addEventListener('click', () => {
    const imageInput = document.getElementById('image-input');
    imageInput.removeAttribute('capture'); // Ensure capture attribute is removed
    imageInput.setAttribute('capture', 'environment'); // Set capture to environment
    imageInput.click();
});

document.getElementById('choose-file-button').addEventListener('click', () => {
    const imageInput = document.getElementById('image-input');
    imageInput.removeAttribute('capture'); // Ensure capture attribute is removed
    imageInput.click();
});

document.getElementById('image-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const imageBase64 = reader.result.split(',')[1];
            fetch('/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image: imageBase64 })
            })
            .then(response => response.json())
            .then(data => {
                const outputDiv = document.getElementById('output');
                outputDiv.innerHTML = `<p>${data.text}</p>`;
            })
            .catch(error => console.error('Error:', error));
        };
        reader.readAsDataURL(file);
    }
});
