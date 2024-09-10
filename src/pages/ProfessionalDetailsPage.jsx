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
        <Button variant="ghost" className="mb-4 text-gray-600 hover:text-gray-800">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Category
        </Button>
      </Link>
      <Card className="overflow-hidden bg-gray-100 border-gray-200">
        <CardHeader className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800">
          <CardTitle className="flex items-center text-2xl">
            <User className="mr-2" /> {professional.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-gray-200 text-gray-700">{professional.title}</Badge>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700">{professional.bio || 'A seasoned professional with years of experience in the industry.'}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Experience: {professional.experience || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Education: {professional.education || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Skills: {professional.skills || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 h-4 w-4 text-gray-500" />
              <a href={professional.linkedin || '#'} className="text-sm text-gray-600 hover:text-gray-800 hover:underline">
                {professional.linkedin || 'LinkedIn Profile'}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessionalDetailsPage;