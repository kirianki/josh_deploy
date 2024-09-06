import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProfessionalDetails = ({ professional }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{professional.name}</CardTitle>
        <Badge>{professional.title}</Badge>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{professional.bio || 'A seasoned professional with years of experience in the industry.'}</p>
        <h3 className="font-semibold mb-2">Additional Details:</h3>
        <ul className="list-disc pl-5">
          <li>Experience: {professional.experience || '10+ years'}</li>
          <li>Education: {professional.education || 'Master\'s Degree'}</li>
          <li>Skills: {professional.skills || 'Leadership, Project Management, Technical Expertise'}</li>
          <li>LinkedIn: <a href={professional.linkedin || '#'} className="text-blue-500 hover:underline">{professional.linkedin || 'linkedin.com/in/professional'}</a></li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProfessionalDetails;