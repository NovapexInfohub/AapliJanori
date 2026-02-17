import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        brandTitle: 'Apli Janori',
        home: 'Home',
        about: 'About',
        services: 'Services',
        events: 'Events',
        gallery: 'Gallery',
        contact: 'Contact',
        adminLogin: 'Admin Login',
        logout: 'Logout'
      },

      home: {
        slider1Title: "Welcome to Janori",
        slider1Subtitle: "A model village committed to sustainable development and prosperity",
        slider2Title: "Clean Village, Beautiful Village",
        slider2Subtitle: "Our pride, our responsibility",
        slider3Title: "Journey of Development",
        slider3Subtitle: "A step towards progress",

        notice: "Important Notice: Please attend the Gram Sabha meeting on 25th June at 5:00 PM in the Village Hall. Your participation is valuable for village development!",

        welcomeTitle: "Welcome to Janori Gram Panchayat",
        welcomeText1: "Janori is a small but religiously and historically rich village in Buldhana district of Maharashtra.",
        welcomeText2: "Under the visionary leadership of our Sarpanch and dedicated Panchayat members, we are working tirelessly to transform Janori into a model village with modern amenities while preserving our rich cultural heritage.",
        learnMore: "Learn More About Us",

        membersTitle: "Our Gram Panchayat Members",
        membersSubtitle: "Dedicated leadership for village development",

        emergencyTitle: "Emergency Services",
        emergencySubtitle: "24/7 Emergency assistance for our village residents",
        ambulance: "Ambulance Service",
        medical: "Medical Emergency",
        police: "Police Station",
        fire: "Fire Emergency",

        eventsTitle: "Upcoming Events",
        eventsSubtitle: "Stay updated with the latest happenings in our village",
        viewAllEvents: "View All Events",

        ctaTitle: "Have Questions or Suggestions?",
        ctaText: "We're here to serve you. Reach out to us with your queries or feedback.",
        contactBtn: "Contact Us"
      }
    }
  },

  hi: {
    translation: {
      home: {
        slider1Title: "जानोरी में आपका स्वागत है",
        slider1Subtitle: "सतत विकास और समृद्धि के लिए प्रतिबद्ध एक आदर्श गांव",
        slider2Title: "स्वच्छ गाँव, सुंदर गाँव",
        slider2Subtitle: "हमारा गर्व, हमारी जिम्मेदारी",
        slider3Title: "विकास की यात्रा",
        slider3Subtitle: "प्रगति की ओर एक कदम",

        notice: "महत्वपूर्ण सूचना: 25 जून को ग्राम सभा में उपस्थित रहें।",

        welcomeTitle: "जानोरी ग्राम पंचायत में आपका स्वागत है",
        welcomeText1: "जानोरी बुलढाणा जिले का धार्मिक और ऐतिहासिक गांव है।",
        welcomeText2: "हम जानोरी को आदर्श गांव बनाने के लिए कार्य कर रहे हैं।",
        learnMore: "हमारे बारे में जानें",

        membersTitle: "हमारी ग्राम पंचायत सदस्य",
        membersSubtitle: "गांव के विकास के लिए समर्पित नेतृत्व",

        emergencyTitle: "आपातकालीन सेवाएं",
        emergencySubtitle: "गांव के निवासियों के लिए 24/7 सहायता",
        ambulance: "एंबुलेंस सेवा",
        medical: "चिकित्सा आपातकाल",
        police: "पुलिस स्टेशन",
        fire: "अग्निशमन सेवा",

        eventsTitle: "आगामी कार्यक्रम",
        eventsSubtitle: "गांव की नवीनतम गतिविधियों से अपडेट रहें",
        viewAllEvents: "सभी कार्यक्रम देखें",

        ctaTitle: "कोई प्रश्न या सुझाव?",
        ctaText: "हमसे संपर्क करें।",
        contactBtn: "संपर्क करें"
      }
    }
  },

  mr: {
    translation: {
      home: {
        slider1Title: "जानोरीत आपले स्वागत आहे",
        slider1Subtitle: "सतत विकासासाठी समर्पित आदर्श गाव",
        slider2Title: "स्वच्छ गाव, सुंदर गाव",
        slider2Subtitle: "आपला अभिमान, आपली जबाबदारी",
        slider3Title: "विकासाची वाटचाल",
        slider3Subtitle: "प्रगतीकडे एक पाऊल",

        notice: "महत्वाची सूचना: २५ जून रोजी ग्रामसभेला उपस्थित राहा.",

        welcomeTitle: "जानोरी ग्रामपंचायतीत आपले स्वागत आहे",
        welcomeText1: "जानोरी हे बुलढाणा जिल्ह्यातील धार्मिक व ऐतिहासिक गाव आहे.",
        welcomeText2: "आम्ही जानोरीला आदर्श गाव बनवण्यासाठी कार्यरत आहोत.",
        learnMore: "अधिक जाणून घ्या",

        membersTitle: "आमची ग्रामपंचायत सदस्य",
        membersSubtitle: "गावाच्या विकासासाठी समर्पित नेतृत्व",

        emergencyTitle: "आपत्कालीन सेवा",
        emergencySubtitle: "गावकऱ्यांसाठी २४/७ मदत",
        ambulance: "ॲम्ब्युलन्स सेवा",
        medical: "वैद्यकीय आपत्काल",
        police: "पोलीस स्टेशन",
        fire: "अग्निशमन सेवा",

        eventsTitle: "आगामी कार्यक्रम",
        eventsSubtitle: "गावातील नवीन घडामोडींसाठी अपडेट राहा",
        viewAllEvents: "सर्व कार्यक्रम पहा",

        ctaTitle: "काही प्रश्न किंवा सूचना?",
        ctaText: "आमच्याशी संपर्क साधा.",
        contactBtn: "संपर्क करा"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
