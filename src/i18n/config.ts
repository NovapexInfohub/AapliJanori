import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
     nav: {
  brandTitle: 'Apli Janori',
  panchayatText: 'Gram Panchayat',
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
  welcomeText1: "Janori is a small but religiously and historically rich village in Buldhana district of Maharashtra. This village is located just a few kilometers from Shegaon. This place is especially famous in the Vidarbha region, as it has many ancient temples and religious traditions.",
  welcomeText2: "Under the visionary leadership of our Sarpanch and dedicated Panchayat members, we are working tirelessly to transform Janori into a model village with modern amenities while preserving our rich cultural heritage.",
  learnMore: "Learn More About Us",
  membersTitle: "Our Gram Panchayat Members",
  membersSubtitle: "Dedicated leadership for village development",
  memberTable: {
    sr: "Sr. No.",
    photo: "Photo",
    name: "Name",
    role: "Position",
    category: "Category"
  },
  membersList: [
    { name: 'Mrs. Lata Dhonduram Ghenge', position: 'Sarpanch', category: 'OBC' },
    { name: 'Mr. Nandkishor Ganesh Gawande', position: 'Deputy Sarpanch', category: 'General' },
    { name: 'Mr. Ramesh Jayram Dange', position: 'Member', category: 'S.C.' },
    { name: 'Mr. Shankar Ramdas Solanke', position: 'Member', category: 'S.C.' },
    { name: 'Mrs. Diksha Gajanan Bhojane', position: 'Member', category: 'General (W)' },
    { name: 'Mrs. Surekha Sudhakar Ghenge', position: 'Member', category: 'General (W)' },
    { name: 'Mrs. Durga Prabhakar Borse', position: 'Member', category: 'General (W)' },
    { name: 'Mrs. Archana Mangesh Dhole', position: 'Member', category: 'OBC' },
    { name: 'Sheikh Rehana Sheikh Mohsin', position: 'Member', category: 'General (W)' },
    { name: 'Mr. D. K. Bajole', position: 'Secretary', category: '-' },
    { name: 'Mr. Suresh Ramchandra Chitode', position: 'Employee', category: '-' },
    { name: 'Mr. Ambadas Ukharda Dange', position: 'Computer Operator', category: '-' }
  ],
  templeTitle: "Divine Temples of Janori",
  templeSubtitle: "Explore the sacred temples and timeless spiritual traditions of our village",
  templeDescription: "The divine temples of Janori reflect centuries of devotion, culture, and architectural beauty. These sacred shrines serve as spiritual landmarks where daily prayers, bhajans, and grand festivals unite the community in faith and celebration.",
  emergencyTitle: "Emergency Services",
  emergencySubtitle: "24/7 helpline numbers for emergency situations",
  ambulance: "Ambulance Service",
  medical: "Medical Emergency",
  police: "Police Station",
  fire: "Fire Emergency",
  eventsTitle: "Upcoming Events",
  eventsSubtitle: "Stay updated with village activities and programs",
  viewAllEvents: "View All Events",
  ctaTitle: "Have Questions or Suggestions?",
  ctaText: "We're here to serve you. Reach out to us with your queries or feedback.",
  contactBtn: "Contact Us",
  instagramTitle: "Follow Us on Instagram",
  instagramSubtitle: "@janori_grampanchayat"
},
      about: {
  hero: {
    title: "About Janori Village",
    subtitle: "Discover the rich heritage, culture, and progress of our beloved village"
  },
  history: {
    title: "Village History",
    p1: "A Sacred and Historic Religious Place in Vidarbha. Janori is a village located in the Buldhana district of Maharashtra, about 8 to 10 kilometers from Shegaon. The village is well known across Vidarbha for its ancient temples, traditional architectural style, religious customs, and spiritually charged atmosphere.",
    p2: "1. Historical Background: The temples of Janori were built in the 17th century. Since then, the village has acquired the status of an important religious pilgrimage center. From ancient times, saints, sages, and ascetics have resided in this village. Some of the temples in the village reflect architectural styles from the Peshwa period.",
    p3: "2. Major Religious Places: Lord Narasimha Temple: This is the most prominent religious center of the village. The temple's spire, sanctum (garbhagriha), and hall (mandap) display excellent stone craftsmanship. The temple area has dedicated spaces for meditation and religious discourses. Narasimha Jayanti is celebrated with great devotion, during which thousands of devotees visit for darshan. Mahadev Temple: Located in the central part of the village, this temple hosts an all-night grand worship and vigil on the occasion of Maha Shivaratri. Mahasiddha Bhagwan Temple: This temple has a history of secret spiritual practices and tantric worship. Devotees visit here seeking good health and fulfillment of wishes. Temples of Lord Rama, Lakshmana, Sita, and Hanuman: Festivals such as Ram Navami and Hanuman Jayanti are celebrated here with great enthusiasm.",
    p4: "3. Information for Tourists and Devotees: The village is easily accessible from Shegaon bus stand and railway station. Facilities such as pilgrim accommodation, dining arrangements, drinking water, and clean sanitation are available in the village. Local guides are also available for visitors and devotees. The nearby scenic surroundings, green farmlands, and peaceful environment further attract tourists."
  },
  demographics: {
    title: "Village Demographics",
    subtitle: "Key facts about the people and land",
    population: {
      title: "Population",
      total: "Approx. 5,000 residents",
      male: "2,600 Males",
      female: "2,400 Females",
      children: "1,200 Children",
      youth: "1,500 Youth",
      adults: "2,000 Adults",
      seniors: "300 Seniors"
    },
    education: {
      title: "Education",
      rate: "Literacy rate: 85%",
      primary: "Primary School: 500 students",
      secondary: "Secondary School: 300 students",
      graduates: "150 Graduates",
      higher: "50 Higher Education students",
      technical: "30 pursuing Technical Education"
    },
    geography: {
      title: "Geography",
      area: "Total Area: 10 sq. km",
      agricultural: "7 sq. km Agricultural land",
      residential: "2 sq. km Residential",
      forest: "0.5 sq. km Forest",
      water: "0.5 sq. km Water bodies",
      distance: "12 km from Shegaon"
    }
  },
  achievements: {
    title: "Village Achievements",
    subtitle: "Recognitions and milestones that make us proud",
    items: {
      "2023": {
        title: "State-level Clean Village Award",
        description: "Recognized for exemplary waste management and sanitation practices."
      },
      "2022": {
        title: "100% Digital Literacy",
        description: "Achieved digital literacy for all residents between the ages of 14-60 years."
      },
      "2021": {
        title: "Water Conservation Model Village",
        description: "Implemented innovative water harvesting and conservation techniques."
      },
      "2020": {
        title: "Open Defecation Free Status",
        description: "Successfully achieved and maintained ODF status with 100% toilet coverage."
      },
      "2018": {
        title: "Solar Energy Adoption",
        description: "First village in the district to adopt solar energy for street lighting and public facilities."
      }
    }
  }
},
      services: {
        title: "Our Services",
        subtitle: "Comprehensive services and schemes for the welfare of our residents",
        sectionTitle: "Village Services",
        sectionSubtitle: "Comprehensive services for our community members",
        certificates: {
          title: "Certificate Issuance",
          description: "Birth, death, residence, income, and other essential certificates issued efficiently for village residents of Janori."
        },
        hallBooking: {
          title: "Community Hall Booking",
          description: "Book our well-equipped community hall in Janori for various events, functions, and gatherings at affordable rates."
        },
        schemes: {
          title: "Scheme Registration",
          description: "Assistance in applying for various government welfare schemes, subsidies, and benefits for eligible residents of Janori."
        },
        dispute: {
          title: "Dispute Resolution",
          description: "Traditional Janori village-level dispute resolution mechanism to resolve conflicts amicably within the community."
        },
        library: {
          title: "Library Services",
          description: "Access to our Janori village library with a collection of books, newspapers, and educational resources."
        },
        housing: {
          title: "Housing Assistance",
          description: "Guidance for government housing schemes like PMAY-G for eligible beneficiaries in Janori village."
        },
        health: {
          title: "Health Services",
          description: "Coordination with primary health center for regular health camps and awareness programs in Janori."
        },
        tax: {
          title: "Tax Collection",
          description: "Collection of property tax, water charges, and other local taxes for Janori village development."
        },
        docs: {
          title: "Gram Panchayat Documentation",
          subtitle: "Download brochures and important documents or upload your own PDFs.",
          uploadBtn: "Upload File",
          download: "Download",
          preview: "Preview",
          delete: "Delete",
          noDocs: "No documents uploaded yet."
        }
      },
      events: {
        hero: {
          title: "Village Events",
          subtitle: "Stay updated with all the activities happening in Janori"
        },
        section: {
          title: "Upcoming Events",
          subtitle: "Be a part of our community gatherings and activities"
        },
        admin: {
          uploadEvent: "Upload Event"
        },
        filter: {
          searchPlaceholder: "Search events...",
          all: "All"
        },
        noEvents: {
          title: "No events found",
          message: "Try changing your search criteria or check back later."
        },
        eventForm: {
          title: "Upload Event",
          fields: {
            title: "Title",
            date: "Date",
            time: "Time",
            location: "Location",
            imageUrl: "Image URL",
            category: "Category",
            description: "Description"
          },
          buttons: {
            cancel: "Cancel",
            addEvent: "Add Event"
          }
        },
        deleteBtn: "Delete",
        readMore: "Read More",
        proposal: {
          section: {
            title: "Have an Event Idea?",
            message: "We welcome community-driven events. Share your idea with us!",
            proposeBtn: "Propose an Event"
          },
          admin: {
            title: "Proposed Events",
            by: "By",
            delete: "Delete"
          },
          form: {
            title: "Propose an Event",
            success: "Thank you for your suggestion!",
            fields: {
              name: "Your Name",
              email: "Your Email",
              eventTitle: "Event Title",
              eventDate: "Event Date",
              description: "Event Description"
            },
            buttons: {
              submit: "Submit",
              cancel: "Cancel"
            }
          }
        },
        categories: {
          history: "History",
          health: "Health",
          agriculture: "Agriculture",
          education: "Education",
          children: "Children's Growth",
          bloodDonation: "Blood Donation",
          environment: "Environment"
        },
        eventList: [
          {
            id: 1,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'Festivals, Fairs, and Pilgrimages',
            date: 'May 15, 2026',
            time: '9:00 AM - 4:00 PM',
            location: 'Janori',
            description: 'Chaitra Fair (Yatra): Held once a year, this fair becomes a major cultural celebration for the entire village. It includes palanquin processions, bhajans, kirtans, dindis, chariot processions, and community feasts (bhandara). During the fair, people enjoy various attractions ranging from street stalls to cultural programs. Guru Purnima, worship during the Shravan month, and the Deepotsav in the Kartik month are also considered very important here.',
            category: 'history'
          },
          {
            id: 2,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'Social and Spiritual Activities',
            date: 'May 15, 2026',
            time: '9:00 AM - 4:00 PM',
            location: 'Janori',
            description: 'Janori has libraries, gurukuls, and Sanskrit education centers that are well known for imparting religious education and moral values. Many youth groups, women\'s groups, and village committees actively participate in social service. Village initiatives related to cleanliness, greenery, and water conservation serve as an example for other villages.',
            category: 'history'
          },
          {
            id: 3,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'Blood Donation Camp',
            date: 'May 15, 2026',
            time: '9:00 AM - 4:00 PM',
            location: 'Village Community Hall',
            description: 'Join us for the annual blood donation camp organized in association with District Hospital.',
            category: 'health'
          },
          {
            id: 4,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'Farmers Training Program',
            date: 'June 2, 2026',
            time: '10:00 AM - 1:00 PM',
            location: 'Agricultural Extension Center',
            description: 'Learn about modern farming techniques and government schemes for farmers.',
            category: 'agriculture'
          },
          {
            id: 5,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'Student Training Program',
            date: 'Aug 22, 2026',
            time: '10:30 AM - 1:00 PM',
            location: 'XYZ School',
            description: 'Learn about modern education techniques and government schemes for students.',
            category: 'education'
          },
          {
            id: 6,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'Child Polio Dose',
            date: 'Sep 21, 2026',
            time: '10:00 AM - 1:00 PM',
            location: 'ABC Hospital',
            description: 'Child health and care',
            category: 'children'
          },
          {
            id: 7,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'Blood Donation',
            date: '03 May, 2026',
            time: '10:00 AM - 1:00 PM',
            location: 'ABC Hospital',
            description: 'Donating blood saves a life',
            category: 'bloodDonation'
          },
          {
            id: 8,
            image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
            title: 'Village Cleanliness Drive',
            date: 'June 10, 2026',
            time: '7:00 AM - 11:00 AM',
            location: 'Village Square',
            description: 'Community initiative to clean our village and promote proper waste management practices.',
            category: 'environment'
          }
        ]
      },
      contact: {
        title: "Contact Us",
        subtitle: "Reach out to the Janori Gram Panchayat",
        hero: {
          title: "Contact Us",
          subtitle: "Reach out to the Janori Gram Panchayat"
        },
        getInTouch: {
          title: "Get in Touch",
          description: "We are here to assist you with any queries or concerns. Feel free to reach out to us through any of the following channels:"
        },
        address: {
          title: "Our Address",
          line1: "Gram Panchayat Office, Main Road",
          line2: "Janori, Taluka Shegaon",
          line3: "District Buldhana, Maharashtra - 444203"
        },
        phone: {
          title: "Phone Numbers",
          office: "Gram Panchayat: +91 07265-252525",
          sarpanch: "Gram Sevak: +91 94xxxxxx10"
        },
        email: {
          title: "Email Address",
          primary: "grampanchayat.janori-bld@maharashtra.gov.in",
          help: "helpdesk.janori@gmail.com"
        },
        hours: {
          title: "Office Hours",
          weekdays: "Monday to Saturday: 09:30 AM - 6:00 PM",
          holidays: "Closed on Sundays & Government Holidays"
        },
        form: {
          title: "Send us a Message",
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          subject: "Subject",
          message: "Your Message",
          submit: "Send Message",
          submitting: "Sending...",
          success: "Message sent successfully! We have sent a confirmation to your email.",
          error: "Failed to send message. Please try again later."
        },
        map: {
          title: "Find Us",
          subtitle: "Visit our office in Janori village"
        }
      },
      footer: {
        about: {
          title: "Janori Gram Panchayat",
          description: "Serving the residents of Janori village with dedication and transparency, working together for rural development and community welfare."
        },
        quickLinks: {
          title: "Quick Links"
        },
        contactInfo: {
          title: "Contact Info",
          address: "At Post Janori, Tq. Shegaon, Dist. Buldhana, Pin 444203",
          phone: "+91 98765 43210",
          email: "grampanchayat.janori@gov.in"
        },
        bottom: {
          rights: "All Rights Reserved"
        }
      },
      gallery: {
        title: "Our Gallery",
        subtitle: "Capturing the essence and spirit of Janori",
        photoGalleryTitle: "Photo Gallery",
        photoGallerySubtitle: "A visual journey through our village life and activities",
        videoGalleryTitle: "Video Gallery",
        videoGallerySubtitle: "Watch videos showcasing village events and achievements",
        ctaTitle: "Share Your Village Moments",
        ctaDescription: "Do you have photos or videos of Janori village events or beautiful locations? Share them with us to be featured in our gallery.",
        submitMedia: "Submit Media",
        uploading: "Uploading...",
        uploadSuccess: "Media uploaded successfully!",
        userUploadSuccess: "Your image has been uploaded successfully and is pending admin approval.",
        images: {
          "1": {
            alt: "Village Landscape",
            category: "village"
          },
          "2": {
            alt: "Farming Activities",
            category: "agriculture"
          },
          "3": {
            alt: "Local Festival Celebration",
            category: "culture"
          },
          "4": {
            alt: "Community Health Camp",
            category: "health"
          },
          "5": {
            alt: "Agricultural Training",
            category: "agriculture"
          },
          "6": {
            alt: "Village Development",
            category: "development"
          },
          "7": {
            alt: "Education",
            category: "education"
          },
          "8": {
            alt: "Infrastructure",
            category: "infrastructure"
          }
        },
        videos: {
          "1": {
            title: "Village Development Project"
          },
          "2": {
            title: "Republic Day Celebration 2025"
          },
          "3": {
            title: "Gram Sabha Meeting Highlights"
          }
        }
      }
    }
  },
  hi: {
    translation: {
       nav: {
  brandTitle: 'आपली जानोरी',
  panchayatText: 'ग्राम पंचायत',
  home: 'मुख्यपृष्ठ',
  about: 'हमारे बारे में',
  services: 'सेवाएं',
  events: 'कार्यक्रम',
  gallery: 'गैलरी',
  contact: 'संपर्क',
  adminLogin: 'एडमिन लॉगिन',
  logout: 'लॉगआउट'
},
      home: {
  slider1Title: "जानोरी में आपका स्वागत है",
  slider1Subtitle: "सतत विकास और समृद्धि के लिए प्रतिबद्ध एक आदर्श गांव",
  slider2Title: "स्वच्छ गांव, सुंदर गांव",
  slider2Subtitle: "हमारा गौरव, हमारी जिम्मेदारी",
  slider3Title: "विकास की यात्रा",
  slider3Subtitle: "प्रगति की ओर एक कदम",
  notice: "महत्वपूर्ण सूचना: कृपया 25 जून को शाम 5 बजे ग्राम पंचायत सभागार में होने वाली ग्राम सभा में शामिल हों। गांव के विकास के लिए आपकी भागीदारी मूल्यवान है!",
  welcomeTitle: "जानोरी ग्राम पंचायत में आपका स्वागत है",
  welcomeText1: "जानोरी महाराष्ट्र के बुलढाणा जिले का एक छोटा लेकिन धार्मिक और ऐतिहासिक रूप से समृद्ध गांव है। यह गांव शेगांव से कुछ किलोमीटर की दूरी पर स्थित है। विदर्भ क्षेत्र में विशेष रूप से प्रसिद्ध यह स्थान प्राचीन मंदिरों और धार्मिक परंपराओं के लिए जाना जाता है।",
  welcomeText2: "हमारे सरपंच और समर्पित पंचायत सदस्यों के दूरदर्शी नेतृत्व में, हम अपनी समृद्ध सांस्कृतिक विरासत को संरक्षित करते हुए जानोरी को आधुनिक सुविधाओं वाला एक आदर्श गांव बनाने के लिए अथक प्रयास कर रहे हैं।",
  learnMore: "हमारे बारे में और जानें",
  membersTitle: "हमारे ग्राम पंचायत सदस्य",
  membersSubtitle: "गांव के विकास के लिए समर्पित नेतृत्व",
  memberTable: {
    sr: "क्र.सं.",
    photo: "फोटो",
    name: "नाम",
    role: "पद",
    category: "श्रेणी"
  },
  membersList: [
    { name: 'श्रीमती लता धोंडूराम घेंगे', position: 'सरपंच', category: 'OBC' },
    { name: 'श्री नंदकिशोर गणेश गवांडे', position: 'उपसरपंच', category: 'सामान्य' },
    { name: 'श्री रमेश जयराम डांगे', position: 'सदस्य', category: 'अ.जा.' },
    { name: 'श्री शंकर रामदास सोलंके', position: 'सदस्य', category: 'अ.जा.' },
    { name: 'श्रीमती दीक्षा गजानन भोजने', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'श्रीमती सुरेखा सुधाकर घेंगे', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'श्रीमती दुर्गा प्रभाकर बोरसे', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'श्रीमती अर्चना मंगेश ढोले', position: 'सदस्य', category: 'OBC' },
    { name: 'शेख रेहाना शेख मोहसीन', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'श्री डी.के. बाजोले', position: 'सचिव', category: '-' },
    { name: 'श्री सुरेश रामचंद्र चितोडे', position: 'कर्मचारी', category: '-' },
    { name: 'श्री अंबादास उखार्डा डांगे', position: 'कंप्यूटर संचालक', category: '-' }
  ],
  templeTitle: "जानोरी के दिव्य मंदिर",
  templeSubtitle: "हमारे गांव के पवित्र मंदिरों और कालातीत आध्यात्मिक परंपराओं का अन्वेषण करें",
  templeDescription: "जानोरी के दिव्य मंदिर सदियों की भक्ति, संस्कृति और वास्तुकला सौंदर्य को दर्शाते हैं। ये पवित्र स्थल आध्यात्मिक स्थलों के रूप में कार्य करते हैं जहां दैनिक प्रार्थना, भजन और भव्य उत्सव समुदाय को आस्था और उत्सव में एकजुट करते हैं।",
  emergencyTitle: "आपातकालीन सेवाएं",
  emergencySubtitle: "आपात स्थितियों के लिए 24/7 हेल्पलाइन नंबर",
  ambulance: "एम्बुलेंस सेवा",
  medical: "चिकित्सा आपातकाल",
  police: "पुलिस स्टेशन",
  fire: "अग्निशमन सेवा",
  eventsTitle: "आगामी कार्यक्रम",
  eventsSubtitle: "गांव की गतिविधियों और कार्यक्रमों से अपडेट रहें",
  viewAllEvents: "सभी कार्यक्रम देखें",
  ctaTitle: "प्रश्न या सुझाव हैं?",
  ctaText: "हम आपकी सेवा के लिए यहां हैं। अपने प्रश्नों या प्रतिक्रिया के लिए हमसे संपर्क करें।",
  contactBtn: "संपर्क करें",
  instagramTitle: "हमें इंस्टाग्राम पर फॉलो करें",
  instagramSubtitle: "@janori_grampanchayat"
},
      about: {
  hero: {
    title: "जानोरी गाँव के बारे में",
    subtitle: "हमारे प्यारे गाँव की समृद्ध विरासत, संस्कृति और प्रगति की खोज करें"
  },
  history: {
    title: "गाँव का इतिहास",
    p1: "विदर्भ में एक पवित्र और ऐतिहासिक धार्मिक स्थल। जानोरी महाराष्ट्र के बुलढाणा जिले में स्थित एक गाँव है, जो शेगाँव से लगभग 8 से 10 किलोमीटर दूर है। यह गाँव अपने प्राचीन मंदिरों, पारंपरिक वास्तुकला शैली, धार्मिक रीति-रिवाजों और आध्यात्मिक रूप से समृद्ध वातावरण के लिए विदर्भ भर में प्रसिद्ध है।",
    p2: "1. ऐतिहासिक पृष्ठभूमि: जानोरी के मंदिर 17वीं शताब्दी में बनाए गए थे। तब से, इस गाँव ने एक महत्वपूर्ण धार्मिक तीर्थ केंद्र का दर्जा प्राप्त कर लिया है। प्राचीन काल से, संत, ऋषि और तपस्वी इस गाँव में निवास करते रहे हैं। गाँव के कुछ मंदिर पेशवा काल की वास्तुकला शैली को दर्शाते हैं।",
    p3: "2. प्रमुख धार्मिक स्थल: भगवान नरसिंह मंदिर: यह गाँव का सबसे प्रमुख धार्मिक केंद्र है। मंदिर का शिखर, गर्भगृह और मंडप उत्कृष्ट पत्थर शिल्प कौशल का प्रदर्शन करते हैं। मंदिर परिसर में ध्यान और धार्मिक प्रवचनों के लिए समर्पित स्थान हैं। नरसिंह जयंती बड़ी भक्ति के साथ मनाई जाती है, जिसके दौरान हजारों भक्त दर्शन के लिए आते हैं। महादेव मंदिर: गाँव के मध्य भाग में स्थित, यह मंदिर महाशिवरात्रि के अवसर पर रातभर भव्य पूजा और जागरण का आयोजन करता है। महासिद्ध भगवान मंदिर: इस मंदिर का गुप्त साधना और तांत्रिक पूजा का इतिहास रहा है। भक्त अच्छे स्वास्थ्य और मनोकामनाओं की पूर्ति के लिए यहाँ आते हैं। भगवान राम, लक्ष्मण, सीता और हनुमान मंदिर: राम नवमी और हनुमान जयंती जैसे त्योहार यहाँ बड़े उत्साह के साथ मनाए जाते हैं।",
    p4: "3. पर्यटकों और भक्तों के लिए जानकारी: गाँव शेगाँव बस स्टैंड और रेलवे स्टेशन से आसानी से पहुँचा जा सकता है। गाँव में तीर्थयात्री आवास, भोजन व्यवस्था, पेयजल और स्वच्छ स्वच्छता जैसी सुविधाएँ उपलब्ध हैं। आगंतुकों और भक्तों के लिए स्थानीय गाइड भी उपलब्ध हैं। आस-पास के सुंदर परिदृश्य, हरे-भरे खेत और शांत वातावरण पर्यटकों को और आकर्षित करते हैं।"
  },
  demographics: {
    title: "गाँव की जनसांख्यिकी",
    subtitle: "लोगों और भूमि के बारे में महत्वपूर्ण तथ्य",
    population: {
      title: "जनसंख्या",
      total: "लगभग 5,000 निवासी",
      male: "2,600 पुरुष",
      female: "2,400 महिलाएं",
      children: "1,200 बच्चे",
      youth: "1,500 युवा",
      adults: "2,000 वयस्क",
      seniors: "300 वरिष्ठ नागरिक"
    },
    education: {
      title: "शिक्षा",
      rate: "साक्षरता दर: 85%",
      primary: "प्राथमिक विद्यालय: 500 छात्र",
      secondary: "माध्यमिक विद्यालय: 300 छात्र",
      graduates: "150 स्नातक",
      higher: "50 उच्च शिक्षा छात्र",
      technical: "30 तकनीकी शिक्षा ले रहे हैं"
    },
    geography: {
      title: "भूगोल",
      area: "कुल क्षेत्रफल: 10 वर्ग किमी",
      agricultural: "7 वर्ग किमी कृषि भूमि",
      residential: "2 वर्ग किमी आवासीय",
      forest: "0.5 वर्ग किमी वन",
      water: "0.5 वर्ग किमी जल निकाय",
      distance: "शेगाँव से 12 किमी"
    }
  },
  achievements: {
    title: "गाँव की उपलब्धियाँ",
    subtitle: "मान्यताएँ और मील के पत्थर जो हमें गौरवान्वित करते हैं",
    items: {
      "2023": {
        title: "राज्य स्तरीय स्वच्छ गाँव पुरस्कार",
        description: "अनुकरणीय अपशिष्ट प्रबंधन और स्वच्छता प्रथाओं के लिए मान्यता प्राप्त।"
      },
      "2022": {
        title: "100% डिजिटल साक्षरता",
        description: "14-60 वर्ष की आयु के सभी निवासियों के लिए डिजिटल साक्षरता प्राप्त की।"
      },
      "2021": {
        title: "जल संरक्षण मॉडल गाँव",
        description: "नवीन जल संचयन और संरक्षण तकनीकों को लागू किया।"
      },
      "2020": {
        title: "खुले में शौच मुक्त स्थिति",
        description: "100% शौचालय कवरेज के साथ ODF स्थिति सफलतापूर्वक प्राप्त और बनाए रखी।"
      },
      "2018": {
        title: "सौर ऊर्जा अपनाना",
        description: "सड़क प्रकाश व्यवस्था और सार्वजनिक सुविधाओं के लिए सौर ऊर्जा अपनाने वाला जिले का पहला गाँव।"
      }
    }
  }
},
      services: {
        title: "हमारी सेवाएं",
        subtitle: "हमारे निवासियों के कल्याण के लिए व्यापक सेवाएं और योजनाएं",
        sectionTitle: "ग्राम सेवाएं",
        sectionSubtitle: "हमारे समुदाय के सदस्यों के लिए व्यापक सेवाएं",
        certificates: {
          title: "प्रमाण पत्र जारी करना",
          description: "जानोरी के ग्रामीण निवासियों के लिए जन्म, मृत्यु, निवास, आय और अन्य आवश्यक प्रमाण पत्र कुशलतापूर्वक जारी किए जाते हैं।"
        },
        hallBooking: {
          title: "सामुदायिक भवन बुकिंग",
          description: "किफायती दरों पर विभिन्न कार्यक्रमों, समारोहों और सभाओं के लिए जानोरी में हमारे सुसज्जित सामुदायिक भवन को बुक करें।"
        },
        schemes: {
          title: "योजना पंजीकरण",
          description: "जानोरी के पात्र निवासियों के लिए विभिन्न सरकारी कल्याण योजनाओं, सब्सिडी और लाभों के लिए आवेदन में सहायता।"
        },
        dispute: {
          title: "विवाद समाधान",
          description: "समुदाय के भीतर विवादों को सौहार्दपूर्ण ढंग से हल करने के लिए पारंपरिक जानोरी ग्राम स्तरीय विवाद समाधान तंत्र।"
        },
        library: {
          title: "पुस्तकालय सेवाएं",
          description: "पुस्तकों, समाचार पत्रों और शैक्षिक संसाधनों के संग्रह के साथ हमारे जानोरी ग्राम पुस्तकालय तक पहुंच।"
        },
        housing: {
          title: "आवास सहायता",
          description: "जानोरी गाँव में पात्र लाभार्थियों के लिए PMAY-G जैसी सरकारी आवास योजनाओं के लिए मार्गदर्शन।"
        },
        health: {
          title: "स्वास्थ्य सेवाएं",
          description: "जानोरी में नियमित स्वास्थ्य शिविरों और जागरूकता कार्यक्रमों के लिए प्राथमिक स्वास्थ्य केंद्र के साथ समन्वय।"
        },
        tax: {
          title: "कर संग्रह",
          description: "जानोरी गाँव के विकास के लिए संपत्ति कर, जल शुल्क और अन्य स्थानीय करों का संग्रह।"
        },
        docs: {
          title: "ग्राम पंचायत दस्तावेज़ीकरण",
          subtitle: "ब्रोशर और महत्वपूर्ण दस्तावेज़ डाउनलोड करें या अपने स्वयं के पीडीएफ अपलोड करें।",
          uploadBtn: "फ़ाइल अपलोड करें",
          download: "डाउनलोड करें",
          preview: "पूर्वावलोकन",
          delete: "हटाएं",
          noDocs: "अभी तक कोई दस्तावेज़ अपलोड नहीं किया गया है।"
        }
      },
      events: {
        hero: {
          title: "ग्राम कार्यक्रम",
          subtitle: "जानोरी में होने वाली सभी गतिविधियों से अपडेट रहें"
        },
        section: {
          title: "आगामी कार्यक्रम",
          subtitle: "हमारे सामुदायिक समारोहों और गतिविधियों का हिस्सा बनें"
        },
        admin: {
          uploadEvent: "कार्यक्रम अपलोड करें"
        },
        filter: {
          searchPlaceholder: "कार्यक्रम खोजें...",
          all: "सभी"
        },
        noEvents: {
          title: "कोई कार्यक्रम नहीं मिला",
          message: "अपने खोज मानदंड बदलें या बाद में पुनः प्रयास करें।"
        },
        eventForm: {
          title: "कार्यक्रम अपलोड करें",
          fields: {
            title: "शीर्षक",
            date: "तारीख",
            time: "समय",
            location: "स्थान",
            imageUrl: "छवि URL",
            category: "श्रेणी",
            description: "विवरण"
          },
          buttons: {
            cancel: "रद्द करें",
            addEvent: "कार्यक्रम जोड़ें"
          }
        },
        deleteBtn: "हटाएं",
        readMore: "और पढ़ें",
        proposal: {
          section: {
            title: "कोई कार्यक्रम विचार है?",
            message: "हम समुदाय-संचालित कार्यक्रमों का स्वागत करते हैं। अपना विचार हमारे साथ साझा करें!",
            proposeBtn: "कार्यक्रम प्रस्तावित करें"
          },
          admin: {
            title: "प्रस्तावित कार्यक्रम",
            by: "द्वारा",
            delete: "हटाएं"
          },
          form: {
            title: "कार्यक्रम प्रस्तावित करें",
            success: "आपके सुझाव के लिए धन्यवाद!",
            fields: {
              name: "आपका नाम",
              email: "आपका ईमेल",
              eventTitle: "कार्यक्रम शीर्षक",
              eventDate: "कार्यक्रम तारीख",
              description: "कार्यक्रम विवरण"
            },
            buttons: {
              submit: "जमा करें",
              cancel: "रद्द करें"
            }
          }
        },
        categories: {
          history: "इतिहास",
          health: "स्वास्थ्य",
          agriculture: "कृषि",
          education: "शिक्षा",
          children: "बाल विकास",
          bloodDonation: "रक्तदान",
          environment: "पर्यावरण"
        },
        eventList: [
          {
            id: 1,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'त्योहार, मेले और तीर्थयात्रा',
            date: '15 मई, 2026',
            time: 'सुबह 9:00 - शाम 4:00',
            location: 'जानोरी',
            description: 'चैत्र मेला (यात्रा): साल में एक बार आयोजित होने वाला यह मेला पूरे गाँव के लिए एक प्रमुख सांस्कृतिक उत्सव बन जाता है। इसमें पालकी जुलूस, भजन, कीर्तन, डिंडी, रथ जुलूस और सामुदायिक भोज (भंडारा) शामिल हैं। मेले के दौरान, लोग सड़क के स्टालों से लेकर सांस्कृतिक कार्यक्रमों तक विभिन्न आकर्षणों का आनंद लेते हैं। गुरु पूर्णिमा, श्रावण माह में पूजा और कार्तिक माह में दीपोत्सव भी यहाँ बहुत महत्वपूर्ण माने जाते हैं।',
            category: 'history'
          },
          {
            id: 2,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'सामाजिक और आध्यात्मिक गतिविधियाँ',
            date: '15 मई, 2026',
            time: 'सुबह 9:00 - शाम 4:00',
            location: 'जानोरी',
            description: 'जानोरी में पुस्तकालय, गुरुकुल और संस्कृत शिक्षा केंद्र हैं जो धार्मिक शिक्षा और नैतिक मूल्यों को प्रदान करने के लिए प्रसिद्ध हैं। कई युवा समूह, महिला समूह और ग्राम समितियाँ सामाजिक सेवा में सक्रिय रूप से भाग लेते हैं। स्वच्छता, हरियाली और जल संरक्षण से संबंधित ग्राम पहल अन्य गाँवों के लिए एक उदाहरण के रूप में कार्य करती हैं।',
            category: 'history'
          },
          {
            id: 3,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'रक्तदान शिविर',
            date: '15 मई, 2026',
            time: 'सुबह 9:00 - शाम 4:00',
            location: 'ग्राम सामुदायिक भवन',
            description: 'जिला अस्पताल के सहयोग से आयोजित वार्षिक रक्तदान शिविर में हमारे साथ जुड़ें।',
            category: 'health'
          },
          {
            id: 4,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'किसान प्रशिक्षण कार्यक्रम',
            date: '2 जून, 2026',
            time: 'सुबह 10:00 - दोपहर 1:00',
            location: 'कृषि विस्तार केंद्र',
            description: 'आधुनिक कृषि तकनीकों और किसानों के लिए सरकारी योजनाओं के बारे में जानें।',
            category: 'agriculture'
          },
          {
            id: 5,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'छात्र प्रशिक्षण कार्यक्रम',
            date: '22 अगस्त, 2026',
            time: 'सुबह 10:30 - दोपहर 1:00',
            location: 'XYZ स्कूल',
            description: 'आधुनिक शिक्षा तकनीकों और छात्रों के लिए सरकारी योजनाओं के बारे में जानें।',
            category: 'education'
          },
          {
            id: 6,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'बाल पोलियो खुराक',
            date: '21 सितंबर, 2026',
            time: 'सुबह 10:00 - दोपहर 1:00',
            location: 'ABC अस्पताल',
            description: 'बाल स्वास्थ्य और देखभाल',
            category: 'children'
          },
          {
            id: 7,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'रक्तदान',
            date: '3 मई, 2026',
            time: 'सुबह 10:00 - दोपहर 1:00',
            location: 'ABC अस्पताल',
            description: 'रक्तदान जीवन बचाता है',
            category: 'bloodDonation'
          },
          {
            id: 8,
            image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
            title: 'ग्राम स्वच्छता अभियान',
            date: '10 जून, 2026',
            time: 'सुबह 7:00 - 11:00',
            location: 'ग्राम चौक',
            description: 'हमारे गाँव को साफ करने और उचित अपशिष्ट प्रबंधन प्रथाओं को बढ़ावा देने के लिए सामुदायिक पहल।',
            category: 'environment'
          }
        ]
      },
      contact: {
        title: "संपर्क करें",
        subtitle: "जानोरी ग्राम पंचायत से संपर्क करें",
        hero: {
          title: "संपर्क करें",
          subtitle: "जानोरी ग्राम पंचायत से संपर्क करें"
        },
        getInTouch: {
          title: "संपर्क करें",
          description: "हम आपकी किसी भी प्रश्न या चिंता में सहायता के लिए यहाँ हैं। निम्नलिखित माध्यमों से हमसे संपर्क करने में संकोच न करें:"
        },
        address: {
          title: "हमारा पता",
          line1: "ग्राम पंचायत कार्यालय, मुख्य मार्ग",
          line2: "जानोरी, तालुका शेगाँव",
          line3: "जिला बुलढाणा, महाराष्ट्र - 444203"
        },
        phone: {
          title: "फोन नंबर",
          office: "ग्राम पंचायत: +91 07265-252525",
          sarpanch: "ग्राम सेवक: +91 94xxxxxx10"
        },
        email: {
          title: "ईमेल पता",
          primary: "grampanchayat.janori-bld@maharashtra.gov.in",
          help: "helpdesk.janori@gmail.com"
        },
        hours: {
          title: "कार्यालय समय",
          weekdays: "सोमवार से शनिवार: सुबह 9:30 - शाम 6:00",
          holidays: "रविवार और सरकारी छुट्टियों पर बंद"
        },
        form: {
          title: "हमें संदेश भेजें",
          name: "पूरा नाम",
          email: "ईमेल पता",
          phone: "फोन नंबर",
          subject: "विषय",
          message: "आपका संदेश",
          submit: "संदेश भेजें",
          submitting: "भेज रहा है...",
          success: "संदेश सफलतापूर्वक भेजा गया! हमने आपके ईमेल पर पुष्टि भेज दी है।",
          error: "संदेश भेजने में विफल। कृपया बाद में पुनः प्रयास करें।"
        },
        map: {
          title: "हमें खोजें",
          subtitle: "जानोरी गाँव में हमारे कार्यालय पर जाएँ"
        }
      },
      footer: {
        about: {
          title: "जानोरी ग्राम पंचायत",
          description: "जानोरी गाँव के निवासियों की समर्पण और पारदर्शिता के साथ सेवा करना, ग्रामीण विकास और सामुदायिक कल्याण के लिए मिलकर काम करना।"
        },
        quickLinks: {
          title: "त्वरित लिंक"
        },
        contactInfo: {
          title: "संपर्क जानकारी",
          address: "डाक जानोरी, तहसील शेगाँव, जिला बुलढाणा, पिन 444203",
          phone: "+91 98765 43210",
          email: "grampanchayat.janori@gov.in"
        },
        bottom: {
          rights: "सर्वाधिकार सुरक्षित"
        }
      },
      gallery: {
        title: "हमारी गैलरी",
        subtitle: "जानोरी की भावना और सार को कैद करते हुए",
        photoGalleryTitle: "फोटो गैलरी",
        photoGallerySubtitle: "हमारे गाँव के जीवन और गतिविधियों के माध्यम से एक दृश्य यात्रा",
        videoGalleryTitle: "वीडियो गैलरी",
        videoGallerySubtitle: "गाँव के कार्यक्रमों और उपलब्धियों को दर्शाने वाले वीडियो देखें",
        ctaTitle: "अपने गाँव के पल साझा करें",
        ctaDescription: "क्या आपके पास जानोरी गाँव के कार्यक्रमों या खूबसूरत स्थानों की तस्वीरें या वीडियो हैं? उन्हें हमारे साथ साझा करें ताकि उन्हें हमारी गैलरी में शामिल किया जा सके।",
        submitMedia: "मीडिया सबमिट करें",
        uploading: "अपलोड हो रहा है...",
        uploadSuccess: "मीडिया सफलतापूर्वक अपलोड हुआ!",
        userUploadSuccess: "आपकी छवि सफलतापूर्वक अपलोड हो गई है और व्यवस्थापक की स्वीकृति की प्रतीक्षा कर रही है।",
        images: {
          "1": {
            alt: "गाँव का परिदृश्य",
            category: "village"
          },
          "2": {
            alt: "कृषि गतिविधियाँ",
            category: "agriculture"
          },
          "3": {
            alt: "स्थानीय त्योहार उत्सव",
            category: "culture"
          },
          "4": {
            alt: "सामुदायिक स्वास्थ्य शिविर",
            category: "health"
          },
          "5": {
            alt: "कृषि प्रशिक्षण",
            category: "agriculture"
          },
          "6": {
            alt: "गाँव का विकास",
            category: "development"
          },
          "7": {
            alt: "शिक्षा",
            category: "education"
          },
          "8": {
            alt: "बुनियादी ढांचा",
            category: "infrastructure"
          }
        },
        videos: {
          "1": {
            title: "ग्राम विकास परियोजना"
          },
          "2": {
            title: "गणतंत्र दिवस समारोह 2025"
          },
          "3": {
            title: "ग्राम सभा बैठक के मुख्य अंश"
          }
        }
      }
    }
  },
  mr: {
    translation: {
     nav: {
  brandTitle: 'आपली जानोरी',
  panchayatText: 'ग्रामपंचायत',
  home: 'मुख्यपृष्ठ',
  about: 'आमच्याबद्दल',
  services: 'सेवा',
  events: 'कार्यक्रम',
  gallery: 'गॅलरी',
  contact: 'संपर्क',
  adminLogin: 'ॲडमिन लॉगिन',
  logout: 'लॉगआउट'
},
      home: {
  slider1Title: "जानोरी मध्ये आपले स्वागत आहे",
  slider1Subtitle: "शाश्वत विकास आणि समृद्धीसाठी वचनबद्ध आदर्श गाव",
  slider2Title: "स्वच्छ गाव, सुंदर गाव",
  slider2Subtitle: "आमचा अभिमान, आमची जबाबदारी",
  slider3Title: "विकासाचा प्रवास",
  slider3Subtitle: "प्रगतीच्या दिशेने एक पाऊल",
  notice: "महत्वाची सूचना: कृपया २५ जून रोजी सायंकाळी ५ वाजता ग्रामपंचायत सभागृहात होणाऱ्या ग्रामसभेला उपस्थित राहावे. गावाच्या विकासासाठी आपला सहभाग मोलाचा आहे!",
  welcomeTitle: "जानोरी ग्रामपंंचायत मध्ये आपले स्वागत आहे",
  welcomeText1: "जानोरी हे महाराष्ट्राच्या बुलढाणा जिल्ह्यातील एक लहान परंतु धार्मिक आणि ऐतिहासिकदृष्ट्या समृद्ध गाव आहे. हे गाव शेगावपासून काही किलोमीटर अंतरावर आहे. विदर्भात विशेषतः प्रसिद्ध असलेले हे स्थान प्राचीन मंदिरे आणि धार्मिक परंपरांसाठी ओळखले जाते.",
  welcomeText2: "आमच्या सरपंच आणि समर्पित पंचायत सदस्यांच्या दूरदर्शी नेतृत्वाखाली, आम्ही आमच्या समृद्ध सांस्कृतिक वारशाचे जतन करताना जानोरीला आधुनिक सुविधांसह आदर्श गाव बनविण्यासाठी अथक परिश्रम घेत आहोत.",
  learnMore: "आमच्याबद्दल अधिक जाणून घ्या",
  membersTitle: "आमचे ग्रामपंचायत सदस्य",
  membersSubtitle: "गावाच्या विकासासाठी समर्पित नेतृत्व",
  memberTable: {
    sr: "अ.क्र.",
    photo: "फोटो",
    name: "नाव",
    role: "पद",
    category: "प्रवर्ग"
  },
  membersList: [
    { name: 'सौ. लता धोंडूराम घेंगे', position: 'सरपंच', category: 'OBC' },
    { name: 'श्री. नंदकिशोर गणेश गवंडे', position: 'उपसरपंच', category: 'सामान्य' },
    { name: 'श्री. रमेश जयराम डांगे', position: 'सदस्य', category: 'अ.जा.' },
    { name: 'श्री. शंकर रामदास सोलंके', position: 'सदस्य', category: 'अ.जा.' },
    { name: 'सौ. दीक्षा गजानन भोजने', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'सौ. सुरेखा सुधाकर घेंगे', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'सौ. दुर्गा प्रभाकर बोरसे', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'सौ. अर्चना मंगेश ढोले', position: 'सदस्य', category: 'OBC' },
    { name: 'शेख रेहाना शेख मोहसीन', position: 'सदस्य', category: 'सामान्य (म)' },
    { name: 'श्री. डी.के. बाजोळे', position: 'सचिव', category: '-' },
    { name: 'श्री. सुरेश रामचंद्र चितोडे', position: 'कर्मचारी', category: '-' },
    { name: 'श्री. अंबादास उखार्डा डांगे', position: 'संगणक संचालक', category: '-' }
  ],
  templeTitle: "जानोरीची दिव्य मंदिरे",
  templeSubtitle: "आमच्या गावातील पवित्र मंदिरे आणि कालातीत आध्यात्मिक परंपरा एक्सप्लोर करा",
  templeDescription: "जानोरीची दिव्य मंदिरे शतकानुशतके भक्ती, संस्कृती आणि वास्तुशिल्प सौंदर्य प्रतिबिंबित करतात. ही पवित्र मंदिरे आध्यात्मिक स्थळे म्हणून काम करतात जिथे दैनंदिन प्रार्थना, भजन आणि भव्य उत्सव समुदायाला श्रद्धा आणि उत्सवात एकत्र करतात.",
  emergencyTitle: "आपत्कालीन सेवा",
  emergencySubtitle: "आपत्कालीन परिस्थितीसाठी २४/७ हेल्पलाइन क्रमांक",
  ambulance: "रुग्णवाहिका सेवा",
  medical: "वैद्यकीय आणीबाणी",
  police: "पोलीस स्टेशन",
  fire: "अग्निशमन सेवा",
  eventsTitle: "येणारे कार्यक्रम",
  eventsSubtitle: "गावातील क्रियाकलाप आणि कार्यक्रमांसह अद्ययावत रहा",
  viewAllEvents: "सर्व कार्यक्रम पहा",
  ctaTitle: "प्रश्न किंवा सूचना आहेत?",
  ctaText: "आम्ही तुमची सेवा करण्यासाठी येथे आहोत. तुमच्या प्रश्नांसाठी किंवा अभिप्रायासाठी आमच्याशी संपर्क साधा.",
  contactBtn: "संपर्क साधा",
  instagramTitle: "आम्हाला इंस्टाग्रामवर फॉलो करा",
  instagramSubtitle: "@janori_grampanchayat"
},
      about: {
  hero: {
    title: "जानोरी गावाबद्दल",
    subtitle: "आमच्या प्रिय गावाचा समृद्ध वारसा, संस्कृती आणि प्रगती शोधा"
  },
  history: {
    title: "गावाचा इतिहास",
    p1: "विदर्भातील एक पवित्र आणि ऐतिहासिक धार्मिक स्थळ. जानोरी हे महाराष्ट्रातील बुलढाणा जिल्ह्यातील एक गाव आहे, जे शेगावपासून सुमारे ८ ते १० किलोमीटर अंतरावर आहे. हे गाव त्याच्या प्राचीन मंदिरांसाठी, पारंपारिक स्थापत्यशैलीसाठी, धार्मिक रीतीरिवाजांसाठी आणि आध्यात्मिक दृष्ट्या समृद्ध वातावरणासाठी विदर्भभर प्रसिद्ध आहे.",
    p2: "१. ऐतिहासिक पार्श्वभूमी: जानोरीची मंदिरे १७व्या शतकात बांधली गेली. तेव्हापासून, या गावाने एक महत्त्वाचे धार्मिक तीर्थक्षेत्राचा दर्जा प्राप्त केला आहे. प्राचीन काळापासून, संत, ऋषी आणि तपस्वी या गावात राहत आले आहेत. गावातील काही मंदिरे पेशवे काळातील स्थापत्यशैली दर्शवितात.",
    p3: "२. प्रमुख धार्मिक स्थळे: भगवान नरसिंह मंदिर: हे गावातील सर्वात प्रमुख धार्मिक केंद्र आहे. मंदिराचा शिखर, गर्भगृह आणि मंडप उत्कृष्ट दगडी शिल्पकलेचे प्रदर्शन करतात. मंदिर परिसरात ध्यान आणि धार्मिक प्रवचनांसाठी समर्पित जागा आहेत. नरसिंह जयंती मोठ्या भक्तिभावाने साजरी केली जाते, ज्या दरम्यान हजारो भाविक दर्शनासाठी येतात. महादेव मंदिर: गावाच्या मध्यभागी स्थित, हे मंदिर महाशिवरात्रीच्या निमित्ताने रात्रभर भव्य पूजा आणि जागरण आयोजित करते. महासिद्ध भगवान मंदिर: या मंदिराचा गुप्त साधना आणि तांत्रिक पूजेचा इतिहास आहे. भक्त चांगल्या आरोग्यासाठी आणि मनोकामना पूर्ण होण्यासाठी येथे येतात. भगवान राम, लक्ष्मण, सीता आणि हनुमान मंदिरे: राम नवमी आणि हनुमान जयंती सारखे सण येथे मोठ्या उत्साहात साजरे केले जातात.",
    p4: "३. पर्यटक आणि भाविकांसाठी माहिती: गाव शेगाव बस स्टँड आणि रेल्वे स्थानकापासून सहज उपलब्ध आहे. गावात तीर्थयात्री निवास, भोजन व्यवस्था, पिण्याचे पाणी आणि स्वच्छ स्वच्छता सुविधा उपलब्ध आहेत. अभ्यागत आणि भाविकांसाठी स्थानिक मार्गदर्शकही उपलब्ध आहेत. जवळचे निसर्गरम्य दृश्ये, हिरवीगार शेते आणि शांत वातावरण पर्यटकांना अधिक आकर्षित करते."
  },
  demographics: {
    title: "गावाची लोकसंख्या",
    subtitle: "लोक आणि जमिनीबद्दल महत्त्वाची माहिती",
    population: {
      title: "लोकसंख्या",
      total: "अंदाजे ५,००० रहिवासी",
      male: "२,६०० पुरुष",
      female: "२,४०० महिला",
      children: "१,२०० मुले",
      youth: "१,५०० युवक",
      adults: "२,००० प्रौढ",
      seniors: "३०० ज्येष्ठ नागरिक"
    },
    education: {
      title: "शिक्षण",
      rate: "साक्षरता दर: ८५%",
      primary: "प्राथमिक शाळा: ५०० विद्यार्थी",
      secondary: "माध्यमिक शाळा: ३०० विद्यार्थी",
      graduates: "१५० पदवीधर",
      higher: "५० उच्च शिक्षण घेतलेले विद्यार्थी",
      technical: "३० तांत्रिक शिक्षण घेत आहेत"
    },
    geography: {
      title: "भूगोल",
      area: "एकूण क्षेत्रफळ: १० चौ. किमी",
      agricultural: "७ चौ. किमी शेतीयोग्य जमीन",
      residential: "२ चौ. किमी निवासी",
      forest: "०.५ चौ. किमी जंगल",
      water: "०.५ चौ. किमी जलस्रोत",
      distance: "शेगावपासून १२ किमी"
    }
  },
  achievements: {
    title: "गावाची उपलब्धी",
    subtitle: "मान्यता आणि महत्त्वाचे टप्पे ज्याचा आम्हाला अभिमान आहे",
    items: {
      "2023": {
        title: "राज्यस्तरीय स्वच्छ गाव पुरस्कार",
        description: "उत्कृष्ट कचरा व्यवस्थापन आणि स्वच्छता पद्धतींसाठी मान्यता."
      },
      "2022": {
        title: "१००% डिजिटल साक्षरता",
        description: "१४-६० वयोगटातील सर्व रहिवाशांसाठी डिजिटल साक्षरता प्राप्त केली."
      },
      "2021": {
        title: "जलसंधारण आदर्श गाव",
        description: "नाविन्यपूर्ण जलसंधारण आणि संवर्धन तंत्रे अंमलात आणली."
      },
      "2020": {
        title: "मुक्त शौचमुक्त स्थिती",
        description: "१००% शौचालय कवरेजसह ODF स्थिती यशस्वीरित्या प्राप्त आणि टिकवली."
      },
      "2018": {
        title: "सौरऊर्जा अवलंब",
        description: "रस्त्यावरील दिवे आणि सार्वजनिक सुविधांसाठी सौरऊर्जा स्वीकारणारे जिल्ह्यातील पहिले गाव."
      }
    }
  }
},
      services: {
        title: "आमच्या सेवा",
        subtitle: "आमच्या रहिवाशांच्या कल्याणासाठी सर्वसमावेशक सेवा आणि योजना",
        sectionTitle: "ग्राम सेवा",
        sectionSubtitle: "आमच्या समुदायातील सदस्यांसाठी सर्वसमावेशक सेवा",
        certificates: {
          title: "दाखले देणे",
          description: "जानोरीच्या ग्रामीण रहिवाशांसाठी जन्म, मृत्यू, रहिवास, उत्पन्न आणि इतर आवश्यक दाखले कार्यक्षमतेने दिले जातात."
        },
        hallBooking: {
          title: "सामुदायिक भवन बुकिंग",
          description: "परवडणाऱ्या दरात विविध कार्यक्रम, समारंभ आणि सभांसाठी जानोरीमधील आमचे सुसज्ज सामुदायिक भवन बुक करा."
        },
        schemes: {
          title: "योजना नोंदणी",
          description: "जानोरीच्या पात्र रहिवाशांसाठी विविध सरकारी कल्याणकारी योजना, अनुदाने आणि लाभांसाठी अर्ज करण्यास सहाय्य."
        },
        dispute: {
          title: "वाद निवारण",
          description: "समाजातील वाद सौहार्दपणे सोडवण्यासाठी पारंपारिक जानोरी ग्रामस्तरीय वाद निवारण यंत्रणा."
        },
        library: {
          title: "ग्रंथालय सेवा",
          description: "पुस्तके, वर्तमानपत्रे आणि शैक्षणिक संसाधनांच्या संग्रहासह आमच्या जानोरी ग्राम ग्रंथालयात प्रवेश."
        },
        housing: {
          title: "गृहनिर्माण सहाय्य",
          description: "जानोरी गावातील पात्र लाभार्थ्यांसाठी PMAY-G सारख्या सरकारी गृहनिर्माण योजनांसाठी मार्गदर्शन."
        },
        health: {
          title: "आरोग्य सेवा",
          description: "जानोरीमध्ये नियमित आरोग्य शिबिरे आणि जनजागृती कार्यक्रमांसाठी प्राथमिक आरोग्य केंद्रासह समन्वय."
        },
        tax: {
          title: "कर संकलन",
          description: "जानोरी गावाच्या विकासासाठी मालमत्ता कर, पाणी शुल्क आणि इतर स्थानिक करांचे संकलन."
        },
        docs: {
          title: "ग्रामपंचायत दस्तऐवजीकरण",
          subtitle: "माहितीपत्रके आणि महत्त्वाची कागदपत्रे डाउनलोड करा किंवा तुमचे स्वतःचे PDF अपलोड करा.",
          uploadBtn: "फाइल अपलोड करा",
          download: "डाउनलोड करा",
          preview: "पूर्वावलोकन",
          delete: "हटवा",
          noDocs: "अद्याप कोणतीही दस्तऐवजे अपलोड केलेली नाहीत."
        }
      },
      events: {
        hero: {
          title: "ग्राम कार्यक्रम",
          subtitle: "जानोरीमध्ये होणाऱ्या सर्व क्रियाकलापांसह अद्ययावत रहा"
        },
        section: {
          title: "आगामी कार्यक्रम",
          subtitle: "आमच्या सामुदायिक मेळाव्या आणि क्रियाकलापांचा भाग व्हा"
        },
        admin: {
          uploadEvent: "कार्यक्रम अपलोड करा"
        },
        filter: {
          searchPlaceholder: "कार्यक्रम शोधा...",
          all: "सर्व"
        },
        noEvents: {
          title: "कोणतेही कार्यक्रम सापडले नाहीत",
          message: "तुमचे शोध मापदंड बदला किंवा नंतर पुन्हा प्रयत्न करा."
        },
        eventForm: {
          title: "कार्यक्रम अपलोड करा",
          fields: {
            title: "शीर्षक",
            date: "तारीख",
            time: "वेळ",
            location: "स्थान",
            imageUrl: "प्रतिमा URL",
            category: "श्रेणी",
            description: "वर्णन"
          },
          buttons: {
            cancel: "रद्द करा",
            addEvent: "कार्यक्रम जोडा"
          }
        },
        deleteBtn: "हटवा",
        readMore: "पुढे वाचा",
        proposal: {
          section: {
            title: "एखादा कार्यक्रमाचा विचार आहे?",
            message: "आम्ही समुदाय-चालित कार्यक्रमांचे स्वागत करतो. तुमची कल्पना आमच्याशी शेअर करा!",
            proposeBtn: "कार्यक्रम प्रस्तावित करा"
          },
          admin: {
            title: "प्रस्तावित कार्यक्रम",
            by: "द्वारे",
            delete: "हटवा"
          },
          form: {
            title: "कार्यक्रम प्रस्तावित करा",
            success: "तुमच्या सूचनेबद्दल धन्यवाद!",
            fields: {
              name: "तुमचे नाव",
              email: "तुमचा ईमेल",
              eventTitle: "कार्यक्रम शीर्षक",
              eventDate: "कार्यक्रम तारीख",
              description: "कार्यक्रम वर्णन"
            },
            buttons: {
              submit: "सबमिट करा",
              cancel: "रद्द करा"
            }
          }
        },
        categories: {
          history: "इतिहास",
          health: "आरोग्य",
          agriculture: "शेती",
          education: "शिक्षण",
          children: "बाल विकास",
          bloodDonation: "रक्तदान",
          environment: "पर्यावरण"
        },
        eventList: [
          {
            id: 1,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'सण, जत्रा आणि तीर्थयात्रा',
            date: '१५ मे, २०२६',
            time: 'सकाळी ९:०० - संध्याकाळी ४:००',
            location: 'जानोरी',
            description: 'चैत्र जत्रा (यात्रा): वर्षातून एकदा होणारी ही जत्रा संपूर्ण गावासाठी एक प्रमुख सांस्कृतिक उत्सव बनते. यात पालखी मिरवणूक, भजन, कीर्तन, डिंडी, रथ मिरवणूक आणि सामुदायिक भोजन (भंडारा) यांचा समावेश होतो. जत्रेदरम्यान, लोक रस्त्यावरील दुकानांपासून ते सांस्कृतिक कार्यक्रमांपर्यंत विविध आकर्षणांचा आनंद घेतात. गुरुपौर्णिमा, श्रावण महिन्यातील पूजा आणि कार्तिक महिन्यातील दीपोत्सव देखील येथे अतिशय महत्त्वाचे मानले जातात.',
            category: 'history'
          },
          {
            id: 2,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'सामाजिक आणि आध्यात्मिक उपक्रम',
            date: '१५ मे, २०२६',
            time: 'सकाळी ९:०० - संध्याकाळी ४:००',
            location: 'जानोरी',
            description: 'जानोरीमध्ये ग्रंथालये, गुरुकुल आणि संस्कृत शिक्षण केंद्रे आहेत जी धार्मिक शिक्षण आणि नैतिक मूल्ये देण्यासाठी प्रसिद्ध आहेत. अनेक युवा गट, महिला गट आणि ग्राम समित्या सामाजिक कार्यात सक्रियपणे सहभागी होतात. स्वच्छता, हरितगृह आणि जलसंधारणाशी संबंधित ग्राम उपक्रम इतर गावांसाठी उदाहरण म्हणून काम करतात.',
            category: 'history'
          },
          {
            id: 3,
            image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
            title: 'रक्तदान शिबिर',
            date: '१५ मे, २०२६',
            time: 'सकाळी ९:०० - संध्याकाळी ४:००',
            location: 'ग्राम सामुदायिक भवन',
            description: 'जिल्हा रुग्णालयाच्या सहकार्याने आयोजित वार्षिक रक्तदान शिबिरात सहभागी व्हा.',
            category: 'health'
          },
          {
            id: 4,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'शेतकरी प्रशिक्षण कार्यक्रम',
            date: '२ जून, २०२६',
            time: 'सकाळी १०:०० - दुपारी १:००',
            location: 'कृषी विस्तार केंद्र',
            description: 'आधुनिक शेती तंत्रज्ञान आणि शेतकऱ्यांसाठी सरकारी योजनांबद्दल जाणून घ्या.',
            category: 'agriculture'
          },
          {
            id: 5,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'विद्यार्थी प्रशिक्षण कार्यक्रम',
            date: '२२ ऑगस्ट, २०२६',
            time: 'सकाळी १०:३० - दुपारी १:००',
            location: 'XYZ शाळा',
            description: 'आधुनिक शिक्षण तंत्रे आणि विद्यार्थ्यांसाठी सरकारी योजनांबद्दल जाणून घ्या.',
            category: 'education'
          },
          {
            id: 6,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'बाल पोलिओ डोस',
            date: '२१ सप्टेंबर, २०२६',
            time: 'सकाळी १०:०० - दुपारी १:००',
            location: 'ABC रुग्णालय',
            description: 'बाल आरोग्य आणि काळजी',
            category: 'children'
          },
          {
            id: 7,
            image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
            title: 'रक्तदान',
            date: '३ मे, २०२६',
            time: 'सकाळी १०:०० - दुपारी १:००',
            location: 'ABC रुग्णालय',
            description: 'रक्तदान जीवन वाचवते',
            category: 'bloodDonation'
          },
          {
            id: 8,
            image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
            title: 'ग्राम स्वच्छता मोहीम',
            date: '१० जून, २०२६',
            time: 'सकाळी ७:०० - ११:००',
            location: 'ग्राम चौक',
            description: 'आमचे गाव स्वच्छ ठेवण्यासाठी आणि योग्य कचरा व्यवस्थापन पद्धतींना प्रोत्साहन देण्यासाठी सामुदायिक उपक्रम.',
            category: 'environment'
          }
        ]
      },
      contact: {
        title: "संपर्क करा",
        subtitle: "जानोरी ग्रामपंचायतीशी संपर्क साधा",
        hero: {
          title: "संपर्क करा",
          subtitle: "जानोरी ग्रामपंचायतीशी संपर्क साधा"
        },
        getInTouch: {
          title: "संपर्कात रहा",
          description: "आम्ही तुमच्या कोणत्याही प्रश्नासाठी किंवा चिंतेसाठी मदतीसाठी येथे आहोत. खालील कोणत्याही माध्यमातून आमच्याशी संपर्क साधण्यास अजिबात संकोच करू नका:"
        },
        address: {
          title: "आमचा पत्ता",
          line1: "ग्रामपंचायत कार्यालय, मुख्य रस्ता",
          line2: "जानोरी, तालुका शेगाव",
          line3: "जिल्हा बुलढाणा, महाराष्ट्र - ४४४२०३"
        },
        phone: {
          title: "फोन नंबर",
          office: "ग्रामपंचायत: +९१ ०७२६५-२५२५२५",
          sarpanch: "ग्रामसेवक: +९१ ९४xxxxxx१०"
        },
        email: {
          title: "ईमेल पत्ता",
          primary: "grampanchayat.janori-bld@maharashtra.gov.in",
          help: "helpdesk.janori@gmail.com"
        },
        hours: {
          title: "कार्यालय वेळ",
          weekdays: "सोमवार ते शनिवार: सकाळी ९:३० - संध्याकाळी ६:००",
          holidays: "रविवार आणि सरकारी सुट्ट्यांमध्ये बंद"
        },
        form: {
          title: "आम्हाला संदेश पाठवा",
          name: "पूर्ण नाव",
          email: "ईमेल पत्ता",
          phone: "फोन नंबर",
          subject: "विषय",
          message: "तुमचा संदेश",
          submit: "संदेश पाठवा",
          submitting: "पाठवत आहे...",
          success: "संदेश यशस्वीरित्या पाठवला गेला! आम्ही तुमच्या ईमेलवर पुष्टीकरण पाठवले आहे.",
          error: "संदेश पाठवण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा."
        },
        map: {
          title: "आम्हाला शोधा",
          subtitle: "जानोरी गावात आमच्या कार्यालयाला भेट द्या"
        }
      },
      footer: {
        about: {
          title: "जानोरी ग्रामपंचायत",
          description: "जानोरी गावातील रहिवाशांची समर्पण आणि पारदर्शकतेने सेवा करणे, ग्रामीण विकास आणि सामुदायिक कल्याणासाठी एकत्र काम करणे."
        },
        quickLinks: {
          title: "त्वरित दुवे"
        },
        contactInfo: {
          title: "संपर्क माहिती",
          address: "पोस्ट जानोरी, ता. शेगाव, जि. बुलढाणा, पिन ४४४२०३",
          phone: "+९१ ९८७६५ ४३२१०",
          email: "grampanchayat.janori@gov.in"
        },
        bottom: {
          rights: "सर्व हक्क राखीव"
        }
      },
      gallery: {
        title: "आमची गॅलरी",
        subtitle: "जानोरीचे सार आणि भावना टिपताना",
        photoGalleryTitle: "फोटो गॅलरी",
        photoGallerySubtitle: "आमच्या गावातील जीवन आणि क्रियाकलापांचा एक दृश्य प्रवास",
        videoGalleryTitle: "व्हिडिओ गॅलरी",
        videoGallerySubtitle: "गावातील कार्यक्रम आणि उपलब्धी दाखवणारे व्हिडिओ पहा",
        ctaTitle: "तुमचे गावातील क्षण शेअर करा",
        ctaDescription: "तुमच्याकडे जानोरी गावातील कार्यक्रम किंवा सुंदर स्थळांचे फोटो किंवा व्हिडिओ आहेत का? ते आमच्यासोबत शेअर करा जेणेकरून ते आमच्या गॅलरीत समाविष्ट केले जातील.",
        submitMedia: "मीडिया सबमिट करा",
        uploading: "अपलोड होत आहे...",
        uploadSuccess: "मीडिया यशस्वीरित्या अपलोड झाला!",
        userUploadSuccess: "तुमची प्रतिमा यशस्वीरित्या अपलोड झाली आहे आणि प्रशासकाच्या मान्यतेची प्रतीक्षा करत आहे.",
        images: {
          "1": {
            alt: "गावाचे लँडस्केप",
            category: "village"
          },
          "2": {
            alt: "शेती उपक्रम",
            category: "agriculture"
          },
          "3": {
            alt: "स्थानिक सण उत्सव",
            category: "culture"
          },
          "4": {
            alt: "सामुदायिक आरोग्य शिबिर",
            category: "health"
          },
          "5": {
            alt: "कृषी प्रशिक्षण",
            category: "agriculture"
          },
          "6": {
            alt: "गाव विकास",
            category: "development"
          },
          "7": {
            alt: "शिक्षण",
            category: "education"
          },
          "8": {
            alt: "पायाभूत सुविधा",
            category: "infrastructure"
          }
        },
        videos: {
          "1": {
            title: "ग्राम विकास प्रकल्प"
          },
          "2": {
            title: "प्रजासत्ताक दिन समारंभ २०२५"
          },
          "3": {
            title: "ग्रामसभा बैठकीचे ठळक मुद्दे"
          }
        }
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'mr',          // 👈 default language changed to Marathi
  fallbackLng: 'mr',  // 👈 fallback also Marathi
  interpolation: { escapeValue: false }
});

export default i18n;