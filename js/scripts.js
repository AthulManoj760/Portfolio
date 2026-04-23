document.addEventListener('DOMContentLoaded', () => {
    const components = ['hero', 'about', 'projects', 'certifications'];
    
    Promise.all(components.map(cmp => 
        fetch(`components/${cmp}.html?v=` + Date.now())
            .then(res => {
                if (!res.ok) throw new Error('File scheme issue');
                return res.text();
            })
            .then(html => {
                document.getElementById(`component-${cmp}`).outerHTML = html;
            })
    ))
    .then(() => {
        initializeScripts();
        // Fallback injection to force correct text just in case html component caching refuses to update
        const dlBtn = document.querySelector('.hero-ctas .btn-secondary');
        if (dlBtn && !dlBtn.textContent.includes('Resume')) {
            dlBtn.innerHTML = '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="margin-right: 6px;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Download Resume';
        }
    })
    .catch(err => {
        document.body.innerHTML = `<div style="padding: 100px 20px; text-align: center; background: #111; color: #fff; min-height: 100vh;">
            <h2 style="color: #ff5555; margin-bottom: 20px;">Local Dev Server Required</h2>
            <p>Because the website has been modularized into separate HTML components, you cannot open it directly via <code>file:///</code>.</p>
            <p>Please use an extension like <strong>VS Code Live Server</strong>, or run <code>npx serve</code>, or <code>python -m http.server</code> to view the project!</p>
            <p style="color: #888; font-family: monospace; margin-top: 30px;">Error Details: ${err.message}</p>
        </div>`;
        console.error(err);
    });
});

function initializeScripts() {
// CURSOR GLOW
  const glow = document.getElementById('cursor-glow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // THEME TOGGLE
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    const html = document.documentElement;
    html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // HAMBURGER
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // NAV SCROLL EFFECT
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ACTIVE NAV LINK
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));

  // REVEAL ON SCROLL
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));

  // CONTACT FORM
  function handleSubmit(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      status.className = 'form-status success';
      status.textContent = '✓ Message sent! I\'ll get back to you within 24 hours.';
      e.target.reset();
      btn.innerHTML = '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Send Message';
      btn.disabled = false;
    }, 1400);
  }


    // Expose form handler globally for HTML intrinsic event
    if (typeof handleSubmit === 'function') {
        window.handleSubmit = handleSubmit;
    }

  // Handle Project Modal globally
  window.openProjectModal = function(card) {
    const dataContainer = card.querySelector('.pm-data');
    if(!dataContainer) return;
    document.getElementById('pm-inner').innerHTML = dataContainer.innerHTML;
    document.getElementById('project-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  window.closeProjectModal = function() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = '';
  };

}
