console.log('🔑 Using Smart Keyword-Based Chatbot (No API needed)');

// Your portfolio context and smart responses
const RESPONSES = {
    greeting: "Hello! 👋 I'm Shankar Karajanagi's AI portfolio assistant. I can help you learn about his skills, projects, experience, and how to get in touch. What would you like to know? 😊",

    skills: "I'm proficient in React.js, Python,java,machine learning ,artificial intelligence, Flask, MySQL, and Android Development! 💻 I also work with TypeScript, Tailwind CSS, Framer Motion, and various data science tools. Check out my Skills section for the complete list! ⚡",

    projects: "I've built several exciting projects! 🚀\n\n1. **Social Media Application** - Mobile app with authentication and timeline feeds\n2. **Dynamic Airline Seat Pricing Strategy** - ML-powered real-time pricing system\n3. **Travel Booking App** - Comprehensive platform for booking buses, trains, hotels & flights\n\nWant to know more about any specific project? Just ask! 📱",

    socialMedia: "The Social Media Application is a comprehensive mobile app built with Java and Android Studio! 📱 It features user authentication, timeline feeds, tweet composition, and profile management. The backend is powered by Flask for robust API handling. It's a full-featured social platform! 🚀 #java #android #flask",

    airlinePricing: "The Dynamic Airline Seat Pricing Strategy is a revolutionary system! ✈️ It uses machine learning and real-time streaming data to optimize airline ticket pricing dynamically. This smart system maximizes revenue and seat occupancy by adjusting prices based on demand patterns! 📊 #machine-learning #real-time #data-science",

    travelBooking: "The Travel Booking App is a comprehensive web platform! 🌍 Built with React frontend and Node.js backend, it allows users to search, compare, and book buses, trains, hotels, flights, and tour packages all in one place. It's a complete travel solution with seamless API integration! 🎫 #react #nodejs #api",

    experience: "I'm a Full-Stack Developer specializing in web and mobile applications. 👨‍💻 I focus on creating user-friendly experiences and delivering actionable data insights. I have hands-on experience with React, Node.js, Flask, and Android development! 💪",

    education: "I have a strong foundation in computer science and software engineering! 🎓 I'm a continuous learner who loves exploring new frameworks and technologies. Check out the Education section for my certifications and background! 📚",

    contact: "I'd love to connect with you! 📧 You can reach me through the Contact section below, connect with me on LinkedIn at linkedin.com/in/shankar-karajanagi, or check out my GitHub at github.com/ShankarKarajanagi18. Let's build something amazing together! 🚀",

    frontend: "For frontend development, I use React.js, JavaScript, TypeScript, HTML5, CSS3, and Tailwind CSS! ⚛️ I love creating smooth animations with Framer Motion and building responsive, beautiful interfaces. 🎨",


    database: "I work with SQL  🗄️ My experience includes MySQL for relational data. I can design efficient schemas and optimize queries for performance! ⚡",

    react: "React is one of my core skills! ⚛️ I build modern web applications using React with hooks, context API, and state management. I also use libraries like Framer Motion for animations and React Router for navigation. Check out my Travel Booking App to see React in action! 🚀",

    python: "I use Python for backend development with Flask and for data science projects! 🐍 I'm experienced in data analysis, machine learning, and building RESTful APIs. My Dynamic Airline Pricing project showcases Python's power in ML and real-time data processing! 📊",

    android: "Yes, I develop Android applications using Java! 📱 My Social Media Application is a perfect example - it features authentication, timeline feeds, and profile management. I enjoy building mobile experiences with Android Studio! 🎯",

    dataScience: "I work on data science and machine learning projects using Python! 📊 My Dynamic Airline Seat Pricing Strategy project uses ML algorithms to optimize pricing in real-time. I enjoy turning data into actionable insights and solving real-world problems! 🔬",

    github: "Check out my GitHub at github.com/ShankarKarajanagi18! 🔗 You'll find my projects, contributions, and code samples there. I believe in open source and sharing knowledge with the developer community! 💻",

    linkedin: "Let's connect on LinkedIn! 💼 Find me at linkedin.com/in/shankar-karajanagi. I'm always open to networking, collaborations, and exciting opportunities! 🤝",

    resume: "You can download my resume from the Resume section below! 📄 It has all the details about my experience, projects, skills, and education. Feel free to check it out and reach out if you have any questions! ✨",

    location: "I'm based in Bengaluru, Karnataka, India! 🇮🇳 It's a great tech hub with amazing opportunities. I'm open to both local and remote opportunities! 🌍",

    greeting: "Hello! 👋 I'm Shankar's portfolio assistant. I can help you learn about his skills, projects, experience, and how to get in touch. What would you like to know? 😊",

    default: "That's a great question! 🤔 Feel free to ask me about Shankar's skills, projects (Social Media App, Airline Pricing, Travel Booking), experience, or how to contact him. You can also explore the different sections of this portfolio! 📧"
};

