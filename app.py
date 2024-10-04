from flask import Flask, render_template, request, jsonify
from database import generate_unique_code

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_code', methods=['POST'])
def generate_code():
    data = request.json
    category1 = data.get('category1')
    category2 = data.get('category2')

    if category1 and category2:
        code = generate_unique_code(category1, category2)
        return jsonify({'generated_code': code})
    else:
        return jsonify({'error': 'Invalid input'}), 400

if __name__ == '__main__':
    app.run(debug=True)
