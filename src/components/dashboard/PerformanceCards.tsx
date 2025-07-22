
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";
import { Button } from "../ui/button";

const gainers = [
  {
    name: "Magic: The Gathering Black Lotus",
    cost: "$3,500",
    current: "$5,800",
    change: "+123.33%",
    image: "🌸"
  },
  {
    name: "1986 Fleer Michael Jordan RC",
    cost: "$3,500",
    current: "$6,200",
    change: "+77.14%",
    image: "🏀"
  },
  {
    name: "Pokémon Base Set Booster Box",
    cost: "$400",
    current: "$3,800",
    change: "+68.75%",
    image: "📦"
  }
];

const losers = [
  {
    name: "2020 Panini Prizm Basketball",
    cost: "$250",
    current: "$180",
    change: "-28.0%",
    image: "🏀"
  },
  {
    name: "Funko Pop Exclusive Set",
    cost: "$300",
    current: "$210",
    change: "-30%",
    image: "🎭"
  },
  {
    name: "Yu-Gi-Oh! Blue-Eyes White Dragon",
    cost: "$150",
    current: "$121",
    change: "-19.33%",
    image: "🐉"
  }
];

export function PerformanceCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Items with Most Gains */}
      <Card className="shadow-sm hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              <CardTitle className="text-lg font-semibold whitespace-nowrap">Most Gains</CardTitle>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg">
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium bg-white shadow-sm text-slate-700">24h</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium">7d</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium">30d</Button>
              </div>
              <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg">
                <Button variant="ghost" size="sm" className="h-7 w-8 p-0 flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-8 p-0 flex items-center justify-center bg-white shadow-sm">
                  <Percent className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {gainers.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200/80">
                {item.image}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 text-sm">{item.name}</h4>
                <div className="flex items-center space-x-2 text-xs text-slate-500 mt-1">
                  <span>Cost: {item.cost}</span>
                  <span>•</span>
                  <span>Current: {item.current}</span>
                </div>
              </div>
              <Badge className="bg-green-100/70 text-green-700 font-medium border-green-200/80">
                {item.change}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Items with Most Losses */}
      <Card className="shadow-sm hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
              <CardTitle className="text-lg font-semibold whitespace-nowrap">Most Losses</CardTitle>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg">
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium bg-white shadow-sm text-slate-700">24h</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium">7d</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium">30d</Button>
              </div>
              <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg">
                <Button variant="ghost" size="sm" className="h-7 w-8 p-0 flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-8 p-0 flex items-center justify-center bg-white shadow-sm">
                  <Percent className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {losers.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200/80">
                {item.image}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 text-sm">{item.name}</h4>
                <div className="flex items-center space-x-2 text-xs text-slate-500 mt-1">
                  <span>Cost: {item.cost}</span>
                  <span>•</span>
                  <span>Current: {item.current}</span>
                </div>
              </div>
              <Badge variant="destructive" className="bg-red-100/70 text-red-700 font-medium border-red-200/80">
                {item.change}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
