
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";

const chartData = [
  { date: 'Jan', marketValue: 12000, costValue: 10000 },
  { date: 'Feb', marketValue: 15000, costValue: 12000 },
  { date: 'Mar', marketValue: 22000, costValue: 18000 },
  { date: 'Apr', marketValue: 32000, costValue: 26000 },
  { date: 'May', marketValue: 42000, costValue: 30000 },
  { date: 'Jun', marketValue: 45750, costValue: 32100 }
];

const timeRanges = ['1M', '3M', '6M', 'All Time'];

export function MarketChart() {
  const [selectedRange, setSelectedRange] = useState('6M');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Market vs Cost Value Over Time</CardTitle>
          <div className="flex space-x-1">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={selectedRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRange(range)}
                className={selectedRange === range ? "bg-gray-900 text-white" : ""}
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
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'marketValue' ? 'Market Value' : 'Cost Value']}
                labelStyle={{ color: '#666', fontWeight: 'bold' }}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="marketValue" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                name="Market Value"
              />
              <Line 
                type="monotone" 
                dataKey="costValue" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                name="Cost Value"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
