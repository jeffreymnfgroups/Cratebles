
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, Area, AreaChart } from "recharts";
import { Package, TrendingUp } from "lucide-react";

const chartData = [
  { date: 'Jan', marketValue: 12000, costValue: 10000 },
  { date: 'Feb', marketValue: 15000, costValue: 12000 },
  { date: 'Mar', marketValue: 22000, costValue: 18000 },
  { date: 'Apr', marketValue: 32000, costValue: 26000 },
  { date: 'May', marketValue: 42000, costValue: 30000 },
  { date: 'Jun', marketValue: 45750, costValue: 32100 }
];

const timeRanges = ['1M', '3M', '6M', 'All Time'];

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
      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl border border-slate-200/80">
        <p className="label text-base font-semibold text-slate-800">{`${label}`}</p>
        <div className="mt-2 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <p className="intro text-sm text-slate-600">{`Market Value: `}<span className="font-bold text-slate-900">{`$${payload[0].value.toLocaleString()}`}</span></p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <p className="intro text-sm text-slate-600">{`Cost Value: `}<span className="font-bold text-slate-900">{`$${payload[1].value.toLocaleString()}`}</span></p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};


export function MarketChart() {
  const [selectedRange, setSelectedRange] = useState('6M');

  return (
    <Card className="shadow-sm hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Market vs Cost Value</CardTitle>
          <div className="flex space-x-1 p-1 bg-slate-100 rounded-lg">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={selectedRange === range ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedRange(range)}
                className={`transition-all duration-200 text-xs font-medium h-7 px-3 ${
                  selectedRange === range 
                  ? "bg-white text-slate-800 shadow-md" 
                  : "text-slate-600 hover:bg-white/50"
                }`}
              >
                {range}
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
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                dx={-10}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                align="right" 
                height={40}
                iconType="circle"
                formatter={(value, entry) => {
                  const { color } = entry;
                  return <span style={{ color: '#374151', fontWeight: 500 }}>{value}</span>;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="marketValue" 
                stroke="#10b981"
                fillOpacity={1} 
                fill="url(#colorMarket)" 
                strokeWidth={2.5}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4, stroke: 'white' }}
                activeDot={{ r: 6, fill: 'white', stroke: '#10b981' }}
                name="Market Value"
              />
              <Area 
                type="monotone" 
                dataKey="costValue" 
                stroke="#ef4444" 
                fillOpacity={1} 
                fill="url(#colorCost)"
                strokeWidth={2.5}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4, stroke: 'white' }}
                activeDot={{ r: 6, fill: 'white', stroke: '#ef4444' }}
                name="Cost Value"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
