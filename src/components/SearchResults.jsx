import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SearchResults = ({ results, onSelectIndustry, onSelectCategory }) => {
  if (results.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No results found.</p>;
  }

  return (
    <div className="grid gap-4 mt-4">
      {results.map((result) => (
        <Card key={result.name}>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{result.type}</p>
            <Button
              onClick={() => result.type === 'Industry' ? onSelectIndustry(result.name) : onSelectCategory(result)}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults;