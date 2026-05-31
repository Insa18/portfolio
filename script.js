// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
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

// Intersection Observer — fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.about-grid, .skill-category, .project-card, .contact-form, .contact-links'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

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
