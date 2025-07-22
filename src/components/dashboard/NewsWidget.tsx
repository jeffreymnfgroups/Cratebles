import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Lightbulb, ArrowRight } from "lucide-react";

const newsItems = [
  {
    icon: Newspaper,
    title: "Collectibles Market Hits New Highs",
    description: "The collectibles market saw a 15% increase in Q2, driven by rare trading cards and vintage toys.",
    time: "2 hours ago",
  },
  {
    icon: Lightbulb,
    title: "Expert Tip: Diversify Your Portfolio",
    description: "Experts recommend diversifying across categories to minimize risk and maximize returns.",
    time: "Today",
  },
  {
    icon: Newspaper,
    title: "Upcoming Auction: Rare Comics",
    description: "A major auction featuring rare comics is scheduled for next week. Preview the lots now!",
    time: "1 day ago",
  }
];

export function NewsWidget() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">News & Insights</CardTitle>
        <Button variant="ghost" size="sm" className="text-sm font-medium">
          View all
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {newsItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
            <div className="w-10 h-10 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center border border-border">
              <item.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground text-sm">{item.title}</p>
                <span className="text-xs text-muted-foreground flex-shrink-0 ml-4">{item.time}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 