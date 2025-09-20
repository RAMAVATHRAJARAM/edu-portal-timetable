const dateTime = document.getElementById('dateTime');

function updateDateTime(){
  dateTime.textContent = new Date().toLocaleString();
}

