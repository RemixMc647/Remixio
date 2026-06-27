# Music Website (Separated)

This folder contains a music-themed website that mirrors the UI/style structure of the existing movie website, but is intended to be kept fully separate.

Files in this folder:
- `index.html` (Music Home)
- `Trending.html` (Popular Tracks/Albums)
- `Library.html` (Albums / Playlists)
- `Play.html` (Audio player)
- `Search.html` (Search)
- `Download.html` (Download entry page hooked to existing backend endpoint)
- `Profile.html` (Profile UI using localStorage like the movie site)
- Corresponding `.css` and `.js` files for the above pages.

> Note: The backend server logic (`server.js`) in the main project is reused only via URL endpoints.
> The front-end pages here do not link into the movie-site folder.

