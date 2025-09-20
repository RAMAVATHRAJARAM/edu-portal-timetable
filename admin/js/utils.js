function clearChildren(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

function parseStartMinutes(timeStr) {
  if (!timeStr) return 0;
  const start = timeStr.split('-')[0].trim();
  const [h, m] = start.split(':').map(s => Number(s));
  if (isNaN(h)) return 0;
  return (h * 60) + (isNaN(m) ? 0 : m);
}

