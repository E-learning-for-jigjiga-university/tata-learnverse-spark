
import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeaderActions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { toast } = useToast();
  
  // Mock notifications for demo
  const notifications = [
    { id: '1', title: 'New Course Available', message: 'Check out our new React course!', read: false },
    { id: '2', title: 'Assignment Due', message: 'Your UX Design assignment is due tomorrow', read: false }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search Results",
        description: `Searching for: ${searchQuery}`,
      });
    }
  };

  const handleNotificationClick = () => {
    const unreadCount = notifications.filter(n => !n.read).length;
    toast({
      title: `You have ${unreadCount} unread notifications`,
      description: notifications[0].message,
    });
  };

  return (
    <div className="flex items-center gap-4">
      <form onSubmit={handleSearch} className={`${showSearch ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden`}>
        <Input
          type="search"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </form>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowSearch(!showSearch)}
        className="relative"
      >
        <Search className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleNotificationClick}
        className="relative"
      >
        <Bell className="h-5 w-5" />
        {notifications.some(n => !n.read) && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </Button>
    </div>
  );
};

export default HeaderActions;
