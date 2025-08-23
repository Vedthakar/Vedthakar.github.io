import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

export default function ProjectCard({
  title,
  description,
  details,
  technologies,
  image,
  githubUrl,
  liveUrl,
  status = 'completed'
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'in-progress': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'planned': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    }
  };

  return (
    <Card className="bg-solid-card border-border/50 shadow-elegant hover:shadow-glow transition-smooth group overflow-hidden">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-foreground group-hover:text-solid-accent transition-smooth">
            {title}
          </CardTitle>
          <Badge className={`text-xs ${getStatusColor(status)}`}>
            {status.replace('-', ' ')}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-foreground/80 leading-relaxed">
          {details}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-navy-600/30 text-navy-100 hover:bg-navy-500/40 transition-smooth border-navy-500/50"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {(githubUrl || liveUrl) && (
          <div className="flex gap-3 pt-2">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-smooth"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}