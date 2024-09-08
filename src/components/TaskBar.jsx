import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, User, Search, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';
import NotificationDropdown from './NotificationDropdown';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TaskBar = ({ onToggleSidebar, onSearch }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg text-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden mr-2 text-neon-blue hover:text-neon-purple">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            {/* Sidebar content goes here */}
          </SheetContent>
        </Sheet>
        <div className="text-xl font-bold mr-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Industry Navigator</div>
        <form onSubmit={handleSearch} className="hidden md:flex items-center">
          <Input
            type="text"
            placeholder="Search industries or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mr-2 bg-gray-800 border-neon-blue text-white placeholder-gray-400"
          />
          <Button type="submit" size="icon" variant="ghost" className="text-neon-blue hover:text-neon-purple">
            <Search className="h-5 w-5" />
          </Button>
        </form>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <ThemeToggle />
        <NotificationDropdown />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-neon-blue hover:text-neon-purple">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 text-white border-neon-blue">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)} className="hover:bg-gray-700">Profile</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700">Settings</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default TaskBar;