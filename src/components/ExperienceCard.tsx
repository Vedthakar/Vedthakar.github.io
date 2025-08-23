import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  skills?: string[];
  type?: 'work' | 'education' | 'certification';
}

export default function ExperienceCard({
  title,
  company,
  location,
  duration,
  description,
  skills = [],
  type = 'work'
}: ExperienceCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'education': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'certification': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    }
  };

  return (
    <Card className="bg-solid-card border-border/50 shadow-elegant hover:shadow-magenta transition-smooth group">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-foreground group-hover:text-solid-accent transition-smooth">
              {title}
            </CardTitle>
            <CardDescription className="text-magenta-400 font-medium mt-1">
              {company}
            </CardDescription>
          </div>
          <Badge className={`text-xs whitespace-nowrap ${getTypeColor(type)}`}>
            {type}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {duration}
          </div>
          {location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
              <span className="text-magenta-400 mt-1 text-xs">▸</span>
              {item}
            </li>
          ))}
        </ul>
        
        {skills.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Key Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-navy-600/30 text-navy-100 hover:bg-navy-500/40 transition-smooth border-navy-500/50"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}