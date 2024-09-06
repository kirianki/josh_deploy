import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User } from 'lucide-react';

const CategoryDetails = ({ category }) => {
  if (!category) return null;

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-2xl">{category.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Building2 className="mr-2" /> Companies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.companies.map((company) => (
                <Card key={company.name} className="bg-gray-50">
                  <CardContent className="pt-4">
                    <h4 className="font-bold">{company.name}</h4>
                    <p className="text-sm text-gray-600">{company.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <User className="mr-2" /> Professionals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.professionals.map((professional) => (
                <Card key={professional.name} className="bg-gray-50">
                  <CardContent className="pt-4">
                    <h4 className="font-bold">{professional.name}</h4>
                    <Badge variant="secondary" className="mt-1">
                      {professional.title}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryDetails;