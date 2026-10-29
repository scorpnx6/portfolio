/* ============================================
   DIGITAL ZN v2 java script yeeey
============================================ */
'use strict';

/* ============================================
   BACKEND API
============================================ */
const API = {
  BASE_URL: 'https://digitalzn-production.up.railway.app',
  CONTACT: '/api/contact'
};

/* ============================================
   TRANSLATIONS
============================================ */
const LANG = {
  en: {
    nav_home:      'Home',
    nav_services:  'Services',
    nav_portfolio: 'Portfolio',
    showcase_label: '01 — Some of our latest work',
    nav_about:     'About',
    nav_cta:       'Let\'s Talk',
    scroll_hint:   'Scroll to explore',
    hero_badge:    'Digital Marketing Agency',
    hero_t1:       'WE',
    hero_tlead:    'LEAD',
    hero_t2:       'THE FEED',
    hero_sub:      'Digital zn is a creative and performance digital agency turning attention into acquisition. social creative, influence, media performance and data intelligence working as one team, for growth minded brands with the autonomy to move fast.',
    hero_cta1:     'START YOUR JOURNEY',
    reel_label:    'Showreel 2025',
    srv_label:     '02 — Services',
    srv_label2:    'Services',
    srv_title:     'What We Do',
    srv_sub:       'End-to-end digital solutions for brands that dare to lead.',
    srv1_name:     'Social Media Design',
    srv1_desc:     'Eye-catching posts, stories, covers, and templates tailored for your brand voice across all platforms.',
    srv2_name:     'Graphic Design',
    srv2_desc:     'Print-on-demand, books, roll-ups, brochures, animated PowerPoint presentations, and more.',
    srv3_name:     'Brand Identity',
    srv3_desc:     'Full brand systems — concept, logo, color palette, typography, mockups, and brand guidelines.',
    srv4_name:     'Landing Pages',
    srv4_desc:     'High-converting landing pages built with HTML, CSS & JavaScript — clean, fast, and responsive.',
    srv5_name:     'Video Editing',
    srv5_desc:     'Professional video editing for reels, ads, and promotional content that captivates your audience.',
    srv6_name:     'Videography',
    srv6_desc:     'Photography and videography sessions to produce stunning visual content for your brand.',
    srv_link:      'Learn more →',
    srv1_dialog_title: 'Social Media Design — Strategy & Content',
    srv1_dialog_desc: 'We create scroll-stopping social content systems tailored to your brand voice, including campaign concepts, post designs, stories, templates, and platform-ready creative direction.',
    srv2_dialog_title: 'Graphic Design — Visual Systems',
    srv2_dialog_desc: 'From editorial and print design to presentations and campaign assets, we build clear visual systems that keep every brand touchpoint consistent and memorable.',
    srv3_dialog_title: 'Brand Identity — Build the System',
    srv3_dialog_desc: 'We turn your positioning into a complete visual identity: concept, logo direction, color, typography, mockups, and practical brand guidelines for everyday use.',
    srv4_dialog_title: 'Landing Pages — Designed to Convert',
    srv4_dialog_desc: 'We design and build focused landing experiences with strong hierarchy, responsive layouts, clear calls to action, and fast front-end performance.',
    srv5_dialog_title: 'Video Editing — Story in Motion',
    srv5_dialog_desc: 'We shape raw footage into polished reels, ads, and promotional edits with rhythm, pacing, transitions, sound, and platform-specific finishing.',
    srv6_dialog_title: 'Videography — Capture the Brand',
    srv6_dialog_desc: 'We plan and shoot photography and video sessions that give your brand a strong visual library for campaigns, social content, products, and storytelling.',

    pf_label:      '03 — Portfolio',
    pf_title:      'Selected Portfolio',
    pf_sub:        'A glimpse of campaigns that made markets move. Click any item to view it.',
    pf1_cat:       'Branding',
    pf1_name:      'Graphic Design Showcase',
    pf2_cat:       'Video',
    pf2_name:      'Editing & Videography',
    pf3_cat:       'Web',
    pf3_name:      'Web Development — Full Stack',
    pf_view:       'View project',
    pf_all:        'View All Portfolio →',
    ab_label:      '04 — About',
    ab_title:      'We Are Digital ZN',
    ab_body:       'Born in the digital age, Digital ZN is a full-service creative and digital marketing agency. We partner with ambitious brands to craft strategies that cut through the noise and lead the conversation. Our team of strategists, creators, and technologists work in sync — turning visions into viral moments.',
    ab_quote:      '"Our vision is simple: to lead the feed wherever our clients are present."',
    about_a1:      'Creative Excellence',
    about_a2:      'Data-Driven Results',
    about_a3:      'Cultural Intelligence',
    about_a4:      'Speed to Market',
    about_a5:      'Transparent Partnership',
    about_a6:      'Measurable ROI',
    ct_label:      '05 — Contact',
    ct_title:      "Let's Build Something Great",
    ct_sub:        'Ready to lead the feed? Tell us about your project.',
    ct_wa:         'Chat on WhatsApp',
    form_name:     'Your Name',
    form_email:    'Your Email',
    form_phone:    '+123-456-789',
    form_services: 'Services you\'re interested in',
    form_msg:      'Tell us about your project...',
    form_send:     'Send Message',
    success_title: 'Message Sent!',
    success_msg:   "We'll get back to you within 24 hours.",
    footer_tagline: '"We Lead The Feed"',
    footer_copy:   'All rights reserved.',
    err_name:      'Please enter your name.',
    err_email:     'Please enter a valid email address.',
    err_msg:       'Please describe your project (at least 10 characters).',
    card1_title: 'AI & Tech Branding',
    card1_cat:   'Brand Identity',
    card2_title: 'Beer Brand Campaign',
    card2_cat:   'Social Media',
    card3_title: 'Farm App UI/UX',
    card3_cat:   'Web Design',
    card4_title: 'Fintech Platform',
    card4_cat:   'Landing Page',
    card5_title: 'Real Estate Launch',
    card5_cat:   'Video Production',
    fot_comp:     'Company',
    fot_social:  'Social',
    webss: 'Web Development',
    suppp:  'Support ',
    desp:        'Digital ZN helps ambitious brands build bold digital experiences through strategy, design, development, and visual content.'
  },

  fr: {
    nav_home:      'Accueil',
    nav_services:  'Services',
    nav_portfolio: 'Portfolio',
    nav_about:     'À Propos',
    showcase_label: '01 — parmis les denier traveaux',
    nav_cta:       'Parlons-en',
    scroll_hint:   'Défiler pour explorer',
    hero_badge:    'Agence de Marketing Digital',
    hero_t1:       'NOUS',
    hero_tlead:    'MENONS',
    hero_t2:       'LE CONTENU',
    hero_sub:      'Agence créative basée au Maroc. Nous concevons, développons et filmons pour les marques qui veulent se démarquer.',
    hero_cta1:     'COMMENCER',
    reel_label:    'Showreel 2025',
    srv_label:     '02 — Services',
    srv_label2:     'Services',
    srv_title:     'Ce Que Nous Faisons',
    srv_sub:       'Solutions digitales de bout en bout pour les marques qui osent mener.',
    srv1_name:     'Design Réseaux Sociaux',
    srv1_desc:     'Publications, stories, couvertures et templates accrocheurs adaptés à la voix de votre marque.',
    srv2_name:     'Design Graphique',
    srv2_desc:     "Impression à la demande, livres, roll-ups, brochures, présentations PowerPoint animées et plus encore.",
    srv3_name:     'Identité de Marque',
    srv3_desc:     'Systèmes de marque complets — concept, logo, palette, typographie, mockups et charte graphique.',
    srv4_name:     'Landing Pages',
    srv4_desc:     'Pages à fort taux de conversion en HTML, CSS et JavaScript — épurées, rapides et responsives.',
    srv5_name:     'Montage Vidéo',
    srv5_desc:     'Montage professionnel pour reels, publicités et contenus promotionnels qui captivent.',
    srv6_name:     'Vidéographie',
    srv6_desc:     'Séances photo et vidéo pour produire des contenus visuels époustouflants pour votre marque.',
    srv_link:      'En savoir plus →',
    srv1_dialog_title: 'Design Réseaux Sociaux — Stratégie & Contenu',
    srv1_dialog_desc: 'Nous créons des systèmes de contenu social qui attirent l’attention, adaptés à la voix de votre marque : concepts de campagnes, posts, stories, templates et direction créative.',
    srv2_dialog_title: 'Design Graphique — Systèmes Visuels',
    srv2_dialog_desc: 'De l’éditorial et de l’impression aux présentations et supports de campagne, nous construisons des systèmes visuels cohérents et mémorables.',
    srv3_dialog_title: 'Identité de Marque — Construire le Système',
    srv3_dialog_desc: 'Nous transformons votre positionnement en identité visuelle complète : concept, logo, couleurs, typographie, mockups et guidelines pratiques.',
    srv4_dialog_title: 'Landing Pages — Pensées pour Convertir',
    srv4_dialog_desc: 'Nous concevons et développons des landing pages ciblées avec une hiérarchie claire, des layouts responsives, des appels à l’action forts et de bonnes performances.',
    srv5_dialog_title: 'Montage Vidéo — Le Storytelling en Mouvement',
    srv5_dialog_desc: 'Nous transformons vos rushs en reels, publicités et contenus promotionnels soignés grâce au rythme, au sound design, aux transitions et au finishing.',
    srv6_dialog_title: 'Vidéographie — Capturer la Marque',
    srv6_dialog_desc: 'Nous préparons et réalisons des séances photo et vidéo pour créer une bibliothèque visuelle forte destinée aux campagnes, réseaux sociaux, produits et storytelling.',

    pf_label:      '03 — Portfolio',
    pf_title:      'Portfolio Sélectionné',
    pf_sub:        "Un aperçu des campagnes qui ont fait bouger les marchés. Cliquez pour voir.",
    pf1_cat:       'Branding',
    pf1_name:      'Vitrine Design Graphique',
    pf2_cat:       'Vidéo',
    pf2_name:      'Montage & Vidéographie',
    pf3_cat:       'Web',
    pf3_name:      'Développement Web — Full Stack',
    pf_view:       'Voir le projet',
    pf_all:        'Tout le Portfolio →',
    ab_label:      '04 — À Propos',
    ab_title:      'Nous Sommes Digital ZN',
    ab_body:       "Né à l'ère numérique, Digital ZN est une agence créative et de marketing digital full-service. Nous accompagnons les marques ambitieuses pour élaborer des stratégies qui tranchent et mènent la conversation. Notre équipe de stratèges, créatifs et technologues travaillent en synergie — transformant les visions en moments viraux.",
    ab_quote:      '"Notre vision est simple : mener le feed partout où nos clients sont présents."',
    about_a1:      'Excellence créative',
    about_a2:      'Résultats fondés sur les données',
    about_a3:      'Intelligence culturelle',
    about_a4:      'Rapidité de mise sur le marché',
    about_a5:      'Partenariat transparent',
    about_a6:      'Retour sur investissement mesurable',
    ct_label:      '05 — Contact',
    ct_title:      'Construisons Quelque Chose',
    ct_sub:        'Prêt à mener le feed ? Parlez-nous de votre projet.',
    ct_wa:         'Discuter sur WhatsApp',
    form_name:     'Votre Nom',
    form_email:    'Votre E-mail',
    form_phone:    '+123-456-789',
    form_services: 'Services qui vous intéressent',
    form_msg:      'Parlez-nous de votre projet...',
    form_send:     'Envoyer le Message',
    success_title: 'Message Envoyé !',
    success_msg:   'Nous vous répondrons dans les 24 heures.',
    footer_tagline: '"Nous Menons Le Feed"',
    footer_copy:   'Tous droits réservés.',
    err_name:      'Veuillez entrer votre nom.',
    err_email:     'Veuillez entrer une adresse e-mail valide.',
    err_msg:       'Décrivez votre projet (au moins 10 caractères).',
    card1_title: 'Branding IA & Tech',
    card1_cat:   'Identité de Marque',
      desp :       'تساعد Digital ZN العلامات التجارية الطموحة على بناء تجارب رقمية جريئة، وذلك من خلال الاستراتيجية والتصميم والتطوير والمحتوى البصري.',
    card2_title: 'Campagne Bière',
    card2_cat:   'Réseaux Sociaux',
    card3_title: 'UI/UX App Agricole',
    card3_cat:   'Design Web',
    card4_title: 'Plateforme Fintech',
    card4_cat:   'Landing Page',
    card5_title: 'Lancement Immobilier',
    card5_cat:   'Production Vidéo',
    fot_comp:    'L’entreprise',
    fot_social:  'Social',
    suppp:   'Support',
    webss:  'Développement web',
    desp: 'Digital ZN aide des marques ambitieuses à concevoir des expériences numériques audacieuses, grâce à la stratégie, au design, au développement et à la création de contenus visuels.'
  },

  ar: {
    nav_home:      'الرئيسية',
    nav_services:  'الخدمات',
    nav_portfolio: 'أعمالنا',
    nav_about:     'من نحن',
    showcase_label: '01 — بعض أعمالنا الأخيرة',
    nav_cta:       'تواصل معنا',
    scroll_hint:   'مرر للاستكشاف',
    hero_badge:    'وكالة تسويق رقمي',
    hero_t1:       'نحن',
    hero_tlead:    'نقود',
    hero_t2:       'المحتوى الرقمي',
    hero_sub:      'وكالة إبداعية رقمية مقرها المغرب. نصمم ونطور ونصور للعلامات التجارية التي تريد أن تتميز.',
    hero_cta1:     'ابدأ رحلتك',
    reel_label:    'شريط الأعمال 2025',
    srv_label:     '02 — الخدمات',
    srv_label2:     'الخدمات',
    srv_title:     'ماذا نفعل',
    srv_sub:       'حلول رقمية متكاملة للعلامات التجارية الطموحة.',
    srv1_name:     'تصميم وسائل التواصل',
    srv1_desc:     'منشورات واستوريات وأغلفة وقوالب جذابة مصممة لصوت علامتك التجارية عبر جميع المنصات.',
    srv2_name:     'التصميم الجرافيكي',
    srv2_desc:     'طباعة حسب الطلب، كتب، لافتات، كتيبات، عروض باور بوينت متحركة والمزيد.',
    srv3_name:     'هوية العلامة التجارية',
    srv3_desc:     'أنظمة علامة تجارية كاملة — المفهوم، الشعار، لوحة الألوان، الخطوط، والدليل التجاري.',
    srv4_name:     'صفحات الهبوط',
    srv4_desc:     'صفحات هبوط عالية التحويل بـ HTML وCSS وJavaScript — نظيفة وسريعة ومتجاوبة.',
    srv5_name:     'مونتاج الفيديو',
    srv5_desc:     'مونتاج احترافي للريلز والإعلانات والمحتوى الترويجي الذي يأسر جمهورك.',
    srv6_name:     'التصوير والفيديو',
    srv6_desc:     'جلسات تصوير فوتوغرافي وفيديو لإنتاج محتوى بصري مذهل لعلامتك التجارية.',
    srv_link:      'اعرف المزيد →',
    srv1_dialog_title: 'تصميم وسائل التواصل — الاستراتيجية والمحتوى',
    srv1_dialog_desc: 'نصنع أنظمة محتوى اجتماعي لافتة للنظر ومتكيفة مع هوية علامتك، من أفكار الحملات إلى المنشورات والقصص والقوالب والتوجيه الإبداعي.',
    srv2_dialog_title: 'التصميم الجرافيكي — أنظمة بصرية',
    srv2_dialog_desc: 'من التصميم التحريري والمطبوعات إلى العروض ومواد الحملات، نبني أنظمة بصرية متناسقة تجعل كل نقطة تواصل واضحة ولا تُنسى.',
    srv3_dialog_title: 'هوية العلامة — بناء النظام',
    srv3_dialog_desc: 'نحوّل تموضع علامتك إلى هوية بصرية متكاملة تشمل المفهوم واتجاه الشعار والألوان والخطوط والنماذج الإرشادية العملية.',
    srv4_dialog_title: 'صفحات الهبوط — مصممة للتحويل',
    srv4_dialog_desc: 'نصمم ونطور صفحات هبوط مركزة بهرمية واضحة وتخطيطات متجاوبة ودعوات فعل قوية وأداء سريع على الواجهة الأمامية.',
    srv5_dialog_title: 'مونتاج الفيديو — القصة في حركة',
    srv5_dialog_desc: 'نحوّل اللقطات الخام إلى ريلز وإعلانات ومحتوى ترويجي متقن من خلال الإيقاع والانتقالات والصوت واللمسات النهائية المناسبة لكل منصة.',
    srv6_dialog_title: 'التصوير والفيديو — التقاط هوية العلامة',
    srv6_dialog_desc: 'نخطط وننفذ جلسات تصوير فوتوغرافي وفيديو تمنح علامتك مكتبة بصرية قوية للحملات ومحتوى التواصل والمنتجات وسرد القصص.',

    pf_label:      '03 — أعمالنا',
    pf_title:      'أعمال مختارة',
    pf_sub:        'لمحة عن الحملات التي حركت الأسواق. انقر لمشاهدة أي عمل.',
    pf1_cat:       'هوية بصرية',
    pf1_name:      'معرض التصميم الجرافيكي',
    pf2_cat:       'فيديو',
    pf2_name:      'مونتاج وتصوير',
    pf3_cat:       'ويب',
    pf3_name:      'تطوير الويب — فول ستاك',
    pf_view:       'مشاهدة المشروع',
    pf_all:        'جميع الأعمال →',
    ab_label:      '04 — من نحن',
    ab_title:      'نحن Digital ZN',
    ab_body:       'وُلدت Digital ZN في العصر الرقمي لتكون وكالة إبداعية وتسويقية متكاملة. نتشارك مع العلامات التجارية الطموحة لصياغة استراتيجيات تخترق الضجيج وتقود الحوار. فريقنا من الاستراتيجيين والمبدعين والتقنيين يعملون بتناغم — لتحويل الرؤى إلى لحظات فيروسية.',
    ab_quote:      '"رؤيتنا بسيطة: أن نقود المحتوى أينما كان عملاؤنا حاضرين."',
    p1: 'التميز الإبداعي',
    p2: 'نتائج مدفوعة بالبيانات',
    p3: 'الذكاء الثقافي',
    p4: 'السرعة في الوصول للسوق',
    p5: 'شراكة شفافة',
    p6: 'عائد استثمار قابل للقياس',
    about_a1:      'التميز الإبداعي',
    about_a2:      'نتائج قائمة على البيانات',
    about_a3:      'الذكاء الثقافي',
    about_a4:      'السرعة في طرح المنتجات في الأسواق',
    about_a5:      'شراكة تتسم بالشفافية',
    about_a6:      'عائد على الاستثمار قابل للقياس',

    ct_label:      '05 — تواصل',
    ct_title:      'لنبني شيئاً عظيماً',
    ct_sub:        'مستعد لقيادة المحتوى؟ حدثنا عن مشروعك.',
    ct_wa:         'تحدث عبر واتساب',
    form_name:     'اسمك',
    form_email:    'بريدك الإلكتروني',
    form_phone:    '+212-XXX-XXXXXX',
    form_services: 'الخدمات التي تهمك',
    form_msg:      'أخبرنا عن مشروعك...',
    form_send:     'إرسال الرسالة',
    success_title: 'تم إرسال رسالتك!',
    success_msg:   'سنرد عليك خلال 24 ساعة.',
    footer_tagline: '"نحن نقود المحتوى الرقمي"',
    footer_copy:   'جميع الحقوق محفوظة.',
    err_name:      'الرجاء إدخال اسمك.',
    err_email:     'الرجاء إدخال بريد إلكتروني صحيح.',
    err_msg:       'الرجاء وصف مشروعك (10 أحرف على الأقل).',
    card1_title: 'هوية الذكاء الاصطناعي',
    card1_cat:   'هوية تجارية',
    card2_title: 'حملة ماركة البيرة',
    card2_cat:   'وسائل التواصل',
    card3_title: 'تطبيق الزراعة',
    card3_cat:   'تصميم الويب',
    card4_title: 'منصة فينتيك',
    card4_cat:   'صفحة هبوط',
    card5_title: 'إطلاق العقارات',
    card5_cat:   'إنتاج الفيديو',
    webss:       'تصميم الويب',
    desp :       'تساعد Digital ZN العلامات التجارية الطموحة على بناء تجارب رقمية جريئة، وذلك من خلال الاستراتيجية والتصميم والتطوير والمحتوى البصري.',
    suppp:      'للدعم',
    fot_comp:     'الشركة',
    fot_social:  'مواقع التواصل'
  }
};
/* ============================================
   background animation
============================================ */
/* ============================================
   CAROUSEL DATA
============================================ */
const CARDS = [
  { img: 'assets/pr2.webp',     titleKey: 'card1_title', catKey: 'card1_cat' },
  { img: 'assets/b152a9192944243.65e6201706c6f.webp',   titleKey: 'card2_title', catKey: 'card2_cat' },
  { img: 'assets/cf0879199625531.66e5ba2a7c4f2.webp',     titleKey: 'card3_title', catKey: 'card3_cat' },
  { img: 'assets/yyt.webp',  titleKey: 'card4_title', catKey: 'card4_cat' },
  { img: 'assets/prj2.gif',  titleKey: 'card5_title', catKey: 'card5_cat' },
  { img: 'assets/fffs.webp',   titleKey: 'card2_title', catKey: 'card6_cat' },
  { img: 'assets/oopsd.webp',   titleKey: 'card2_title', catKey: 'card7_cat' },
    { img: 'assets/yyt.webp',  titleKey: 'card4_title', catKey: 'card8_cat' },
  { img: 'assets/prj2.gif',  titleKey: 'card5_title', catKey: 'card9_cat' },
  { img: 'assets/fffs.webp',   titleKey: 'card2_title', catKey: 'card10_cat' },
  { img: 'assets/oopsd.webp',   titleKey: 'card2_title', catKey: 'card11_cat' },
];

