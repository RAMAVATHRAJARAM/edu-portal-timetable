const eventsList = document.getElementById('eventsList');
let allEvents = [];

function loadEvents() {
  db.ref('events').once('value').then(snapshot=>{
    allEvents = [];
    snapshot.forEach(child=>{
      allEvents.push({id: child.key, ...child.val()});
    });
    displayEvents('all');
  });
}

function displayEvents(filter){
  eventsList.innerHTML='';
  const now = new Date();
  allEvents.forEach(e=>{
    const start = new Date(e.startDate);
    const end = new Date(e.endDate);
    let status = 'Expired';
    if(now >= start && now <= end) status='Active';
    if(filter==='active' && status!=='Active') return;
    if(filter==='expired' && status!=='Expired') return;

    const card = document.createElement('div');
    card.className='bg-white dark:bg-gray-700 rounded shadow p-4 flex flex-col hover:shadow-lg transition-shadow';
    card.innerHTML=`
      ${e.imageURL?`<img src=\"${e.imageURL}\" class=\"w-full h-40 object-cover rounded mb-2\" alt=\"Event\">`:''}
      <h3 class=\"font-bold text-lg mb-1 text-blue-700 dark:text-blue-300\">${e.title}</h3>
      <p class=\"text-sm mb-1\">${e.description}</p>
      <p class=\"text-sm font-medium ${status==='Active'?'text-green-600':'text-red-600'}\">Status: ${status}</p>
      <p class=\"text-xs text-gray-500\">From ${e.startDate} to ${e.endDate}</p>
    `;
    eventsList.appendChild(card);
  });
}

document.getElementById('filterActive').addEventListener('click', ()=>displayEvents('active'));
document.getElementById('filterExpired').addEventListener('click', ()=>displayEvents('expired'));
document.getElementById('filterAll').addEventListener('click', ()=>displayEvents('all'));

