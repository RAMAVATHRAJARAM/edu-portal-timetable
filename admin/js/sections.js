const newSectionInput = document.getElementById('newSection');
const addSectionBtn = document.getElementById('addSectionBtn');
const deleteSectionSelect = document.getElementById('deleteSectionSelect');
const deleteSectionBtn = document.getElementById('deleteSectionBtn');
const sectionSelect = document.getElementById('sectionSelect');

function loadSections() {
  db.ref('sections').on('value', snap => {
    clearChildren(sectionSelect);
    clearChildren(deleteSectionSelect);
    const opt = document.createElement('option');
    opt.value = ''; opt.textContent = '-- Select Section --';
    sectionSelect.appendChild(opt);
    snap.forEach(sec => {
      const s = sec.key;
      const o1 = document.createElement('option');
      o1.value = s; o1.textContent = s;
      sectionSelect.appendChild(o1);
      const o2 = document.createElement('option');
      o2.value = s; o2.textContent = s;
      deleteSectionSelect.appendChild(o2);
    });
  });
}

addSectionBtn.addEventListener('click', () => {
  const sec = newSectionInput.value.trim();
  if (!sec) return;
  db.ref('sections/' + sec).set(true).then(() => newSectionInput.value = '');
});

deleteSectionBtn.addEventListener('click', () => {
  const sec = deleteSectionSelect.value;
  if (!sec) return;
  db.ref('sections/' + sec).remove();
  db.ref('timetable/' + sec).remove();
});

