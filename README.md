# Python Neon Arena — Production Multiplayer Setup

This project is a premium quiz game with realtime online multiplayer for GitHub Pages using Firebase Realtime Database.

## 1) Project Structure

```text
.
├─ index.html
├─ style.css
├─ script.js
├─ firebase.rules.json
├─ firebase.json
├─ assets/
├─ sounds/
└─ certificates/
```

## 2) Create Firebase Project

1. Open Firebase Console: https://console.firebase.google.com
2. Click **Add project**
3. Enter project name (example: `python-neon-arena`)
4. Disable Google Analytics if you do not need it

## 3) Enable Anonymous Auth

1. Go to **Authentication** → **Sign-in method**
2. Enable **Anonymous**
3. Save

## 4) Enable Realtime Database

1. Go to **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose region close to players
4. Start in locked mode (recommended)
5. Publish rules from `firebase.rules.json`

## 5) Insert FIREBASE_CONFIG

Edit `script.js` (top of file):

```js
const FIREBASE_CONFIG = window.PY_ARENA_FIREBASE_CONFIG || {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
```

Optional safer approach: define `window.PY_ARENA_FIREBASE_CONFIG` before `script.js` in `index.html`.

## 6) Firebase Rules + Config Deploy

Install Firebase CLI:

```bash
npm i -g firebase-tools
firebase login
firebase use --add
```

Deploy database rules:

```bash
firebase deploy --only database
```

`firebase.json` already points to:
- `database.rules`: `firebase.rules.json`
- hosting public root: project root (`.`)

## 7) Deploy to GitHub Pages

1. Push repository to GitHub
2. Open repo settings → **Pages**
3. Source: `Deploy from a branch`
4. Branch: `main` (or `master`), folder `/ (root)`
5. Wait until Pages URL is live

Multiplayer works on GitHub Pages because backend is Firebase (cloud realtime), not local broadcast.

## 8) Optional Firebase Hosting

If you want Firebase Hosting:

```bash
firebase init hosting
firebase deploy --only hosting
```

## 9) How to Test Multiplayer

1. Open site in two different browsers/devices
2. Player A: **Create Room** (gets room code)
3. Player B: enter same room code → **Join Room**
4. Both click **Ready**
5. Host starts match (minimum 2 ready players)
6. Check realtime sync:
   - score
   - combo
   - XP
   - mistakes
   - live leaderboard
7. Finish match and verify podium ranking by total score

## 10) Room Flow

1. Create room (`AB12CD`)
2. Join by room code
3. Waiting room with player statuses
4. Ready gating (2+ ready required)
5. Match start
6. Live events + leaderboard
7. Final ranking + MVP popup

## 11) Production Safety Features Implemented

- owner/host write boundaries in rules
- player can write only own `/players/{playerId}` data
- combo/score/xp range validation
- anti-spam event rate limiting (client)
- anti-cheat delta checks for remote states (client)
- duplicate session detection
- reconnect indicators + status badge
- AFK status updates
- auto cleanup for empty rooms
- listener unsubscription on leave

## 12) Notes

- Realtime Database rules cannot do perfect anti-cheat math for all game logic.
- For high-stakes competitive integrity, move scoring authority to a trusted backend (Cloud Functions/server).
- Current setup is production-ready for lightweight public multiplayer on static hosting.