/* ============================================
   STATE
============================================ */
let currentLang   = localStorage.getItem('dzn_lang')  || 'en';
let currentTheme  = localStorage.getItem('dzn_theme') || 'dark';
let carouselAngle = 0;
const BASE_CAROUSEL_SPEED = -0.004;
let carouselVelocity = BASE_CAROUSEL_SPEED;
let carouselFrame = null;
let lastCarouselTime = 0;
let reelPlaying = true;
let isDragging  = false;
let dragStartX  = 0;
let dragLastX   = 0;
let dragLastTime = 0;
let dragVelocity = 0;

/* ============================================
   HELPERS
============================================ */
const $ = id => document.getElementById(id);
const t = key => (LANG[currentLang] && LANG[currentLang][key]) ? LANG[currentLang][key] : (LANG.en[key] || key);

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('dzn_lang', lang);


  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';


  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t(key)) el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t(key)) el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-chip]').forEach(el => {
    const key = el.getAttribute('data-i18n-chip');
    if (t(key)) el.textContent = t(key);
  });


  updateCarouselLang();


  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('dzn_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNav');
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
/* ============================================
   INTRO OVERLAY
============================================ */
function initIntro() {
  const overlay = $('intro-overlay');
  if (!overlay) return;

  setTimeout(() => overlay.classList.add('hidden'), 2600);
}

