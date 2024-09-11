import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, User, Search } from 'lucide-react';
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

const TaskBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.searchQuery.value);
  };

  return (
    <div className="bg-background text-foreground shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold mr-4">Industry Navigator</div>
      <form onSubmit={handleSearch} className="flex-grow max-w-md mx-4">
        <div className="relative">
          <Input
            type="text"
            name="searchQuery"
            placeholder="Search industries or categories..."
            className="w-full pr-10"
          />
          <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </form>
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