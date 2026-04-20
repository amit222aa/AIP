from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes







@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        message = data.get('message')

        if not name or not email or not message:
            return jsonify({'error': 'Name, email, and message are required'}), 400

        client = MongoClient("mongodb://localhost:27017/")
        db = client.royal_palace
        collection = db.contacts
        contact_data = {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message,
            'timestamp': request.json.get('timestamp', '')
        }
        result = collection.insert_one(contact_data)
        client.close()
        print(f"Inserted contact with ID: {result.inserted_id}")

        print(f"Contact received: {name} ({email})")  # Server log

        return jsonify({'message': 'Contact submitted successfully'}), 200

    except Exception as e:
        print(f"Error: {str(e)}")  # Server log
        return jsonify({'error': str(e)}), 500

@app.route('/contacts', methods=['GET'])
def get_contacts():
    try:
        client = MongoClient("mongodb://localhost:27017/")
        db = client.royal_palace
        collection = db.contacts
        contacts = list(collection.find({}, {'_id': 0}))
        client.close()
        return jsonify(contacts)
    except Exception as e:
        print(f"Error fetching contacts: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/health')
def health():
    return jsonify({'status': 'Server running on port 5000'}), 200

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5000")
    print("Test health: http://localhost:5000/health")
    app.run(debug=True, port=5000)