/* ============================================
   CURSOR GLOW
============================================ */
function initCursor() {
  const glow = $('cursor-glow');
  if (!glow || window.matchMedia('(hover: none)').matches) {
    if (glow) glow.style.display = 'none';
    return;
  }
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

/* ============================================
   NAVIGATION
============================================ */
function initNav() {
  const nav    = document.querySelector('.nav');
  const burger = $('hamburger');
  const menu   = $('mobileMenu');


  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
  }, { passive: true });


  burger && burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    menu.classList.toggle('open', open);
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

function updateActiveLink() {
  const sections = ['home', 'hero', 'services', 'portfolio', 'about', 'contact'];
  const scrollY  = window.scrollY + 120;
  let current    = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });

  const navMap = { hero: 'home', home: 'home' };
  const target = navMap[current] || current;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === target);
  });
}

/* ============================================
   3D CAROUSEL
============================================ */
function buildCarousel() {
  const scene = $('carouselScene');
  if (!scene) return;

  CARDS.forEach((card, i) => {

    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.dataset.index = i;


    const inner = document.createElement('div');
    inner.className = 'card-inner';
    inner.innerHTML = `
      <img src="${card.img}" alt="${t(card.titleKey)}" loading="${i === 0 ? 'eager' : 'lazy'}" />
      <div class="card-gloss"></div>
      <div class="card-ring"></div>
    `;
    wrapper.appendChild(inner);
    scene.appendChild(wrapper);
  });

  positionCircularCards();
  attachCarouselEvents();
  startCircularAutoplay();
}

