// Auto-generated music map helpers for the music site.
// This file is intentionally kept logic-only (no DOM), so it can be reused by Play/Search.

(function(){
  // Normalize an mp3 filename base -> a “clean” display title used in URLs.
  // Example: "Asake_-_Lonely_At_The_Top" -> "Asake - Lonely At The Top"
  function normalizeBaseToTitle(base){
    let s = String(base);

    // Replace underscores with spaces
    s = s.replace(/_/g, ' ');

    // Replace common dash patterns
    s = s.replace(/\s-\s/g, ' - ');
    s = s.replace(/\s-\s/g, ' - ');
    s = s.replace(/\s\-\s/g, ' - ');

    // Clean bracket/extension leftovers
    s = s.replace(/\s*\(.*?\)\s*/g, (m)=>m); // keep parentheses content
    s = s.replace(/\s+/g, ' ').trim();

    // Specific common patterns (tolerant)
    s = s.replace(/\s\-\s/g, ' - ');

    // Title-case lightly: we will only capitalize words that are fully lowercase,
    // but keep artist styling (Asake, BNXN, etc.) as-is when present.
    // For simplicity and stability, just return trimmed string.
    return s;
  }

  // Normalize a URL-provided “title” back to an mp3 base token.
  // Because filenames are more structured than titles, we primarily do a forward mapping:
  // title -> filename (computed server-side). This function exists for fallback matching.
  function normalizeTitleLooseToComparable(title){
    return String(title || '')
      .toLowerCase()
      .replace(/\.mp3$/i,'')
      .replace(/_/g,' ')
      .replace(/\s+/g,' ')
      .trim();
  }

  window.MUSIC_MAP_UTILS = {
    normalizeBaseToTitle,
    normalizeTitleLooseToComparable,
  };
})();

