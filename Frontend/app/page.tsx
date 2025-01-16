"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Mail, Settings, ArrowRight, Bell, Search, User, ChevronDown, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const engagementData = [
  { name: 'Mon', value: 80 },
  { name: 'Tue', value: 85 },
  { name: 'Wed', value: 88 },
  { name: 'Thu', value: 82 },
  { name: 'Fri', value: 89 },
  { name: 'Sat', value: 90 },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [scale, setScale] = useState(1);
  const [selectedNav, setSelectedNav] = useState('Dashboard');
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [teamMembers] = useState([
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Mike Johnson', role: 'Manager' },
  ]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) {
        setScale(0.9);
      } else if (width >= 700 && width <= 767) {
        setScale(0.8);
      } else if (width >= 600 && width < 700) {
        setScale(0.75);
      } else if (width <= 600) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (nav: string) => {
    setSelectedNav(nav);
    console.log(`Navigating to ${nav}`);
  };

  const handleCardClick = (title: string) => {
    console.log(`Clicked ${title} card`);
  };

  const handleNotificationClick = () => {
    setNotifications(0);
    console.log('Notifications cleared');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleMailClick = () => {
    console.log('Opening mail');
    // Add mail functionality here
  };

  const handleGithubClick = () => {
    console.log('Opening Github');
    window.open('https://github.com', '_blank');
  };

  const handleSettingsClick = () => {
    console.log('Opening settings');
    handleNavClick('Settings');
  };

  const handleProfileClick = () => {
    console.log('Opening profile');
    handleNavClick('Profile');
  };

  const handleLogoClick = () => {
    console.log('Clicked logo');
    handleNavClick('Dashboard');
  };

  const handleTeamClick = (memberId: number) => {
    console.log(`Viewing team member ${memberId}`);
  };

  const renderContent = () => {
    switch (selectedNav) {
      case 'Team':
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Team Members</h2>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <Button
                  key={member.id}
                  variant="ghost"
                  className="w-full p-4 flex items-center justify-between hover:bg-accent"
                  onClick={() => handleTeamClick(member.id)}
                >
                  <div className="flex items-center space-x-4">
                    <Users className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                </Button>
              ))}
            </div>
          </Card>
        );
      case 'Analytics':
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Analytics Overview</h2>
            <div className="space-y-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Total Users</h3>
                  <p className="text-3xl font-bold">12,345</p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Active Sessions</h3>
                  <p className="text-3xl font-bold">892</p>
                </Card>
              </div>
            </div>
          </Card>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card 
                className="p-6 hover:shadow-lg transition-all cursor-pointer active:scale-[0.99]"
                onClick={() => handleCardClick('Welcome')}
              >
                <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
                <p className="text-muted-foreground">
                  This is a beautiful and responsive layout with a collapsible sidebar.
                  The page automatically scales based on the viewport width.
                </p>
                <Separator className="my-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card 
                    className="p-4 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 active:translate-y-0"
                    onClick={() => handleCardClick('Statistics')}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Statistics</h3>
                      <BarChart className="h-5 w-5" />
                    </div>
                    <div className="h-[150px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Monthly Growth</p>
                  </Card>
                  <Card 
                    className="p-4 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 active:translate-y-0"
                    onClick={() => handleCardClick('Engagement')}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Engagement</h3>
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="h-[150px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={engagementData}>
                          <Area type="monotone" dataKey="value" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Weekly Activity</p>
                  </Card>
                </div>
              </Card>
            </div>

            <div className="md:col-span-1">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className="w-full p-2 h-auto hover:bg-accent active:scale-[0.98] transition-all"
                      onClick={() => handleCardClick(`Activity ${i}`)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-medium">Activity {i}</p>
                          <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50 flex items-center px-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              className="text-xl font-bold hover:text-primary transition-colors active:scale-95"
              onClick={handleLogoClick}
            >
              Dashboard
            </Button>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center max-w-sm flex-1 mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary hover:text-primary-foreground relative active:scale-95 transition-all"
              onClick={handleNotificationClick}
            >
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
              onClick={handleMailClick}
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
              onClick={handleGithubClick}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost"
              className="hidden md:flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
              onClick={handleProfileClick}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex min-h-screen pt-16">
        {/* Left Sidebar */}
        <aside
          className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-background border-r transition-transform duration-200 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 space-y-4">
            <Card className="p-4 hover:shadow-md transition-shadow">
              <h2 className="font-semibold mb-2">Navigation</h2>
              <ul className="space-y-2">
                {['Dashboard', 'Projects', 'Team', 'Analytics', 'Settings'].map((item) => (
                  <li key={item}>
                    <Button
                      variant={selectedNav === item ? "default" : "ghost"}
                      className="w-full justify-between group active:scale-95 transition-all"
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-200 ease-in-out ${
          isMenuOpen ? 'ml-64' : 'ml-0'
        }`}>
          <div className="max-w-7xl mx-auto p-6">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Button
              variant="ghost"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-95"
              onClick={() => handleNavClick('About')}
            >
              © 2024 Your Company. All rights reserved.
            </Button>
            <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Contact', 'Support'].map((item) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}