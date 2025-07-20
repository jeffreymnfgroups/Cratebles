
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

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
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
            Items with Most Gains (Default: Last 24h)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {gainers.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                {item.image}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                  <span>Cost: {item.cost}</span>
                  <span>•</span>
                  <span>Current: {item.current}</span>
                </div>
              </div>
              <Badge className="bg-green-50 text-green-700 hover:bg-green-100">
                {item.change}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Items with Most Losses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
            Items with Most Losses (Default: Last 24h)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {losers.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                {item.image}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                  <span>Cost: {item.cost}</span>
                  <span>•</span>
                  <span>Current: {item.current}</span>
                </div>
              </div>
              <Badge variant="destructive" className="bg-red-50 text-red-700">
                {item.change}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
