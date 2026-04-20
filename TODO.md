# MongoDB Integration - Fixed "Failed to fetch"

## Completed ✅
- [x] Backend connected (app.py → MongoDB localhost:27017/royal_palace.contacts)
- [x] Frontend JS updated: Relative URL `/submit-contact`, timestamp, loading spinner, detailed error handling (CORS/fetch/Mongo errors)
- [x] Windows-compatible setup instructions

## Test Steps (Run these!)
1. **Install deps**: `pip install -r requirements.txt`
2. **Start MongoDB**: Install MongoDB if needed, run `mongod` in new terminal
3. **Start Backend** (new terminal): `python app.py` → Visit http://localhost:5000/health (should show "Server running")
4. **Frontend**: Use VSCode Live Server on project folder (Right-click index.html → Open with Live Server, usually port 5500)
5. **Test**: Go to contact.html → Submit form → Success alert + data in MongoDB
6. **Verify DB**: Mongo shell `use royal_palace; db.contacts.find();` or Compass

## Troubleshooting "Failed to fetch"
- Backend not running? Run `python app.py`
- MongoDB down? Run `mongod`
- CORS? Already enabled in app.py
- Port conflict? Kill processes on 5000, rerun
- Check browser console (F12) for exact error

Server logs contacts on submit. Ready!
