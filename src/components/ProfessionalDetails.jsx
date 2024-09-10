import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, GraduationCap, Award, Linkedin } from 'lucide-react';

const ProfessionalDetails = ({ professional }) => {
  return (
    <Card className="overflow-hidden bg-gray-100 border-gray-200">
      <CardHeader className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800">
        <CardTitle className="flex items-center">
          <User className="mr-2" /> {professional.name}
        </CardTitle>
        <Badge variant="secondary" className="bg-gray-200 text-gray-700">{professional.title}</Badge>
      </CardHeader>
      <CardContent className="p-6">
        <p className="mb-4 text-gray-700">{professional.bio || 'A seasoned professional with years of experience in the industry.'}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Experience: {professional.experience || '10+ years'}</span>
          </div>
          <div className="flex items-center">
            <GraduationCap className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Education: {professional.education || 'Master\'s Degree'}</span>
          </div>
          <div className="flex items-center">
            <Award className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Skills: {professional.skills || 'Leadership, Project Management'}</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-2 h-4 w-4 text-gray-500" />
            <a href={professional.linkedin || '#'} className="text-sm text-gray-600 hover:text-gray-800 hover:underline">
              {professional.linkedin || 'linkedin.com/in/professional'}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalDetails;