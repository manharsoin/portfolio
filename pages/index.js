import React from 'react';

// Ensure Tailwind CSS is configured in your environment for these classes to work
// You might need to install lucide-react if not already present: npm install lucide-react
import { Mail, Linkedin, Github, ExternalLink, Code, Briefcase, GraduationCap, Lightbulb, Zap, Database, Globe, Copy } from 'lucide-react'; // Added Copy icon

// Main App component
const App = () => {
  // Data for the portfolio, derived from your resume and GitHub README
  const personalInfo = {
    name: "Manhar Soin",
    title: "Computer Science & Computational Mathematics Student",
    location: "University Park, PA, USA",
    email: "msoin0208@gmail.com", // Updated email
    linkedin: "https://www.linkedin.com/in/manhar-soin/",
    github: "https://github.com/manharsoin", // Ensure this is your primary GitHub
  };

  const summary = "Driven Computer Science and Computational Mathematics student seeking an entry-level role to leverage strong analytical and full-stack development skills. A fast and adaptive learner, I am eager to apply my practical project experience and quickly master dynamic new technologies to solve challenging software engineering problems.";

  const aboutMe = "I am a passionate software developer with expertise in full-stack development, cloud computing, and data-driven applications. I love solving real-world problems with scalable and efficient solutions and have experience in backend services, UI/UX design, and database optimization. Currently, I am focused on enhancing full-stack applications using React, Node.js, Express, and Supabase, while exploring Cloud Computing & AI-powered solutions and building scalable and efficient web applications.";

  const education = {
    university: "The Pennsylvania State University",
    location: "University Park, PA",
    degree: "Bachelor of Science in Computer Science and Computational Mathematics",
    graduation: "May 2026",
    gpa: "3.60/4.00",
    deansList: "4/5 semesters",
    relevantCourses: [
      "Data Structures", "Algorithms", "Discrete Mathematics", "Database Systems",
      "Computer Architecture", "Web Development", "Numerical Analysis",
      "Object-Oriented Programming", "Software Engineering", "Fourier Series and PDEs", "Blockchain"
    ],
  };

  const skills = {
    languages: ["Python", "C++", "Java", "JavaScript/TypeScript", "Dart", "SQL", "HTML/CSS"],
    frameworksLibraries: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Solidity"],
    databases: ["PostgreSQL", "MongoDB", "Supabase", "MS SQL Server"],
  };

  const academicAchievements = [
    "Maintained 3.60 GPA and earned Dean's List recognition in 4/5 semesters in a competitive dual major program.",
    "Contributed to research projects involving policy analytics and NLP-based index development, processing 10,000+ articles.",
    "Developed and deployed multiple full-stack applications with active users, demonstrating strong practical skills.",
    "Tutored 100+ students in advanced mathematics.",
    "Designed data pipelines and algorithms that reduced manual data extraction time by 80% with 99% accuracy in research projects."
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "Samura Technologies Private Limited",
      location: "Bengaluru, India",
      dates: "May 2024 – Aug 2024",
      description: [
        "Revamped UI with FlutterFlow, improving navigation speed and visual consistency across 15+ screens.",
        "Integrated Supabase backend, reducing load times by 30% for 1,000+ active users.",
        "Incorporated 5+ user-requested features after direct feedback sessions, achieving 95% user satisfaction rating.",
        "Applied scalable design principles to improve long-term maintainability."
      ]
    },
    {
      title: "Research Assistant – Policy Analytics & NLP",
      company: "Smeal College of Business, Penn State University",
      location: "University Park, PA",
      dates: "May 2025 – Present",
      description: [
        "Processed 10K+ articles using ProQuest SRU & AWN to build policy indices.",
        "Parsed structured Excel keyword sets across 4 categories.",
        "Constructed National, Local, and Combined indices per Baker et al. (2022) methodology.",
        "Built checkpointed pipelines with automated query + export logic."
      ]
    },
    {
      title: "Tutor & Learning Assistant",
      company: "Eberly College of Science, Penn State University",
      location: "University Park, PA",
      dates: "Jan 2024 – Present",
      description: [
        "Provided weekly tutoring to 100+ students in Calculus I/II and Differential Equations.",
        "Conducted bi-weekly review sessions, boosting average exam scores by 15% and improving pass rates by 20%."
      ]
    },
    {
      title: "Applied Researcher – Pulsar Signal Detection",
      company: "Pulsar Club, Penn State University",
      location: "University Park, PA",
      dates: "Jan 2023 – May 2023",
      description: [
        "Processed raw radio telescope data in Python to detect periodic pulsar signals, identifying 12+ potential candidates.",
        "Developed signal processing algorithms achieving 85% accuracy in pulsar detection."
      ]
    }
  ];

  const projects = [
    {
      name: "EduFund",
      description: "A decentralized crowdfunding platform built using Ethereum smart contracts.",
      techStack: ["Blockchain", "Solidity", "MetaMask", "React"],
      liveLink: "https://edu-fund-bay.vercel.app/",
      githubLink: "https://github.com/manharsoin/edufund",
      features: [
        "Built decentralized crowdfunding platform using Ethereum smart contracts with secure donation processing.",
        "Integrated MetaMask wallet for user authentication and transaction signing.",
        "Implemented tamper-proof donation tracking logic ensuring 100% transaction transparency."
      ]
    },
    {
      name: "EverythingCar",
      description: "A full-stack platform for car buying and selling with real-time listings and user reviews.",
      techStack: ["Next.js", "Firebase", "Styled Components", "Node.js", "Stripe API", "YouTube API"], // Added YouTube API
      liveLink: "https://everythingcar.vercel.app/",
      githubLink: "https://github.com/manharsoin/EverythingCar",
      features: [
        "Developed a car search and review platform allowing users to find vehicles by make/model and engage with content.",
        "Implemented a responsive React/Next.js frontend with dynamic car search functionality and detailed car displays.",
        "Integrated YouTube API to fetch and display car video reviews, enhancing user access to multimedia content.",
        "Designed and implemented user review functionality, enabling community-driven car feedback.",
        "Successfully deployed and maintained the full-stack application on Vercel, ensuring high availability and performance."
      ]
    },
    {
      name: "Subspace – Real Estate Platform",
      description: "A full-stack platform for apartment subleasing with features like geolocation, Stripe payments, live chat, and secure encryption.",
      techStack: ["React", "Node.js", "Supabase", "Stripe API"],
      liveLink: "https://www.sub-space.me/",
      githubLink: "https://github.com/mantavya0807/homeharmony-platform", // Ensure this is the correct repo
      features: [
        "Developed apartment subleasing platform serving 500+ active users across 3 campuses with 95% user retention rate.",
        "Built responsive React UI and Node.js + Supabase backend with geolocation, real-time chat, and review system.",
        "Implemented secure Stripe payments with encrypted data storage and fraud protection."
      ]
    },
    {
      name: "Penn State Meal Plan Optimizer – Mealer",
      description: "A web application that helps Penn State students analyze and optimize their campus meal plan spending through automated data collection, real-time analytics, and personalized recommendations.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Firebase Authentication", "Firebase Cloud Functions", "Firestore Database", "Node.js", "Puppeteer"],
      liveLink: null, // "Coming Soon" from GitHub README
      githubLink: "https://github.com/mantavya0807/Mealer", // Ensure this is the correct repo
      features: [
        "Optimized student meal plan usage through analytics and dining data scraping.",
        "Automated Penn State dining data collection with Puppeteer, processing 10,000+ data points daily.",
        "Built Recharts dashboard for usage visualization with 15+ interactive components.",
        "Multi-User Comparison: Compare spending patterns with other users.",
        "Discount Analysis: Track savings and identify opportunities for better value."
      ]
    },
    {
      name: "Agricultural Requirements Tracker",
      description: "A crop recommendation system that analyzes location, soil type, and budget to provide the best crop suggestions.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: null,
      githubLink: "https://github.com/mantavya0807/demo", // Ensure this is the correct repo
      features: [] // No specific features listed in GitHub README, can add if you have them
    },
    {
      name: "Course Scheduler",
      description: "A MERN-based scheduling tool that helps students generate optimized course schedules based on majors, minors, and prerequisites.",
      techStack: ["MERN Stack", "PostgreSQL", "Prisma ORM"],
      liveLink: null,
      githubLink: "https://github.com/mantavya0807/CourseCrafter", // Ensure this is the correct repo
      features: [] // No specific features listed in GitHub README, can add if you have them
    }
  ];

  // Helper function to copy email to clipboard
  const copyEmailToClipboard = () => {
    document.execCommand('copy'); // Use execCommand for broader compatibility in iframes
    // You could add a temporary visual feedback here, e.g., a tooltip "Copied!"
    alert("Email copied to clipboard!"); // Using alert for simplicity, but a custom modal is better in a real app
  };

  // Helper component for skill badges
  const SkillBadge = ({ skill }) => (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {skill}
    </span>
  );

  // Helper component for project cards
  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <ul className="list-disc list-inside text-gray-700 mb-4 pl-4">
        {project.features && project.features.map((feature, index) => (
          <li key={index} className="mb-1 text-sm">{feature}</li>
        ))}
      </ul>
      <div className="flex justify-start space-x-4">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <ExternalLink size={18} className="mr-1" /> Live Demo
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <Code size={18} className="mr-1" /> GitHub Repo
          </a>
        )}
      </div>
    </div>
  );


  return (
    <div className="font-inter bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200">Manhar Soin</a>
          <div className="space-x-4 hidden md:flex">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section id="home" className="py-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl mb-12">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">Hi, I'm Manhar Soin!</h1>
          <p className="text-2xl font-light mb-6 animate-fade-in-up">{personalInfo.title}</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up">{summary}</p>
          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300">
              <Linkedin size={20} className="mr-2" /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
              <Github size={20} className="mr-2" /> GitHub
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 text-lg leading-relaxed text-gray-700">
            <p className="mb-4">{aboutMe}</p>
            <p className="mb-4">My dual major in Computer Science and Computational Mathematics provides a unique blend of theoretical understanding and practical application, enabling me to tackle complex problems from multiple perspectives.</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Education</h3>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-800">{education.university} - {education.location}</p>
              <p className="text-gray-600">{education.degree} ({education.graduation})</p>
              <p className="text-gray-600">GPA: {education.gpa} | Dean's List: {education.deansList}</p>
              <p className="text-gray-600 mt-2">Relevant Courses: {education.relevantCourses.join(', ')}</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-100 rounded-lg shadow-inner mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center"><Code size={24} className="mr-2 text-blue-500" /> Programming Languages</h3>
              <div className="flex flex-wrap">
                {skills.languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center"><Lightbulb size={24} className="mr-2 text-blue-500" /> Frameworks & Libraries</h3>
              <div className="flex flex-wrap">
                {skills.frameworksLibraries.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            {/* Removed Tools & Platforms section */}
            <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-1"> {/* Adjusted col-span for layout */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center"><Database size={24} className="mr-2 text-blue-500" /> Databases</h3>
              <div className="flex flex-wrap">
                {skills.databases.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Experience</h2>
          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">{job.dates}</p>
                    <p className="text-gray-600 text-sm">{job.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed pl-4">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="mb-1 text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Academic & Technical Achievements Section */}
        <section id="achievements" className="py-16 bg-gray-100 rounded-lg shadow-inner mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Academic & Technical Achievements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4 text-lg">
            {academicAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow-xl mt-12">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-4 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          {/* Display email directly and add copy button */}
          <div className="flex flex-col items-center mb-6">
            <p className="text-xl font-semibold mb-2">{personalInfo.email}</p>
            <button
              onClick={copyEmailToClipboard}
              className="flex items-center bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <Copy size={20} className="mr-2" /> Copy Email
            </button>
            {/* Hidden input for copying to clipboard */}
            <input type="text" value={personalInfo.email} readOnly style={{ position: 'absolute', left: '-9999px' }} id="emailToCopy" />
          </div>

          <div className="flex justify-center space-x-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300">
              <Linkedin size={20} className="mr-2" /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
              <Github size={20} className="mr-2" /> GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-12">
        <p>&copy; {new Date().getFullYear()} Manhar Soin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
