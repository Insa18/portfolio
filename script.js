// ===== TRANSLATIONS =====
const i18n = {
  fr: {
    'nav.about': 'À propos',
    'nav.parcours': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.greeting': 'Bonjour, je suis',
    'hero.desc': "Étudiant en informatique passionné par le développement logiciel, la création d'applications.",
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',
    'about.title': 'À <span class="accent">propos</span>',
    'about.p1': "Je suis étudiant en informatique, passionné par la création de solutions logicielles élégantes et fonctionnelles. Mon parcours m'a permis de développer des compétences autant en développement web qu'en programmation système.",
    'about.p2': "Toujours curieux d'apprendre de nouvelles technologies, j'aime relever des défis techniques. Je suis activement à la recherche d'une alternance.",
    'about.stat1': 'Projets réalisés',
    'about.stat2': 'Années de code',
    'about.stat3': 'Curiosité',
    'about.cv': 'Demander mon CV',
    'skills.title': 'Compé<span class="accent">tences</span>',
    'skills.cat.systems': 'Systèmes',
    'skills.cat.tools': 'Outils',
    'skills.cat.concepts': 'Concepts',
    'projects.title': 'Mes <span class="accent">projets</span>',
    'project.cartolidar.desc': "Robot de cartographie d'intérieur équipé d'un capteur LIDAR 360° pour détecter les obstacles et mapper les espaces. Contrôlable via une application mobile ou des programmes prédéfinis, avec transmission des données en WiFi.",
    'project.audit.desc': "Jeu sérieux où le joueur incarne un auditeur explorant un campus universitaire pour collecter des informations et accomplir une mission d'audit. Système de dialogues avec PNJ, plusieurs zones explorables et score basé sur l'avancement.",
    'project.cta.text': 'Tu veux voir plus de projets ?',
    'project.cta.btn': 'Voir mon GitHub',
    'contact.title': 'Con<span class="accent">tact</span>',
    'contact.intro': "Disponible pour un stage, une alternance ou simplement pour discuter d'un projet. N'hésite pas à me contacter !",
    'contact.name.label': 'Nom',
    'contact.name.placeholder': 'Ton nom',
    'contact.message.label': 'Message',
    'contact.message.placeholder': 'Ton message...',
    'contact.submit': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé ! Je te répondrai rapidement.',
    'contact.error': "Erreur lors de l'envoi. Réessaie ou contacte-moi par email.",
    'contact.cooldown': 'Merci de patienter encore ${remaining} minute(s).',
    'contact.copied': 'Copié !',
    'footer.text': 'Fait avec <span class="accent">♥</span> par Lucas Barabas — <span id="year"></span>',
    'roles': ['Étudiant en informatique', 'Développeur web', 'Passionné de code'],
    'timeline.title': 'Mon <span class="accent">parcours</span>',
    'timeline.bac.title': 'BAC',
    'timeline.bac.desc': 'Obtention du BAC, avec options mathématique et informatique.',
    'timeline.bts.title': 'BTS CIEL',
    'timeline.bts.desc': "Cybersécurité, Informatique et réseaux, Électronique. Formation axée sur les systèmes embarqués, la programmation et les réseaux.",
    'timeline.present': 'présent',
    'timeline.current': 'En cours',
    'timeline.but.title': 'BUT Informatique',
    'timeline.but.school': '2ème année',
    'timeline.but.desc': "Formation universitaire en informatique couvrant le développement logiciel, les bases de données, les réseaux et la gestion de projets.",
    'code.role': '"Étudiant en informatique"',
    'code.p1': '"développement web"',
    'code.p2': '"programmation"',
    'code.p3': '"réseaux"',
  },
  en: {
    'nav.about': 'About',
    'nav.parcours': 'Journey',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.desc': 'Computer Science student passionate about software development and building applications.',
    'hero.cta.projects': 'See my projects',
    'hero.cta.contact': 'Contact me',
    'about.title': 'About <span class="accent">me</span>',
    'about.p1': "I'm a Computer Science student, passionate about creating elegant and functional software solutions. My journey has allowed me to develop skills in both web development and system programming.",
    'about.p2': "Always eager to learn new technologies, I enjoy tackling technical challenges. I'm actively looking for an apprenticeship.",
    'about.stat1': 'Projects done',
    'about.stat2': 'Years of code',
    'about.stat3': 'Curiosity',
    'about.cv': 'Request my CV',
    'skills.title': 'My <span class="accent">Skills</span>',
    'skills.cat.systems': 'Systems',
    'skills.cat.tools': 'Tools',
    'skills.cat.concepts': 'Concepts',
    'projects.title': 'My <span class="accent">Projects</span>',
    'project.cartolidar.desc': 'Indoor mapping robot equipped with a 360° LIDAR sensor to detect obstacles and map spaces. Controllable via a mobile app or predefined programs, with WiFi data transmission.',
    'project.audit.desc': 'Serious game where the player acts as an auditor exploring a university campus to gather information and complete an audit mission. NPC dialogue system, multiple explorable areas and progression-based scoring.',
    'project.cta.text': 'Want to see more projects?',
    'project.cta.btn': 'See my GitHub',
    'contact.title': 'Con<span class="accent">tact</span>',
    'contact.intro': 'Available for an internship, apprenticeship or just to discuss a project. Feel free to reach out!',
    'contact.name.label': 'Name',
    'contact.name.placeholder': 'Your name',
    'contact.message.label': 'Message',
    'contact.message.placeholder': 'Your message...',
    'contact.submit': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': "Message sent! I'll get back to you shortly.",
    'contact.error': 'Error sending message. Try again or contact me by email.',
    'contact.cooldown': 'Please wait ${remaining} more minute(s).',
    'contact.copied': 'Copied!',
    'footer.text': 'Made with <span class="accent">♥</span> by Lucas Barabas — <span id="year"></span>',
    'roles': ['Computer Science Student', 'Web Developer', 'Code Enthusiast'],
    'timeline.title': 'My <span class="accent">Journey</span>',
    'timeline.bac.title': 'BAC (French A-levels)',
    'timeline.bac.desc': 'Obtained the BAC with mathematics and computer science options.',
    'timeline.bts.title': 'BTS CIEL',
    'timeline.bts.desc': 'Cybersecurity, Networking & Electronics. Training focused on embedded systems, programming and networking.',
    'timeline.present': 'present',
    'timeline.current': 'Ongoing',
    'timeline.but.title': 'Bachelor in Computer Science',
    'timeline.but.school': '2nd year',
    'timeline.but.desc': 'University-level program covering software development, databases, networking and project management.',
    'code.role': '"Computer Science Student"',
    'code.p1': '"web development"',
    'code.p2': '"programming"',
    'code.p3': '"networks"',
  }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
      if (el.id === 'year' || el.querySelector('#year')) {
        const yr = el.querySelector('#year') || document.getElementById('year');
        if (yr) yr.textContent = new Date().getFullYear();
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.getElementById('lang-toggle').textContent = lang === 'fr' ? 'EN' : 'FR';

  // Reset typed animation with new roles
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typedEl.textContent = '';

  // Re-init year in footer
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
});

