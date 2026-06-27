const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');

const profilePicture = document.getElementById('profilePicture');
const profilePictureInput = document.getElementById('profilePictureInput');
const profileSaveBtn = document.getElementById('profileSaveBtn');

function loadProfilePicture() {
  const saved = localStorage.getItem('musicProfilePictureDataUrl');
  if (saved && profilePicture) {
    profilePicture.src = saved;
  } else if (profilePicture) {
    profilePicture.src = profilePicture.getAttribute('src') || './../file_0000000051a07243a80e35afafe7732c.png';
  }
}

function isLoggedIn(){
  return localStorage.getItem('isLoggedIn') === 'true';
}

function getEmail(){
  return localStorage.getItem('loginEmail') || '';
}
function getUsername(){
  return localStorage.getItem('loginUsername') || '';
}
function getPassword(){
  return localStorage.getItem('loginPassword') || '';
}

if (!isLoggedIn()){
  window.location.href = './Login.html';
  // redirect to login
} else {
  loadProfilePicture();

  const email = getEmail();
  const username = getUsername();
  const password = getPassword();

  welcomeText.textContent = email ? `Email Address: ${email}` : 'You are logged in.';
  const userNameEl = document.getElementById('UserName');
  if (userNameEl) userNameEl.textContent = username ? `Username: ${username}` : '';

  const userPasswordEl = document.getElementById('UserPassword');
  if (userPasswordEl) userPasswordEl.textContent = password ? `Password: ${password}` : '';
}

logoutBtn?.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('loginEmail');
  localStorage.removeItem('loginUsername');
  localStorage.removeItem('loginPassword');
  localStorage.removeItem('musicProfilePictureDataUrl');
  window.location.href = './index.html';
});

function handleSelectedFile(file){
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = String(reader.result || '');
    if (!dataUrl) return;
    if (profilePicture) profilePicture.src = dataUrl;
    localStorage.setItem('musicProfilePictureDataUrl', dataUrl);
  };
  reader.readAsDataURL(file);
}

profilePictureInput?.addEventListener('change', () => {
  const file = profilePictureInput.files?.[0];
  handleSelectedFile(file);
});

profileSaveBtn?.addEventListener('click', () => {
  const file = profilePictureInput?.files?.[0];
  handleSelectedFile(file);
});

