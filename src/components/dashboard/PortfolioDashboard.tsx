
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
  Heart
} from "lucide-react";
import { MetricsCards } from "./MetricsCards";
import { MarketChart } from "./MarketChart";
import { PerformanceCards } from "./PerformanceCards";
import { TopItemsGrid } from "./TopItemsGrid";
import { ItemsTable } from "./ItemsTable";

export function PortfolioDashboard() {
  const [timeframe, setTimeframe] = useState("Last 30 days");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Fixed Professional Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Simplified Brand */}
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Crateble
              </h1>
              
              {/* Responsive Navigation */}
              <nav className="hidden lg:flex space-x-1">
                <Button 
                  variant={activeTab === "portfolio" ? "default" : "ghost"} 
                  size="sm"
                  className={activeTab === "portfolio" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-900"}
                  onClick={() => setActiveTab("portfolio")}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
                <Button 
                  variant={activeTab === "analytics" ? "default" : "ghost"}
                  size="sm"
                  className={activeTab === "analytics" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-900"}
                  onClick={() => setActiveTab("analytics")}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button 
                  variant={activeTab === "marketplace" ? "default" : "ghost"}
                  size="sm"
                  className={activeTab === "marketplace" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-900"}
                  onClick={() => setActiveTab("marketplace")}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Marketplace
                </Button>
                <Button 
                  variant={activeTab === "watchlist" ? "default" : "ghost"}
                  size="sm"
                  className={activeTab === "watchlist" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-900"}
                  onClick={() => setActiveTab("watchlist")}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Watchlist
                </Button>
              </nav>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-3">
              {/* Add Item Button */}
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>

              {/* Notifications */}
              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* User Menu with Fixed Avatar */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-600 text-white text-sm font-medium">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Wallet className="w-4 h-4 mr-2" />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
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
        {/* Enhanced Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Portfolio Summary</h2>
            <p className="text-slate-600 mt-1 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
              Track and analyze your collectible assets performance
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-40 bg-white border-slate-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last 7 days">Last 7 days</SelectItem>
                <SelectItem value="Last 30 days">Last 30 days</SelectItem>
                <SelectItem value="Last 90 days">Last 90 days</SelectItem>
                <SelectItem value="Last year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-2">
              <Button variant="outline" className="bg-white border-slate-200">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Portfolio Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-4 bg-slate-100">
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-white">
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="collectors" className="data-[state=active]:bg-white">
              Collectors
            </TabsTrigger>
            <TabsTrigger value="sellers" className="data-[state=active]:bg-white">
              Sellers
            </TabsTrigger>
            <TabsTrigger value="cratelo" className="data-[state=active]:bg-white">
              CrateIQ
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Dashboard Content */}
        <div className="space-y-8">
          {/* Metrics Cards */}
          <MetricsCards />

          {/* Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MarketChart />
            </div>
            <div>
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
