import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Briefcase, GraduationCap, Award, Linkedin, ArrowLeft } from 'lucide-react';
import { industriesData } from '../data/industriesData';

const ProfessionalDetailsPage = () => {
  const { industryName, categoryName, professionalName } = useParams();
  
  const professional = industriesData.industries
    .find(industry => industry.name === industryName)
    ?.categories.find(category => category.name === categoryName)
    ?.professionals.find(professional => professional.name === professionalName);

  if (!professional) {
    return <div>Professional not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to={`/industry/${industryName}/category/${categoryName}`}>
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Category
        </Button>
      </Link>
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <CardTitle className="flex items-center text-2xl">
            <User className="mr-2" /> {professional.name}
          </CardTitle>
          <Badge variant="secondary">{professional.title}</Badge>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700">{professional.bio || 'A seasoned professional in the industry.'}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm">Experience: {professional.experience || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm">Education: {professional.education || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm">Skills: {professional.skills || 'Various industry skills'}</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 h-4 w-4 text-gray-500" />
              <a href={professional.linkedin || '#'} className="text-sm text-blue-500 hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessionalDetailsPage;