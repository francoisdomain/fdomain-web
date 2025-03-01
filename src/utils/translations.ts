type TranslationType = {
  [key: string]: {
    hero: {
      title: string;
      subtitle: string;
    };
    nav: {
      about: string;
      books: string;
      contact: string;
      language: string;
      viewAllBooks: string;
    };
    sections: {
      featuredBooks: string;
      aboutTitle: string;
      aboutText: string;
      contactTitle: string;
      contactText: string;
    };
    buttons: {
      learnMore: string;
      contactMe: string;
    };
    footer: {
      books: string;
      quickLinks: string;
      legal: string;
      connect: string;
      stayUpdated: string;
      newsletter: string;
      privacyPolicy: string;
      termsOfService: string;
      allRightsReserved: string;
      subscribeNewsletter: string;
      subscribeMessage: string;
      emailPlaceholder: string;
      subscribe: string;
      closeModal: string;
    };
    welcomeModal: {
      title: string;
      message: string;
      buttonText: string;
      enabledLocales: string[];
    };
    about: {
      pageTitle: string;
      intro: string;
      mainText: string;
      awardsTitle: string;
      awards: string[];
      philosophyTitle: string;
      philosophy: string;
    };
    contact: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      sendButton: string;
      sendingButton: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
      verificationRequired: string;
    };
  };
};

