function main() {
  loadSections();       // timetable
  loadEvents();         // events
  initAnnouncements();  // announcements
  updateDateTime();     
  setInterval(updateDateTime, 1000);
  initTheme();          
  initMenu();           
}

document.addEventListener("DOMContentLoaded", main);

