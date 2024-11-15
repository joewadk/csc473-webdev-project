from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client, Client
import os
from dotenv import load_dotenv
import json
from typing import List

load_dotenv(os.path.join(os.path.dirname(__file__), '../frontend/.env'))

app = Flask(__name__)
CORS(app)

# Initialize Supabase client
supabase_url = os.getenv("VITE_SUPABASE_URL")
supabase_key = os.getenv("VITE_SUPABASE_ANON_KEY")

supabase: Client = create_client(supabase_url, supabase_key)

@app.route('/courses', methods=['GET'])
def get_courses():
    try:
        response = supabase.table('courses').select('*').execute()
        #print(response.data)
        return jsonify(response.data),200
    except Exception:
        return jsonify({"error": "Can't find courses"}),500

if __name__ == '__main__':
    app.run(port=5000, debug=True)