// ===== NAVBAR SCROLL + PROGRESS BAR =====
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  progressBar.style.width = `${scrolled * 100}%`;
});

// ===== TYPED TEXT =====
let roles = i18n[currentLang].roles;
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.querySelector('.typed-text');

function type() {
  roles = i18n[currentLang].roles;
  const current = roles[roleIndex % roles.length];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIndex);
  } else {
    typedEl.textContent = current.slice(0, ++charIndex);
  }
  let delay = isDeleting ? 50 : 90;
  if (!isDeleting && charIndex === current.length) {
    delay = 2000; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

// ===== BURGER MENU =====
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

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-title').forEach(el => {
  el.classList.add('fade-in'); observer.observe(el);
});

const avatar = document.querySelector('.about-avatar');
const aboutText = document.querySelector('.about-text');
if (avatar) { avatar.classList.add('fade-in-left'); observer.observe(avatar); }
if (aboutText) { aboutText.classList.add('fade-in-right'); observer.observe(aboutText); }

document.querySelectorAll('.stat').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.12}s`;
  observer.observe(el);
});

document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.classList.add('fade-in-left');
  el.style.transitionDelay = `${i * 0.15}s`;
  observer.observe(el);
});

document.querySelectorAll('.skill-category').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

document.querySelectorAll('.project-card').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.12}s`;
  observer.observe(el);
});

['.contact-intro', '.contact-form'].forEach(sel => {
  const el = document.querySelector(sel);
  if (el) { el.classList.add('fade-in'); observer.observe(el); }
});
const contactLinks = document.querySelector('.contact-links');
if (contactLinks) { contactLinks.classList.add('fade-in-right'); observer.observe(contactLinks); }

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ===== CONTACT FORM =====
const FORMSPREE_ID = 'xykvawgp';
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');
const COOLDOWN_MS = 10 * 60 * 1000;

contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (this.querySelector('[name="_gotcha"]').value) return;

  const t = i18n[currentLang];
  const lastSent = localStorage.getItem('lastContactSent');
  if (lastSent && Date.now() - parseInt(lastSent) < COOLDOWN_MS) {
    const remaining = Math.ceil((COOLDOWN_MS - (Date.now() - parseInt(lastSent))) / 60000);
    formStatus.className = 'form-status error';
    formStatus.textContent = t['contact.cooldown'].replace('${remaining}', remaining);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = t['contact.sending'];
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
      formStatus.textContent = t['contact.success'];
      contactForm.reset();
    } else throw new Error();
  } catch {
    formStatus.className = 'form-status error';
    formStatus.textContent = t['contact.error'];
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t['contact.submit'];
  }
});

// ===== COPY EMAIL =====
document.querySelector('a[href^="mailto:"].contact-link').addEventListener('click', function (e) {
  e.preventDefault();
  navigator.clipboard.writeText('lucasbarabas355@gmail.com').then(() => {
    const span = this.querySelector('span');
    const original = span.textContent;
    span.textContent = i18n[currentLang]['contact.copied'];
    setTimeout(() => { span.textContent = original; }, 2000);
  });
});

// ===== ANIMATED COUNTERS =====
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

// ===== CLICKABLE PROJECT CARDS =====
document.querySelectorAll('.project-card:not(.project-card-cta)').forEach(card => {
  const githubLink = card.querySelector('.icon-link[aria-label="GitHub"]');
  if (!githubLink) return;
  card.addEventListener('click', (e) => {
    if (e.target.closest('.icon-link')) return;
    window.open(githubLink.href, '_blank', 'noopener');
  });
});

// ===== PET EYE TRACKING =====
document.addEventListener('mousemove', (e) => {
  const pet = document.getElementById('pet');
  if (!pet) return;
  if (typeof petState !== 'undefined' && petState !== 'normal') return;
  const rect = pet.getBoundingClientRect();
  [['pupil-left', 19], ['pupil-right', 51]].forEach(([id, baseCx]) => {
    const pupil = document.getElementById(id);
    if (!pupil) return;
    const eyeX = rect.left + (baseCx / 70) * rect.width;
    const eyeY = rect.top + (12.5 / 82) * rect.height;
    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
    const dist = 4;
    pupil.setAttribute('cx', baseCx + Math.cos(angle) * dist);
    pupil.setAttribute('cy', 12.5 + Math.sin(angle) * dist);
  });
});

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// Apply saved language on load
if (currentLang === 'en') applyLang('en');

// ===== PET INTERACTIONS =====
let petState = 'normal';

const petMessages = {
  fr: [
    'Bonjour ! 👾',
    'git commit -m "ça marche enfin"',
    'Je surveille ton curseur...',
    'Café ou NullPointerException ?',
    'Stack Overflow est mon meilleur ami.',
    '// TODO: finir ça plus tard',
    'chmod 777... attends non.',
    'Ctrl+Z, Ctrl+Z, Ctrl+Z...',
    'Tu veux voir mes projets ? ↑',
    'Il est ' + new Date().getHours() + 'h, tu dors pas ?',
  ],
  en: [
    'Hello! 👾',
    'git commit -m "it finally works"',
    "I'm watching your cursor...",
    'Coffee or NullPointerException?',
    'Stack Overflow is my best friend.',
    '// TODO: finish this later',
    'chmod 777... wait, no.',
    'Ctrl+Z, Ctrl+Z, Ctrl+Z...',
    'Want to see my projects? ↑',
    "It's " + new Date().getHours() + "h, still awake?",
  ]
};

// Bubble
const petBubble = document.createElement('div');
petBubble.className = 'pet-bubble';
document.body.appendChild(petBubble);

let bubbleTimer = null;
let typeTimer = null;
let lastMsgIdx = -1;

function showBubble(text) {
  clearTimeout(bubbleTimer);
  clearInterval(typeTimer);
  petBubble.textContent = '';
  petBubble.classList.add('visible');
  let i = 0;
  typeTimer = setInterval(() => {
    petBubble.textContent += text[i++];
    if (i >= text.length) clearInterval(typeTimer);
  }, 35);
  bubbleTimer = setTimeout(() => petBubble.classList.remove('visible'), 4500);
}

function randomMessage() {
  const msgs = petMessages[currentLang] || petMessages.fr;
  let idx;
  do { idx = Math.floor(Math.random() * msgs.length); } while (idx === lastMsgIdx && msgs.length > 1);
  lastMsgIdx = idx;
  return msgs[idx];
}

// DOM refs
const petEl = document.getElementById('pet');
const pupilL = document.getElementById('pupil-left');
const pupilR = document.getElementById('pupil-right');
const petMouth = document.getElementById('pet-mouth');
const eyeL = document.getElementById('eye-left');
const eyeR = document.getElementById('eye-right');

// Zzz element
const petZzz = document.createElement('div');
petZzz.className = 'pet-zzz';
petZzz.textContent = 'z';
document.body.appendChild(petZzz);

function setPetState(state) {
  if (petState === state) return;
  petState = state;
  switch (state) {
    case 'surprised':
      pupilL.setAttribute('r', '5.5'); pupilR.setAttribute('r', '5.5');
      pupilL.setAttribute('cy', '12.5'); pupilR.setAttribute('cy', '12.5');
      petMouth.setAttribute('d', 'M 25 57 Q 35 57 45 57');
      petEl.classList.remove('sleeping');
      petZzz.classList.remove('visible');
      break;
    case 'sleeping':
      pupilL.setAttribute('r', '2'); pupilR.setAttribute('r', '2');
      pupilL.setAttribute('cy', '17'); pupilR.setAttribute('cy', '17');
      petMouth.setAttribute('d', 'M 23 58 Q 35 54 47 58');
      petEl.classList.add('sleeping');
      petZzz.classList.add('visible');
      break;
    default:
      pupilL.setAttribute('r', '3.5'); pupilR.setAttribute('r', '3.5');
      pupilL.setAttribute('cy', '12.5'); pupilR.setAttribute('cy', '12.5');
      petMouth.setAttribute('d', 'M 22 55 Q 35 61 48 55');
      petEl.classList.remove('sleeping');
      petZzz.classList.remove('visible');
  }
}

// Blink
function doBlink() {
  if (petState !== 'normal') { scheduleBlink(); return; }
  eyeL.classList.add('blinking');
  eyeR.classList.add('blinking');
  setTimeout(() => { eyeL.classList.remove('blinking'); eyeR.classList.remove('blinking'); }, 150);
  scheduleBlink();
}
function scheduleBlink() { setTimeout(doBlink, 2500 + Math.random() * 4000); }
scheduleBlink();

// Click / easter egg
let clickCount = 0;
let clickResetTimer = null;

petEl.addEventListener('click', () => {
  clickCount++;
  clearTimeout(clickResetTimer);
  clickResetTimer = setTimeout(() => { clickCount = 0; }, 1500);

  if (clickCount >= 7) {
    clickCount = 0;
    triggerEasterEgg();
    return;
  }
  if (petState === 'sleeping') {
    setPetState('normal');
    showBubble(currentLang === 'fr' ? 'Hm... zzzz... quoi ?!' : 'Hm... zzzz... what?!');
    resetIdle();
    return;
  }
  if (petState === 'normal') showBubble(randomMessage());
});

// Easter egg
function triggerEasterEgg() {
  petEl.classList.add('dancing');
  petState = 'dancing';
  const petBody = document.getElementById('pet-body');
  const eyeHL = document.getElementById('eye-housing-left');
  const eyeHR = document.getElementById('eye-housing-right');
  const rainbow = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#c77dff'];
  let ci = 0;
  const colorLoop = setInterval(() => {
    const c = rainbow[ci++ % rainbow.length];
    if (petBody) petBody.setAttribute('fill', c);
    if (eyeHL) eyeHL.setAttribute('fill', rainbow[(ci + 2) % rainbow.length]);
    if (eyeHR) eyeHR.setAttribute('fill', rainbow[(ci + 4) % rainbow.length]);
  }, 150);
  showBubble(currentLang === 'fr' ? '🎉 Danse avec moi !' : '🎉 Dance with me!');
  setTimeout(() => {
    petEl.classList.remove('dancing');
    clearInterval(colorLoop);
    if (petBody) petBody.setAttribute('fill', '#C8A84B');
    if (eyeHL) eyeHL.setAttribute('fill', '#484848');
    if (eyeHR) eyeHR.setAttribute('fill', '#484848');
    petState = 'normal';
  }, 3000);
}

// Scroll surprise
let lastSY = window.scrollY;
let lastST = Date.now();
let surpriseTimer = null;

window.addEventListener('scroll', () => {
  const now = Date.now();
  const dy = Math.abs(window.scrollY - lastSY);
  const dt = (now - lastST) || 1;
  const speed = dy / dt;
  lastSY = window.scrollY;
  lastST = now;

  if (speed > 1.5 && petState === 'normal') {
    setPetState('surprised');
    showBubble(currentLang === 'fr' ? 'Woah, doucement !' : 'Woah, slow down!');
    clearTimeout(surpriseTimer);
    surpriseTimer = setTimeout(() => setPetState('normal'), 1800);
  }
}, { passive: true });

// Idle / sleep
let idleTimer = null;
function resetIdle() {
  clearTimeout(idleTimer);
  if (petState === 'sleeping') setPetState('normal');
  idleTimer = setTimeout(() => { if (petState === 'normal') setPetState('sleeping'); }, 10000);
}
['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(ev =>
  window.addEventListener(ev, resetIdle, { passive: true })
);
resetIdle();

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const SUN_ICON = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const MOON_ICON = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = MOON_ICON;
    themeToggle.setAttribute('aria-label', 'Activer le mode sombre');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.innerHTML = SUN_ICON;
    themeToggle.setAttribute('aria-label', 'Activer le mode clair');
  }
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
});
