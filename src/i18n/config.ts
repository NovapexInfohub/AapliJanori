import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        brandTitle: 'आपली जानोरी',
        panchayatText: 'Aapli janori',
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
        welcomeTitle: "Welcome to Aapli janori",
        welcomeText1: "Janori is a small but religiously and historically rich village in Buldhana district of Maharashtra. This village is located just a few kilometers from Shegaon. This place is especially famous in the Vidarbha region, as it has many ancient temples and religious traditions.",
        welcomeText2: "Under the visionary leadership of our Sarpanch and dedicated Panchayat members, we are working tirelessly to transform Janori into a model village with modern amenities while preserving our rich cultural heritage.",
        learnMore: "Learn More About Us",
        membersTitle: "Our Aapli janori Members",
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
        instagramSubtitle: "@Aapli_janori"
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
        },
        groups: {
          title: "Community Groups & Mandals",
          subtitle: "Discover the vibrant cultural and religious organizations that enrich our village community",
          established: "Est. {{year}}",
          keyActivities: "Key Activities:",
          mandals: {
            jayGajanan: {
              name: "Jay Gajanan Ganeshotsav Mandal",
              description: "One of the oldest and most revered Ganeshotsav mandals in the village, known for its grand celebrations and community service.",
              activities: {
                ganeshChaturthi: "Ganesh Chaturthi",
                culturalPrograms: "Cultural Programs",
                communityFeast: "Community Feast"
              }
            },
            sadbhavna: {
              name: "Sadbhavna Ganeshotsav Mandal",
              description: "Promotes harmony and brotherhood through various social initiatives and cultural events during festivals.",
              activities: {
                religiousCeremonies: "Religious Ceremonies",
                socialAwareness: "Social Awareness",
                youthEngagement: "Youth Engagement"
              }
            },
            shivyug: {
              name: "Shivyug Ganeshotsav Mandal",
              description: "Dedicated to preserving traditional rituals while incorporating modern elements in celebrations.",
              activities: {
                traditionalPuja: "Traditional Puja",
                artCompetitions: "Art Competitions",
                culturalShows: "Cultural Shows"
              }
            },
            mauli: {
              name: "Mauli Ganeshotsav Mandal",
              description: "Focuses on involving women and children in festive celebrations and community activities.",
              activities: {
                womenEmpowerment: "Women Empowerment",
                childrenPrograms: "Children Programs",
                healthCamps: "Health Camps"
              }
            },
            shivShakti: {
              name: "Shiv Shakti Durga Utsav Mandal",
              description: "Celebrates Navratri and Durga Puja with great enthusiasm, organizing various cultural events.",
              activities: {
                navratriCelebration: "Navratri Celebration",
                garbaNights: "Garba Nights",
                religiousDiscourses: "Religious Discourses"
              }
            },
            bhajani: {
              name: "Bhajani Mandal",
              description: "Dedicated to preserving and promoting devotional music and bhajans throughout the year.",
              activities: {
                dailyBhajans: "Daily Bhajans",
                religiousFestivals: "Religious Festivals",
                spiritualGatherings: "Spiritual Gatherings"
              }
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
          title: "aapli janori Documentation",
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
        subtitle: "Reach out to Aapli janori",
        hero: {
          title: "Contact Us",
          subtitle: "Reach out to Aapli janori"
        },
        getInTouch: {
          title: "Get in Touch",
          description: "We are here to assist you with any queries or concerns. Feel free to reach out to us through any of the following channels:"
        },
        address: {
          title: "Our Address",
          line1: "Aapli janori Office, Main Road",
          line2: "Janori, Taluka Shegaon",
          line3: "District Buldhana, Maharashtra - 444203"
        },
        phone: {
          title: "Phone Numbers",
          office: "Aapli janori: +91 07265-252525",
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
          title: "आपली जानोरी",
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
          "1": { alt: "Village Landscape", category: "village" },
          "2": { alt: "Farming Activities", category: "agriculture" },
          "3": { alt: "Local Festival Celebration", category: "culture" },
          "4": { alt: "Community Health Camp", category: "health" },
          "5": { alt: "Agricultural Training", category: "agriculture" },
          "6": { alt: "Village Development", category: "development" },
          "7": { alt: "Education", category: "education" },
          "8": { alt: "Infrastructure", category: "infrastructure" }
        },
        videos: {
          "1": { title: "Village Development Project" },
          "2": { title: "Republic Day Celebration 2025" },
          "3": { title: "Gram Sabha Meeting Highlights" }
        }
      }
    }
  },
  hi: {
    translation: {
      nav: {
        brandTitle: 'आपली जानोरी',
        panchayatText: 'आपली जानोरी',
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
        notice: "महत्वपूर्ण सूचना: कृपया 25 जून को शाम 5 बजे आपली जानोरी सभागार में होने वाली ग्राम सभा में शामिल हों। गांव के विकास के लिए आपकी भागीदारी मूल्यवान है!",
        welcomeTitle: "आपली जानोरी में आपका स्वागत है",
        welcomeText1: "जानोरी महाराष्ट्र के बुलढाणा जिले का एक छोटा लेकिन धार्मिक और ऐतिहासिक रूप से समृद्ध गांव है। यह गांव शेगांव से कुछ किलोमीटर की दूरी पर स्थित है। विदर्भ क्षेत्र में विशेष रूप से प्रसिद्ध यह स्थान प्राचीन मंदिरों और धार्मिक परंपराओं के लिए जाना जाता है।",
        welcomeText2: "हमारे सरपंच और समर्पित पंचायत सदस्यों के दूरदर्शी नेतृत्व में, हम अपनी समृद्ध सांस्कृतिक विरासत को संरक्षित करते हुए जानोरी को आधुनिक सुविधाओं वाला एक आदर्श गांव बनाने के लिए अथक प्रयास कर रहे हैं।",
        learnMore: "हमारे बारे में और जानें",
        membersTitle: "हमारे आपली जानोरी सदस्य",
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
        },
        groups: {
          title: "सामुदायिक समूह और मंडल",
          subtitle: "हमारे ग्राम समुदाय को समृद्ध करने वाले जीवंत सांस्कृतिक और धार्मिक संगठनों की खोज करें",
          established: "स्थापित {{year}}",
          keyActivities: "मुख्य गतिविधियाँ:",
          mandals: {
            jayGajanan: {
              name: "जय गजानन गणेशोत्सव मंडल",
              description: "गाँव के सबसे पुराने और सबसे प्रतिष्ठित गणेशोत्सव मंडलों में से एक, जो अपने भव्य उत्सवों और सामुदायिक सेवा के लिए जाना जाता है।",
              activities: {
                ganeshChaturthi: "गणेश चतुर्थी",
                culturalPrograms: "सांस्कृतिक कार्यक्रम",
                communityFeast: "सामुदायिक भोज"
              }
            },
            sadbhavna: {
              name: "सद्भावना गणेशोत्सव मंडल",
              description: "त्योहारों के दौरान विभिन्न सामाजिक पहलों और सांस्कृतिक कार्यक्रमों के माध्यम से सद्भाव और भाईचारे को बढ़ावा देता है।",
              activities: {
                religiousCeremonies: "धार्मिक समारोह",
                socialAwareness: "सामाजिक जागरूकता",
                youthEngagement: "युवा सहभागिता"
              }
            },
            shivyug: {
              name: "शिवयुग गणेशोत्सव मंडल",
              description: "उत्सवों में आधुनिक तत्वों को शामिल करते हुए पारंपरिक अनुष्ठानों के संरक्षण के लिए समर्पित।",
              activities: {
                traditionalPuja: "पारंपरिक पूजा",
                artCompetitions: "कला प्रतियोगिताएं",
                culturalShows: "सांस्कृतिक कार्यक्रम"
              }
            },
            mauli: {
              name: "माऊली गणेशोत्सव मंडल",
              description: "त्योहारी उत्सवों और सामुदायिक गतिविधियों में महिलाओं और बच्चों को शामिल करने पर केंद्रित है।",
              activities: {
                womenEmpowerment: "महिला सशक्तिकरण",
                childrenPrograms: "बाल कार्यक्रम",
                healthCamps: "स्वास्थ्य शिविर"
              }
            },
            shivShakti: {
              name: "शिव शक्ति दुर्गा उत्सव मंडल",
              description: "उत्सवी माहौल में नवरात्रि का भव्य आयोजन करता है।",
              activities: {
                navratriCelebration: "नवरात्रि उत्सव",
                garbaNights: "गरबा नाइट्स",
                religiousDiscourses: "धार्मिक प्रवचन"
              }
            },
            bhajani: {
              name: "भजनी मंडल",
              description: "भक्ति संगीत को बढ़ावा देने वाला समूह।",
              activities: {
                dailyBhajans: "दैनिक भजन",
                religiousFestivals: "धार्मिक उत्सव",
                spiritualGatherings: "आध्यात्मिक सभाएं"
              }
            }
          }
        }
      }
    }
  },
  mr: {
    translation: {
      nav: {
        brandTitle: 'आपली जानोरी',
        panchayatText: 'आपली जानोरी',
        home: 'मुख्यपृष्ठ',
        about: 'आमच्याबद्दल',
        services: 'सेवा',
        events: 'कार्यक्रम',
        gallery: 'गॅलरी',
        contact: 'संपर्क',
        adminLogin: 'अ‍ॅडमिन लॉगिन',
        logout: 'लॉगआऊट'
      },
      home: {
        slider1Title: "जानोरीमध्ये आपले स्वागत आहे",
        slider1Subtitle: "शाश्वत विकास आणि समृद्धीसाठी वचनबद्ध एक आदर्श गाव",
        slider2Title: "स्वच्छ गाव, सुंदर गाव",
        slider2Subtitle: "आपले अभिमान, आपले कर्तव्य",
        slider3Title: "विकासाची यात्रा",
        slider3Subtitle: "प्रगतीकडे एक पाऊल",
        notice: "महत्वाची सूचना: कृपया 25 जून रोजी संध्याकाळी 5 वाजता गाव सभागृहात होणाऱ्या ग्रामसभेत उपस्थित रहा.",
        welcomeTitle: "आपली जानोरीमध्ये आपले स्वागत आहे",
        welcomeText1: "जानोरी हे महाराष्ट्रातील बुलढाणा जिल्ह्यातील एक लहान पण धार्मिक आणि ऐतिहासिकदृष्ट्या समृद्ध गाव आहे.",
        welcomeText2: "आमच्या सरपंच आणि पंचायत सदस्यांच्या नेतृत्वाखाली गावाच्या सांस्कृतिक वारशाचे जतन करत आधुनिक सोयी उपलब्ध करून देण्याचा आमचा प्रयत्न आहे.",
        learnMore: "आमच्याबद्दल अधिक जाणून घ्या",
        membersTitle: "आमचे आपली जानोरी सदस्य",
        membersSubtitle: "गावाच्या विकासासाठी समर्पित नेतृत्व",
        memberTable: {
          sr: "क्र. नं.",
          photo: "छायाचित्र",
          name: "नाव",
          role: "पद",
          category: "वर्ग"
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
          { name: 'श्री अंबादास उखार्डा डांगे', position: 'कंप्यूटर ऑपरेटर', category: '-' }
        ],
        templeTitle: "जानोरीचे पवित्र मंदिरे",
        templeSubtitle: "गावातील पवित्र मंदिरे आणि परंपरा अनुभव करा",
        templeDescription: "जानोरीच्या मंदिरे शेकडो वर्षांच्या भक्ती, संस्कृती आणि वास्तुकलेचे द्योतक आहेत.",
        emergencyTitle: "आपत्कालीन सेवा",
        emergencySubtitle: "आपत्कालीन परिस्थितीसाठी 24/7 हेल्पलाइन", 
        ambulance: "रुग्णवाहिका सेवा",
        medical: "वैद्यकीय आपत्कालीन",
        police: "पोलिस स्टेशन",
        fire: "आग ब्लॉग सेवा",
        eventsTitle: "आगामी कार्यक्रम",
        eventsSubtitle: "गावाच्या उपक्रमांबद्दल अद्ययावत रहा",
        viewAllEvents: "सर्व कार्यक्रम पहा",
        ctaTitle: "प्रश्न किंवा सूचना?",
        ctaText: "आम्हाला तुमच्या प्रश्नांसाठी संपर्क करा.",
        contactBtn: "संपर्क करा",
        instagramTitle: "आमचे इंस्टाग्रामवर अनुसरण करा",
        instagramSubtitle: "@Aapli_janori"
      },
      about: {
        hero: {
          title: "जानोरी गावाबद्दल",
          subtitle: "गावाच्या वारसा, संस्कृती आणि प्रगतीबद्दल जाणून घ्या"
        },
        history: {
          title: "गावाचा इतिहास",
          p1: "विदर्भातील एक पवित्र आणि ऐतिहासिक धार्मिक ठिकाण. जानोरी हे बुलढाणा जिल्ह्यात शेगाव जवळ आहे.",
          p2: "इतिहास: जानोरीची मंदिरे 17व्या शतकात बांधली गेली. तेव्हापासून गाव एक प्रमुख तीर्थस्थान बनले.",
          p3: "प्रमुख धार्मिक स्थळे: नरसिंह मंदिर, महादेव मंदिर, महासिद्धा भगवान मंदिर आणि इतर स्थानिक मंदिरे.",
          p4: "पर्यटन माहिती: शेगावपासून येथे सहज पोहोचता येते; आश्रय, अन्न आणि मूलभूत सुविधा उपलब्ध आहेत."
        },
        demographics: {
          title: "गावाची लोकसंख्या",
          subtitle: "लोक आणि जमिनीबद्दल तथ्य",
          population: {
            title: "लोकसंख्या",
            total: "सुमारे 5,000 रहिवासी",
            male: "2,600 पुरुष",
            female: "2,400 महिला",
            children: "1,200 मुले",
            youth: "1,500 युवक",
            adults: "2,000 प्रौढ",
            seniors: "300 ज्येष्ठ"
          },
          education: {
            title: "शिक्षण",
            rate: "साक्षरता दर: 85%",
            primary: "प्राथमिक शाळा: 500 विद्यार्थी",
            secondary: "माध्यमिक शाळा: 300 विद्यार्थी",
            graduates: "150 पदवीधर",
            higher: "50 उच्च शिक्षण",
            technical: "30 तांत्रिक शिक्षण"
          },
          geography: {
            title: "भूगोल",
            area: "कुल क्षेत्र: 10 चौ. किमी",
            agricultural: "7 चौ. किमी शेती",
            residential: "2 चौ. किमी निवासी",
            forest: "0.5 चौ. किमी जंगल",
            water: "0.5 चौ. किमी जल",
            distance: "शेगावपासून 12 किमी"
          }
        },
        achievements: {
          title: "गावाच्या उपलब्ध्या",
          subtitle: "आम्हाला अभिमान वाटण्यासारख्या मान्यताएं",
          items: {
            "2023": {
              title: "राज्यस्तरीय स्वच्छता पुरस्कार",
              description: "अपशिष्ट व्यवस्थापन आणि स्वच्छतेसाठी मान्यता."
            },
            "2022": {
              title: "100% डिजिटल साक्षरता",
              description: "14-60 वयोगटातील सर्व रहिवाशांना डिजिटल साक्षरता."
            }
          }
        },
        groups: {
          title: "सामुदायिक गट",
          subtitle: "गावातील मंडळे आणि संघटनांची माहिती",
          established: "स्थापना {{year}}",
          keyActivities: "मुख्य क्रिया:",
          mandals: {
            jayGajanan: {
              name: "जय गजानन गणेशोत्सव मंडळ",
              description: "भव्य उत्सव आणि समाजसेवा साठी ओळखले जाते",
              activities: {
                ganeshChaturthi: "गणेश चतुर्थी",
                culturalPrograms: "सांस्कृतिक कार्यक्रम",
                communityFeast: "सामुदायिक भोज"
              }
            }
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'mr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;