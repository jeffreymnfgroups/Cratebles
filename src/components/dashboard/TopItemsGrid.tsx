
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";
import { Button } from "../ui/button";

const allTopItemsData = {
  "24h": [
    { rank: 1, name: "Magic: The Gathering Black Lotus", value: "$5,800", change: "+5.1%", changeValue: "+$295", image: "🌸", isGain: true },
    { rank: 2, name: "1986 Fleer Michael Jordan RC", value: "$6,200", change: "+3.3%", changeValue: "+$200", image: "🏀", isGain: true },
    { rank: 3, name: "Pokémon Base Set Booster Box", value: "$3,800", change: "+8.5%", changeValue: "+$300", image: "📦", isGain: true },
    { rank: 4, name: "1952 Topps Mickey Mantle", value: "$4,200", change: "-1.2%", changeValue: "-$50", image: "⚾", isGain: false },
    { rank: 5, name: "Superman Comic #1", value: "$3,200", change: "+2.1%", changeValue: "+$67", image: "🦸", isGain: true },
    { rank: 6, name: "Yu-Gi-Oh! Blue-Eyes White Dragon", value: "$2,600", change: "+4.5%", changeValue: "+$112", image: "🐉", isGain: true },
    { rank: 7, name: "Star Wars #1 Comic", value: "$1,800", change: "+3.1%", changeValue: "+$54", image: "🚀", isGain: true },
    { rank: 8, name: "The Incredible Hulk #181", value: "$580", change: "-2.5%", changeValue: "-$15", image: "👊", isGain: false },
  ],
  "7d": [
    { rank: 1, name: "1998 Pokémon Base Set Charizard PSA 10", value: "$8,500", change: "+12.4%", changeValue: "+$940", image: "🃏", isGain: true },
    { rank: 2, name: "1952 Topps Mickey Mantle PSA 8", value: "$4,500", change: "+12.5%", changeValue: "+$500", image: "⚾", isGain: true },
    { rank: 3, name: "Superman Comic #1", value: "$3,400", change: "+13.3%", changeValue: "+$400", image: "🦸", isGain: true },
    { rank: 4, name: "1909 T206 Honus Wagner", value: "$2,900", change: "+16.0%", changeValue: "+$400", image: "⚾", isGain: true },
    { rank: 5, name: "Magic: The Gathering Black Lotus Alpha", value: "$6,000", change: "+10.0%", changeValue: "+$545", image: "🌸", isGain: true },
    { rank: 6, name: "Action Comics #1", value: "$2,700", change: "+11.5%", changeValue: "+$280", image: "💥", isGain: true },
    { rank: 7, name: "Michael Jordan 1997 Game Jersey Auto", value: "$7,200", change: "+9.2%", changeValue: "+$610", image: "🏀", isGain: true },
    { rank: 8, name: "Pokémon 1st Edition Booster Pack", value: "$1,900", change: "-4.0%", changeValue: "-$80", image: "📦", isGain: false },
  ],
  "30d": [
    { rank: 1, name: "Action Comics #1", value: "$2,800", change: "+40.0%", changeValue: "+$800", image: "💥", isGain: true },
    { rank: 2, name: "1999 Pokémon 1st Edition Charizard Holo", value: "$2,500", change: "+25.0%", changeValue: "+$500", image: "🔥", isGain: true },
    { rank: 3, name: "Star Wars #1 Comic", value: "$1,900", change: "+26.7%", changeValue: "+$400", image: "🚀", isGain: true },
    { rank: 4, name: "Vintage Star Wars Action Figures", value: "$400", change: "-15.0%", changeValue: "-$70", image: "🤖", isGain: false },
    { rank: 5, name: "The Incredible Hulk #181", value: "$600", change: "+20.0%", changeValue: "+$100", image: "👊", isGain: true },
    { rank: 6, name: "1952 Topps Mickey Mantle PSA 9", value: "$6,800", change: "+18.0%", changeValue: "+$1,040", image: "⚾", isGain: true },
    { rank: 7, name: "Yu-Gi-Oh! Legend of Blue-Eyes Box", value: "$1,500", change: "+21.3%", changeValue: "+$264", image: "🐲", isGain: true },
    { rank: 8, name: "Pokémon Base Set Shadowless", value: "$2,200", change: "+17.0%", changeValue: "+$320", image: "✨", isGain: true },
  ]
};



export function TopItemsGrid() {
  const [activeTime, setActiveTime] = useState("7d");
  const [activeMetric, setActiveMetric] = useState("value");

  const topItems = allTopItemsData[activeTime as keyof typeof allTopItemsData];

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
            <CardTitle className="text-lg font-semibold whitespace-nowrap">Most Valuable</CardTitle>
          </div>
          <div className="flex items-center justify-end gap-2 flex-wrap">
            <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
              <Button variant={activeTime === '24h' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveTime('24h')}>
                24h
                {activeTime === '24h' && (
                  <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                )}
              </Button>
              <Button variant={activeTime === '7d' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveTime('7d')}>
                7d
                {activeTime === '7d' && (
                  <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                )}
              </Button>
              <Button variant={activeTime === '30d' ? 'secondary' : 'ghost'} size="sm" className="h-7 text-xs px-2 relative" onClick={() => setActiveTime('30d')}>
                30d
                {activeTime === '30d' && (
                  <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                )}
              </Button>
            </div>
            <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg min-w-0">
              <Button variant={activeMetric === 'value' ? 'secondary' : 'ghost'} size="sm" className="h-7 w-8 p-0 flex items-center justify-center relative" onClick={() => setActiveMetric('value')}>
                <DollarSign className="w-4 h-4" />
                {activeMetric === 'value' && (
                  <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                )}
              </Button>
              <Button variant={activeMetric === 'percent' ? 'secondary' : 'ghost'} size="sm" className="h-7 w-8 p-0 flex items-center justify-center relative" onClick={() => setActiveMetric('percent')}>
                <Percent className="w-4 h-4" />
                {activeMetric === 'percent' && (
                  <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {topItems.map((item) => (
          <div key={item.rank} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-xl border border-border">
              {item.image}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-foreground truncate block mb-1">
                {item.rank}. {item.name}
              </span>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{item.value}</span>
                <Badge 
                  variant={item.isGain ? "default" : "destructive"}
                  className={`font-medium ${item.isGain ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}
                >
                  {item.isGain ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {activeMetric === 'percent' ? item.change : item.changeValue}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
