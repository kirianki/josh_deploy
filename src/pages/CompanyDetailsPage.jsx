import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, Users, Globe, ArrowLeft } from 'lucide-react';
import { industriesData } from '../data/industriesData';

const CompanyDetailsPage = () => {
  const { industryName, categoryName, companyName } = useParams();
  
  const company = industriesData.industries
    .find(industry => industry.name === industryName)
    ?.categories.find(category => category.name === categoryName)
    ?.companies.find(company => company.name === companyName);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to={`/industry/${industryName}/category/${categoryName}`}>
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Category
        </Button>
      </Link>
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardTitle className="flex items-center text-2xl">
            <Building2 className="mr-2" /> {company.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-700 dark:text-gray-300">{company.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm">Founded: {company.founded || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm">Employees: {company.employees || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline">{company.industry || industryName}</Badge>
            </div>
            <div className="flex items-center">
              <Globe className="mr-2 h-4 w-4 text-gray-500" />
              <a href={company.website || '#'} className="text-sm text-blue-500 hover:underline">
                {company.website || 'Company Website'}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDetailsPage;