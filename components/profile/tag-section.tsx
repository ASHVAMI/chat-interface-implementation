"use client";

import { Tags, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tags = [
  { id: 1, label: "Abandoned Cart User" },
  { id: 2, label: "Popup" },
  { id: 3, label: "Shop Error" },
  { id: 4, label: "Successful" }
];

export function TagSection() {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Tags className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Tags</span>
        </div>
        <Button variant="ghost" size="sm" className="h-7 text-blue-600">
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge 
            key={tag.id} 
            variant="secondary"
            className="px-2 py-1 cursor-pointer hover:bg-gray-200"
          >
            {tag.label}
            <span className="ml-1 text-gray-500 hover:text-gray-700">×</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}