const announcementTitle = document.getElementById('announcementTitle');
const announcementDesc = document.getElementById('announcementDesc');
const addAnnouncementBtn = document.getElementById('addAnnouncementBtn');
const announcementsList = document.getElementById('announcementsList');

function loadAnnouncements() {
  db.ref('announcements').on('value', snap => {
    clearChildren(announcementsList);
    snap.forEach(a => {
      const val = a.val();
      const div = document.createElement('div');
      div.className = 'p-2 border rounded flex justify-between';
      div.innerHTML = `<div><b>${val.title}</b><br>${val.desc}</div>`;
      const del = document.createElement('button');
      del.textContent = 'Delete';
      del.className = 'bg-red-500 text-white px-2 rounded';
      del.addEventListener('click', () => db.ref('announcements/' + a.key).remove());
      div.appendChild(del);
      announcementsList.appendChild(div);
    });
  });
}

addAnnouncementBtn.addEventListener('click', () => {
  const t = announcementTitle.value.trim();
  const d = announcementDesc.value.trim();
  if (!t || !d) return;
  const obj = { title: t, desc: d };
  db.ref('announcements').push(obj).then(() => {
    announcementTitle.value = ''; announcementDesc.value = '';
  });
});

