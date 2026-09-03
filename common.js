// Cien por Cien — helpers shared across index/directorio/perfil

function initials(nombre) {
  const parts = nombre.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

// Deterministic gradient from the brand palette, keyed by name so each
// leader without a photo gets a consistent (but varied) placeholder.
const PLACEHOLDER_PAIRS = [
  ['#FF641F', '#FFBE2F'], ['#80ACEE', '#FCC3EC'], ['#F79D7B', '#FFBE2F'],
  ['#7DC89A', '#80ACEE'], ['#B4A6E0', '#FCC3EC'], ['#F5C542', '#FF641F'],
  ['#E8885A', '#F5C542'], ['#6DC8C4', '#80ACEE'],
];
function initialsGradient(nombre) {
  let hash = 0;
  for (const c of nombre) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
  const [a, b] = PLACEHOLDER_PAIRS[hash % PLACEHOLDER_PAIRS.length];
  return `linear-gradient(135deg, ${a} 0%, ${b} 100%)`;
}

function tagHTML(causa, extraStyle) {
  const bg = CAUSAS_COLORES[causa] || '#EBE5DC';
  const dark = CAUSAS_TEXTO_OSCURO[causa] !== false;
  return `<span class="tag" style="background:${bg};color:${dark ? '#1A1208' : '#fff'}${extraStyle ? ';' + extraStyle : ''}">${causa}</span>`;
}

function photoStyleAttr(l) {
  return l.foto ? `background-image:url('${l.foto}')` : `background:${initialsGradient(l.nombre)}`;
}

// Fisher-Yates shuffle, in place. Used where we want a different pick each
// page load (e.g. related leaders) instead of always the same few.
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Leaders filled in the "Instagram" / "Sitio Web" form fields with everything
// from a clean URL to "NA", "En construcción", or a whole sentence. Only
// return a link when the text actually looks like one — otherwise the caller
// should render it as plain text instead of a broken/misleading link.
const LINK_PLACEHOLDER_RE = /^(na|n\.a\.?|n\/a|ninguna?|no tengo|no aplica|en construcci[oó]n|redes sociales|pendiente|-+)$/i;

function resolveLink(raw, isInstagram) {
  if (!raw) return null;
  const s = String(raw).trim();
  if (!s || LINK_PLACEHOLDER_RE.test(s)) return null;

  const urlMatch = s.match(/https?:\/\/[^\s,;]+/);
  if (urlMatch) return urlMatch[0].replace(/[)>\].,;]+$/, '');

  const wwwMatch = s.match(/\bwww\.[^\s,;]+/i);
  if (wwwMatch) return 'https://' + wwwMatch[0];

  if (isInstagram) {
    const handleMatch = s.match(/@[\w.\-]+/);
    if (handleMatch) return 'https://instagram.com/' + handleMatch[0].slice(1);
    if (/^[\w.\-]{2,30}$/.test(s)) return 'https://instagram.com/' + s;
  } else {
    if (/^[\w.\-]+\.[a-z]{2,}(\/[\w.\-\/?=&%]*)?$/i.test(s)) return 'https://' + s;
  }
  return null;
}
