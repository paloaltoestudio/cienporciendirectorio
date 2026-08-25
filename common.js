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
