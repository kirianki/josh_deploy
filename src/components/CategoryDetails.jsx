import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion";

const CategoryDetails = ({ category, onBack }) => {
  const [activeTab, setActiveTab] = useState('companies');
  const { industryName } = useParams();

  if (!category) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-4 overflow-hidden">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div>
            <Button variant="ghost" size="sm" onClick={onBack} className="mb-2 text-white hover:text-gray-200">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
            <CardTitle className="text-xl md:text-2xl">{category.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="companies" className="flex-1">Companies</TabsTrigger>
              <TabsTrigger value="professionals" className="flex-1">Professionals</TabsTrigger>
            </TabsList>
            <TabsContent value="companies" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.companies.map((company) => (
                  <Link 
                    key={company.name}
                    to={`/industry/${industryName}/category/${category.name}/company/${company.name}`}
                    className="block"
                  >
                    <Card className="bg-gray-50 dark:bg-gray-800 cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-bold flex items-center text-sm md:text-base">
                          <Building2 className="mr-2 h-4 w-4" /> {company.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">{company.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="professionals" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.professionals.map((professional) => (
                  <Link
                    key={professional.name}
                    to={`/industry/${industryName}/category/${category.name}/professional/${professional.name}`}
                    className="block"
                  >
                    <Card className="bg-gray-50 dark:bg-gray-800 cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-bold flex items-center text-sm md:text-base">
                          <User className="mr-2 h-4 w-4" /> {professional.name}
                        </h4>
                        <Badge variant="secondary" className="mt-2 text-xs md:text-sm">
                          {professional.title}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CategoryDetails;