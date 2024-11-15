import os
import json
from supabase import create_client, Client
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '../frontend/.env')) #load the .env file from the frontend folder
supabase_url = os.getenv("VITE_SUPABASE_URL")
supabase_key = os.getenv("VITE_SUPABASE_ANON_KEY")
url: str = supabase_url
key: str = supabase_key
supabase: Client = create_client(url, key)
response = supabase.table("courses").select("name").execute()
response_json = json.dumps(response.data, indent=2)

print(type(response_json))