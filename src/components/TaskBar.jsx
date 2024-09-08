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
    <div className="bg-background text-foreground shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onToggleSidebar}>
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            {/* Sidebar content goes here */}
          </SheetContent>
        </Sheet>
        <div className="text-xl font-bold mr-4">Industry Navigator</div>
        <form onSubmit={handleSearch} className="hidden md:flex items-center">
          <Input
            type="text"
            placeholder="Search industries or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mr-2"
          />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-5 w-5" />
          </Button>
        </form>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <ThemeToggle />
        <NotificationDropdown />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)}>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default TaskBar;