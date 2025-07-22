import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  Star,
  Search,
  Download,
  Filter,
  MoreHorizontal,
  Eye,
  Tag,
  Bell,
  Settings,
  User,
  LogOut,
  Plus,
  BarChart3,
  Wallet,
  Heart,
  Sparkles,
  ArrowRight,
  Activity
} from "lucide-react";
import { MetricsCards } from "./MetricsCards";
import { MarketChart } from "./MarketChart";
import { PerformanceCards } from "./PerformanceCards";
import { TopItemsGrid } from "./TopItemsGrid";
import { ItemsTable } from "./ItemsTable";
import { NewsWidget } from "./NewsWidget";

export function PortfolioDashboard() {
  const [timeframe, setTimeframe] = useState("Last 30 days");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 font-inter">
      {/* Enhanced Professional Header with Better Typography */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/60 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Brand with Better Typography */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                {/* Logo and Brand */}
                <img src="/logo.svg" alt="Crateble Logo" className="w-8 h-8" />
                <h1
                  className="self-center font-nexa text-black text-xl dark:text-white font-bold tracking-tight"
                  // If font-nexa is not available, ensure it is imported in your CSS or add a fallback font.
                >
                  Crateble
                </h1>
              </div>
              
              {/* Enhanced Navigation with Better Typography */}
              <nav className="hidden lg:flex space-x-1">
                <Button 
                  variant={activeTab === "portfolio" ? "default" : "ghost"} 
                  size="sm"
                  className={`font-medium transition-all duration-200 ${
                    activeTab === "portfolio" 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("portfolio")}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
                <Button 
                  variant={activeTab === "analytics" ? "default" : "ghost"}
                  size="sm"
                  className={`font-medium transition-all duration-200 ${
                    activeTab === "analytics" 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button 
                  variant={activeTab === "marketplace" ? "default" : "ghost"}
                  size="sm"
                  className={`font-medium transition-all duration-200 ${
                    activeTab === "marketplace" 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("marketplace")}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Marketplace
                </Button>
                <Button 
                  variant={activeTab === "watchlist" ? "default" : "ghost"}
                  size="sm"
                  className={`font-medium transition-all duration-200 ${
                    activeTab === "watchlist" 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("watchlist")}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Watchlist
                </Button>
              </nav>
            </div>

            {/* Enhanced Header Actions */}
            <div className="flex items-center space-x-3">
              {/* Enhanced Add Item Button */}
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 hidden sm:flex">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>

              {/* Enhanced Notifications */}
              <Button variant="outline" size="icon" className="relative border-slate-200 hover:bg-slate-50 transition-colors duration-200">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-[10px] text-white flex items-center justify-center font-medium">
                  3
                </span>
              </Button>

              {/* Enhanced User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-slate-100 transition-colors duration-200">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm font-semibold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold leading-none text-slate-900">John Doe</p>
                      <p className="text-xs leading-none text-slate-500 font-medium">
                        john.doe@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-medium">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium">
                    <Wallet className="w-4 h-4 mr-2" />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 font-medium">
                    <LogOut className="w-4 h-4 mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dramatically Enhanced Welcome Header */}
        <div className="mb-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-2xl border border-white/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Enhanced Welcome Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30">
                        <span className="text-4xl">👋</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <Activity className="w-3 h-3 text-green-800" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                        Welcome back, John!
                      </h2>
                      <div className="flex items-center gap-2 text-blue-100">
                        <span className="text-sm font-medium">Portfolio Status:</span>
                        <Badge className="bg-green-500/20 text-green-100 border-green-400/30 font-medium">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Performing Well
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-blue-50 text-lg font-medium leading-relaxed max-w-2xl">
                      Your collectible portfolio is thriving! Track performance, discover new opportunities, 
                      and manage your assets with our comprehensive analytics dashboard.
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-6 text-white/90">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm font-medium">24 Active Items</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm font-medium">+12.5% This Month</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm font-medium">$45,230 Total Value</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group px-6 py-3 h-auto">
                    <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                    <span>Add New Item</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group px-6 py-3 h-auto">
                    <Search className="w-5 h-5 mr-2" />
                    <span>Explore Market</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Page Header with Better Typography */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Portfolio Overview</h2>
            <p className="text-slate-600 mt-2 flex items-center font-medium">
              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
              Comprehensive analytics and performance insights for your collection
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-44 bg-white border-slate-200 font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last 7 days" className="font-medium">Last 7 days</SelectItem>
                <SelectItem value="Last 30 days" className="font-medium">Last 30 days</SelectItem>
                <SelectItem value="Last 90 days" className="font-medium">Last 90 days</SelectItem>
                <SelectItem value="Last year" className="font-medium">Last year</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-3">
              <Button variant="outline" className="bg-white border-slate-200 font-medium shadow-sm hover:shadow-md transition-all duration-200">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Portfolio Tabs with Better Typography */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-lg grid-cols-4 bg-slate-100/80 backdrop-blur-sm p-1 rounded-xl shadow-sm">
            <TabsTrigger 
              value="portfolio" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-md font-medium transition-all duration-200"
            >
              Portfolio
            </TabsTrigger>
            <TabsTrigger 
              value="collectors" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-md font-medium transition-all duration-200"
            >
              Collectors
            </TabsTrigger>
            <TabsTrigger 
              value="sellers" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-md font-medium transition-all duration-200"
            >
              Sellers
            </TabsTrigger>
            <TabsTrigger 
              value="cratelo" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-md font-medium transition-all duration-200"
            >
              CrateIQ
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Dashboard Content */}
        <div className="space-y-8">
          {/* Metrics Cards */}
          <MetricsCards />

          {/* Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="flex flex-col gap-8 h-full lg:col-span-2">
              <MarketChart />
              <NewsWidget />
            </div>
            <div className="h-full">
              <TopItemsGrid />
            </div>
          </div>

          {/* Performance Cards */}
          <PerformanceCards />

          {/* Enhanced Items Table */}
          <ItemsTable searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
    </div>
  );
}
