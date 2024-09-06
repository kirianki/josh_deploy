import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';

const TaskBar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="bg-background text-foreground shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 md:space-x-4 w-full">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input type="text" placeholder="Search..." className="pl-10 w-full" />
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="hidden md:inline-flex">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setIsAuthModalOpen(true)}>
          <User className="h-5 w-5" />
        </Button>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default TaskBar;