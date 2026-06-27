const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the music front-end files
const MUSIC_DIR = path.join(__dirname, 'music-site');
app.use(express.static(MUSIC_DIR));

// Serve mp3 files from the project root (where your imported MP3s live).
// This enables direct playback via `/music/<filename>.mp3`.
const ROOT_DIR = __dirname;
app.use('/music', express.static(ROOT_DIR));

function normalizeTitleLikeClient(title){
  // Make it tolerant to URL-encoded titles coming from the frontend.
  return String(title || '')
    .toLowerCase()
    .replace(/\.mp3$/i,'')
    .replace(/_/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function normalizeBaseToTitle(base){
  // base example: "Asake_-_Lonely_At_The_Top" -> "Asake - Lonely At The Top"
  let s = String(base);
  s = s.replace(/_/g,' ');
  s = s.replace(/\s-\s/g,' - ');
  s = s.replace(/\s\-\s/g,' - ');
  s = s.replace(/\s+/g,' ').trim();
  return s;
}

function normalizeTitleForCompare(s){
  // One more normalization step so that "-" spacing differences don’t break matching.
  return normalizeTitleLikeClient(s)
    .replace(/\s-\s/g,'-')
    .replace(/\s\-\s/g,'-')
    .replace(/\s+/g,' ')
    .trim();
}


  // Basic download endpoint compatible with music-site/DownloadMusic.js
  // Expects: /download?type=music&id=<music name>
  // id is currently passed as the `name` query param (see DownloadMusic.js)
  app.get('/download', (req, res) => {
    const type = String(req.query.type || 'music');
    const id = String(req.query.id || '');

    if (!id) return res.status(400).send('Missing id');
    if (type !== 'music') return res.status(400).send(`Unsupported type: ${type}`);

    // Build mapping from YOUR mp3 files in the project root.
    const mp3Files = fs.readdirSync(ROOT_DIR).filter(f => f.toLowerCase().endsWith('.mp3'));

    // If the frontend sends an exact filename, serve it directly (most reliable).
    const direct = mp3Files.find(f => f.toLowerCase() === id.toLowerCase());
    if (direct) {
      const fullPath = path.join(ROOT_DIR, direct);
      return res.download(fullPath, direct, (err) => {
        if (err && !res.headersSent) res.status(500).send('Download failed');
      });
    }

    // Otherwise fallback to title matching.
    let bestMatch = null;
    const wanted = normalizeTitleForCompare(id);

    for (const file of mp3Files) {
      const base = file.replace(/\.mp3$/i, '');
      const derivedTitle = normalizeBaseToTitle(base);

      const comparable = normalizeTitleForCompare(derivedTitle);
      // Also compare against the raw base converted to spaces (tolerates dash/title cleaning differences).
      const comparableRaw = normalizeTitleForCompare(base.replace(/_/g, ' '));

      if (comparable === wanted || comparableRaw === wanted) {
        bestMatch = file;
        break;
      }
    }

    if (!bestMatch) {
      return res.status(404).send(`No mp3 found for id (title/filename)="${id}"`);
    }

    const fullPath = path.join(ROOT_DIR, bestMatch);
    if (!fs.existsSync(fullPath)) return res.status(404).send(`File not found: ${bestMatch}`);

    res.download(fullPath, bestMatch, (err) => {
      if (err && !res.headersSent) res.status(500).send('Download failed');
    });
  });



// Endpoint used by Search page to build the list of all mp3 files.
// Returns JSON array: ["file1.mp3", "file2.mp3", ...]
// NOTE: This must be registered before the server starts.
app.get('/music/index', (req, res) => {
  const mp3Files = fs.readdirSync(ROOT_DIR).filter(f => f.toLowerCase().endsWith('.mp3'));
  res.json(mp3Files);
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Music site served from /music-site as static files (and also at /)`);
});


