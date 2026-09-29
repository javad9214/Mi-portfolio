export const profile = {
  firstName: "Seyed Mohammad Javad",
  lastName: "Sadat Hosseini",
  shortName: "Mohammad Javad",
  title: "Senior Java Developer",
  location: "Tehran, Iran",
  age: 30,
  photo: "/photo.jpg",
  tagline: "I build scalable backend systems with Java & Spring Boot, and high-quality Android apps with Kotlin.",

  about: `Senior Java Developer with over 10 years of software development experience, including more than 2 year of professional experience building backend applications and RESTful services using Java and Spring Boot. Skilled in designing scalable and maintainable backend systems using clean architecture, SOLID principles, JPA/Hibernate, REST APIs, Oracle, PostgreSQL, and modern software development practices.

Also an experienced Android Developer with extensive expertise in Kotlin, Clean Architecture, MVVM, Hilt, Room, Kotlin Flow, XML, and Jetpack Compose. Experienced in developing high-quality mobile applications and integrating them with backend services.

Strong experience in collaborating across backend and mobile teams, designing and consuming RESTful APIs, optimizing application performance, and building reliable, maintainable software. Also experienced in technical leadership and mentoring developers, with a strong focus on clean code, scalable architecture, problem-solving, and continuous improvement.`,

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "Java", label: "Spring Boot" },
    { value: "Android", label: "Kotlin" },
  ],

  skillGroups: [
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Spring MVC", "JPA", "Hibernate", "Spring Security", "JWT", "RESTful APIs", "Spring Validation", "Exception Handling", "Spring Transactions", "Dependency Injection", "Maven", "MapStruct", "Flyway"],
    },
    { title: "Databases", skills: ["Oracle", "PostgreSQL"] },
    {
      title: "Android",
      skills: ["Kotlin", "Android", "Jetpack Compose", "XML", "Kotlin Coroutines", "Flow", "LiveData", "Room DB", "Hilt DI", "Retrofit", "Single Activity Pattern", "Navigation Component", "Android CI/CD", "MVVM"],
    },
    {
      title: "Architecture & Practices",
      skills: ["Clean Architecture", "SOLID Principles", "OOP", "Design Patterns", "Repository Pattern", "UseCase"],
    },
    {
      title: "Web",
      skills: ["HTML", "CSS", "SCSS", "JavaScript", "Vue.js", "Quasar Framework", "Ionic", "Capacitor"],
    },
    {
      title: "Tools & Other",
      skills: ["Git Version Control", "Linux", "Python", "FastAPI", "Telegram Bot Library", "UI/UX", "Material Design", "Figma"],
    },
  ],

  // newest first. description = array of bullet points
  experience: [
    {
      title: "Senior Java Developer",
      company: "Hovita",
      logo: "/logos/hovita.png",
      employmentType: "Full-time",
      date: "Sep 2024 until now", 
      duration: "2 years",
      description: [
        "Working as a Senior Java Developer on backend services and enterprise applications using Java and Spring Boot.",
        "Developing and maintaining a large-scale license management system for the Ministry of Economic Affairs and Finance, automating the process of issuing and managing business licenses.",
        "Designed and implemented RESTful APIs using Spring Boot following clean architecture and maintainable design principles.",
        "Worked extensively with Spring Data JPA, Hibernate, Oracle Database, and SQL for developing and optimizing data access layers.",
        "Implemented business logic and service-layer components with a strong focus on separation of concerns, SOLID principles, and maintainability.",
        "Worked with complex entity relationships, database queries, transactions, and concurrency control using JPA and Hibernate.",
        "Implemented and maintained database migrations and versioning using Flyway.",
        "Used MapStruct for clean entity-to-DTO mapping.",
        "Implemented request validation, custom validation rules, exception handling, and structured API responses.",
        "Worked with Spring Security for authentication and authorization.",
        "Collaborated closely with frontend and Android teams to design, integrate, test, and optimize RESTful APIs.",
        "Investigated and resolved production issues, database problems, and complex business logic bugs.",
        "Participated in code reviews and improved code quality, architecture, performance, and testability.",
      ],
    },
    {
      title: "Senior Android Developer",
      company: "Hovita",
      logo: "/logos/hovita.png",
      employmentType: "Full-time",
      date: "Feb 2024 until Aug 2024",
      duration: "7 Months",
      description: [
        "Developed and maintained Android applications using Clean Architecture and modular design.",
        "Implemented a multi-module architecture to separate features and improve build time and testability.",
        "Applied Clean Architecture with MVVM, Hilt, and the Repository pattern.",
        "Built UI screens with Jetpack Compose, following best practices for separation of concerns and reusability.",
        "Used Kotlin Flow for reactive data handling in ViewModels.",
        "Integrated and managed an internal SDK (msau) across multiple modules.",
        "Worked with Room, Retrofit, Navigation Component, and other Jetpack libraries.",
        "Collaborated with backend teams on the design, testing, and optimization of RESTful APIs.",
        "Helped improve project structure, apply SOLID principles, and ensure testability.",
      ],
    },
    {
      title: "Senior Android Developer",
      company: "Deno Electronic",
      logo: "/logos/deno.jpeg",
      employmentType: "Full-time",
      date: "Oct 2023 - Feb 2024",
      duration: "4 months",
      description: [
        "Developed an IoT Android application that communicates with hardware devices such as Arduino and ESP32 and sends commands to them.",
        "Strengthened Kotlin and app architecture skills using Hilt, Room, Repository, Retrofit, and ViewModel.",
        "Learned server-side API development with FastAPI.",
      ],
    },
    {
      title: "Front-End (Vue.js) Developer",
      company: "AlaaTV",
      logo: "/logos/alaatv.jpg",
      employmentType: "Full-time",
      date: "Feb 2021 - Oct 2023",
      duration: "2 years 11 months",
      description: [
        "When the company moved from native Java/Kotlin apps to hybrid apps with Quasar and Vue.js, I learned the new stack and worked on front-end development.",
        "Strengthened full-stack abilities during this period.",
      ],
    },
    {
      title: "Mid-level Android Developer & Team Leader",
      company: "AlaaTV",
      logo: "/logos/alaatv.jpg",
      employmentType: "Full-time",
      date: "Jan 2019 - Apr 2021",
      duration: "2 years 3 months",
      description: [
        "Became team leader of four Android developers as the technical team grew.",
        "Achieved a 4.8 rating on Google Play with 8K+ reviews for this educational application.",
      ],
    },
    {
      title: "Android Developer",
      company: "AlaaTV",
      logo: "/logos/alaatv.jpg",
      employmentType: "Part-time",
      date: "Jul 2018 - May 2019",
      duration: "10 months",
      description: [
        "Created the Android application for the Alaa educational website from scratch using the latest Android technologies.",
      ],
    },
    {
      title: "Junior Android Developer",
      company: "Avaye Fanavari Rahgoshaye Nikan",
      logo: "/logos/avaye-fanavari.jpeg",
      employmentType: "Part-time",
      date: "Mar 2017 - Jun 2018",
      duration: "1 year 3 months",
      description: [
        "Worked on several software projects and learned many skills, including working with phone sensors.",
      ],
    },
    {
      title: "Android Developer Intern",
      company: "Tamco",
      logo: "",
      employmentType: "Part-time",
      date: "Sep 2016 - Feb 2017",
      duration: "5 months",
      description: [
        "Started with a 5-month internship building an Android application for the elevator industry, working alongside the technical team.",
      ],
    },
  ],

  education: [
    {
      school: "Semnan University",
        logo: "/logos/semnan.png",
      degree: "Bachelor of Education",
      fieldOfStudy: "Information Technology",
      date: "2014 - 2019",
    },
    {
      school: "Tehran Institute of Technology",
       logo: "/logos/vanak.png.webp",
      degree: "Bachelor",
      fieldOfStudy: "Developing Android Apps",
      date: "2015",
    },
  ],

  contact: {
    phone: "+989390091027",
    email: "javadhosseini14@gmail.com",
    telegram: "https://t.me/javad14",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/seyed-mohammad-javad-sadat-hosseini-62511911b/",
    github: "https://github.com/javad9214",
  },
};