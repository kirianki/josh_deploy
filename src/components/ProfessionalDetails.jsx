import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, GraduationCap, Award, Linkedin } from 'lucide-react';

const ProfessionalDetails = ({ professional }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <CardTitle className="flex items-center">
          <User className="mr-2" /> {professional.name}
        </CardTitle>
        <Badge variant="secondary">{professional.title}</Badge>
      </CardHeader>
      <CardContent className="p-6">
        <p className="mb-4 text-gray-700">{professional.bio}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm">Experience: {professional.experience}</span>
          </div>
          <div className="flex items-center">
            <GraduationCap className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm">Education: {professional.education}</span>
          </div>
          <div className="flex items-center">
            <Award className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm">Skills: {professional.skills}</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-2 h-4 w-4 text-gray-500" />
            <a href={professional.linkedin} className="text-sm text-blue-500 hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalDetails;