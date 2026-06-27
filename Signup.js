(function(){
  const form = document.getElementById('signup-form');
  const msg = document.getElementById('signup-message');

  function showMessage(text, isError){
    if (!msg) return;
    msg.textContent = text || '';
    msg.style.color = isError ? 'rgba(255,120,120,1)' : 'rgba(0,212,255,0.95)';
  }

  function getUsers(){
    try {
      const raw = localStorage.getItem('musicUsers');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function setUsers(users){
    localStorage.setItem('musicUsers', JSON.stringify(users));
  }

  function normalizeEmail(email){
    return String(email || '').trim().toLowerCase();
  }

  function safeUsername(s){
    return String(s || '').trim();
  }

  function setLoggedIn({email, username, password}){
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loginEmail', email);
    localStorage.setItem('loginUsername', username);
    localStorage.setItem('loginPassword', password);
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    showMessage('', false);

    const email = normalizeEmail(document.getElementById('email')?.value);
    const username = safeUsername(document.getElementById('username')?.value);
    const password = String(document.getElementById('password')?.value || '');
    const confirmPassword = String(document.getElementById('confirmPassword')?.value || '');

    if (!email || !username || !password || !confirmPassword){
      showMessage('Please fill in all fields.', true);
      return;
    }

    if (password.length < 6){
      showMessage('Password must be at least 6 characters.', true);
      return;
    }

    if (password !== confirmPassword){
      showMessage('Passwords do not match.', true);
      return;
    }

    const users = getUsers();
    const existing = users.find(u => normalizeEmail(u.email) === email);
    if (existing){
      showMessage('An account with that email already exists.', true);
      return;
    }

    users.push({ email, username, password });
    setUsers(users);

    setLoggedIn({ email, username, password });
    window.location.href = './Profile.html';
  });
})();

