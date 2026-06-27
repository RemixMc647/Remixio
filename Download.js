(function(){
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') || 'music';
  const name = params.get('name') || '';

  const status = document.getElementById('status');
  const fallback = document.getElementById('fallback');
  const metaType = document.getElementById('meta-type');
  const metaId = document.getElementById('meta-id');

  if (metaType) metaType.textContent = type || '—';
  if (metaId) metaId.textContent = name || '—';

  const origin = window.location && window.location.origin ? window.location.origin : '';
  const base = origin || 'http://localhost:3000';

  // IMPORTANT:
  // Existing backend expects /download?type=...&id=...
  // We pass the music filename/id through `id`.
  // By default this server only knows about movie ids.
  // You must extend server.js with a `music` mapping (see result notes).
  // If the backend doesn't have a `music` mapping, the main server will 404.
  // Add music mappings to `server.js` if/when you have matching filenames.

  const url = `${base}/download?type=${encodeURIComponent(type)}&id=${encodeURIComponent(name)}`;

  if (fallback) fallback.href = url;
  if (status) status.textContent = `Downloading…`;

  const win = window.open(url, '_blank');
  if (!win) window.location.href = url;
})();

