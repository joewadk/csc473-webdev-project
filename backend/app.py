from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client, Client
import os
from pathlib import Path
from dotenv import load_dotenv

# Get the absolute path to the backend directory (where this file is)
BACKEND_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = BACKEND_DIR.parent / 'frontend'

# List of possible .env locations in order of preference
env_paths = [
    BACKEND_DIR / '.env',              # backend/.env
    FRONTEND_DIR / '.env',             # frontend/.env
    Path.cwd() / '.env'                # .env in current directory
]

# Try to load .env from each possible location
env_loaded = False
for env_path in env_paths:
    if env_path.exists():
        print(f"Loading .env from: {env_path}")
        load_dotenv(env_path)
        env_loaded = True
        break

if not env_loaded:
    print("Warning: No .env file found!")

app = Flask(__name__) #intiate the flask app
CORS(app)

#env stuff
supabase_url = os.getenv("VITE_SUPABASE_URL")
supabase_key = os.getenv("VITE_SUPABASE_ANON_KEY")

print(f"Supabase URL exists: {bool(supabase_url)}")
print(f"Supabase key exists: {bool(supabase_key)}")

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