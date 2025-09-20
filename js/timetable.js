const sectionSelect = document.getElementById('section');
const daySelect = document.getElementById('day');
const viewBtn = document.getElementById('viewBtn');
const timetableDiv = document.getElementById('timetableDiv');

function loadSections() {
  db.ref('sections').once('value').then(snapshot=>{
    const sections = snapshot.val() || {};
    sectionSelect.innerHTML = '<option value="">-- Choose Section --</option>';
    for(const sec in sections){
      const opt = document.createElement('option');
      opt.value = sec;
      opt.textContent = sec;
      sectionSelect.appendChild(opt);
    }
    const savedSection = localStorage.getItem('selectedSection');
    if(savedSection && sections[savedSection]){
      sectionSelect.value = savedSection;
      autoSelectDayAndLoad();
    }
  });
}

function autoSelectDayAndLoad(){
  const today = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const todayName = days[today.getDay()];
  const possible = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  if(possible.includes(todayName)) daySelect.value = todayName;
  else daySelect.value = 'Monday';
  loadTimetable();
}

function loadTimetable(){
  const sec = sectionSelect.value;
  const day = daySelect.value;
  if(!sec || !day) return timetableDiv.innerHTML='';
  db.ref(`timetables/${sec}/${day}`).once('value').then(snapshot=>{
    const data = snapshot.val();
    if(!data) return timetableDiv.innerHTML='<p class="text-red-500">No timetable found</p>';

    let html='<div class="overflow-x-auto"><table class="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">';
    html+='<tr class="bg-gray-200 dark:bg-gray-700"><th class="border p-2">Time</th><th class="border p-2">Subject</th></tr>';

    const sortedTimes = Object.keys(data).sort((a,b)=>{
      const [ah, am] = a.split(':').map(Number);
      const [bh, bm] = b.split(':').map(Number);
      return ah*60+am - (bh*60+bm);
    });

    sortedTimes.forEach(time=>{
      html+=`<tr><td class="border p-2">${time}</td><td class="border p-2">${data[time]}</td></tr>`;
    });
    html+='</table></div>';
    timetableDiv.innerHTML=html;
  });
}

sectionSelect.addEventListener('change', ()=>{
  localStorage.setItem('selectedSection', sectionSelect.value);
  autoSelectDayAndLoad();
});
daySelect.addEventListener('change', loadTimetable);
viewBtn.addEventListener('click', loadTimetable);