export const translations: TranslationType = {
  "en": {
    "hero": {
      "title": "Blurring the lines that define us.",
      "subtitle": "Beyond the lies that reassure and the truths we ignore, the shadow of the self lingers."
    },
    "nav": {
      "about": "The Author",
      "books": "Books",
      "contact": "Contact",
      "language": "Location",
      "viewAllBooks": "All Books"
    },
    "sections": {
      "featuredBooks": "Featured Books",
      "aboutTitle": "About the Author",
      "aboutText": "Raw and visceral, Domain’s body of work navigates the two-way mirrors through which we shape ourselves and the intangible borders where we seek refuge. He explores ambiguous connections, challenges identity, certainties, and illusions—ultimately confronting the most complex human relationship of all: the one with oneself.",
      "contactTitle": "Get in Touch",
      "contactText": "For speaking engagements, book signings, or just to say hello."
    },
    "buttons": {
      "learnMore": "Learn More",
      "contactMe": "Contact Me"
    },
    "footer": {
      "books": "Books",
      "quickLinks": "Quick Links",
      "legal": "Legal",
      "connect": "Connect",
      "stayUpdated": "Stay updated with new releases and author events.",
      "newsletter": "Newsletter",
      "privacyPolicy": "Privacy Policy",
      "termsOfService": "Terms of Service",
      "allRightsReserved": "All rights reserved.",
      "subscribeNewsletter": "Subscribe to Newsletter",
      "subscribeMessage": "Join my mailing list for updates on new releases, events, and exclusive content.",
      "emailPlaceholder": "Enter your email",
      "subscribe": "Subscribe",
      "closeModal": "Close"
    },
    "welcomeModal": {
      "title": "Welcome to my website!",
      "message": "Thank you for visiting. Here you'll find all my latest books and updates. Feel free to explore and get in touch!",
      "buttonText": "Got it, thanks!",
      "enabledLocales": ["en-US", "en-UK"]
    },
    "about": {
      "pageTitle": "About the Author",
      "intro": "With over a decade of storytelling experience, I've dedicated my life to crafting narratives that resonate with readers across the globe. My journey began in the quiet corners of local bookstores and has since evolved into an international adventure in storytelling.",
      "mainText": "Each story I write is a reflection of the human experience, carefully woven with threads of emotion, mystery, and revelation. My work has been recognized by various literary institutions and has been translated into multiple languages.",
      "awardsTitle": "Awards & Recognition",
      "awards": [
        "International Literary Award, 2023",
        "Best Contemporary Fiction, 2022",
        "Author of the Year, Writers Guild, 2021"
      ],
      "philosophyTitle": "Writing Philosophy",
      "philosophy": "I believe in the power of stories to connect, heal, and transform. Every book is an invitation to explore new perspectives and discover universal truths that bind us together as human beings."
    },
    "contact": {
      "title": "Get in Touch",
      "subtitle": "For speaking engagements, book signings, or just to share your thoughts about my books.",
      "nameLabel": "Name",
      "namePlaceholder": "Your name",
      "emailLabel": "Email",
      "emailPlaceholder": "your@email.com",
      "messageLabel": "Message",
      "messagePlaceholder": "Your message...",
      "sendButton": "Send Message",
      "sendingButton": "Sending...",
      "successTitle": "Message Sent",
      "successMessage": "Thank you for your message. We'll get back to you soon!",
      "errorTitle": "Error",
      "errorMessage": "Sorry, there was a problem sending your message. Please try again later.",
      "verificationRequired": "Please complete the reCAPTCHA verification."
    }
  },
  "fr": {
    "hero": {
      "title": "Redessiner ces lignes qui nous définissent.",
      "subtitle": "Des mensonges que l'on se plait à se faire croire, des aveux que l'on écarte sans y penser. Et, dans l'interstice, l'ombre de soi"
    },
    "nav": {
      "about": "L'Auteur",
      "books": "Livres",
      "contact": "Contact",
      "language": "Localisation",
      "viewAllBooks": "Tous les livres"
    },
    "sections": {
      "featuredBooks": "En vedette",
      "aboutTitle": "L'auteur",
      "aboutText": "Dans des textes à fleur de peau, Domain ausculte et navigue ces miroirs sans tain à travers lesquels on se construit, ces frontières hypothétiques où l'on s'abrite. Sans filtre et sans concession, les romans de François Domain traquent l'ambiguité, questionnent l'identité, dissèquent les relations humaines — en particulier celle de l'homme face à lui-même.",
      "contactTitle": "Contacter François Domain",
      "contactText": "Pour plus d'information, séances de dédicaces ou simplement pour dire bonjour."
    },
    "buttons": {
      "learnMore": "En savoir plus",
      "contactMe": "Contacter François"
    },
    "footer": {
      "books": "Livres",
      "quickLinks": "Liens Rapides",
      "legal": "Mentions Légales",
      "connect": "Contact",
      "stayUpdated": "Restez informé des nouvelles sorties et des événements.",
      "newsletter": "Newsletter",
      "privacyPolicy": "Politique de Confidentialité",
      "termsOfService": "Conditions d'Utilisation",
      "allRightsReserved": "Tous droits réservés.",
      "subscribeNewsletter": "S'inscrire à la Newsletter",
      "subscribeMessage": "Rejoignez ma liste de diffusion pour être informé des nouvelles sorties, des événements et du contenu exclusif.",
      "emailPlaceholder": "Votre email",
      "subscribe": "S'inscrire",
      "closeModal": "Fermer"
    },
    "welcomeModal": {
      "title": "Bienvenue sur mon site!",
      "message": "Merci de votre visite. Vous trouverez ici tous mes derniers livres et actualités. N'hésitez pas à explorer et à me contacter!",
      "buttonText": "J'ai compris, merci!",
      "enabledLocales": []
    },
    "about": {
      "pageTitle": "L'Auteur",
      "intro": "Avec plus d'une décennie d'expérience dans l'écriture, j'ai consacré ma vie à créer des récits qui résonnent avec les lecteurs du monde entier. Mon parcours a commencé dans les coins tranquilles des librairies locales et s'est depuis transformé en une aventure internationale.",
      "mainText": "Chaque histoire que j'écris est un reflet de l'expérience humaine, soigneusement tissée avec des fils d'émotion, de mystère et de révélation. Mon travail a été reconnu par diverses institutions littéraires et a été traduit en plusieurs langues.",
      "awardsTitle": "Prix et Reconnaissances",
      "awards": [
        "Prix Littéraire International, 2023",
        "Meilleure Fiction Contemporaine, 2022",
        "Auteur de l'Année, Guilde des Écrivains, 2021"
      ],
      "philosophyTitle": "Philosophie d'Écriture",
      "philosophy": "Je crois au pouvoir des histoires pour connecter, guérir et transformer. Chaque livre est une invitation à explorer de nouvelles perspectives et à découvrir des vérités universelles qui nous lient en tant qu'êtres humains."
    },
    "contact": {
      "title": "Contacter François Domain",
      "subtitle": "Pour les conférences, les séances de dédicaces, ou simplement pour partager vos impressions sur mes livres.",
      "nameLabel": "Nom",
      "namePlaceholder": "Votre nom",
      "emailLabel": "Email",
      "emailPlaceholder": "votre@email.com",
      "messageLabel": "Message",
      "messagePlaceholder": "Votre message...",
      "sendButton": "Envoyer",
      "sendingButton": "Envoi en cours...",
      "successTitle": "Message Envoyé",
      "successMessage": "Merci pour votre message. Nous vous répondrons bientôt !",
      "errorTitle": "Erreur",
      "errorMessage": "Désolé, il y a eu un problème lors de l'envoi de votre message. Veuillez réessayer plus tard.",
      "verificationRequired": "Veuillez compléter la vérification reCAPTCHA."
    }
  }
};
