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
      welcome: {
        title: 'Welcome to Janori',
        subtitle: 'A model village committed to development and prosperity'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive services for our residents'
      },
      gallery: {
        title: 'Our Gallery',
        subtitle: 'Capturing the essence of Janori',
        photoGalleryTitle: 'Photo Gallery',
        photoGallerySubtitle: 'A visual journey through village life',
        videoGalleryTitle: 'Video Gallery',
        videoGallerySubtitle: 'Videos showcasing village events',
        ctaTitle: 'Share Your Village Moments',
        ctaDescription: 'Share your photos and videos with us',
        submitMedia: 'Submit Media',
        uploading: 'Uploading...',
        uploadSuccess: 'Media uploaded successfully!',
        userUploadSuccess: 'Uploaded successfully, pending approval'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Reach out to Janori Gram Panchayat',
        formSuccess: 'Message sent successfully!'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        brandTitle: 'आप्ली जानोरी',
        home: 'होम',
        about: 'हमारे बारे में',
        services: 'सेवाएं',
        events: 'कार्यक्रम',
        gallery: 'गैलरी',
        contact: 'संपर्क',
        adminLogin: 'प्रशासक लॉगिन',
        logout: 'लॉगआउट'
      },
      welcome: {
        title: 'जानोरी में आपका स्वागत है',
        subtitle: 'विकास और समृद्धि के लिए प्रतिबद्ध एक आदर्श गांव'
      }
    }
  },
  mr: {
    translation: {
      nav: {
        brandTitle: 'आप्ली जानोरी',
        home: 'होम',
        about: 'आमच्या बद्दल',
        services: 'सेवा',
        events: 'कार्यक्रम',
        gallery: 'गॅलरी',
        contact: 'संपर्क',
        adminLogin: 'प्रशासक लॉगिन',
        logout: 'लॉगआउट'
      },
      welcome: {
        title: 'जानोरी मध्ये आपले स्वागत आहे',
        subtitle: 'विकास आणि समृद्धीसाठी वचनबद्ध एक आदर्श गाव'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;