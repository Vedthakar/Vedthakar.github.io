import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Interactive3DBall from './Interactive3DBall';
import heroImage from '@/assets/hero-bg.jpg';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-navy-900/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-600/20 border border-navy-500/30 text-navy-100">
                <span className="text-sm font-medium">👋 Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-foreground">Ved</span>{' '}
                <span className="text-solid-accent animate-glow">Thakar</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-magenta-400 font-semibold">
                  Cybersecurity Analyst & Full-Stack Developer
                </p>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Computer Science student at University of Toronto specializing in penetration testing, 
                  secure web development, and cybersecurity research. Currently working as a Junior Security Analyst 
                  at Savi Finance and Full-Stack Developer at Fallyx.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Toronto, Ontario</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Experience</p>
                  <p className="text-foreground font-medium">3+ Years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Education</p>
                  <p className="text-foreground font-medium">UTSC Computer Science</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Specialization</p>
                  <p className="text-foreground font-medium">Security & Web Dev</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-solid-hero hover:shadow-glow transition-smooth border-0 text-white font-semibold"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-navy-500/50 text-navy-100 hover:bg-navy-600/20 hover:shadow-magenta transition-smooth"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/ved-thakar-00202b247"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-navy-600/20 border border-navy-500/30 text-navy-100 hover:bg-navy-500/30 hover:text-white transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:Ved06.thakar@gmail.com"
                className="p-3 rounded-full bg-magenta-600/20 border border-magenta-500/30 text-magenta-100 hover:bg-magenta-500/30 hover:text-white transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Right Content - 3D Ball */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square">
              <Interactive3DBall />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-navy-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-magenta-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}