function getCarouselRadius() {
  const width = window.innerWidth;
  if (width < 768) return Math.min(width * 1.152, 464);
  if (width < 900) return 390;
  return 850;
}

function normalizeAngle(angle) {
  return ((angle + 180) % 360 + 360) % 360 - 180;
}

const IS_TOUCH_DEVICE = window.matchMedia('(pointer: coarse)').matches
                      || window.innerWidth < 768;

function positionCircularCards() {
  const wrappers = document.querySelectorAll('.card-wrapper');
  const total = CARDS.length;
  const step = 360 / total;
  const radius = getCarouselRadius();
  let frontIndex = 0;
  let closest = Infinity;

  wrappers.forEach((wrapper, i) => {
    const frontDistance = Math.abs(normalizeAngle(i * step + carouselAngle));
    if (frontDistance < closest) {
      closest = frontDistance;
      frontIndex = i;
    }
  });

  wrappers.forEach((wrapper, i) => {
    const angle = i * step + carouselAngle;
    const normalized = normalizeAngle(angle);
    const depth = Math.cos(angle * Math.PI / 180);
    const opacity = 0.28 + Math.max(depth, 0) * 0.72;
    const scale = 0.78 + Math.max(depth, 0) * 0.22;

    wrapper.classList.toggle('is-active', i === frontIndex);
    wrapper.style.zIndex = String(Math.round((depth + 1) * 100));
    wrapper.style.opacity = opacity.toFixed(3);
    wrapper.style.transform =
      `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`;
    wrapper.style.visibility = (IS_TOUCH_DEVICE && Math.abs(normalized) > 100)
      ? 'hidden' : 'visible';
  });
}

