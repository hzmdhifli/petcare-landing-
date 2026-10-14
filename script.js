/**
 * PetCare Landing Page Interactivity & Multi-Language Support
 */

const APP_CONFIG = {
    // Official Google Play Store URL
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hazem.petcare",
    
    // Direct APK download path
    apkDownloadUrl: "petcare-app.apk",
    
    // Support Contact Placeholder
    supportEmail: "SUPPORT_EMAIL",

    // Default language
    defaultLang: "en"
};

/**
 * Translations Dictionary (English, French, Spanish, Deutsch)
 */
const TRANSLATIONS = {
    en: {
        flag: "🇬🇧",
        name: "English",
        nav_features: "Features",
        nav_preview: "See It In Action",
        nav_why: "Why PetCare",
        nav_faq: "FAQ",
        hero_title: 'Give Your Furry Friends the <span class="gradient-text">Care They Deserve</span>',
        hero_subtitle: "The ultimate mobile companion for loving pet parents. Organize daily feeding, track health & vaccines, and never miss a vet appointment.",
        btn_google_play_sub: "GET IT ON",
        btn_app_store_sub: "Coming Soon on",
        badge_coming_soon: "Coming Soon",
        pill_buddy: '<strong>Buddy (Golden)</strong><small>Morning Walk • Completed ✅</small>',
        pill_luna: '<strong>Luna (Persian Cat)</strong><small>Vaccination scheduled 🗓️</small>',
        features_badge: "Features",
        features_title: "Designed for Pets. Built for Peace of Mind.",
        features_desc: "Keep every pet in your household thriving with simple, focused daily tools.",
        feat_1_title: "Smart Reminders",
        feat_1_desc: "Custom notifications for meals, walks, grooming and medication, with fun pet sounds.",
        feat_1_tag: "Routine & Sound Alerts",
        feat_2_title: "Weight & Vet Visit Log",
        feat_2_desc: "Track weight over time and upcoming vet appointments.",
        feat_2_tag: "Health History",
        feat_3_title: "Health & Vaccine Passport",
        feat_3_desc: "Store vaccination dates, vet appointments and weight history in one place.",
        feat_3_tag: "Essential Records",
        feat_4_title: "Multi-Pet Profiles",
        feat_4_desc: "Have 2 dogs, a cat, and a bunny? Manage every family member with unique avatars, colors, and species cards.",
        feat_4_tag: "Dogs, Cats & More",
        feat_5_title: "Cloud Sync & Backup",
        feat_5_desc: "Sign in with Google or Apple. Keep your pet records backed up safely and synchronized across all your devices.",
        feat_5_tag: "Always Safe",
        feat_6_title: "Multi-Language Support",
        feat_6_desc: "Available in English, French, Spanish, German, Arabic, and more so pet lovers everywhere can care with ease.",
        feat_6_tag: "Worldwide Ready",
        walkthrough_badge: "App Walkthrough",
        walkthrough_title: "See It In Action",
        walkthrough_desc: "Clean, playful, and crafted with care. Explore your daily PetCare screens:",
        step_1_title: "Pet Health & Wellness",
        step_1_desc: "Overview of pet health status, vaccines, and grooming schedules.",
        step_2_title: "Custom Profiles & Avatars",
        step_2_desc: "Customize species, breeds, weight, and theme color tags.",
        why_badge: "Our Mission",
        why_title: "Why we built PetCare",
        why_desc: "Created to give pet owners peace of mind without complicated spreadsheets or clutter.",
        why_1_title: "Never miss a dose",
        why_1_desc: "Routine reminders ensure every meal, walk, medication, and vet booster happens exactly on schedule.",
        why_2_title: "One place for every pet",
        why_2_desc: "Whether you care for one dog or a full pet family, all health histories and profiles stay organized in one tap.",
        why_3_title: "Works offline",
        why_3_desc: "Smart notifications run directly on your device so your reminders arrive reliably even without an internet connection.",
        faq_badge: "Got Questions?",
        faq_title: "Frequently Asked Questions",
        faq_desc: "Quick answers about downloading and using the PetCare app.",
        faq_q1: "Where can I download the app?",
        faq_a1: "PetCare is available on Google Play for Android. The iOS version is coming soon. A direct APK is available for Android beta testers.",
        faq_q2: "Is PetCare free to download and use?",
        faq_a2: "Yes, PetCare is free to download and use. [Pro plan details coming soon.]",
        faq_q3: "Can I manage multiple pets of different species?",
        faq_a3: "Absolutely. PetCare supports dogs, cats, birds, horses, rabbits, and other domestic pets. You can assign each pet their own avatar, birthday, weight history, and schedule.",
        faq_q4: "Will I get notifications if my phone is locked?",
        faq_a4: "Yes! PetCare uses local smart notifications scheduled right on your device. You will receive alarms for feeding times, walks, and medications even when offline.",
        cta_title: "Start Giving Your Pets the Best Care Today",
        cta_desc: "Keep your daily pet routines organized, simple, and stress-free.",
        qr_subtag: "📱 Scan with your phone",
        qr_title: "Instant Google Play Download",
        qr_desc: "Scan with your phone camera to open the Google Play store page directly.",
        qr_caption: "Google Play Direct Link",
        apk_text: "Android beta APK (v1.0)",
        footer_tagline: "Your beloved pets deserve loving, organized care every single day.",
        footer_nav_heading: "Navigation",
        footer_legal_heading: "Legal & Trust",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_support: "Support Contact",
        footer_copy: "&copy; 2026 PetCare App. Built with ❤️ for pets and pet parents everywhere.",
        sticky_status: "Free",
        sticky_btn: "Install",
        modal_title: "Apple App Store Notice",
        modal_badge: "Coming Soon on iOS",
        modal_msg: "PetCare for iOS is currently in development and coming soon to the App Store. The Android version is live on Google Play!",
        modal_btn_gplay: "▶️ View on Google Play",
        modal_close: "Close"
    },
    fr: {
        flag: "🇫🇷",
        name: "Français",
        nav_features: "Fonctionnalités",
        nav_preview: "En Action",
        nav_why: "Pourquoi PetCare",
        nav_faq: "FAQ",
        hero_title: 'Offrez à vos boules de poils les <span class="gradient-text">soins qu\'ils méritent</span>',
        hero_subtitle: "Le compagnon mobile idéal pour les propriétaires d'animaux. Organisez les repas, suivez la santé et les vaccins, et ne manquez aucun rendez-vous.",
        btn_google_play_sub: "DISPONIBLE SUR",
        btn_app_store_sub: "Bientôt sur",
        badge_coming_soon: "Bientôt",
        pill_buddy: '<strong>Buddy (Golden)</strong><small>Promenade du matin • Terminée ✅</small>',
        pill_luna: '<strong>Luna (Chat Persan)</strong><small>Vaccination programmée 🗓️</small>',
        features_badge: "Fonctionnalités",
        features_title: "Conçu pour vos animaux. Pensé pour votre sérénité.",
        features_desc: "Prenez soin de tous vos animaux avec des outils simples et intuitifs au quotidien.",
        feat_1_title: "Rappels Intelligents",
        feat_1_desc: "Notifications personnalisées pour repas, promenades, toilettage et soins avec des sons amusants.",
        feat_1_tag: "Routines & Alertes Sonores",
        feat_2_title: "Suivi du Poids & Vétérinaire",
        feat_2_desc: "Suivez l'évolution du poids et notez vos prochains rendez-vous chez le vétérinaire.",
        feat_2_tag: "Historique Santé",
        feat_3_title: "Carnet de Santé & Vaccins",
        feat_3_desc: "Conservez les dates de vaccination, rendez-vous et historique de poids au même endroit.",
        feat_3_tag: "Dossier Médical",
        feat_4_title: "Profils Multi-Animaux",
        feat_4_desc: "Vous avez 2 chiens, un chat et un lapin ? Gérez chaque compagnon avec des avatars et couleurs dédiés.",
        feat_4_tag: "Chiens, Chats & Plus",
        feat_5_title: "Sauvegarde & Synchronisation Cloud",
        feat_5_desc: "Connectez-vous avec Google ou Apple. Gardez vos données sécurisées et synchronisées sur tous vos appareils.",
        feat_5_tag: "Toujours Sécurisé",
        feat_6_title: "Support Multilingue",
        feat_6_desc: "Disponible en français, anglais, espagnol, allemand, arabe et plus pour tous les amoureux des animaux.",
        feat_6_tag: "Disponible Partout",
        walkthrough_badge: "Aperçu de l'application",
        walkthrough_title: "Découvrez l'application en action",
        walkthrough_desc: "Simple, intuitive et soignée. Découvrez vos écrans quotidiens sur PetCare :",
        step_1_title: "Santé & Bien-être Animal",
        step_1_desc: "Vue d'ensemble de la santé, des vaccins et du calendrier de toilettage.",
        step_2_title: "Profils Personnalisés & Avatars",
        step_2_desc: "Personnalisez espèces, races, poids et couleurs de thème pour chaque animal.",
        why_badge: "Notre Mission",
        why_title: "Pourquoi nous avons créé PetCare",
        why_desc: "Créé pour offrir de la sérénité aux propriétaires d'animaux sans tableaux compliqués.",
        why_1_title: "Ne manquez plus une dose",
        why_1_desc: "Des rappels réguliers garantissent que repas, sorties, médicaments et vaccins soient toujours à l'heure.",
        why_2_title: "Un seul endroit pour chaque animal",
        why_2_desc: "Que vous ayez un seul chien ou toute une famille d'animaux, tout votre historique reste accessible en un geste.",
        why_3_title: "Fonctionne hors-ligne",
        why_3_desc: "Les notifications intelligentes fonctionnent directement sur votre appareil même sans connexion Internet.",
        faq_badge: "Des Questions ?",
        faq_title: "Foire Aux Questions",
        faq_desc: "Des réponses rapides sur le téléchargement et l'utilisation de PetCare.",
        faq_q1: "Où puis-je télécharger l'application ?",
        faq_a1: "PetCare est disponible sur Google Play pour Android. La version iOS arrive bientôt. Un APK direct est disponible pour les testeurs bêta.",
        faq_q2: "PetCare est-il gratuit à télécharger et utiliser ?",
        faq_a2: "Oui, PetCare est gratuit à télécharger et à utiliser. [Détails de la formule Pro à venir.]",
        faq_q3: "Puis-je gérer plusieurs animaux d'espèces différentes ?",
        faq_a3: "Absolument. PetCare prend en charge les chiens, chats, oiseaux, lapins et autres animaux de compagnie avec avatar et planning dédiés.",
        faq_q4: "Vais-je recevoir des notifications si mon téléphone est verrouillé ?",
        faq_a4: "Oui ! PetCare utilise des notifications locales programmées sur votre appareil. Vous recevrez les alertes même hors-ligne.",
        cta_title: "Offrez le meilleur à vos animaux dès aujourd'hui",
        cta_desc: "Gardez vos routines quotidiennes organisées, simples et sans stress.",
        qr_subtag: "📱 Scannez avec votre téléphone",
        qr_title: "Téléchargement instantané sur Google Play",
        qr_desc: "Scannez avec l'appareil photo pour ouvrir la fiche Google Play directement.",
        qr_caption: "Lien direct Google Play",
        apk_text: "APK Android bêta (v1.0)",
        footer_tagline: "Vos animaux de compagnie méritent une attention bienveillante et organisée chaque jour.",
        footer_nav_heading: "Navigation",
        footer_legal_heading: "Légal & Confiance",
        footer_privacy: "Politique de confidentialité",
        footer_terms: "Conditions d'utilisation",
        footer_support: "Contact Support",
        footer_copy: "&copy; 2026 PetCare App. Conçu avec ❤️ pour les animaux et leurs maîtres partout dans le monde.",
        sticky_status: "Gratuit",
        sticky_btn: "Installer",
        modal_title: "Information Apple App Store",
        modal_badge: "Bientôt sur iOS",
        modal_msg: "PetCare pour iOS est actuellement en cours de développement et arrive bientôt sur l'App Store. La version Android est disponible sur Google Play !",
        modal_btn_gplay: "▶️ Voir sur Google Play",
        modal_close: "Fermer"
    },
    es: {
        flag: "🇪🇸",
        name: "Español",
        nav_features: "Funciones",
        nav_preview: "Ver en Acción",
        nav_why: "Por qué PetCare",
        nav_faq: "Preguntas",
        hero_title: 'Dale a tus peludos el <span class="gradient-text">cuidado que merecen</span>',
        hero_subtitle: "El compañero móvil ideal para dueños de mascotas. Organiza comidas diarias, controla salud y vacunas, y no te pierdas ninguna cita veterinaria.",
        btn_google_play_sub: "DISPONIBLE EN",
        btn_app_store_sub: "Próximamente en",
        badge_coming_soon: "Próximamente",
        pill_buddy: '<strong>Buddy (Golden)</strong><small>Paseo matutino • Completado ✅</small>',
        pill_luna: '<strong>Luna (Gato Persa)</strong><small>Vacunación programada 🗓️</small>',
        features_badge: "Funciones",
        features_title: "Diseñado para mascotas. Creado para tu tranquilidad.",
        features_desc: "Mantén a cada mascota feliz y sana con herramientas diarias simples y eficaces.",
        feat_1_title: "Recordatorios Inteligentes",
        feat_1_desc: "Notificaciones personalizadas para comidas, paseos, aseo y medicación con divertidos sonidos.",
        feat_1_tag: "Rutinas y Alertas Sonoras",
        feat_2_title: "Registro de Peso y Veterinario",
        feat_2_desc: "Controla la evolución del peso y organiza tus próximas citas con el veterinario.",
        feat_2_tag: "Historial de Salud",
        feat_3_title: "Pasaporte de Salud y Vacunas",
        feat_3_desc: "Guarda las fechas de vacunación, citas veterinarias e historial de peso en un solo lugar.",
        feat_3_tag: "Registros Clave",
        feat_4_title: "Perfiles Multi-Mascota",
        feat_4_desc: "¿Tienes 2 perros, un gato y un conejo? Gestiona a cada miembro de la familia con avatares y colores únicos.",
        feat_4_tag: "Perros, Gatos y Más",
        feat_5_title: "Sincronización y Copia Cloud",
        feat_5_desc: "Inicia sesión con Google o Apple. Mantén tus registros a salvo y sincronizados en todos tus dispositivos.",
        feat_5_tag: "Siempre Seguro",
        feat_6_title: "Soporte Multilingüe",
        feat_6_desc: "Disponible en inglés, francés, español, alemán, árabe y más para cuidar a tus mascotas fácilmente.",
        feat_6_tag: "Para Todo el Mundo",
        walkthrough_badge: "Vistazo a la App",
        walkthrough_title: "Mírala en Acción",
        walkthrough_desc: "Limpia, amigable y cuidada al detalle. Explora tus pantallas diarias en PetCare:",
        step_1_title: "Salud y Bienestar de la Mascota",
        step_1_desc: "Resumen del estado de salud, vacunas y calendario de cuidados.",
        step_2_title: "Perfiles Personalizados y Avatares",
        step_2_desc: "Personaliza especies, razas, peso y colores temáticos.",
        why_badge: "Nuestra Misión",
        why_title: "Por qué creamos PetCare",
        why_desc: "Creado para brindar tranquilidad a los dueños de mascotas sin complicaciones ni desorden.",
        why_1_title: "No te pierdas una dosis",
        why_1_desc: "Recordatorios puntuales para comidas, paseos, medicinas y vacunas siempre a su debido tiempo.",
        why_2_title: "Un lugar para cada mascota",
        why_2_desc: "Tanto si tienes un perro como toda una familia de mascotas, todos los datos están a un solo toque.",
        why_3_title: "Funciona sin conexión",
        why_3_desc: "Las notificaciones se ejecutan localmente en tu móvil y llegan puntuales incluso sin conexión.",
        faq_badge: "¿Preguntas?",
        faq_title: "Preguntas Frecuentes",
        faq_desc: "Respuestas rápidas sobre cómo descargar y usar la app PetCare.",
        faq_q1: "¿Dónde puedo descargar la app?",
        faq_a1: "PetCare está disponible en Google Play para Android. La versión para iOS llegará muy pronto. Hay un APK directo para probadores beta de Android.",
        faq_q2: "¿Es PetCare gratis para descargar y usar?",
        faq_a2: "Sí, PetCare es gratis para descargar y usar. [Detalles del plan Pro próximamente.]",
        faq_q3: "¿Puedo gestionar varias mascotas de distintas especies?",
        faq_a3: "Por supuesto. PetCare admite perros, gatos, aves, conejos y otras mascotas con avatar, cumpleaños y horarios personalizados.",
        faq_q4: "¿Recibiré notificaciones si mi teléfono está bloqueado?",
        faq_a4: "¡Sí! PetCare utiliza notificaciones inteligentes programadas en tu dispositivo. Recibirás avisos incluso sin conexión.",
        cta_title: "Empieza a darle a tus mascotas el mejor cuidado hoy",
        cta_desc: "Mantén tus rutinas diarias organizadas, sencillas y sin estrés.",
        qr_subtag: "📱 Escanea con tu móvil",
        qr_title: "Descarga instantánea en Google Play",
        qr_desc: "Escanea con la cámara de tu móvil para abrir la tienda Google Play directamente.",
        qr_caption: "Enlace directo Google Play",
        apk_text: "APK beta para Android (v1.0)",
        footer_tagline: "Tus queridas mascotas merecen un cuidado atento y organizado todos los días.",
        footer_nav_heading: "Navegación",
        footer_legal_heading: "Legal y Confianza",
        footer_privacy: "Política de privacidad",
        footer_terms: "Términos del servicio",
        footer_support: "Contacto de Soporte",
        footer_copy: "&copy; 2026 PetCare App. Hecho con ❤️ para mascotas y dueños en todo el mundo.",
        sticky_status: "Gratis",
        sticky_btn: "Instalar",
        modal_title: "Aviso de Apple App Store",
        modal_badge: "Próximamente en iOS",
        modal_msg: "PetCare para iOS está en desarrollo y llegará muy pronto a la App Store. ¡La versión para Android ya está en Google Play!",
        modal_btn_gplay: "▶️ Ver en Google Play",
        modal_close: "Cerrar"
    },
    de: {
        flag: "🇩🇪",
        name: "Deutsch",
        nav_features: "Funktionen",
        nav_preview: "In Aktion",
        nav_why: "Warum PetCare",
        nav_faq: "FAQ",
        hero_title: 'Schenken Sie Ihren Lieblingen die <span class="gradient-text">Pflege, die sie verdienen</span>',
        hero_subtitle: "Der ultimative mobile Begleiter für fürsorgliche Tierhalter. Mahlzeiten planen, Gesundheit und Impfungen erfassen und nie einen Tierarzttermin verpassen.",
        btn_google_play_sub: "JETZT BEI",
        btn_app_store_sub: "Demnächst im",
        badge_coming_soon: "Demnächst",
        pill_buddy: '<strong>Buddy (Golden)</strong><small>Morgenspaziergang • Erledigt ✅</small>',
        pill_luna: '<strong>Luna (Perserkatze)</strong><small>Impfung geplant 🗓️</small>',
        features_badge: "Funktionen",
        features_title: "Für Haustiere entwickelt. Für Ihre Ruhe geschaffen.",
        features_desc: "Halten Sie jedes Tier in Ihrem Zuhause mit einfachen, praktischen Werkzeugen gesund.",
        feat_1_title: "Intelligente Erinnerungen",
        feat_1_desc: "Individuelle Benachrichtigungen für Fütterung, Gassigehen, Pflege und Medizin mit lustigen Tierlauten.",
        feat_1_tag: "Routinen & Tonalarme",
        feat_2_title: "Gewichts- & Tierarzt-Protokoll",
        feat_2_desc: "Behalten Sie das Gewicht im Zeitverlauf und anstehende Tierarzttermine im Blick.",
        feat_2_tag: "Gesundheitsverlauf",
        feat_3_title: "Gesundheits- & Impfpass",
        feat_3_desc: "Speichern Sie Impftermine, Tierarztbesuche und Gewichtsentwicklung an einem Ort.",
        feat_3_tag: "Wichtige Unterlagen",
        feat_4_title: "Mehrere Tierprofile",
        feat_4_desc: "Haben Sie 2 Hunde, eine Katze und ein Kaninchen? Verwalten Sie jeden Liebling mit eigenen Avataren und Farben.",
        feat_4_tag: "Hunde, Katzen & mehr",
        feat_5_title: "Cloud-Synchronisation & Backup",
        feat_5_desc: "Melden Sie sich mit Google oder Apple an. Halten Sie alle Daten sicher gesichert und geräteübergreifend synchronisiert.",
        feat_5_tag: "Immer sicher",
        feat_6_title: "Mehrsprachige Unterstützung",
        feat_6_desc: "Verfügbar in Deutsch, Englisch, Französisch, Spanisch, Arabisch und mehr für weltweite Tierliebe.",
        feat_6_tag: "Weltweit bereit",
        walkthrough_badge: "App-Einblick",
        walkthrough_title: "In Aktion erleben",
        walkthrough_desc: "Klar, intuitiv und liebevoll gestaltet. Entdecken Sie Ihre täglichen PetCare-Ansichten:",
        step_1_title: "Gesundheit & Wohlbefinden",
        step_1_desc: "Überblick über Gesundheitsstatus, Impfungen und Pflegetermine.",
        step_2_title: "Eigene Profile & Avatare",
        step_2_desc: "Passen Sie Tierart, Rasse, Gewicht und Farbcodes individuell an.",
        why_badge: "Unsere Mission",
        why_title: "Warum wir PetCare entwickelt haben",
        why_desc: "Entwickelt, um Tierhaltern Sorgenfreiheit zu schenken – ganz ohne unübersichtliche Tabellen.",
        why_1_title: "Keine Dosis mehr verpassen",
        why_1_desc: "Erinnerungen sorgen dafür, dass Fütterung, Gassigehen, Medikamente und Impfungen pünktlich erfolgen.",
        why_2_title: "Ein Ort für jedes Haustier",
        why_2_desc: "Ob ein einziger Hund oder eine ganze Tierfamilie: Alle Profile und Daten sind mit einem Fingertipp erreichbar.",
        why_3_title: "Funktioniert offline",
        why_3_desc: "Benachrichtigungen laufen direkt auf Ihrem Gerät – zuverlässig auch ohne Internetverbindung.",
        faq_badge: "Häufige Fragen",
        faq_title: "Häufig gestellte Fragen",
        faq_desc: "Kurze Antworten zum Download und zur Nutzung der PetCare-App.",
        faq_q1: "Wo kann ich die App herunterladen?",
        faq_a1: "PetCare ist bei Google Play für Android verfügbar. Die iOS-Version erscheint in Kürze. Eine direkte APK steht für Beta-Tester bereit.",
        faq_q2: "Ist PetCare kostenlos herunterzuladen und zu nutzen?",
        faq_a2: "Ja, PetCare kann kostenlos heruntergeladen und genutzt werden. [Details zum Pro-Plan folgen in Kürze.]",
        faq_q3: "Kann ich mehrere Haustiere verschiedener Arten verwalten?",
        faq_a3: "Selbstverständlich. PetCare unterstützt Hunde, Katzen, Vögel, Kaninchen und weitere Haustiere mit individuellem Profil und Zeitplan.",
        faq_q4: "Erhalte ich Benachrichtigungen, wenn mein Telefon gesperrt ist?",
        faq_a4: "Ja! PetCare nutzt lokale Benachrichtigungen direkt auf Ihrem Gerät. Sie erhalten Erinnerungen auch offline.",
        cta_title: "Schenken Sie Ihren Haustieren ab heute die beste Pflege",
        cta_desc: "Halten Sie Ihre täglichen Routinen einfach, organisiert und stressfrei.",
        qr_subtag: "📱 Mit dem Smartphone scannen",
        qr_title: "Direkter Google Play Download",
        qr_desc: "Mit der Handykamera scannen, um die Seite im Google Play Store direkt zu öffnen.",
        qr_caption: "Direktlink zu Google Play",
        apk_text: "Android Beta-APK (v1.0)",
        footer_tagline: "Ihre geliebten Vierbeiner verdienen jeden Tag liebevolle und organisierte Pflege.",
        footer_nav_heading: "Navigation",
        footer_legal_heading: "Rechtliches & Kontakt",
        footer_privacy: "Datenschutzerklärung",
        footer_terms: "Nutzungsbedingungen",
        footer_support: "Support-Kontakt",
        footer_copy: "&copy; 2026 PetCare App. Mit ❤️ für Haustiere und Tierhalter weltweit entwickelt.",
        sticky_status: "Kostenlos",
        sticky_btn: "Installieren",
        modal_title: "Apple App Store Hinweis",
        modal_badge: "Demnächst für iOS",
        modal_msg: "PetCare für iOS befindet sich derzeit in der Entwicklung und erscheint bald im App Store. Die Android-Version ist bei Google Play verfügbar!",
        modal_btn_gplay: "▶️ Bei Google Play ansehen",
        modal_close: "Schließen"
    }
};

let currentLang = APP_CONFIG.defaultLang;

document.addEventListener("DOMContentLoaded", () => {
    initLanguageSelector();
    initStoreLinkHandlers();
    initSmoothScroll();
});

/**
 * 1. Language Selector Controller
 */
function initLanguageSelector() {
    const langSelect = document.getElementById("lang-select");
    if (!langSelect) return;

    langSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });

    // Load saved language preference or default to English
    const savedLang = localStorage.getItem("petcare_lang") || APP_CONFIG.defaultLang;
    setLanguage(savedLang);
}

/**
 * Apply Language to the entire page
 */
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
        lang = APP_CONFIG.defaultLang;
    }
    currentLang = lang;

    const t = TRANSLATIONS[lang];

    // Update document language attribute
    document.documentElement.lang = lang;

    // Update toggle button flag, label, and select value
    const flagEl = document.getElementById("current-lang-flag");
    const textEl = document.getElementById("current-lang-text");
    const langSelect = document.getElementById("lang-select");

    if (flagEl) flagEl.textContent = t.flag;
    if (textEl) textEl.textContent = t.name;
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Save choice in localStorage
    try {
        localStorage.setItem("petcare_lang", lang);
    } catch (e) {
        // localStorage not available or storage disabled
    }
}

// Expose globally
window.setLanguage = setLanguage;
window.TRANSLATIONS = TRANSLATIONS;

