import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyDetails = ({ company }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{company.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{company.description}</p>
        <h3 className="font-semibold mb-2">Additional Details:</h3>
        <ul className="list-disc pl-5">
          <li>Founded: {company.founded || '2010'}</li>
          <li>Employees: {company.employees || '100-500'}</li>
          <li>Industry: {company.industry || 'Technology'}</li>
          <li>Website: <a href={company.website || '#'} className="text-blue-500 hover:underline">{company.website || 'www.company-website.com'}</a></li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CompanyDetails;