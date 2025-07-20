
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const topItems = [
  {
    rank: 1,
    name: "1998 Pokémon Base Set Charizard PSA 10",
    value: "$8,500",
    change: "+2.4%",
    image: "🃏"
  },
  {
    rank: 2,
    name: "1986 Fleer Michael Jordan RC PSA 9",
    value: "$6,200",
    change: "+1.8%",
    image: "🏀"
  },
  {
    rank: 3,
    name: "Magic: The Gathering Black Lotus Alpha",
    value: "$5,800",
    change: "+23.33%",
    image: "🌸"
  },
  {
    rank: 4,
    name: "1952 Topps Mickey Mantle PSA 8",
    value: "$4,200",
    change: "+23.83%",
    image: "⚾"
  },
  {
    rank: 5,
    name: "Pokémon Base Set Booster Box Sealed",
    value: "$3,800",
    change: "+68.75%",
    image: "📦"
  }
];

export function TopItemsGrid() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          Top 10 Most Valuable Products
          <TrendingUp className="w-4 h-4 ml-2 text-green-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topItems.map((item) => (
          <div key={item.rank} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
              {item.image}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900 truncate">
                  {item.rank}. {item.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                <Badge variant="secondary" className="text-green-600 bg-green-50">
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
