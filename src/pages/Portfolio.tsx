import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import { Badge } from '@/components/ui/badge';
import pentestImage from '@/assets/pentest-project.jpg';
import webdevImage from '@/assets/webdev-project.jpg';
import projectData from "@/data/projects.json";
const allProjects = projectData.projects || [];

export default function Portfolio() {
  const cybersecurityProjects = [
    {
      title: "Enterprise Penetration Testing",
      description: "Full security assessment for Savi Finance",
      details: "Performed comprehensive penetration testing on front-end, back-end, and GraphQL API calls to ensure secure coding practices. Gathered reconnaissance information and documented findings in a complete security audit report for SOC2 and GDPR compliance.",
      technologies: ["Penetration Testing", "GraphQL", "Security Audit", "SOC2", "GDPR"],
      image: pentestImage,
      status: "completed" as const
    },
    {
      title: "CTFs Website Pen-Testing",
      description: "Capture The Flag challenges and website security testing",
      details: "Conducted various CTF challenges focusing on web application security vulnerabilities, including SQL injection, XSS, and authentication bypass techniques.",
      technologies: ["CTF", "Web Security", "SQL Injection", "XSS", "Authentication"],
      status: "completed" as const
    },
    {
      title: "WAF Configuration & Testing",
      description: "Web Application Firewall setup and penetration testing",
      details: "Configured and tested Web Application Firewall on Ubuntu VM environment. Performed comprehensive security testing to ensure proper protection against common web attacks.",
      technologies: ["WAF", "Ubuntu", "Network Security", "Penetration Testing"],
      status: "completed" as const
    },
    {
      title: "SIEM Dashboard Development",
      description: "Custom Security Information and Event Management system",
      details: "Created personalized SIEM dashboard to monitor security alerts on mock networks. Implemented real-time threat detection and incident response capabilities.",
      technologies: ["SIEM", "Network Monitoring", "Threat Detection", "Incident Response"],
      status: "completed" as const
    },
    {
      title: "Network Security Analysis",
      description: "Wireshark traffic analysis and network monitoring",
      details: "Applied network components knowledge and Wireshark to monitor traffic patterns. Conducted mock man-in-the-middle attacks for security research purposes on authorized networks.",
      technologies: ["Wireshark", "Network Analysis", "Traffic Monitoring", "MITM"],
      status: "completed" as const
    },
    {
      title: "Self-Hosted IPSEC VPN",
      description: "Personal VPN infrastructure development",
      details: "Currently building a self-hosted IPSEC VPN solution for enhanced personal network security and privacy. Implementing industry-standard encryption protocols.",
      technologies: ["IPSEC", "VPN", "Network Security", "Encryption", "Infrastructure"],
      status: "in-progress" as const
    }
  ];

  const webDevelopmentProjects = [
    {
      title: "Fallyx Full-Stack Platform",
      description: "React/TypeScript enterprise web application",
      details: "Built and maintained full-stack web features using React and TypeScript. Handled customer-facing UI updates and API integrations to automate internal workflows. Collaborated in weekly sprint meetings following rigorous CI/CD and code-review standards.",
      technologies: ["React", "TypeScript", "Full-Stack", "CI/CD", "API Integration"],
      image: webdevImage,
      status: "completed" as const
    },
    {
      title: "Client Marketing Websites",
      description: "Custom websites for business growth",
      details: "Developed personalized websites for clients using HTML, CSS, and JavaScript, resulting in $6,000 additional gross earnings for companies within 2-month spans. Focused on responsive design and user experience optimization.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UX/UI"],
      status: "completed" as const
    },
    {
      title: "Uni-Solved Platform",
      description: "Co-founder of educational technology startup",
      details: "Co-founded and developed an educational platform aimed at helping students solve complex university-level problems. Built using modern web technologies with focus on scalability and user engagement.",
      technologies: ["Startup", "EdTech", "Web Development", "Product Management"],
      status: "in-progress" as const
    },
    {
      title: "Password Manager Application",
      description: "Secure local password management tool",
      details: "Developed a local-only GUI password manager using Electron/Qt with symmetric encryption. Features multiple hashing options and secure vault management with master passphrase protection.",
      technologies: ["Electron", "Encryption", "Security", "Desktop App", "Qt"],
      status: "completed" as const
    }
  ];

  const otherProjects = [
    {
      title: "Unity 3D Parkour Game",
      description: "Physics-based gaming experience",
      details: "Created a 3D parkour game in Unity game engine using C#. Applied momentum physics for realistic movement mechanics and engaging gameplay experience.",
      technologies: ["Unity", "C#", "Game Development", "Physics", "3D Modeling"],
      status: "completed" as const
    },
    {
      title: "Bionic Arm Development",
      description: "Hardware and software integration project",
      details: "Developed a functional bionic arm prototype combining hardware engineering with software control systems for precise movement and user interaction.",
      technologies: ["Hardware", "Embedded Systems", "Robotics", "Engineering"],
      status: "completed" as const
    },
    {
      title: "AWS Facial Recognition System",
      description: "Cloud-based computer vision application",
      details: "Implemented facial recognition system using AWS services, combining machine learning capabilities with cloud infrastructure for scalable image processing.",
      technologies: ["AWS", "Machine Learning", "Computer Vision", "Cloud Computing"],
      status: "completed" as const
    },
    {
      title: "iOS Camera Security App",
      description: "Mobile security application",
      details: "Developed iOS application focused on camera security features, ensuring user privacy and secure image handling on mobile devices.",
      technologies: ["iOS", "Swift", "Mobile Security", "Camera API", "Privacy"],
      status: "completed" as const
    },
    {
      title: "OpenCV Projects",
      description: "Computer vision applications",
      details: "Multiple OpenCV projects including ball movement tracking and finger-based music control systems. Explored real-time image processing and gesture recognition technologies.",
      technologies: ["OpenCV", "Computer Vision", "Python", "Real-time Processing"],
      status: "completed" as const
    }
  ];

  const workExperience = [
    {
      title: "Junior Security Analyst",
      company: "Savi Finance",
      duration: "05/2025 - Current",
      description: [
        "Performed comprehensive penetration testing on front-end, back-end, and GraphQL API calls",
        "Gathered reconnaissance information for SOC2 and GDPR compliance initiatives",
        "Documented complete security audit and penetration testing reports",
        "Ensured secure coding practices across all development teams"
      ],
      skills: ["Penetration Testing", "Security Auditing", "Compliance", "GraphQL Security"],
      type: "work" as const
    },
    {
      title: "Full Stack Web Developer",
      company: "Fallyx",
      duration: "05/2025 - Current",
      description: [
        "Built and maintained full-stack web features in React and TypeScript",
        "Handled customer-facing UI updates and API integrations for workflow automation",
        "Collaborated in weekly sprint meetings with cross-functional stakeholders",
        "Delivered production-level code following rigorous CI/CD and code-review standards"
      ],
      skills: ["React", "TypeScript", "Full-Stack Development", "CI/CD", "Agile"],
      type: "work" as const
    },
    {
      title: "Shadow Experience",
      company: "NIH Private Contracting",
      duration: "02/2025 - Current",
      description: [
        "Proposed strategic solutions during critical network outage situations",
        "Facilitated rapid root-cause identification and resolution processes",
        "Collaborated on VPN system reboot procedures and troubleshooting",
        "Contributed strategic insights for secure network connectivity maintenance"
      ],
      skills: ["Network Troubleshooting", "VPN Systems", "Problem Solving", "Strategic Planning"],
      type: "work" as const
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Edmonton, Alberta",
      duration: "07/2022 - Current",
      description: [
        "Simplified technical concepts to clients through effective communication",
        "Created personalized websites resulting in $6,000 additional gross earnings for clients",
        "Provided timely progress updates and maintained strong client relationships",
        "Specialized in HTML, CSS, and JavaScript for responsive web solutions"
      ],
      skills: ["Client Communication", "Web Development", "Project Management", "Business Growth"],
      type: "work" as const
    }
  ];

  const education = [
    {
      title: "Bachelor of Science: Computer Science",
      company: "University of Toronto Scarborough",
      duration: "Expected 04/2028",
      description: [
        "Focused coursework in algorithms, data structures, and software engineering",
        "Completed Calculus 1 with rigorous proof-writing and problem-solving skills",
        "Computer Science 1: Developed multifunctional programs for complex order systems",
        "Ethics 1: Applied moral reasoning to technology and cybersecurity contexts"
      ],
      skills: ["Computer Science", "Mathematics", "Ethics", "Problem Solving"],
      type: "education" as const
    }
  ];

  const certifications = [
    {
      title: "Google Cybersecurity Certification",
      company: "Google",
      duration: "Completed",
      description: [
        "Comprehensive cybersecurity fundamentals and best practices",
        "Network security, incident response, and risk management",
        "Hands-on experience with security tools and frameworks"
      ],
      skills: ["Cybersecurity", "Risk Management", "Security Tools"],
      type: "certification" as const
    },
    {
      title: "CompTIA Security+ License",
      company: "CompTIA",
      duration: "In Progress",
      description: [
        "Industry-standard security certification covering core security concepts",
        "Network security, compliance, operational security, and threats",
        "Preparing for comprehensive security professional certification"
      ],
      skills: ["Network Security", "Compliance", "Threat Analysis"],
      type: "certification" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Projects Section */}
      <section className="py-20 bg-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-solid-accent">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my work in cybersecurity, web development, and innovative technology solutions
            </p>
          </div>
          
          {/* Cybersecurity Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-foreground">Cybersecurity</h3>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                {cybersecurityProjects.length} Projects
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cybersecurityProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
          
          {/* Web Development Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-foreground">Web Development</h3>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                {webDevelopmentProjects.length} Projects
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webDevelopmentProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
          
          {/* Other Projects */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-foreground">Innovation & Hardware</h3>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                {otherProjects.length} Projects
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-navy-900/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-solid-accent">Experience & Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey, educational background, and industry certifications
            </p>
          </div>
          
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8">Professional Experience</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {workExperience.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8">Education</h3>
            <div className="grid lg:grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <ExperienceCard key={index} {...edu} />
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Certifications</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <ExperienceCard key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-solid-card border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-solid-accent">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in cybersecurity consulting, web development projects, or just want to chat about technology? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Ved06.thakar@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 bg-solid-hero text-white font-semibold rounded-lg hover:shadow-glow transition-smooth"
            >
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/ved-thakar-00202b247" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-navy-500/50 text-navy-100 rounded-lg hover:bg-navy-600/20 hover:shadow-magenta transition-smooth"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
