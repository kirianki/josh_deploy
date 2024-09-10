import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Users, Globe } from 'lucide-react';

const CompanyDetails = ({ company }) => {
  return (
    <Card className="overflow-hidden bg-gray-100 border-gray-200">
      <CardHeader className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800">
        <CardTitle className="flex items-center">
          <Building2 className="mr-2" /> {company.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="mb-4 text-gray-700">{company.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Founded: {company.founded || '2010'}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Employees: {company.employees || '100-500'}</span>
          </div>
          <div className="flex items-center">
            <Badge variant="outline" className="bg-gray-200 text-gray-700">{company.industry || 'Technology'}</Badge>
          </div>
          <div className="flex items-center">
            <Globe className="mr-2 h-4 w-4 text-gray-500" />
            <a href={company.website || '#'} className="text-sm text-gray-600 hover:text-gray-800 hover:underline">
              {company.website || 'www.company-website.com'}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyDetails;