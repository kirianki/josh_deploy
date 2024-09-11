import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, User, Search, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import NotificationDropdown from './NotificationDropdown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from '/logo.jpeg';

const TaskBar = ({ onSearch, onToggleSidebar }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.searchQuery.value);
    setIsSearchExpanded(false);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <div className="bg-background text-foreground shadow-md p-4 flex justify-between items-center">
    <div className="flex items-center">
      <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden mr-2">
        <Menu className="h-5 w-5" />
      </Button>
      <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
      <div className="text-xl font-bold mr-2 hidden md:block">Industry Navigator</div>
      <div className="flex-grow max-w-md mx-4 relative">
        {isSearchExpanded ? (
          <form onSubmit={handleSearch} className="w-full">
            <Input
              type="text"
              name="searchQuery"
              placeholder="Search industries or categories..."
              className="w-full pr-10"
              autoFocus
              onBlur={() => setIsSearchExpanded(false)}
            />
            <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        ) : (
          <Button onClick={toggleSearch} variant="ghost" size="icon" className="mx-auto">
            <Search className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
    <div className="flex items-center space-x-2">
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
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
  );
};

export default TaskBar;