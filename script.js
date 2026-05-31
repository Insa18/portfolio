// Navbar scroll effect + progress bar
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  progressBar.style.width = `${scrolled * 100}%`;
});

// Typed text animation
const roles = [
  'Étudiant en informatique',
  'Développeur web',
  'Passionné de code',
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.querySelector('.typed-text');

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIndex);
  } else {
    typedEl.textContent = current.slice(0, ++charIndex);
  }

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(type, delay);
}
type();

// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', false);
  });
});

// Intersection Observer — scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.12 });

// Section titles
document.querySelectorAll('.section-title').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// About — avatar glisse depuis la gauche, texte depuis la droite
const avatar = document.querySelector('.about-avatar');
const aboutText = document.querySelector('.about-text');
if (avatar) { avatar.classList.add('fade-in-left'); observer.observe(avatar); }
if (aboutText) { aboutText.classList.add('fade-in-right'); observer.observe(aboutText); }

// Stats en cascade
document.querySelectorAll('.stat').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.12}s`;
  observer.observe(el);
});

// Compétences en cascade
document.querySelectorAll('.skill-category').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

// Projets en cascade
document.querySelectorAll('.project-card').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.12}s`;
  observer.observe(el);
});

// Contact
document.querySelector('.contact-intro')?.classList.add('fade-in');
document.querySelector('.contact-intro') && observer.observe(document.querySelector('.contact-intro'));
document.querySelector('.contact-form')?.classList.add('fade-in');
document.querySelector('.contact-form') && observer.observe(document.querySelector('.contact-form'));
document.querySelector('.contact-links')?.classList.add('fade-in-right');
document.querySelector('.contact-links') && observer.observe(document.querySelector('.contact-links'));

// Contact form — Formspree
const FORMSPREE_ID = 'xykvawgp'; 

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

const COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes

contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Honeypot check
  if (this.querySelector('[name="_gotcha"]').value) return;

  // Cooldown check
  const lastSent = localStorage.getItem('lastContactSent');
  if (lastSent && Date.now() - parseInt(lastSent) < COOLDOWN_MS) {
    const remaining = Math.ceil((COOLDOWN_MS - (Date.now() - parseInt(lastSent))) / 60000);
    formStatus.className = 'form-status error';
    formStatus.textContent = `Merci de patienter encore ${remaining} minute(s) avant d'envoyer un autre message.`;
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';
  formStatus.className = 'form-status';
  formStatus.textContent = '';

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(contactForm),
    });

    if (res.ok) {
      localStorage.setItem('lastContactSent', Date.now());
      formStatus.className = 'form-status success';
      formStatus.textContent = 'Message envoyé ! Je te répondrai rapidement.';
      contactForm.reset();
    } else {
      throw new Error();
    }
  } catch {
    formStatus.className = 'form-status error';
    formStatus.textContent = 'Erreur lors de l\'envoi. Réessaie ou contacte-moi par email.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer le message';
  }
});

// Copy email to clipboard
document.querySelector('a[href^="mailto:"].contact-link').addEventListener('click', function (e) {
  e.preventDefault();
  navigator.clipboard.writeText('lucasbarabas355@gmail.com').then(() => {
    const span = this.querySelector('span');
    const original = span.textContent;
    span.textContent = 'Copié !';
    setTimeout(() => { span.textContent = original; }, 2000);
  });
});

// Animated counters — store target in data attribute to always start from 0
document.querySelectorAll('.stat-number').forEach(el => {
  const text = el.textContent.trim();
  const num = parseInt(text);
  if (!isNaN(num)) {
    el.dataset.target = num;
    el.dataset.suffix = text.replace(num.toString(), '');
  }
});

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  if (isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  el.textContent = '0' + suffix;
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) animateCounter(entry.target);
  });
}, { threshold: 0.6 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));


// Clickable project cards
document.querySelectorAll('.project-card:not(.project-card-cta)').forEach(card => {
  const githubLink = card.querySelector('.icon-link[aria-label="GitHub"]');
  if (!githubLink) return;
  card.addEventListener('click', (e) => {
    if (e.target.closest('.icon-link')) return;
    window.open(githubLink.href, '_blank', 'noopener');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--text)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
