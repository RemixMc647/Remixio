 # TODO — Railway deployment fixes (keep working behavior)

- [x] Update `MusicHome.html` mp3 sources to use `/music/<filename>.mp3` absolute paths
- [x] Update `Search.js` so it passes the exact mp3 filename to `Play.html`
- [x] Update `Play.js` so it streams from `/music/<filename>.mp3` reliably
- [ ] (If needed) Update `server.js` `/download` matching robustness, without breaking existing behavior
- [x] Test locally with `npm start` and verify: Home playback, Search → Play, Download flow

