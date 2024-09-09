import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Briefcase, GraduationCap, Award, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { industriesData } from '../data/industriesData';

const ProfessionalDetailsPage = () => {
  const { industryName, categoryName, professionalName } = useParams();
  const navigate = useNavigate();

  const professional = industriesData.industries
    .find(i => i.name === industryName)
    ?.categories.find(c => c.name === categoryName)
    ?.professionals.find(prof => prof.name === professionalName);

  const placeholderProfessional = {
    name: professionalName || "Professional Name",
    title: "Experienced Professional",
    bio: "A skilled professional with years of experience in the industry.",
    experience: "5+ years",
    education: "Bachelor's Degree",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    linkedin: "https://www.linkedin.com/in/professional",
    projects: [
      { name: "Project 1", description: "Description of Project 1" },
      { name: "Project 2", description: "Description of Project 2" },
    ]
  };

  const displayProfessional = professional || placeholderProfessional;

  const handleBack = () => {
    navigate(`/${industryName}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Button variant="ghost" className="mb-4" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Category
      </Button>
      <Card className="mb-8">
        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <CardTitle className="flex items-center text-2xl">
            <User className="mr-2" /> {displayProfessional.name}
          </CardTitle>
          <Badge variant="secondary">{displayProfessional.title}</Badge>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg mb-4">{displayProfessional.bio}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4 text-gray-500" />
              <span>Experience: {displayProfessional.experience}</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4 text-gray-500" />
              <span>Education: {displayProfessional.education}</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-gray-500" />
              <span>Skills: {displayProfessional.skills.join(', ')}</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 h-4 w-4 text-gray-500" />
              <a href={displayProfessional.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-bold mb-4">Projects & Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayProfessional.projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalDetailsPage;