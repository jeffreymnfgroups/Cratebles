
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";
import { Button } from "../ui/button";

const allGainersData = {
  "24h": [
    { name: "Magic: The Gathering Black Lotus", cost: "$3,500", current: "$5,800", change: "+5.1%", changeValue: "+$295", image: "🌸" },
    { name: "1986 Fleer Michael Jordan RC", cost: "$6,000", current: "$6,200", change: "+3.3%", changeValue: "+$200", image: "🏀" },
    { name: "Pokémon Base Set Booster Box", cost: "$3,500", current: "$3,800", change: "+8.5%", changeValue: "+$300", image: "📦" }
  ],
  "7d": [
    { name: "1952 Topps Mickey Mantle", cost: "$4,000", current: "$4,500", change: "+12.5%", changeValue: "+$500", image: "⚾" },
    { name: "Superman Comic #1", cost: "$3,000", current: "$3,400", change: "+13.3%", changeValue: "+$400", image: "🦸" },
    { name: "1909 T206 Honus Wagner", cost: "$2,500", current: "$2,900", change: "+16.0%", changeValue: "+$400", image: "⚾" },
  ],
  "30d": [
    { name: "Action Comics #1", cost: "$2,000", current: "$2,800", change: "+40.0%", changeValue: "+$800", image: "💥" },
    { name: "1999 Pokémon 1st Edition Charizard Holo", cost: "$2,000", current: "$2,500", change: "+25.0%", changeValue: "+$500", image: "🔥" },
    { name: "Star Wars #1 Comic", cost: "$1,500", current: "$1,900", change: "+26.7%", changeValue: "+$400", image: "🚀" },
  ]
};

const allLosersData = {
  "24h": [
    { name: "2020 Panini Prizm Basketball", cost: "$250", current: "$180", change: "-28.0%", changeValue: "-$70", image: "🏀" },
    { name: "Funko Pop Exclusive Set", cost: "$300", current: "$210", change: "-30.0%", changeValue: "-$90", image: "🎭" },
    { name: "Yu-Gi-Oh! Blue-Eyes White Dragon", cost: "$150", current: "$121", change: "-19.3%", changeValue: "-$29", image: "🐉" }
  ],
  "7d": [
    { name: "Beanie Baby Princess Diana", cost: "$500", current: "$350", change: "-30.0%", changeValue: "-$150", image: "🐻" },
    { name: "Marvel Comics #1", cost: "$1,200", current: "$900", change: "-25.0%", changeValue: "-$300", image: "🕷️" },
    { name: "Batman #1 Comic", cost: "$800", current: "$650", change: "-18.8%", changeValue: "-$150", image: "🦇" }
  ],
  "30d": [
    { name: "Vintage Star Wars Action Figures", cost: "$400", current: "$280", change: "-30.0%", changeValue: "-$120", image: "🤖" },
    { name: "The Incredible Hulk #181", cost: "$600", current: "$450", change: "-25.0%", changeValue: "-$150", image: "👊" },
    { name: "Amazing Fantasy #15", cost: "$1,000", current: "$800", change: "-20.0%", changeValue: "-$200", image: "🕸️" },
  ]
};

export function PerformanceCards() {
  const [activeGainersTime, setActiveGainersTime] = useState("24h");
  const [activeLosersTime, setActiveLosersTime] = useState("24h");
  const [gainersMetric, setGainersMetric] = useState("percent");
  const [losersMetric, setLosersMetric] = useState("percent");

  const gainers = allGainersData[activeGainersTime as keyof typeof allGainersData];
  const losers = allLosersData[activeLosersTime as keyof typeof allLosersData];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Items with Most Gains */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              <CardTitle className="text-lg font-semibold whitespace-nowrap">Most Gains</CardTitle>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
                <Button variant={activeGainersTime === '24h' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveGainersTime('24h')}>
                  24h
                  {activeGainersTime === '24h' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
                <Button variant={activeGainersTime === '7d' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveGainersTime('7d')}>
                  7d
                  {activeGainersTime === '7d' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
                <Button variant={activeGainersTime === '30d' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveGainersTime('30d')}>
                  30d
                  {activeGainersTime === '30d' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
              </div>
              <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
                <Button variant={gainersMetric === 'value' ? 'secondary' : 'ghost'} size="sm" className="h-7 w-8 p-0 flex items-center justify-center relative" onClick={() => setGainersMetric('value')}>
                  <DollarSign className="w-4 h-4" />
                  {gainersMetric === 'value' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
                <Button variant={gainersMetric === 'percent' ? 'secondary' : 'ghost'} size="sm" className="h-7 w-8 p-0 flex items-center justify-center relative" onClick={() => setGainersMetric('percent')}>
                  <Percent className="w-4 h-4" />
                  {gainersMetric === 'percent' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {gainers.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-xl border border-border">
                {item.image}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                  <span>Cost: {item.cost}</span>
                  <span>•</span>
                  <span>Current: {item.current}</span>
                </div>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                {gainersMetric === 'percent' ? item.change : item.changeValue}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Items with Most Losses */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
              <CardTitle className="text-lg font-semibold whitespace-nowrap">Most Losses</CardTitle>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
                <Button variant={activeLosersTime === '24h' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveLosersTime('24h')}>
                  24h
                  {activeLosersTime === '24h' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
                <Button variant={activeLosersTime === '7d' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveLosersTime('7d')}>
                  7d
                  {activeLosersTime === '7d' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
                <Button variant={activeLosersTime === '30d' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveLosersTime('30d')}>
                  30d
                  {activeLosersTime === '30d' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
              </div>
              <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
                <Button variant={losersMetric === 'value' ? 'secondary' : 'ghost'} size="sm" className="h-7 w-8 p-0 flex items-center justify-center relative" onClick={() => setLosersMetric('value')}>
                  <DollarSign className="w-4 h-4" />
                  {losersMetric === 'value' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
                <Button variant={losersMetric === 'percent' ? 'secondary' : 'ghost'} size="sm" className="h-7 w-8 p-0 flex items-center justify-center relative" onClick={() => setLosersMetric('percent')}>
                  <Percent className="w-4 h-4" />
                  {losersMetric === 'percent' && (
                    <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {losers.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-xl border-border">
                {item.image}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                  <span>Cost: {item.cost}</span>
                  <span>•</span>
                  <span>Current: {item.current}</span>
                </div>
              </div>
              <Badge variant="destructive" className="bg-red-500/10 text-red-500 border-red-500/20">
                {losersMetric === 'percent' ? item.change : item.changeValue}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
