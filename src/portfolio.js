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
  username: "Amin Debabeche",
  title: "Hi all, I'm Amin",
  subTitle: emoji(
    "A passionate Drug Discovery Researcher 🚀 having an experience of building research pipeline using MD / Biostatistics / Quantum Dynamics / Machine Learning and any cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16GFZH570H_O9iBYeBPlAG2d8ZwFOovD8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amin-debabeche",
  linkedin: "https://www.linkedin.com/in/amin-debabeche/",
  gmail: "debabeche.amin@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "LAZY PRODUCT MANAGER WHO WANTS TO AUTOMATE EVERYTHING",
  skills: [
    emoji(
      "⚡ Manage developer teams to create an high-end product"
    ),
    emoji("⚡ Communicate with stakeholders to understand their needs"),
    emoji(
      "⚡ Leads the software delivery, support and maintenance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Massachusetts Institute of Technology",
      logo: require("./assets/images/mit.png"),
      subHeader: "Visiting Researcher",
      duration: "April 2023 - December 2023",
      desc: "Participated in the research of bringing computational tools to WDR5 peptide binder discovery and published 1 Intellectual Property.",
      descBullets: [
        "Using docking, molecular dynamics together with statistical analysis to validate low- fidelity experimental data, and understand the binding mechanism of potential cancer drugs.",
        "Fine-tuning results with foundation models.",
        "Developped a deep learning model to generate new molecules."
      ]
    },
    {
      schoolName: "Ecole Polytechnique Fédéral de Lausanne",
      logo: require("./assets/images/epfl.png"),
      subHeader: "MSc. Molecular and Biological Chemistry",
      duration: "September 2020 - December 2023",
      desc: "A chemist that hates labs and prefer to use computational tools to understand the world.",
      descBullets: [
        "Computational methods in molecular quantum mechanics, Understanding advanced molecular simulation, Optical methods in chemistry, Advanced photochemistry, Risk management, Food biotechnology",
        "Research project on double perovskite design using Deep Learning at the GMF Lab",
        "Teaching Assistant in advanced chemistry & global issues"
      ]
    },
    {
      schoolName: "Ecole Polytechnique Fédéral de Lausanne",
      logo: require("./assets/images/epfl.png"),
      subHeader: "Minor. Financial Engineering",
      duration: "September 2020 - December 2023",
      desc: "Focus on ML and big data for finance as well as Blockchain and Investments solutions.",
      descBullets: [
        "WallStreetBets: Evaluating the ability of public sentiment to influence financial markets.",
        "Machine learning for finance, Financial big data, Blockchains and distributed ledgers, Investments, Quantitative risk management, Introduction to Corporate finance, Stochastic calculus.",
      ]
    },
    {
      schoolName: "Ecole Polytechnique Fédéral de Lausanne",
      logo: require("./assets/images/epfl.png"),
      subHeader: "Bachelor in Theoretical chemistry",
      duration: "September 2017 - August 2020",
      desc: "Focus on physics, computer simulation, machine learning and math.",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Biostatistics",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Manager",
      company: "Solutions & Funds",
      companylogo: require("./assets/images/suf.png"),
      date: "Oct 2020 – Aug 2022",
      desc: "Design, development, and maintenance of tools to automate manual processes and to bridge the company’s needs..",
      descBullets: [
        "Business process flow analysis together with operational project management",
        "Introduction of new technologies in the Operations department and administration of databases",
        "Participation in the company’s digitalization strategy (Head of Innovation Committee)"
      ]
    },
    {
      role: "Machine Learning Researcher",
      company: "IBM Research Europe",
      companylogo: require("./assets/images/ibm.png"),
      date: "Aug 2021 – Feb 2022",
      desc: "Standardizing chemical compounds with language models.",
      descBullets: [
        "Transformer-based model for a translational task with 98% accuracy and transferability to catalyst dataset 80.12%",
        "Databases scraping,cleaning,and automatic labelling",
        "Machine learning applied to chemistry using Natural Language Processing"
      ]
    },
    {
      role: "Sales Manager",
      company: "Voggt",
      companylogo: require("./assets/images/voggt.png"),
      date: "Dec 2022 – Mar 2023",
      desc: "",
      descBullets: [
        "Scaling the French market with a general 150% KPls growth and achievement of commercial targets",
        "Creating an auto-insurance script predicting market movement and offering financial products to clients to back up their assets",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+41794215022",
  email_address: "debabeche.amin@gmail.com"
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
  isHireable
};
