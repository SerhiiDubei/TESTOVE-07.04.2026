(function() {
  const pages = [
    { href: 'index.html', label: 'Головна' },
    { href: 'tz01-overview.html', label: '01 · Google Ads' },
    { href: 'tz01-dev.html', label: '01 · Dev Spec' },
    { href: 'tz02-analytics.html', label: '02 · Аналітика' },
    { href: 'tz02-prototype.html', label: '02 · Прототип' },
    { href: 'tz02-badges.html', label: '02 · Badges' },
    { href: 'tz03-dataset.html', label: '03 · Датасет' },
  ];
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = `
    <a class="nav-logo" href="index.html">AdConnect <span>PMM</span></a>
    <div class="nav-links">
      ${pages.map(p => `<a href="${p.href}" ${p.href === current ? 'class="active"' : ''}>${p.label}</a>`).join('')}
    </div>
  `;
})();
