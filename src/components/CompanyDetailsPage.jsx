import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, Globe, Users, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { industriesData } from '../data/industriesData';

const CompanyDetailsPage = () => {
  const { industryName, categoryName, companyName } = useParams();
  const company = industriesData.industries
    .find(i => i.name === industryName)
    ?.categories.find(c => c.name === categoryName)
    ?.companies.find(comp => comp.name === companyName);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to={`/${industryName}/${categoryName}`}>
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Category
        </Button>
      </Link>
      <Card className="mb-8">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardTitle className="flex items-center text-2xl">
            <Building2 className="mr-2" /> {company.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg mb-4">{company.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Globe className="mr-2 h-4 w-4 text-gray-500" />
              <span>Website: <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{company.website}</a></span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-gray-500" />
              <span>Employees: {company.employees}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span>Founded: {company.founded}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {company.services.map((service, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="font-bold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetailsPage;