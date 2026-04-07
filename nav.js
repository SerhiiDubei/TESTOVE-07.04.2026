(function() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const isTask1 = ['tz01-overview.html','tz01-dev.html'].includes(current);
  const isTask2 = ['tz02-analytics.html','tz02-prototype.html','tz02-badges.html'].includes(current);
  const isTask3 = ['tz03-dataset.html'].includes(current);

  document.getElementById('main-nav').innerHTML = `
    <a class="nav-logo" href="index.html">AdConnect <span>PMM</span></a>
    <div class="nav-links">
      <a href="index.html" ${current === 'index.html' ? 'class="active"' : ''}>Головна</a>
      <div class="nav-group ${isTask1 ? 'open' : ''}">
        <span class="nav-group-label ${isTask1 ? 'active' : ''}">01 · Google Ads</span>
        <div class="nav-group-items">
          <a href="tz01-overview.html" ${current === 'tz01-overview.html' ? 'class="active"' : ''}>Схема інтеграції</a>
          <a href="tz01-dev.html" ${current === 'tz01-dev.html' ? 'class="active"' : ''}>Dev Spec</a>
        </div>
      </div>
      <div class="nav-group ${isTask2 ? 'open' : ''}">
        <span class="nav-group-label ${isTask2 ? 'active' : ''}">02 · Продукт</span>
        <div class="nav-group-items">
          <a href="tz02-analytics.html" ${current === 'tz02-analytics.html' ? 'class="active"' : ''}>Аналітика</a>
          <a href="tz02-prototype.html" ${current === 'tz02-prototype.html' ? 'class="active"' : ''}>Прототип v1</a>
          <a href="tz02-badges.html" ${current === 'tz02-badges.html' ? 'class="active"' : ''}>Прототип v2</a>
        </div>
      </div>
      <div class="nav-group ${isTask3 ? 'open' : ''}">
        <span class="nav-group-label ${isTask3 ? 'active' : ''}">03 · Датасет</span>
        <div class="nav-group-items">
          <a href="tz03-dataset.html" ${current === 'tz03-dataset.html' ? 'class="active"' : ''}>Cross Analytics</a>
        </div>
      </div>
    </div>
  `;
})();
