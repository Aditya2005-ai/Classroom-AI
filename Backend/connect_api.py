from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import logging
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO)

# Configure Gemini API key
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))  # Replace with your actual key

# Gemini helper function
def call_gemini(prompt, model_name='gemini-2.5-flash'):
    try:
        model = genai.GenerativeModel(model_name)
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        logging.error(f"Gemini Error: {e}")
        return str(e)
    
# ✅ Notes Generator route (newly add this)
@app.route('/gemini', methods=['POST'])
def notes_generator():
    data = request.json
    prompt = data.get('prompt', '').strip()
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    result = call_gemini(prompt)
    return jsonify({'response': result})
    

# ✅ Health Check
@app.route('/')
def health():
    return jsonify({"status": "API is running 🚀"}), 200

# ✅ AI Response (used by Voice-to-Text and Image-to-Text tools)
@app.route('/ai-respond', methods=['POST'])
def ai_respond():
    data = request.json
    prompt = data.get('prompt', '').strip()
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    response = call_gemini(prompt)
    return jsonify({'response': response})

# ✅ Grammar Checker
@app.route('/grammar', methods=['POST'])
def grammar():
    data = request.json
    text = data.get('text', '').strip()
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    prompt = f"Correct the grammar and spelling of the following paragraph:\n\n{text}\n\nReturn only the corrected version."
    result = call_gemini(prompt)
    return jsonify({'corrected': result})

# ✅ Essay Writer
@app.route('/essay', methods=['POST'])
def essay():
    data = request.json
    topic = data.get('topic', '').strip()
    if not topic:
        return jsonify({'error': 'No topic provided'}), 400

    prompt = f"Write a well-structured essay of 300–400 words on the topic: \"{topic}\""
    result = call_gemini(prompt)
    return jsonify({'essay': result})

# ✅ Summarizer
@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    text = data.get('text', '').strip()
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    prompt = (
    "Please provide a concise summary of the following text in 3-4 sentences. "
    "Focus only on the key points and remove any repetition or filler:\n\n"
    f"{text}"
    )

    result = call_gemini(prompt)
    return jsonify({'summary': result})

# ✅ Code Generator
@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt', '').strip()
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400

    result = call_gemini(prompt, model_name='gemini-2.5-flash')
    return jsonify({'code': result})

# ✅ Code Explanation
@app.route('/explain', methods=['POST'])
def explain():
    data = request.json
    code = data.get('prompt', '').strip()
    if not code:
        return jsonify({'error': 'No code provided'}), 400

    prompt = f"Explain the following code in simple terms:\n\n{code}"
    result = call_gemini(prompt)
    return jsonify({'summary': result})

# ✅ Code Debugger
@app.route('/debug', methods=['POST'])
def debug():
    data = request.json
    code = data.get('prompt', '').strip()
    if not code:
        return jsonify({'error': 'No code provided'}), 400

    prompt = f"Debug the following code and return only the corrected version:\n\n{code}"
    result = call_gemini(prompt)
    return jsonify({'fixed_code': result})

# ✅ Paragraphizer
@app.route('/paragraphize', methods=['POST'])
def paragraphize():
    data = request.json
    text = data.get('text', '').strip()
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    prompt = f"Rewrite the following rough or broken text into clean, clear, well-structured paragraphs:\n\n{text}"
    result = call_gemini(prompt)
    return jsonify({'paragraph': result})

# ✅ Run Server
if __name__ == '__main__':
    try:
        app.run(debug=True, host='0.0.0.0', port=5000)
    except Exception as e:
        logging.error(f"Error starting server: {e}")
