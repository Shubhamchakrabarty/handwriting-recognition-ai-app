from flask import Flask, request, jsonify
from PIL import Image
import io
import base64

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_image():
    data = request.get_json()
    image_data = base64.b64decode(data['image'])
    image = Image.open(io.BytesIO(image_data))
    # Here you will process the image with your AI model
    recognized_text = "Recognized text here"  # Placeholder
    return jsonify({'text': recognized_text})

if __name__ == '__main__':
    app.run(debug=True)
