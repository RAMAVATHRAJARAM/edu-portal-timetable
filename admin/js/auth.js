const loginDiv = document.getElementById('loginDiv');
const adminDiv = document.getElementById('adminDiv');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');

loginBtn.addEventListener('click', () => {
  loginError.textContent = '';
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  if (!email || !password) { loginError.textContent = 'Email and password are required.'; return; }
  loginBtn.disabled = true;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => { loginBtn.disabled = false; })
    .catch(err => { loginBtn.disabled = false; loginError.textContent = err.message; });
});

logoutBtn.addEventListener('click', () => auth.signOut());

auth.onAuthStateChanged(user => {
  if (user) {
    loginDiv.classList.add('hidden');
    adminDiv.classList.remove('hidden');
    loadSections();
    loadTimetableForSelection();
    loadAdminEvents();
    loadAnnouncements();
  } else {
    adminDiv.classList.add('hidden');
    loginDiv.classList.remove('hidden');
  }
});

