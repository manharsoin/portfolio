import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Briefcase, GraduationCap, Lightbulb, Zap, Database, Globe, Copy, Award } from 'lucide-react';

const App = () => {
  const personalInfo = {
    name: "Manhar Soin",
    title: "Computer Science & Computational Mathematics Student",
    location: "State College, PA, USA", 
    email: "msoin0208@gmail.com", 
    linkedin: "https://www.linkedin.com/in/manhar-soin/",
    github: "https://github.com/manharsoin", 
  };

  const summary = "Driven Computer Science and Computational Mathematics student seeking an entry-level role to leverage strong analytical and full-stack development skills. Eager to apply practical project experience and AWS cloud expertise to solve challenging software engineering problems.";

  const aboutMe = "I am a passionate software developer with expertise in full-stack development, cloud computing, and data-driven applications. I love solving real-world problems with scalable and efficient solutions. Currently, I am focused on enhancing full-stack applications using React, Node.js, and AWS, while exploring AI-powered solutions.";

  const education = {
    university: "The Pennsylvania State University",
    location: "University Park, PA",
    degree: "Bachelor of Science in Computer Science and Computational Mathematics",
    graduation: "May 2026", 
    gpa: "3.57/4.00", 
    deansList: "5/7 semesters", 
    relevantCourses: [
      "Data Structures", "Algorithms", "Database Systems", "Object-Oriented Programming", "Web Development"
    ],
  };

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Associate (SAA-C03)", 
      issuer: "Amazon Web Services",
      year: "2026",
      skills: ["S3", "CloudFront", "DynamoDB", "EC2", "VPC", "IAM"]
    }
  ];

  const skills = {
    languages: ["Python", "Java", "SQL", "JavaScript/TypeScript", "C++"], 
    frameworksLibraries: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Solidity", "FlutterFlow"],
    databasesCloud: ["AWS (S3, CloudFront, DynamoDB)", "PostgreSQL", "MongoDB", "Supabase", "Firebase", "MS SQL Server"]
  };

  const experience = [
    {
      title: "Senior Capstone - ShareMyBook (Live)", 
      company: "Full-Stack Developer & UI/UX Designer",
      location: "University Park, PA",
      dates: "Aug 2025 - Dec 2025",
      link: "https://share-my-book.vercel.app/", // Added link
      description: [
        "Built a community book-sharing platform serving 38+ users with 29 books and 17 completed returns.",
        "Owned end-to-end product delivery, including the full request lifecycle from request terms to review.",
        "Built RESTful APIs with Node.js + TypeScript to support a responsive React UI and Firebase Auth.",
        "Modeled MongoDB schemas for users, books, requests, and messaging across 5 book clubs."
      ]
    },
    {
      title: "Research Assistant - Policy Analytics & Data Engineering", 
      company: "Smeal College of Business, Penn State University",
      location: "University Park, PA",
      dates: "May 2025 - Dec 2025",
      description: [
        "Built scalable Python data pipelines processing 10,000+ articles using ProQuest SRU & AWN APIs.",
        "Constructed policy indices following Baker et al. (2022) methodology with robust logging.",
        "Improved data quality by implementing validation, deduplication, and failure-recovery patterns."
      ]
    },
    {
      title: "Software Development Intern", 
      company: "Samura Technologies Private Limited",
      location: "Bengaluru, India",
      dates: "May 2024 – Aug 2024",
      description: [
        "Redesigned product UI across 15+ screens with FlutterFlow, improving usability and consistency.",
        "Integrated Supabase backend services and shipped 5+ user-requested features to production.",
        "Wrote automated tests that reduced regressions and contributed to a 20% reduction in reported bugs."
      ]
    },
    {
      title: "Tutor & Learning Assistant", 
      company: "Eberly College of Science, Penn State University",
      location: "University Park, PA",
      dates: "Jan 2024 – Present",
      description: [
        "Tutored 100+ students in Calculus I/II and Differential Equations.",
        "Improved average exam performance by 15% through structured practice and targeted feedback."
      ]
    }
  ];

  const projects = [
    {
      name: "EduFund (Live)",
      description: "A decentralized crowdfunding platform built using Ethereum smart contracts.",
      techStack: ["Solidity", "Ethereum", "MetaMask", "React"], 
      liveLink: "https://edu-fund-bay.vercel.app/",
      githubLink: "https://github.com/manharsoin/edufund",
      features: [
        "Built decentralized crowdfunding platform using Ethereum smart contracts with secure donation processing.",
        "Integrated MetaMask wallet for user authentication and transaction signing."
      ]
    },
    {
      name: "EverythingCar",
      description: "A full-stack platform for car buying and selling with real-time listings.",
      techStack: ["Next.js", "Firebase", "Node.js", "Stripe API", "YouTube API"],
      liveLink: "https://everythingcar.vercel.app/",
      githubLink: "https://github.com/manharsoin/EverythingCar",
      features: [
        "Implemented a responsive React/Next.js frontend with dynamic car search functionality.",
        "Integrated YouTube API to fetch and display car video reviews."
      ]
    },
    {
      name: "Subspace – Real Estate Platform",
      description: "A full-stack platform for apartment subleasing across multiple campuses.",
      techStack: ["React", "Node.js", "Supabase", "Stripe API"], 
      liveLink: "https://www.sub-space.me/",
      githubLink: "https://github.com/mantavya0807/homeharmony-platform",
      features: [
        "Developed apartment subleasing platform with a fast, responsive React UI.",
        "Implemented secure Stripe payments with server-side validation."
      ]
    },
    {
      name: "Penn State Meal Plan Optimizer – Mealer",
      description: "Analytics dashboard to optimize meal plan usage through automated data collection.",
      techStack: ["React", "TypeScript", "Tailwind", "Puppeteer", "Node.js"], 
      githubLink: "https://github.com/mantavya0807/Mealer",
      features: [
        "Automated dining data collection with Puppeteer, capturing 500+ daily records.",
        "Built Recharts dashboard for usage visualization with 15+ interactive components."
      ]
    },
    {
      name: "Agricultural Requirements Tracker",
      description: "A crop recommendation system that analyzes location and soil type.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/mantavya0807/demo",
      features: ["Analyzes location, soil type, and budget to provide best crop suggestions."]
    },
    {
      name: "Course Scheduler",
      description: "MERN-based tool that helps students generate optimized course schedules.",
      techStack: ["MERN Stack", "PostgreSQL", "Prisma ORM"],
      githubLink: "https://github.com/mantavya0807/CourseCrafter",
      features: ["Optimizes schedules based on majors, minors, and prerequisites."]
    }
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    alert("Email copied to clipboard!");
  };

  const SkillBadge = ({ skill }) => (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {skill}
    </span>
  );

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
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">Manhar Soin</a>
          <div className="space-x-4 hidden md:flex font-medium">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#certifications" className="text-gray-700 hover:text-blue-600">Certifications</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <section id="home" className="py-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Manhar Soin!</h1>
          <p className="text-2xl font-light mb-6">{personalInfo.title}</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{summary}</p>
          <div className="flex justify-center space-x-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all">
              <Linkedin size={20} className="mr-2" /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
              <Github size={20} className="mr-2" /> GitHub
            </a>
          </div>
        </section>

        <section id="about" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 text-lg leading-relaxed text-gray-700">
            <p className="mb-4">{aboutMe}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Education</h3>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-800">{education.university}</p>
              <p className="text-gray-600">{education.degree} ({education.graduation})</p>
              <p className="text-gray-600">GPA: {education.gpa} | Dean's List: {education.deansList}</p>
              <p className="text-gray-600 mt-2 text-sm italic">Relevant Courses: {education.relevantCourses.join(', ')}</p>
            </div>
          </div>
        </section>

        <section id="certifications" className="py-16 mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Certifications</h2>
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-lg p-8 shadow-md flex items-center">
                <div className="bg-orange-500 p-4 rounded-full text-white mr-6">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{cert.name}</h3>
                  <p className="text-orange-700 font-semibold">{cert.issuer} • {cert.year}</p>
                  <div className="flex flex-wrap mt-2">
                    {cert.skills.map(s => <span key={s} className="bg-white border border-orange-100 px-2 py-1 rounded text-xs font-bold text-orange-600 mr-2 mb-2">{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16 bg-gray-100 rounded-lg shadow-inner mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center"><Code size={24} className="mr-2 text-blue-500" /> Programming</h3>
              <div className="flex flex-wrap">{skills.languages.map(s => <SkillBadge key={s} skill={s} />)}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center"><Lightbulb size={24} className="mr-2 text-blue-500" /> Frameworks</h3>
              <div className="flex flex-wrap">{skills.frameworksLibraries.map(s => <SkillBadge key={s} skill={s} />)}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center"><Database size={24} className="mr-2 text-blue-500" /> Cloud & DB</h3>
              <div className="flex flex-wrap">{skills.databasesCloud.map(s => <SkillBadge key={s} skill={s} />)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Experience</h2>
          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-[1.01]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                      {job.link && (
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:text-blue-700">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <p className="text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    <p>{job.dates}</p>
                    <p>{job.location}</p>
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

        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-blue-500 pb-2 inline-block">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow-xl mt-12">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl font-semibold mb-6">{personalInfo.email}</p>
          <button onClick={copyEmailToClipboard} className="bg-white text-gray-800 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all font-bold flex items-center mx-auto mb-8">
            <Copy size={20} className="mr-2" /> Copy Email
          </button>
          <div className="flex justify-center space-x-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <Linkedin size={32} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <Github size={32} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Manhar Soin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;