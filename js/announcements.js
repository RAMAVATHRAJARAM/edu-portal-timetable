const announcementsList = document.getElementById('announcementsList');

function formatDateTime(ts){ return new Date(ts).toLocaleString(); }

function initAnnouncements(){
  db.ref('announcements').on('value', snapshot=>{
    const announcements = snapshot.val() || {};
    announcementsList.innerHTML='';
    const sorted = Object.entries(announcements).sort((a,b)=>b[1].timestamp - a[1].timestamp);
    sorted.forEach(([key, a])=>{
      const div = document.createElement('div');
      div.className = "border-b pb-2 mb-2 border-gray-300 dark:border-gray-600";
      div.innerHTML = `
        <h3 class="font-semibold text-blue-700 dark:text-blue-300">${a.title}</h3>
        <p class="text-sm">${a.description}</p>
        <p class="text-xs text-gray-500">${formatDateTime(a.timestamp)}</p>
      `;
      announcementsList.appendChild(div);
    });
  });
}

