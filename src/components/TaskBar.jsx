import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';

const TaskBar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="bg-background text-foreground shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Industry Navigator</div>
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