
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Package, Star } from "lucide-react";

const metrics = [
  {
    title: "Total Market Value",
    value: "$45,750",
    subtitle: "Current estimated value of all owned items",
    icon: DollarSign,
    trend: "+12.5%",
    trendUp: true
  },
  {
    title: "Total Cost Value",
    value: "$32,100",
    subtitle: "Total amount spent on acquisition costs",
    icon: Package,
    trend: "+5.2%",
    trendUp: true
  },
  {
    title: "Total Items",
    value: "247",
    subtitle: "Total items owned in portfolio",
    icon: Package,
    trend: "+3",
    trendUp: true
  },
  {
    title: "Most Valuable Item",
    value: "$8,500",
    subtitle: "1998 Pokémon Base Set Charizard PSA 10",
    icon: Star,
    trend: "+2.4%",
    trendUp: true
  }
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">
              {metric.value}
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              {metric.subtitle}
            </p>
            <div className="flex items-center text-xs">
              {metric.trendUp ? (
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
              )}
              <span className={metric.trendUp ? 'text-green-600' : 'text-red-600'}>
                {metric.trend}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
