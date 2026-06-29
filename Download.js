(function(){

  const status = document.getElementById('status');
  const fallback = document.getElementById('fallback');
  const metaType = document.getElementById('meta-type');
  const metaId = document.getElementById('meta-id');

  if (metaType) metaType.textContent = type || '—';
  if (metaId) metaId.textContent = name || '—';

  
  if (fallback) fallback.href = url;
  if (status) status.textContent = `Downloading…`;

  const win = window.open(url, '_blank');
  if (!win) window.location.href = url;
})();

