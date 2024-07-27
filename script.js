document.getElementById('scan-button').addEventListener('click', () => {
    document.getElementById('image-input').click();
});

document.getElementById('image-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const image = new Image();
            image.src = reader.result;
            document.getElementById('output').appendChild(image);
            // Here you will send the image to the backend for processing
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById('scan-button').addEventListener('click', () => {
    document.getElementById('image-input').click();
});

document.getElementById('image-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const image = new Image();
            image.src = reader.result;
            document.getElementById('output').appendChild(image);
            // Here you will send the image to the backend for processing
        };
        reader.readAsDataURL(file);
    }
});