export const sendMessageToAI = async (userMessage, chatHistory = []) => {
    // Simulate thinking delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        console.log('📨 Processing message:', userMessage);

        const message = userMessage.toLowerCase().trim();

        // Name detection
        if (message.includes('name') || message.includes('who are you') || message.includes('your name') ||
            message.includes('what is your name') || message.includes('whats your name')) {
            console.log('✅ Matched: name/introduction');
            return RESPONSES.greeting;
        }

        // Greeting detection
        // Name detection
        if (message.includes('name') || message.includes('who are you') || message.includes('your name') ||
            message.includes('what is your name') || message.includes('whats your name')) {
            console.log('✅ Matched: name/introduction');
            return RESPONSES.greeting;
        }

        // Greeting detection
        if (message.includes('hi') || message.includes('hello') || message.includes('hey') ||
            message.includes('greetings') || message.includes('good morning') || message.includes('good evening')) {
            console.log('✅ Matched: greeting');
            return RESPONSES.greeting;
        }

        // Individual Project Detection - Social Media
        if (message.includes('social media') || message.includes('social media app') ||
            message.includes('social media application') || message.includes('tweet') ||
            message.includes('timeline') || (message.includes('android') && message.includes('social'))) {
            console.log('✅ Matched: social media project');
            return RESPONSES.socialMedia;
        }

        // Individual Project Detection - Airline Pricing
        if (message.includes('airline') || message.includes('pricing') || message.includes('seat pricing') ||
            message.includes('dynamic pricing') || (message.includes('machine learning') && message.includes('airline'))) {
            console.log('✅ Matched: airline pricing project');
            return RESPONSES.airlinePricing;
        }

        // Individual Project Detection - Travel Booking
        if (message.includes('travel booking') || message.includes('travel app') ||
            message.includes('booking app') || message.includes('bus') || message.includes('hotel booking') ||
            message.includes('flight booking') || (message.includes('travel') && message.includes('platform'))) {
            console.log('✅ Matched: travel booking project');
            return RESPONSES.travelBooking;
        }

        // General Projects
        if (message.includes('project') || message.includes('work') || message.includes('portfolio') ||
            message.includes('built') || message.includes('created') || message.includes('app')) {
            console.log('✅ Matched: projects');
            return RESPONSES.projects;
        }

        // Skills and technology
        if (message.includes('skill') || message.includes('technology') || message.includes('tech') ||
            message.includes('what do you know') || message.includes('languages') || message.includes('tools')) {
            console.log('✅ Matched: skills');
            return RESPONSES.skills;
        }

        // Experience
        if (message.includes('experience') || message.includes('background') || message.includes('expertise') ||
            message.includes('developer') || message.includes('professional') || message.includes('career')) {
            console.log('✅ Matched: experience');
            return RESPONSES.experience;
        }

        // Education
        if (message.includes('education') || message.includes('study') || message.includes('degree') ||
            message.includes('university') || message.includes('college') || message.includes('certification')) {
            console.log('✅ Matched: education');
            return RESPONSES.education;
        }

        // Contact
        if (message.includes('contact') || message.includes('email') || message.includes('reach') ||
            message.includes('connect') || message.includes('hire') || message.includes('collaborate')) {
            console.log('✅ Matched: contact');
            return RESPONSES.contact;
        }

        // React specific
        if (message.includes('react') || message.includes('reactjs') || message.includes('jsx')) {
            console.log('✅ Matched: react');
            return RESPONSES.react;
        }

        // Frontend
        if (message.includes('frontend') || message.includes('front-end') || message.includes('ui') ||
            message.includes('css') || message.includes('html') || message.includes('tailwind')) {
            console.log('✅ Matched: frontend');
            return RESPONSES.frontend;
        }

        // Backend
        if (message.includes('backend') || message.includes('back-end') || message.includes('server') ||
            message.includes('api') || message.includes('node') || message.includes('express') || message.includes('flask')) {
            console.log('✅ Matched: backend');
            return RESPONSES.backend;
        }

        // Database
        if (message.includes('database') || message.includes('mongodb') || message.includes('mysql') ||
            message.includes('sql') || message.includes('data storage')) {
            console.log('✅ Matched: database');
            return RESPONSES.database;
        }

        // Python
        if (message.includes('python') || message.includes('py') || message.includes('django')) {
            console.log('✅ Matched: python');
            return RESPONSES.python;
        }

        // Android
        if (message.includes('android') || message.includes('mobile') || message.includes('java')) {
            console.log('✅ Matched: android');
            return RESPONSES.android;
        }

        // Data Science
        if (message.includes('data science') || message.includes('machine learning') || message.includes('ml') ||
            message.includes('ai') || message.includes('data analysis') || message.includes('analytics')) {
            console.log('✅ Matched: data science');
            return RESPONSES.dataScience;
        }

        // GitHub
        if (message.includes('github') || message.includes('git') || message.includes('repository') || message.includes('code')) {
            console.log('✅ Matched: github');
            return RESPONSES.github;
        }

        // LinkedIn
        if (message.includes('linkedin') || message.includes('professional network')) {
            console.log('✅ Matched: linkedin');
            return RESPONSES.linkedin;
        }

        // Resume
        if (message.includes('resume') || message.includes('cv') || message.includes('curriculum')) {
            console.log('✅ Matched: resume');
            return RESPONSES.resume;
        }

        // Location
        if (message.includes('where') || message.includes('location') || message.includes('based') ||
            message.includes('live') || message.includes('city')) {
            console.log('✅ Matched: location');
            return RESPONSES.location;
        }

        // Default response
        console.log('✅ Using default response');
        return RESPONSES.default;

    } catch (error) {
        console.error('❌ Error:', error);
        return RESPONSES.default;
    }
};
