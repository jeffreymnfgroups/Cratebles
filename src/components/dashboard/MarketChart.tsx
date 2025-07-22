
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, Area, AreaChart } from "recharts";
import { Package, TrendingUp } from "lucide-react";

const allChartData = [
  { date: 'Jan', marketValue: 12000, costValue: 10000 },
  { date: 'Feb', marketValue: 15000, costValue: 12000 },
  { date: 'Mar', marketValue: 22000, costValue: 18000 },
  { date: 'Apr', marketValue: 32000, costValue: 26000 },
  { date: 'May', marketValue: 42000, costValue: 30000 },
  { date: 'Jun', marketValue: 45750, costValue: 32100 },
  { date: 'Jul', marketValue: 48000, costValue: 33000 },
  { date: 'Aug', marketValue: 52000, costValue: 35000 },
  { date: 'Sep', marketValue: 58000, costValue: 38000 },
  { date: 'Oct', marketValue: 62000, costValue: 41000 },
  { date: 'Nov', marketValue: 67000, costValue: 44000 },
  { date: 'Dec', marketValue: 75000, costValue: 48000 },
];

const timeRanges = ['24h', '7d', '30d', '3M', '6M', '1Y'];

interface Payload {
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Payload[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border">
        <p className="label text-base font-semibold text-foreground">{`${label}`}</p>
        <div className="mt-2 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <p className="intro text-sm text-muted-foreground">{`Market Value: `}<span className="font-bold text-foreground">{`$${payload[0].value.toLocaleString()}`}</span></p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <p className="intro text-sm text-muted-foreground">{`Cost Value: `}<span className="font-bold text-foreground">{`$${payload[1].value.toLocaleString()}`}</span></p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};


export function MarketChart() {
  const [selectedRange, setSelectedRange] = useState('6M');

  const getFilteredData = () => {
    switch (selectedRange) {
      case '24h':
        return allChartData.slice(-1);
      case '7d':
      return allChartData.slice(-2);
      case '30d':
        return allChartData.slice(-1);
      case '3M':
        return allChartData.slice(-3);
      case '6M':
        return allChartData.slice(-6);
      case '1Y':
        return allChartData;
      default:
        return allChartData;
    }
  };

  const chartData = getFilteredData();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Market vs Cost Value</CardTitle>
          <div className="flex space-x-1 p-1 bg-muted rounded-lg">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={selectedRange === range ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedRange(range)}
                className="text-xs h-7 px-3 relative"
              >
                {range}
                {selectedRange === range && (
                  <span className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-primary transform -translate-x-1/2" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <defs>
                <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                dx={-10}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                align="right" 
                height={40}
                iconType="circle"
                formatter={(value) => {
                  return <span className="text-foreground font-medium">{value}</span>;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="marketValue" 
                stroke="hsl(var(--primary))"
                fillOpacity={1} 
                fill="url(#colorMarket)" 
                strokeWidth={2.5}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4, stroke: 'hsl(var(--card))' }}
                activeDot={{ r: 6, fill: 'hsl(var(--card))', stroke: 'hsl(var(--primary))' }}
                name="Market Value"
              />
              <Area 
                type="monotone" 
                dataKey="costValue" 
                stroke="hsl(var(--destructive))" 
                fillOpacity={1} 
                fill="url(#colorCost)"
                strokeWidth={2.5}
                dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 4, stroke: 'hsl(var(--card))' }}
                activeDot={{ r: 6, fill: 'hsl(var(--card))', stroke: 'hsl(var(--destructive))' }}
                name="Cost Value"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
