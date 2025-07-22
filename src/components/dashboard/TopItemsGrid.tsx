
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";
import { Button } from "../ui/button";

const topItems = [
  {
    rank: 1,
    name: "1998 Pokémon Base Set Charizard PSA 10",
    value: "$8,500",
    change: "+2.4%",
    image: "🃏",
    isGain: true,
  },
  {
    rank: 2,
    name: "1986 Fleer Michael Jordan RC PSA 9",
    value: "$6,200",
    change: "+1.8%",
    image: "🏀",
    isGain: true,
  },
  {
    rank: 3,
    name: "Magic: The Gathering Black Lotus Alpha",
    value: "$5,800",
    change: "+23.33%",
    image: "🌸",
    isGain: true,
  },
  {
    rank: 4,
    name: "1952 Topps Mickey Mantle PSA 8",
    value: "$4,200",
    change: "+23.83%",
    image: "⚾",
    isGain: true,
  },
  {
    rank: 5,
    name: "Pokémon Base Set Booster Box Sealed",
    value: "$3,800",
    change: "+68.75%",
    image: "📦",
    isGain: true,
  },
  {
    rank: 6,
    name: "1993 Magic The Gathering Alpha Black Lotus PSA 10",
    value: "$3,500",
    change: "+5.0%",
    image: "✨",
    isGain: true,
  },
  {
    rank: 7,
    name: "Superman Comic #1",
    value: "$3,200",
    change: "-1.5%",
    image: "🦸",
    isGain: false,
  },
  {
    rank: 8,
    name: "1909 T206 Honus Wagner",
    value: "$2,800",
    change: "+10.2%",
    image: "⚾",
    isGain: true,
  },
  // {
  //   rank: 9,
  //   name: "Action Comics #1",
  //   value: "$2,500",
  //   change: "+3.0%",
  //   image: "💥",
  //   isGain: true,
  // },
  // {
  //   rank: 10,
  //   name: "1999 Pokémon 1st Edition Charizard Holo",
  //   value: "$2,200",
  //   change: "+8.0%",
  //   image: "🔥",
  //   isGain: true,
  // }
];

export function TopItemsGrid() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
            <CardTitle className="text-lg font-semibold whitespace-nowrap">Most Valuable</CardTitle>
          </div>
          <div className="flex items-center justify-end gap-2 flex-wrap">
            <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg">
              <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium">24h</Button>
              <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium bg-white shadow-sm text-slate-700">7d</Button>
              <Button variant="ghost" size="sm" className="h-7 text-xs px-2 font-medium">30d</Button>
            </div>
            <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg min-w-0">
              <Button variant="ghost" size="sm" className="h-7 w-8 p-0 flex items-center justify-center bg-white shadow-sm overflow-hidden">
                <DollarSign className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-7 w-8 p-0 flex items-center justify-center overflow-hidden">
                <Percent className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {topItems.map((item) => (
          <div key={item.rank} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-200/80">
              {item.image}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-800 truncate">
                  {item.rank}. {item.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                <Badge 
                  variant={item.isGain ? "default" : "destructive"}
                  className={`font-medium ${item.isGain ? 'bg-green-100/70 text-green-700 border-green-200/80' : 'bg-red-100/70 text-red-700 border-red-200/80'}`}
                >
                  {item.isGain ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {item.change}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
