
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  MoreHorizontal,
  ArrowUpDown,
  Edit,
  Trash2,
  DollarSign,
  Tag,
  Star,
  ShoppingCart,
  Package
} from "lucide-react";

const initialTableData = [
  {
    id: 1,
    name: "1998 Pokémon Base Set Charizard",
    status: "For Sale",
    cost: 1930,
    marketValue: 8500,
    salePrice: 8200,
    profit: 6270,
    profitPercent: 325.27,
    notes: "PSA 10 Graded",
    image: "🃏",
    category: "Pokemon",
    dateAdded: "2023-12-15"
  },
  {
    id: 2,
    name: "1986 Fleer Michael Jordan RC",
    status: "Not for Sale",
    cost: 3600,
    marketValue: 6200,
    salePrice: null,
    profit: 2600,
    profitPercent: 72.22,
    notes: "PSA 9, Mint condition",
    image: "🏀",
    category: "Sports",
    dateAdded: "2023-11-20"
  },
  {
    id: 3,
    name: "Magic Black Lotus Alpha",
    status: "For Sale",
    cost: 2100,
    marketValue: 5800,
    salePrice: 5500,
    profit: 3400,
    profitPercent: 161.90,
    notes: "Near Mint",
    image: "🌸",
    category: "Magic",
    dateAdded: "2023-10-05"
  },
  {
    id: 4,
    name: "1952 Topps Mickey Mantle",
    status: "Not for Sale",
    cost: 3400,
    marketValue: 4200,
    salePrice: null,
    profit: 800,
    profitPercent: 23.53,
    notes: "PSA 8",
    image: "⚾",
    category: "Sports",
    dateAdded: "2023-09-12"
  },
  {
    id: 5,
    name: "Pokémon Base Set Box",
    status: "For Sale",
    cost: 800,
    marketValue: 3800,
    salePrice: 3600,
    profit: 2800,
    profitPercent: 350.00,
    notes: "Factory Sealed",
    image: "📦",
    category: "Pokemon",
    dateAdded: "2023-08-30"
  }
];

interface ItemsTableProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function ItemsTable({ searchQuery, setSearchQuery }: ItemsTableProps) {
  const [tableData, setTableData] = useState(initialTableData);
  const [sortField, setSortField] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [viewItemId, setViewItemId] = useState<number | null>(null);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleSelectItem = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedItems(checked ? filteredData.map(item => item.id) : []);
  };

  const handleStatusChange = (itemId: number, newStatus: string) => {
    setTableData(prev => prev.map(item => 
      item.id === itemId ? { ...item, status: newStatus } : item
    ));
  };

  const handleDeleteItem = (itemId: number) => {
    setTableData(prev => prev.filter(item => item.id !== itemId));
    setSelectedItems(prev => prev.filter(id => id !== itemId));
  };

  const handleBulkDelete = () => {
    setTableData(prev => prev.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['Name', 'Status', 'Cost', 'Market Value', 'Sale Price', 'Profit %', 'Notes'],
      ...filteredData.map(item => [
        item.name,
        item.status,
        `$${item.cost}`,
        `$${item.marketValue}`,
        item.salePrice ? `$${item.salePrice}` : '-',
        `${item.profitPercent}%`,
        item.notes
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-items.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Filter and sort data
  const filteredData = tableData
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.notes.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === "all" || item.category === filterCategory;
      const matchesStatus = filterStatus === "all" || item.status === filterStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      const aValue = a[sortField as keyof typeof a];
      const bValue = b[sortField as keyof typeof b];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  const categories = [...new Set(tableData.map(item => item.category))];
  const allSelected = selectedItems.length === filteredData.length && filteredData.length > 0;
  const someSelected = selectedItems.length > 0;

  return (
    <Card>
      <CardHeader className="bg-muted/50 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          <CardTitle className="text-xl font-semibold text-foreground flex items-center">
            <Package className="w-5 h-5 mr-2 text-primary" />
            Full Item Table
            {filteredData.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filteredData.length} items
              </Badge>
            )}
          </CardTitle>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 bg-background"
              />
            </div>
            
            {/* Filters */}
            <div className="flex space-x-2">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-32 bg-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-32 bg-background">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="Not for Sale">Not for Sale</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Actions */}
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handleExportCSV}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              
              {someSelected && (
                <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete ({selectedItems.length})
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/60">
                <TableHead className="w-12">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center">
                    Item Name
                    <ArrowUpDown className="w-4 h-4 ml-2 text-muted-foreground" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => handleSort('cost')}
                >
                  <div className="flex items-center">
                    Your Cost
                    <ArrowUpDown className="w-4 h-4 ml-2 text-muted-foreground" />
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => handleSort('marketValue')}
                >
                  <div className="flex items-center">
                    Market Value
                    <ArrowUpDown className="w-4 h-4 ml-2 text-muted-foreground" />
                  </div>
                </TableHead>
                <TableHead>Sale Price</TableHead>
                <TableHead>Profit %</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow 
                  key={item.id} 
                  className="hover:bg-muted/50 transition-colors"
                  data-state={selectedItems.includes(item.id) ? 'selected' : ''}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleSelectItem(item.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-lg">
                        {item.image}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">{item.name}</span>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                          <Badge 
                            variant={item.status === "For Sale" ? "default" : "secondary"}
                            className="cursor-pointer"
                          >
                            {item.status}
                          </Badge>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleStatusChange(item.id, "For Sale")}>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          For Sale
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(item.id, "Not for Sale")}>
                          <Package className="w-4 h-4 mr-2" />
                          Not for Sale
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell className="font-medium text-foreground">
                    ${item.cost.toLocaleString()}
                  </TableCell>
                  <TableCell className="font-medium text-foreground">
                    ${item.marketValue.toLocaleString()}
                  </TableCell>
                  <TableCell className="font-medium text-foreground">
                    {item.salePrice ? `$${item.salePrice.toLocaleString()}` : '-'}
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${
                      item.profitPercent > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.profitPercent > 0 ? '+' : ''}{item.profitPercent.toFixed(2)}%
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground max-w-32 truncate">
                    {item.notes}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewItemId(item.id)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-2xl">
                                {item.image}
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                                <p className="text-muted-foreground">{item.category}</p>
                              </div>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm font-medium text-muted-foreground">Your Cost</label>
                                <p className="text-lg font-semibold text-foreground">${item.cost.toLocaleString()}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-muted-foreground">Market Value</label>
                                <p className="text-lg font-semibold text-foreground">${item.marketValue.toLocaleString()}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-muted-foreground">Profit</label>
                                <p className={`text-lg font-semibold ${
                                  item.profit > 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {item.profit > 0 ? '+' : ''}${item.profit.toLocaleString()} ({item.profitPercent.toFixed(2)}%)
                                </p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm font-medium text-muted-foreground">Status</label>
                                <p className="text-lg text-foreground">{item.status}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-muted-foreground">Date Added</label>
                                <p className="text-lg text-foreground">{new Date(item.dateAdded).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-muted-foreground">Notes</label>
                                <p className="text-sm text-foreground">{item.notes}</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Item
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <DollarSign className="w-4 h-4 mr-2" />
                            Update Price
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Star className="w-4 h-4 mr-2" />
                            Add to Favorites
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-red-600"
                            onClick={() => handleDeleteItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Item
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
