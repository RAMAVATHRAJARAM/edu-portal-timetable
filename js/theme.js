const toggleBtn = document.getElementById("themeToggle");
const toggleBtnMobile = document.getElementById("themeToggleMobile");
const html = document.documentElement;

const savedTheme = localStorage.getItem('siteTheme');
if(savedTheme==='dark') html.classList.add('dark');

function updateThemeBtns(){
  const isDark = html.classList.contains('dark');
  toggleBtn.textContent = isDark?'☀️':'🌙';
  if(toggleBtnMobile) toggleBtnMobile.textContent = isDark?'☀️':'🌙';
  localStorage.setItem('siteTheme', isDark?'dark':'light');
}

function toggleTheme() { html.classList.toggle('dark'); updateThemeBtns(); }

function initTheme(){
  toggleBtn.addEventListener("click", toggleTheme);
  if(toggleBtnMobile) toggleBtnMobile.addEventListener("click", toggleTheme);
  updateThemeBtns();
}