function startCircularAutoplay() {
  cancelAnimationFrame(carouselFrame);
  lastCarouselTime = performance.now();

  const tick = now => {
    const delta = Math.min(now - lastCarouselTime, 48);
    lastCarouselTime = now;

    if (!isDragging) {
      carouselAngle += carouselVelocity * delta;
      carouselVelocity += (BASE_CAROUSEL_SPEED - carouselVelocity) * Math.min(delta / 900, 1);
    }

    positionCircularCards();
    carouselFrame = requestAnimationFrame(tick);
  };

  carouselFrame = requestAnimationFrame(tick);
}

function attachCarouselEvents() {
  const wrapper = $('carouselWrapper');
  if (!wrapper) return;

  wrapper.addEventListener('pointerdown', onDragStart);
  window.addEventListener('pointermove', onDragMove);
  window.addEventListener('pointerup', onDragEnd);
  window.addEventListener('pointercancel', onDragEnd);
  window.addEventListener('resize', positionCircularCards);

  document.querySelectorAll('.card-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      if (Math.abs(dragStartX - dragLastX) > 10) return;
      const idx = parseInt(wrapper.dataset.index, 10);
      const step = 360 / CARDS.length;
      const current = normalizeAngle(idx * step + carouselAngle);
      carouselVelocity = current > 0 ? -0.035 : 0.035;
    });
  });
}

