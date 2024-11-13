# CSC 473 - Blackboard+
Welcome to Blackboard+, the all in one dashboard that presents all of your Blackboard content without having to navigate 50+ redirects

# Basic Setup
Before you run our app, here's some basic startup info:

```bash
npm install
```
To install all of the backend dependencies, you'll need to first make a virtual environment like so :
```bash
py -m venv .venv
```
Next, you'll want to activate the venv like so:
```bash
.venv/Scripts/activate
```
Now navigate to the `backend` directory.
Then, you'll want to install all backend dependencies:
```bash
pip install -r requirements.txt
```

## Getting Started

First, run the frontend inside the app directory:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Then, run the development server inside the backend directory:
```bash
py app.py
```
