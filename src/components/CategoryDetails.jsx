import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, X, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompanyDetails from './CompanyDetails';
import ProfessionalDetails from './ProfessionalDetails';

const CategoryDetails = ({ category, onBack }) => {
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
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" onClick={onBack} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
          </Button>
          <CardTitle className="text-2xl">{category.name}</CardTitle>
        </div>
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
          <Tabs defaultValue="companies">
            <TabsList className="mb-4">
              <TabsTrigger value="companies">Companies</TabsTrigger>
              <TabsTrigger value="professionals">Professionals</TabsTrigger>
            </TabsList>
            <TabsContent value="companies">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.companies.map((company) => (
                  <Card
                    key={company.name}
                    className="bg-gray-50 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleItemClick(company, 'company')}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-bold flex items-center">
                        <Building2 className="mr-2 h-4 w-4" /> {company.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2">{company.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="professionals">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.professionals.map((professional) => (
                  <Card
                    key={professional.name}
                    className="bg-gray-50 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleItemClick(professional, 'professional')}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-bold flex items-center">
                        <User className="mr-2 h-4 w-4" /> {professional.name}
                      </h4>
                      <Badge variant="secondary" className="mt-2">
                        {professional.title}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryDetails;