import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Users, Globe } from 'lucide-react';

const CompanyDetails = ({ company }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardTitle className="flex items-center">
          <Building2 className="mr-2" /> {company.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="mb-4 text-gray-700">{company.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm">Founded: {company.founded}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-gray-500" />
            <span className="text-sm">Employees: {company.employees}</span>
          </div>
          <div className="flex items-center">
            <Badge variant="outline">{company.industry}</Badge>
          </div>
          <div className="flex items-center">
            <Globe className="mr-2 h-4 w-4 text-gray-500" />
            <a href={company.website} className="text-sm text-blue-500 hover:underline">
              {company.website}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyDetails;