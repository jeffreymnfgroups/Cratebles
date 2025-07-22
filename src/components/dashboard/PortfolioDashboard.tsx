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
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import { DateRange } from "react-day-picker";

export function PortfolioDashboard() {
  const [timeframe, setTimeframe] = useState("Last 30 days");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("portfolio");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img src="/logo.svg" alt="Crateble Logo" className="w-8 h-8" />
                <h1 className="self-center text-xl font-bold tracking-tight text-foreground">
                  Crateble
                </h1>
              </div>
              
              {/* Navigation */}
              <nav className="hidden lg:flex space-x-1">
                <Button 
                  variant={activeTab === "portfolio" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setActiveTab("portfolio")}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
                <Button 
                  variant={activeTab === "analytics" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("analytics")}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button 
                  variant={activeTab === "marketplace" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("marketplace")}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Marketplace
                </Button>
                <Button 
                  variant={activeTab === "watchlist" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("watchlist")}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Watchlist
                </Button>
              </nav>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-3">
              <Button size="sm" className="hidden sm:flex">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>

              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-medium">
                  3
                </span>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold leading-none text-foreground">John Doe</p>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg border border-border">
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center shadow-md border border-primary-foreground/20">
                        <span className="text-4xl">👋</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1 tracking-tight">
                        Welcome back, John!
                      </h2>
                      <div className="flex items-center gap-2 text-primary-foreground/80">
                        <span className="text-sm font-medium">Portfolio Status:</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Performing Well
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-primary-foreground/90 max-w-2xl">
                    Here's a quick overview of your portfolio's current status.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-primary-foreground/10 p-4 rounded-lg border border-primary-foreground/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-foreground/10 rounded-md border border-primary-foreground/20">
                          <Wallet className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-foreground/80 font-medium">Portfolio Value</p>
                          <p className="text-xl font-bold text-primary-foreground">$125,680.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary-foreground/10 p-4 rounded-lg border border-primary-foreground/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-foreground/10 rounded-md border border-primary-foreground/20">
                          <Package className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-foreground/80 font-medium">Total Items</p>
                          <p className="text-xl font-bold text-primary-foreground">247</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary-foreground/10 p-4 rounded-lg border border-primary-foreground/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-foreground/10 rounded-md border border-primary-foreground/20">
                          <Activity className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-foreground/80 font-medium">30-Day Change</p>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-green-300" />
                            <p className="text-xl font-bold text-green-300">+5.8%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-md hover:shadow-lg transition-all duration-300 group px-6 py-3 h-auto">
                    <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                    <span>Add New Item</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 font-semibold shadow-md hover:shadow-lg transition-all duration-300 group px-6 py-3 h-auto">
                    <Search className="w-5 h-5 mr-2" />
                    <span>Explore Market</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Portfolio Overview</h2>
            <p className="text-muted-foreground mt-2 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
              Comprehensive analytics and performance insights for your collection
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <DateRangePicker onDateChange={setDateRange} />
            <div className="flex space-x-3">
              <Button variant="outline" className="bg-card">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Portfolio Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-lg grid-cols-4 bg-muted p-1 rounded-xl">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="collectors">Collectors</TabsTrigger>
            <TabsTrigger value="sellers">Sellers</TabsTrigger>
            <TabsTrigger value="cratelo">CrateIQ</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Dashboard Content */}
        <div className="space-y-8">
          <MetricsCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col gap-8 h-full lg:col-span-2">
              <MarketChart />
              <NewsWidget />
            </div>
            <div className="h-full">
              <TopItemsGrid />
            </div>
          </div>

          <PerformanceCards />

          <ItemsTable searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </main>
    </div>
  );
}
