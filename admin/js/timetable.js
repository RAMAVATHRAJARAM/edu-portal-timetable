const daySelect = document.getElementById('daySelect');
const subjectsContainer = document.getElementById('subjectsContainer');
const addRowBtn = document.getElementById('addRow');
const saveBtn = document.getElementById('saveBtn');
const deleteTimetableBtn = document.getElementById('deleteTimetableBtn');
const message = document.getElementById('message');

function loadTimetableForSelection() {
  sectionSelect.addEventListener('change', renderTimetable);
  daySelect.addEventListener('change', renderTimetable);
}

function renderTimetable() {
  clearChildren(subjectsContainer);
  const sec = sectionSelect.value;
  const day = daySelect.value;
  if (!sec || !day) return;
  db.ref(`timetable/${sec}/${day}`).once('value').then(snap => {
    const arr = [];
    snap.forEach(item => arr.push(item.val()));
    arr.sort((a,b) => parseStartMinutes(a.time) - parseStartMinutes(b.time));
    arr.forEach(sub => addRow(sub.time, sub.subject));
  });
}

function addRow(time='', subject='') {
  const row = document.createElement('div');
  row.className = 'flex gap-2';
  row.innerHTML = `
    <input type="text" placeholder="HH:MM-HH:MM" value="${time}" class="flex-1 border rounded p-2"/>
    <input type="text" placeholder="Subject" value="${subject}" class="flex-1 border rounded p-2"/>
    <button class="bg-red-500 text-white px-2 rounded">X</button>
  `;
  row.querySelector('button').addEventListener('click', () => row.remove());
  subjectsContainer.appendChild(row);
}

addRowBtn.addEventListener('click', () => addRow());

saveBtn.addEventListener('click', () => {
  message.textContent = '';
  const sec = sectionSelect.value;
  const day = daySelect.value;
  if (!sec || !day) { message.textContent = 'Select section and day.'; return; }
  const subs = [];
  subjectsContainer.querySelectorAll('div').forEach(row => {
    const [timeIn, subIn] = row.querySelectorAll('input');
    if (timeIn.value.trim() && subIn.value.trim()) {
      subs.push({ time: timeIn.value.trim(), subject: subIn.value.trim() });
    }
  });
  subs.sort((a,b) => parseStartMinutes(a.time) - parseStartMinutes(b.time));
  db.ref(`timetable/${sec}/${day}`).set(subs)
    .then(() => message.textContent = 'Saved successfully.');
});

deleteTimetableBtn.addEventListener('click', () => {
  const sec = sectionSelect.value;
  const day = daySelect.value;
  if (!sec || !day) return;
  db.ref(`timetable/${sec}/${day}`).remove()
    .then(() => { clearChildren(subjectsContainer); message.textContent = 'Deleted timetable.'; });
});

