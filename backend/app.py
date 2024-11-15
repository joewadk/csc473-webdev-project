from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client, Client
import os
from dotenv import load_dotenv
from typing import List

load_dotenv(os.path.join(os.path.dirname(__file__), '../frontend/.env'))

app = Flask(__name__) #intiate the flask app
CORS(app)

#env stuff
supabase_url = os.getenv("VITE_SUPABASE_URL")
supabase_key = os.getenv("VITE_SUPABASE_ANON_KEY")

supabase: Client = create_client(supabase_url, supabase_key) #create the supabase client

@app.route('/getCourses', methods=['GET']) #route to get all courses
def get_courses():
    try:
        response = supabase.table('courses').select('*').execute()
        #print(response.data)
        return jsonify(response.data),200
    except Exception:
        return jsonify({"error": "Can't find courses"}),500

if __name__ == '__main__': #main
    app.run(port=5000, debug=True)