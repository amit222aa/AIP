# Real Estate Website - MongoDB Connected

## Step-by-Step MongoDB Connection Guide (Windows)

### 1. MongoDB Connection String (Already Set!)
**Current**: `mongodb://localhost:27017/` (line in app.py)

**To Change** (e.g., MongoDB Atlas cloud):
Edit app.py → `MongoClient("YOUR_MONGODB_URI_HERE")`

**Atlas Setup**:
- https://www.mongodb.com/atlas → Sign up → Create cluster → Connect → Copy "mongodb+srv://..." URI
- Replace in app.py → Restart `python app.py`

**Local** (default - recommended):
- Download/install: https://www.mongodb.com/try/download/community
- Run `mongod` → Ready!

### 2. Install Python Dependencies
Open **new terminal** in project:
```
pip install -r requirements.txt
```

### 3. Start MongoDB
**New terminal**:
```
mongod
```
(Keeps running - data in `royal_palace.contacts`)

### 4. Start Backend Server
**New terminal**:
```
python app.py
```
See: `Starting Flask server on http://localhost:5000`

### 5. Test Backend
Browser: http://localhost:5000/health → `{"status": "Server running on port 5000"}`

### 6. Start Frontend
- VSCode: Install "Live Server" extension
- Right-click `contact.html` → **Open with Live Server** (port ~5500)

### 7. Test Full Flow
- Go to contact form
- Fill: Name/Email/Phone/Message → Submit
- See: "Thank you... Saved to MongoDB"
- Terminal log: "Contact received..."
- Verify DB: New terminal `mongosh` → `use royal_palace; db.contacts.find()`

## Troubleshooting
| Error | Fix |
|-------|-----|
| Failed to fetch | Backend off? `python app.py` + `mongod` |
| MongoNetworkError | `mongod` not running |
| AuthenticationFailed | Wrong URI/password in app.py |
| Port 5000 busy | `taskkill /F /IM python.exe` |
| CORS | Fixed (Flask-CORS enabled)

**Connected!** Backend saves contacts to MongoDB. Backend running now - follow steps 1-7.