function onDragStart(e) {
  if (e.button !== undefined && e.button !== 0) return;
  isDragging = true;
  dragStartX = e.clientX;
  dragLastX = e.clientX;
  dragLastTime = performance.now();
  dragVelocity = 0;
  const wrapper = $('carouselWrapper');
  wrapper && wrapper.classList.add('is-dragging');
}

function onDragMove(e) {
  if (!isDragging) return;
  const now = performance.now();
  const dx = e.clientX - dragLastX;
  const dt = Math.max(now - dragLastTime, 1);
  carouselAngle += dx * 0.22;
  dragVelocity = (dx / dt) * 0.22;
  dragLastX = e.clientX;
  dragLastTime = now;
  positionCircularCards();
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  dragStartX = dragLastX;
  carouselVelocity = Math.max(-0.08, Math.min(0.08, dragVelocity || BASE_CAROUSEL_SPEED));
  const wrapper = $('carouselWrapper');
  wrapper && wrapper.classList.remove('is-dragging');
}

function updateCarouselLang() {
  document.querySelectorAll('.card-wrapper').forEach((wrapper, i) => {
    const img = wrapper.querySelector('img');
    if (img && CARDS[i]) img.alt = t(CARDS[i].titleKey);
  });
}

/* ============================================
   REEL PLAYER
============================================ */
function initReel() {
  const video     = document.querySelector('.reel-video');
  const btn       = $('reelPlayBtn');
  const playIcon  = $('reelPlayIcon');
  const pauseIcon = $('reelPauseIcon');
  const heroReel  = document.querySelector('.hero-reel');
  if (!video || !btn) return;

  btn.addEventListener('click', () => {
    if (video.paused) { video.play(); reelPlaying = true; }
    else              { video.pause(); reelPlaying = false; }
    playIcon.style.display  = video.paused ? 'block' : 'none';
    pauseIcon.style.display = video.paused ? 'none'  : 'block';
  });

  heroReel && heroReel.addEventListener('click', e => {
    if (e.target === btn || btn.contains(e.target)) return;
    btn.click();
  });
}