/**
 * 2. Store Links Click Handler & Localized Modal Alert
 */
function initStoreLinkHandlers() {
    const appStoreBtns = document.querySelectorAll('a[href="#appstore"], #btn-appstore, .coming-soon-btn');

    appStoreBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
            showStoreModal(t.modal_title, t.modal_badge, t.modal_msg, t.modal_btn_gplay, t.modal_close);
        });
    });
}

/**
 * Localized Modal Alert for App Store Coming Soon state
 */
function showStoreModal(title, badge, message, btnGPlay, btnClose) {
    const existing = document.getElementById("store-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "store-modal";
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 10000;
        display: flex; align-items: center; justify-content: center; padding: 20px;
        backdrop-filter: blur(8px); animation: fadeIn 0.2s ease;
    `;

    modal.innerHTML = `
        <div style="background: #FFF; border-radius: 28px; padding: 36px 28px; max-width: 440px; width: 100%; box-shadow: 0 25px 60px rgba(0,0,0,0.25); text-align: center; position: relative;">
            <div style="font-size: 42px; margin-bottom: 12px;">🐾</div>
            <h3 style="font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; margin-bottom: 10px; color: #121826;">${title}</h3>
            <span style="display: inline-block; background: #FFF0EB; color: #FF6B35; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 12px; border-radius: 9999px; margin-bottom: 14px;">${badge}</span>
            <p style="font-size: 14.5px; color: #4B5563; line-height: 1.6; margin-bottom: 24px;">${message}</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <a href="${APP_CONFIG.playStoreUrl}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #121826; color: #FFF; padding: 13px 20px; border-radius: 14px; font-weight: 700; text-decoration: none; font-size: 14px;">
                    ${btnGPlay}
                </a>
                <button id="close-modal-btn" style="background: #F3F4F6; border: none; padding: 11px; border-radius: 14px; font-weight: 600; color: #374151; cursor: pointer; font-size: 14px; margin-top: 4px;">
                    ${btnClose}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("close-modal-btn").addEventListener("click", () => modal.remove());
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
    });
}

/**
 * 3. Smooth Scroll for in-page anchors
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#' && !targetId.includes('store')) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
