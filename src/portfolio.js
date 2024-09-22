/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishal Gawade",
  title: "Hi all, I'm Vishal",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 building scalable systems across cloud, AI, and DevOps. I blend technical expertise with collaborative spirit to create innovative solutions for real-world challenges. Always eager to learn and expand my skills in diverse tech landscapes!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VishalGawade1",
  linkedin: "https://www.linkedin.com/in/vishal2k/",
  gmail: "vgawade@hawk.iit.edu",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developing highly interactive and optimized frontends and backend systems to streamline workflows and enhance user experience."
    ),
    emoji("⚡  Building and scaling cloud infrastructure across AWS, GCP, and Azure, ensuring seamless integration and efficient performance."),
    emoji(
      "⚡ Integrating third-party services such as AWS, Firebase, and DigitalOcean to supercharge app functionality."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra" },
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
  { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "AI", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Illinois Institute of Technology",
      logo: require("./assets/images/IllinoisTech.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "2023 - 2024",
      desc: "Specialized in Machine Learning, Cloud Computing, and Databases.",
      descBullets: [
        "Expected graduation: December 2024"
      ] 
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/UOM.jpg"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "2017 - 2021",
      desc: "Specialized in Data Structures, Algorithms, and Software Development.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.jpg"),
      date: "January 2021 – December 2022",
      desc: "Led optimization of CI/CD pipelines, automated deployment processes, and enhanced application security.",
      descBullets: [
        "Spearheaded optimization of CI/CD pipelines using Jenkins and GitLab CI",
        "Developed robust Kubernetes automation scripts in Go",
        "Took charge as Security Master, identifying and mitigating over 25 vulnerabilities"
      ]
    },
    {
      role: "Machine Learning and Artificial Intelligence Engineer Intern",
      company: "Verzeo",
      companylogo: require("./assets/images/verzeo.png"),
      date: "December 2019 – July 2020",
      desc: "Built custom ML models, optimized training processes, and led a team in developing facial recognition software.",
      descBullets: [
        "Built a custom SVM with an innovative optimizer",
        "Accelerated ML model training through NumPy optimizations",
        "Led a team of five to design facial recognition software with 95% accuracy"
      ]
    },
    {
      role: "Java Developer Intern",
      company: "Pie Infocomm Pvt. Ltd",
      companylogo: require("./assets/images/pie.jpg"),
      date: "June 2020 – August 2020",
      desc: "Designed and developed Java-based systems, conducted extensive testing, and worked on Android app development.",
      descBullets: [
        "Designed and developed a Java-based client management system",
        "Conducted extensive JUnit testing, reducing bugs by 20%",
        "Worked on a Women's Safety App using Android Studio"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Project Experience",
  subtitle: "INNOVATIVE PROJECTS SHOWCASING TECHNICAL EXPERTISE",
  projects: [
    {
      image: require("./assets/images/AIflowstream.webp"),
      projectName: "Streaming Generative AI Application on AWS",
      projectDesc: "Developed a generative AI model integration into a real-time streaming pipeline, enhancing data processing efficiency by 35%. Utilized Flink's Async I/O API to optimize real-time data throughput and reduce system latency, ensuring high scalability.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/VishalGawade1/AI-FlowStream"
        }
      ]
    },
    {
      image: require("./assets/images/github-Analysis.webp"),
      projectName: "GitHub Repository Analysis and Forecasting",
      projectDesc: "Built an analysis tool for GitHub repositories, leveraging LSTM and Prophet to forecast repository trends and performance. Applied optimized resource management strategies to improve forecasting accuracy by 30%, ensuring predictive reliability.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/VishalGawade1/GitHub-Repository-Analysis-and-Forecasting-with-Machine-Learning-Models"
        }
      ]
    },
    {
      image: require("./assets/images/DjangoGPT.webp"),
      projectName: "Django ChatGPT Integration",
      projectDesc: "Developed a conversational AI-powered web app integrating ChatGPT, enhancing user experience through natural language responses. Implemented secure user authentication and real-time communication via AJAX, improving user interaction and engagement.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/VishalGawade1/AI-FlowStream"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Professional Certifications",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Professional",
      subtitle:
        "Professional certification validating advanced technical skills and experience in designing distributed applications and systems on the AWS platform.",
      image: require("./assets/images/aws.webp"), // Make sure to place a correct AWS logo in the assets/images directory
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "" // Add the URL to your AWS certification
        }
      ]
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      subtitle:
        "Certification demonstrating knowledge of basic concepts, skills, and best practices for real-world Terraform usage.",
      image: require("./assets/images/terraform.webp"), // Make sure to place a correct HashiCorp logo in the assets/images directory
      imageAlt: "HashiCorp Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "" // Add the URL to your HashiCorp certification
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/3sUSPUf1zz1s8018f9bi3s"
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(312)-721-9860",
  email_address: "vishalgawade311@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