/* ============================================
   THEME TOGGLE
============================================ */
function initTheme() {
  applyTheme(currentTheme);
  const toggle = $('themeToggle');
  toggle && toggle.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

/* ============================================
   LANGUAGE SWITCHER
============================================ */
function initLang() {
  applyLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ============================================
   SCROLL REVEAL
============================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {

        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal-up'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

/* ============================================
   CONTACT FORM
============================================ */
function initForm() {
  const form      = $('contactForm');
  const errorBox  = $('formError');
  const submitBtn = $('submitBtn');
  const submitLbl = $('submitLabel');
  const success   = $('formSuccess');
  if (!form) return;


  document.querySelectorAll('#serviceChips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (errorBox) errorBox.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      errorBox.textContent = t('err_name');
      form.name.classList.add('invalid');
      form.name.focus();
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorBox.textContent = t('err_email');
      form.email.classList.add('invalid');
      form.email.focus();
      return;
    }

    if (message.length < 10) {
      errorBox.textContent = t('err_msg');
      form.message.classList.add('invalid');
      form.message.focus();
      return;
    }

    const services = Array.from(
      document.querySelectorAll('#serviceChips .chip.selected')
    ).map(chip => chip.dataset.val);

    if (services.length === 0) {
      errorBox.textContent = 'Please select at least one service.';
      return;
    }

    submitBtn.disabled = true;
    submitLbl.textContent = 'Sending...';


    const payload = {
      name,
      email,
      phone,
      services,
      message
    };

    try {
      const response = await fetch(`${API.BASE_URL}${API.CONTACT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message.');
      }

      form.style.display = 'none';
      success.style.display = 'flex';

    } catch (error) {
      console.error('Contact form error:', error);
      errorBox.textContent = error.message || 'Unable to send your message.';
    } finally {
      submitBtn.disabled = false;
      submitLbl.textContent = t('form_send');
    }
  });

  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('focus', () => {
      el.classList.remove('invalid');
      if (errorBox) errorBox.textContent = '';
    });
  });
}

/* ============================================
   MARQUEE HOVER PAUSE
============================================ */
function initMarquee() {
  const track = document.querySelector('.marquee-content');
  if (!track) return;
  const parent = track.parentElement;
  parent.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  parent.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}
/* ============================================
   FOOTER YEAR
============================================ */
function initFooter() {
  const el = $('year');
  if (el) el.textContent = new Date().getFullYear();
}
/* ============================================
   SMOOTH SCROLL for anchor links
============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not(.service-dialog-link)').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
/* ============================================
   SERVICE MORPHING DIALOG
============================================ */

function initServiceMorph() {
  const dialog = document.getElementById('serviceDialog');
  const closeBtn = document.getElementById('serviceDialogClose');
  const dialogImage = document.getElementById('dialogImage');
  const dialogNumber = document.getElementById('dialogNumber');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogDescription = document.getElementById('dialogDescription');
  const cards = document.querySelectorAll('.service-card');
const workLink = dialog.querySelector('.service-dialog-link');
if (workLink) {
  workLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeDialog();
    const target = document.querySelector(workLink.getAttribute('href'));
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  });
}
  if (!dialog || !closeBtn || !dialogImage || !dialogNumber ||
      !dialogTitle || !dialogDescription || !cards.length) return;

  let activeCard = null;
  let closeTimer = null;


  cards.forEach((card, index) => {
    const expandBtn = card.querySelector('.service-expand');
    if (!expandBtn) return;

    const openService = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (closeTimer) clearTimeout(closeTimer);

      activeCard = card;

      const imageSrc = card.dataset.dialogImage ||
        card.querySelector('.service-icon img')?.getAttribute('src');

      if (imageSrc) {
        dialogImage.innerHTML = '';
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = '';
        dialogImage.appendChild(img);
      }


      const titleKey = card.dataset.dialogTitleKey;
      const descKey = card.dataset.dialogDescKey;

      dialogNumber.textContent = `${String(index + 1).padStart(2, '0')} — SERVICE`;
      dialogTitle.textContent = titleKey ? t(titleKey) : '';
      dialogDescription.textContent = descKey ? t(descKey) : '';

      dialog.classList.add('open');
      dialog.setAttribute('aria-hidden', 'false');
      document.body.classList.add('service-dialog-open');

      requestAnimationFrame(() => closeBtn.focus());
    };

    card.addEventListener('click', openService);

    expandBtn.addEventListener('click', openService);
  });

  function closeDialog() {
    if (!dialog.classList.contains('open')) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('service-dialog-open');
  }

  closeBtn.addEventListener('click', closeDialog);

  const backdrop = dialog.querySelector('.service-dialog-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeDialog);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog.classList.contains('open')) {
      closeDialog();
    }
  });
}

/* ============================================
   INIT
============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initCursor();
  initNav();
  buildCarousel();
  initReel();
  initTheme();
  initLang();
  initScrollReveal();
  initForm();
  initMarquee();
  initFooter();
  initSmoothScroll();

  initServiceMorph();

  updateActiveLink();
});