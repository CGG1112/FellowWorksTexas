// FellowWorks Texas — minimal JS
(function(){
  // Mobile navigation
  const burger = document.querySelector('.hamburger');
  const nav = document.getElementById('mainnav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (nav) nav.classList.remove('open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Mailto form (no backend)
  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const name = (d.get('name') || '').trim();
      const phone = (d.get('phone') || '').trim();
      const message = (d.get('message') || '').trim();
      const subject = encodeURIComponent(`Quote request from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\n\nProject details:\n${message}\n`
      );
      const to = 'FellowWorksTexas@gmail.com';
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      return false;
    });
  }

  // Dynamic footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
