🧠 Simple CRUD API with Express
A lightweight and easy-to-understand CRUD API built using Express.js and body-parser. This project stores in-memory data (no database), making it perfect for learning how basic HTTP methods work.

✨ Features
🔍 GET: Retrieve all data

➕ POST: Add new data

❌ DELETE: Remove data by index

🧠 Uses in-memory array (no database)

🧪 Simple and clean structure

🚀 Getting Started
📦 Prerequisites
Node.js (v14 or higher)

npm (comes with Node.js)

📥 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/crud-api-express.git
cd crud-api-express
Install dependencies:

bash
Copy
Edit
npm install
🏃 Run the Server
bash
Copy
Edit
node api.js
Server will start on:

arduino
Copy
Edit
http://localhost:3000
🔧 API Endpoints
GET /
Returns the current data array.

POST /
Adds a new entry.

Body format (x-www-form-urlencoded):

ini
Copy
Edit
name=John&role=Engineer
DELETE /
Deletes entry by index.

Body format (x-www-form-urlencoded):

ini
Copy
Edit
index=0
⚠️ Data is not persisted — restarting the server resets everything.

📁 Project Structure
csharp
Copy
Edit

'''
CRUD/
├── api.js # Main Express server
├── node_modules/ # Dependencies
├── package.json # Project config
└── package-lock.json
📌 Future Improvements
Add PUT support to update existing entries

Connect to MongoDB or another database

Add request validation

Enable CORS and error handling middleware

🧑‍💻 Author
Arnav Chaturvedi
Feel free to connect on LinkedIn or contribute via PR!
