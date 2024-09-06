import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CompanyDetails from './CompanyDetails';
import ProfessionalDetails from './ProfessionalDetails';

const CategoryDetails = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  if (!category) return null;

  const handleItemClick = (item, type) => {
    setSelectedItem({ ...item, type });
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-2xl">{category.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedItem ? (
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0"
              onClick={handleCloseDetails}
            >
              <X className="h-4 w-4" />
            </Button>
            {selectedItem.type === 'company' ? (
              <CompanyDetails company={selectedItem} />
            ) : (
              <ProfessionalDetails professional={selectedItem} />
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Building2 className="mr-2" /> Companies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.companies.map((company) => (
                  <Card
                    key={company.name}
                    className="bg-gray-50 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleItemClick(company, 'company')}
                  >
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
                  <Card
                    key={professional.name}
                    className="bg-gray-50 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleItemClick(professional, 'professional')}
                  >
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
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryDetails;