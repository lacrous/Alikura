// Loading Screen
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 22, 40, 0.98)';
    } else {
        header.style.background = 'rgba(10, 22, 40, 0.95)';
    }
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#f44336';
        } else {
            input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    if (isValid) {
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    } else {
        alert('Please fill in all required fields.');
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .feature-card, .vmv-card, .value-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile Menu Toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add mobile menu styles if screen is small
if (window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(10, 22, 40, 0.98);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: right 0.3s ease;
        }
        
        .nav-menu.active {
            right: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
    `;
    document.head.appendChild(style);
}

// نصوص كل لغة
// ====================
// قاعدة بيانات الترجمة
// ====================
// كل نص في الموقع مرتبط بمفتاح (key) نستخدمه لتغيير اللغة ديناميكيًا
const translations = {
  en: {
    'hero-title': 'I\'M Hassan EL-Deghidy',
    'hero-subtitle': 'Building a new future through web development — one line of code at a time.',
    'btn-about': 'Know My Story',
    'btn-progress': 'See My Progress',
    'about-me': 'About Me',
    'about-me-desc': 'Learn about my journey into web development',
    'my-skills': 'My Skills',
    'my-skills-desc': 'HTML, CSS, JavaScript — learning step by step',
    'learning-path': 'Learning Path',
    'learning-path-desc': 'My roadmap to becoming a frontend developer',
    'projects': 'Projects',
    'projects-desc': 'Personal site, blog, and mock e-commerce store',
    'about-section-title': 'ABOUT ME',
    'about-heading': 'Building My Future, One Line of Code at a Time',
    'about-bio': 'I\'m Hassan, a self-taught web developer from Egypt, now based in Cheboksary, Russia.',
    'my-journey': 'MY JOURNEY',
    'journey-text': 'I started from zero, with no background in tech. But I believe that with discipline and curiosity, anyone can learn to code. This is my journey — not of a company, but of a person building a new future.',
    'my-vision': 'MY VISION',
    'vision-text': 'To become a professional frontend developer and create meaningful digital experiences — no matter where I start.',
    'my-mission': 'MY MISSION',
    'mission-text': 'To learn consistently, build real projects, and prove that change is possible with focus and hard work.',
    'my-values': 'MY CORE VALUES',
    'discipline': 'Discipline',
    'discipline-desc': 'Showing up every day',
    'self-belief': 'Self-Belief',
    'self-belief-desc': 'Trusting my journey',
    'continuous-learning': 'Continuous Learning',
    'continuous-learning-desc': 'Never stopping',
    'integrity': 'Integrity',
    'integrity-desc': 'Building with honesty and purpose',
    'why-follow': 'WHY FOLLOW MY JOURNEY?',
    'real-progress': 'Real Progress',
    'real-progress-desc': 'No shortcuts, just consistent learning.',
    'transparent-path': 'Transparent Path',
    'transparent-path-desc': 'I share every step — wins and challenges.',
    'from-zero': 'From Zero',
    'from-zero-desc': 'I started with nothing — just willpower.',
    'tools-resources': 'MY TOOLS & RESOURCES',
    'contact-title': 'LET\'S CONNECT',
    'contact-desc': 'I\'d love to hear from you.',
    'get-in-touch': 'GET IN TOUCH',
    'email': 'Email',
    'location': 'Location',
    'follow': 'Follow me:',
    'footer-about': 'From Egypt, building my future in Russia.',
    'footer-location': 'Cheboksary, Russia',
    'footer-email': 'hassan.eldaghidi@example.com',
    'footer-nav': 'Navigation',
    'footer-home': 'Home',
    'footer-about-link': 'About Me',
    'footer-skills': 'My Skills',
    'footer-contact': 'Contact',
    'footer-follow': 'Follow me:',
    'footer-copyright': '© 2025 Hassan EL-Deghidy. All rights reserved.',
    'send-message': 'Send Message',
    'see-my-skills': 'See My Skills',
    'grow-together': 'Let\'s grow together.'
  },
  ar: {
    'hero-title': 'أنا حسن الدغيدي',
    'hero-subtitle': 'أبني مستقبلاً جديداً من خلال تطوير الويب — سطر كود بعد سطر.',
    'btn-about': 'تعرف على قصتي',
    'btn-progress': 'شاهد تقدّمي',
    'about-me': 'من أنا',
    'about-me-desc': 'تعرف على رحلتي في تطوير الويب',
    'my-skills': 'مهاراتي',
    'my-skills-desc': 'HTML، CSS، JavaScript — أتعلم خطوة بخطوة',
    'learning-path': 'مساري التعليمي',
    'learning-path-desc': 'خطتي للوصول إلى أن أصبح مطوّر واجهات أمامية',
    'projects': 'مشاريعي',
    'projects-desc': 'موقع شخصي، مدوّنة، ومتجر وهمي',
    'about-section-title': 'من أنا',
    'about-heading': 'بناء مستقبلي، سطر كود بعد سطر',
    'about-bio': 'أنا حسن، مطوّر ويب أتعلم بنفسي من مصر، وأعيش الآن في تشيبوكساري، روسيا.',
    'my-journey': 'رحلتي',
    'journey-text': 'بدأت من الصفر، بدون خلفية في التقنية. لكنني أؤمن أن الانضباط والفضول كافيان لتعلّم البرمجة. هذه رحلتي — ليست رحلة شركة، بل رجل يبني مستقبله.',
    'my-vision': 'رؤيتي',
    'vision-text': 'أن أصبح مطوّر واجهات أمامية محترف، وأُنشئ تجارب رقمية ذات معنى — مهما كان موقعي الآن.',
    'my-mission': 'مهمتي',
    'mission-text': 'أن أتعلم باستمرار، أبني مشاريع حقيقية، وأثبت أن التغيير ممكن بالتركيز والعمل الجاد.',
    'my-values': 'قيمي الأساسية',
    'discipline': 'الانضباط',
    'discipline-desc': 'الحضور كل يوم',
    'self-belief': 'الثقة بالنفس',
    'self-belief-desc': 'الإيمان برحلتي',
    'continuous-learning': 'التعلّم المستمر',
    'continuous-learning-desc': 'الاستمرار دون توقف',
    'integrity': 'النزاهة',
    'integrity-desc': 'البناء بالصدق والهدف',
    'why-follow': 'لماذا تتبع رحلتي؟',
    'real-progress': 'تقدم حقيقي',
    'real-progress-desc': 'لا توجد طرق مختصرة، فقط تعلّم مستمر.',
    'transparent-path': 'مسار شفاف',
    'transparent-path-desc': 'أشارك كل خطوة — النجاحات والتحديات.',
    'from-zero': 'من الصفر',
    'from-zero-desc': 'بدأت بلا شيء — فقط بالإرادة.',
    'tools-resources': 'أدواتي ومواردي',
    'contact-title': 'تواصل معي',
    'contact-desc': 'أود أن أسمع منك.',
    'get-in-touch': 'تواصل معي',
    'email': 'البريد الإلكتروني',
    'location': 'الموقع',
    'follow': 'تابعني:',
    'footer-about': 'من مصر، أبني مستقبلي في روسيا.',
    'footer-location': 'تشيبوكساري، روسيا',
    'footer-email': 'hassan.eldaghidi@example.com',
    'footer-nav': 'التنقل',
    'footer-home': 'الرئيسية',
    'footer-about-link': 'من أنا',
    'footer-skills': 'مهاراتي',
    'footer-contact': 'اتصل بي',
    'footer-follow': 'تابعني:',
    'footer-copyright': '© 2025 حسن الدغيدي. جميع الحقوق محفوظة.',
    'send-message': 'أرسل رسالة',
    'see-my-skills': 'شاهد مهاراتي',
    'grow-together': 'فلننمو معًا.'
  },
  ru: {
    'hero-title': 'Я Хасан Эль-Дегиди',
    'hero-subtitle': 'Строю новое будущее через веб-разработку — одна строка кода за раз.',
    'btn-about': 'Узнать мою историю',
    'btn-progress': 'Посмотреть мой прогресс',
    'about-me': 'Обо мне',
    'about-me-desc': 'Узнайте о моем пути в веб-разработке',
    'my-skills': 'Мои навыки',
    'my-skills-desc': 'HTML, CSS, JavaScript — изучаю шаг за шагом',
    'learning-path': 'Мой путь обучения',
    'learning-path-desc': 'Мой план по становлению frontend-разработчиком',
    'projects': 'Проекты',
    'projects-desc': 'Персональный сайт, блог и макет интернет-магазина',
    'about-section-title': 'ОБО МНЕ',
    'about-heading': 'Строю будущее, одна строка кода за раз',
    'about-bio': 'Я Хасан, самоучка в веб-разработке из Египта, сейчас живу в Чебоксарах, Россия.',
    'my-journey': 'МОЯ ИСТОРИЯ',
    'journey-text': 'Я начал с нуля, без опыта в IT. Но я верю, что дисциплина и любопытство могут научить любого программировать. Это мой путь — не компании, а человека, создающего своё будущее.',
    'my-vision': 'МОЯ ВИДЕНИЕ',
    'vision-text': 'Стать профессиональным frontend-разработчиком и создавать значимые цифровые продукты — независимо от моего старта.',
    'my-mission': 'МОЯ МИССИЯ',
    'mission-text': 'Постоянно учиться, создавать реальные проекты и доказывать, что перемены возможны при упорстве и труде.',
    'my-values': 'МОИ ОСНОВНЫЕ ЦЕННОСТИ',
    'discipline': 'Дисциплина',
    'discipline-desc': 'Появляюсь каждый день',
    'self-belief': 'Вера в себя',
    'self-belief-desc': 'Верю в свой путь',
    'continuous-learning': 'Непрерывное обучение',
    'continuous-learning-desc': 'Никогда не останавливаюсь',
    'integrity': 'Честность',
    'integrity-desc': 'Строю с честностью и целью',
    'why-follow': 'ПОЧЕМУ СЛЕДИТЬ ЗА МОЕЙ ИСТОРИЕЙ?',
    'real-progress': 'Реальный прогресс',
    'real-progress-desc': 'Без сокращений, только постоянное обучение.',
    'transparent-path': 'Прозрачный путь',
    'transparent-path-desc': 'Я делюсь каждым шагом — победы и вызовы.',
    'from-zero': 'С нуля',
    'from-zero-desc': 'Я начал ни с чего — только с силой воли.',
    'tools-resources': 'МОИ ИНСТРУМЕНТЫ И РЕСУРСЫ',
    'contact-title': 'НАПИШИТЕ МНЕ',
    'contact-desc': 'Буду рад услышать от вас.',
    'get-in-touch': 'СВЯЗАТЬСЯ',
    'email': 'Email',
    'location': 'Местоположение',
    'follow': 'Подписывайтесь:',
    'footer-about': 'Из Египта, строю будущее в России.',
    'footer-location': 'Чебоксары, Россия',
    'footer-email': 'hassan.eldaghidi@example.com',
    'footer-nav': 'Навигация',
    'footer-home': 'Главная',
    'footer-about-link': 'Обо мне',
    'footer-skills': 'Мои навыки',
    'footer-contact': 'Контакт',
    'footer-follow': 'Подписывайтесь:',
    'footer-copyright': '© 2025 Хасан Эль-Дегиди. Все права защищены.',
    'send-message': 'Отправить сообщение',
    'see-my-skills': 'Смотреть мои навыки',
    'grow-together': 'Давайте расти вместе.'
  }
};

// ====================
// إدارة اللغة الحالية
// ====================
let currentLang = 'en'; // اللغة الافتراضية

// ====================
// دالة تغيير اللغة
// ====================
function setLanguage(lang) {
  // تحديث كل عنصر في الصفحة حسب المفتاح
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // تغيير اتجاه الصفحة للعربية فقط
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // تغيير نص زر اللغة
  document.getElementById('lang-toggle').textContent = lang === 'en' ? 'AR' : (lang === 'ar' ? 'RU' : 'EN');
}

// ====================
// تبديل اللغة عند النقر
// ====================
document.getElementById('lang-toggle').addEventListener('click', () => {
  if (currentLang === 'en') {
    currentLang = 'ar';
  } else if (currentLang === 'ar') {
    currentLang = 'ru';
  } else {
    currentLang = 'en';
  }
  setLanguage(currentLang);
});

// ====================
// تحميل اللغة عند فتح الصفحة
// ====================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
