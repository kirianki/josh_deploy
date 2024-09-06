import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CategoryWidget = ({ category }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Companies:</h3>
        <ul className="list-disc pl-5 mb-4">
          {category.companies.map((company) => (
            <li key={company.name}>{company.name} - {company.description}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2">Professionals:</h3>
        <ul className="list-disc pl-5">
          {category.professionals.map((professional) => (
            <li key={professional.name}>{professional.name} - {professional.title}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CategoryWidget;