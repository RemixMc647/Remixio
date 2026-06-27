# Deploy Music Site (music-site) with Downloads

This repo now includes a minimal Node/Express backend that supports:
- Static hosting of `music-site/*`
- GET `/download?type=music&id=<Music Name>` used by `music-site/DownloadMusic.js`

## 1) Add your audio files
Place the mp3 files into:
- `music-site/midnight-pulse.mp3`
- `music-site/neon-streets.mp3`
- `music-site/golden-hour-ep.mp3`
- `music-site/skyline-drifter.mp3`
- `music-site/rooftop-symphony.mp3`
- `music-site/city-bloom.mp3`

If your filenames differ, update the `musicFileMap` in `server.js`.

## 2) Run locally
```bash
npm install
npm start
```
Open:
- http://localhost:3000/index.html

Try a download link:
- http://localhost:3000/download?type=music&id=Midnight%20Pulse

## 3) Deploy online
Use any Node-capable host (Render/Railway/Fly/DigitalOcean).

- Set the start command to: `npm start`
- Ensure Node version supports CommonJS
- Make sure your deployment includes the `music-site/` folder and mp3 files

Note: Static serving is done by `express.static(music-site)`.

