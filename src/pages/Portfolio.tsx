import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import { Badge } from '@/components/ui/badge';
import pentestImage from '@/assets/pentest-project.jpg';
import webdevImage from '@/assets/webdev-project.jpg';
import projectData from "@/data/projects.json";

export default function Portfolio() {
  // Image mapping for projects that have images
  const imageMap: { [key: string]: string } = {
    '/images/pentest-project.jpg': pentestImage,
    '/images/webdev-project.jpg': webdevImage,
  };

  // Helper function to process project images
  const processProjectImage = (imagePath: string) => {
    if (imagePath === '/images/default.jpg') {
      return undefined;
    }
    return imageMap[imagePath] || undefined;
  };

  // Helper function to ensure valid status
  const normalizeStatus = (status: string): "completed" | "in-progress" | "planned" => {
    if (status === "completed" || status === "in-progress" || status === "planned") {
      return status;
    }
    return "in-progress"; // Default fallback
  };

  // Filter projects by category and add proper images
  const cybersecurityProjects = (projectData.projects || [])
    .filter(project => project.category === 'cybersecurity')
    .map(project => ({
      ...project,
      image: processProjectImage(project.image),
      status: normalizeStatus(project.status),
      githubUrl: project.url || undefined,
      liveUrl: undefined
    }));

  const webDevelopmentProjects = (projectData.projects || [])
    .filter(project => project.category === 'webDevelopment')
    .map(project => ({
      ...project,
      image: processProjectImage(project.image),
      status: normalizeStatus(project.status),
      githubUrl: project.url || undefined,
      liveUrl: undefined
    }));

  const otherProjects = (projectData.projects || [])
    .filter(project => project.category === 'other')
    .map(project => ({
      ...project,
      image: processProjectImage(project.image),
      status: normalizeStatus(project.status),
      githubUrl: project.url || undefined,
      liveUrl: undefined
    }));
  
  // Keep the existing work experience, education, and certifications structure
  const workExperience = (projectData.workExperience || []).map(exp => ({
    ...exp,
    type: exp.type as "work" | "education" | "certification"
  }));
  const education = (projectData.education || []).map(edu => ({
    ...edu,
    type: edu.type as "work" | "education" | "certification"
  }));
  const certifications = (projectData.certifications || []).map(cert => ({
    ...cert,
    type: cert.type as "work" | "education" | "certification"
  }));

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
          {cybersecurityProjects.length > 0 && (
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
          )}
          
          {/* Web Development Projects */}
          {webDevelopmentProjects.length > 0 && (
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
          )}
          
          {/* Other Projects */}
          {otherProjects.length > 0 && (
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
          )}
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
          {workExperience.length > 0 && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8">Professional Experience</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                {workExperience.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            </div>
          )}
          
          {/* Education */}
          {education.length > 0 && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8">Education</h3>
              <div className="grid lg:grid-cols-1 gap-6">
                {education.map((edu, index) => (
                  <ExperienceCard key={index} {...edu} />
                ))}
              </div>
            </div>
          )}
          
          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Certifications</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <ExperienceCard key={index} {...cert} />
                ))}
              </div>
            </div>
          )}
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