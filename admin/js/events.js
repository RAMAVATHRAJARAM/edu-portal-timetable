const eventTitle = document.getElementById('eventTitle');
const eventImageURL = document.getElementById('eventImageURL');
const eventDesc = document.getElementById('eventDesc');
const eventStartDate = document.getElementById('eventStartDate');
const eventEndDate = document.getElementById('eventEndDate');
const addEventBtn = document.getElementById('addEventBtn');
const eventsList = document.getElementById('eventsList');

function loadAdminEvents() {
  db.ref('events').on('value', snap => {
    clearChildren(eventsList);
    snap.forEach(ev => {
      const val = ev.val();
      const div = document.createElement('div');
      div.className = 'p-2 border rounded flex justify-between';
      div.innerHTML = `<div><b>${val.title}</b><br>${val.desc}</div>`;
      const del = document.createElement('button');
      del.textContent = 'Delete';
      del.className = 'bg-red-500 text-white px-2 rounded';
      del.addEventListener('click', () => db.ref('events/' + ev.key).remove());
      div.appendChild(del);
      eventsList.appendChild(div);
    });
  });
}

addEventBtn.addEventListener('click', () => {
  const t = eventTitle.value.trim();
  const d = eventDesc.value.trim();
  if (!t || !d) return;
  const obj = {
    title: t,
    desc: d,
    image: eventImageURL.value.trim() || '',
    start: eventStartDate.value,
    end: eventEndDate.value
  };
  db.ref('events').push(obj).then(() => {
    eventTitle.value = ''; eventDesc.value = ''; eventImageURL.value = '';
    eventStartDate.value = ''; eventEndDate.value = '';
  });
});

