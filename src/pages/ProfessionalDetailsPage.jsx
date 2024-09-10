import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Briefcase, GraduationCap, Award, Linkedin, ArrowLeft } from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto p-4"
    >
      <Link to={`/industry/${industryName}/category/${categoryName}`}>
        <Button variant="ghost" className="mb-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Category
        </Button>
      </Link>
      <Card className="futuristic-card overflow-hidden">
        <CardHeader className="futuristic-gradient">
          <CardTitle className="flex items-center text-2xl text-gray-800 dark:text-gray-200">
            <User className="mr-2" /> {professional.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">{professional.title}</Badge>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700 dark:text-gray-300">{professional.bio || 'A seasoned professional with years of experience in the industry.'}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Experience: {professional.experience || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Education: {professional.education || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Skills: {professional.skills || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <a href={professional.linkedin || '#'} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:underline">
                {professional.linkedin || 'LinkedIn Profile'}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfessionalDetailsPage;