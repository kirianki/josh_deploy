import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User } from 'lucide-react';

const TaskBar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Input type="text" placeholder="Search..." className="w-64" />
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TaskBar;