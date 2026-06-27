(function(){
  const form = document.getElementById('login-form');
  const msg = document.getElementById('login-message');

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

  function normalizeEmail(email){
    return String(email || '').trim().toLowerCase();
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

    const email = normalizeEmail(document.getElementById('loginEmail')?.value);
    const password = String(document.getElementById('loginPassword')?.value || '');

    if (!email || !password){
      showMessage('Please enter your email and password.', true);
      return;
    }

    const users = getUsers();
    const user = users.find(u => normalizeEmail(u.email) === email);

    if (!user){
      showMessage('No account found for this email.', true);
      return;
    }

    if (user.password !== password){
      showMessage('Incorrect password.', true);
      return;
    }

    setLoggedIn({ email, username: user.username, password: user.password });
    window.location.href = './Profile.html';
  });
})();

