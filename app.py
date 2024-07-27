from flask import Flask, request, jsonify, send_from_directory
from PIL import Image
import io
import base64
import os

app = Flask(__name__, static_folder='static')

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    data = request.get_json()
    image_data = base64.b64decode(data['image'])
    image = Image.open(io.BytesIO(image_data))
    # Placeholder for image processing and AI model
    recognized_text = "Recognized text here"  # Replace with actual text recognition logic
    return jsonify({'text': recognized_text})

if __name__ == '__main__':
    app.run(debug=True)
