"use client";

import { Info, Tags, Phone, Video, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function UserProfile() {
  return (
    <div className="w-80 border-l p-4 bg-white dark:bg-gray-900">
      {/* User Header */}
      <div className="text-center mb-6">
        <Avatar className="w-20 h-20 mx-auto mb-3">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
          <AvatarFallback>OK</AvatarFallback>
        </Avatar>
        <h2 className="font-semibold text-lg">Oğuz Yağız Kara</h2>
        <p className="text-sm text-muted-foreground">11:59pm in Ankara, Turkey</p>
        
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Revenue Card */}
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Revenue</h3>
          <div className="text-2xl font-bold">$3,452</div>
          <p className="text-sm text-muted-foreground">3 Orders</p>
        </Card>

        {/* Web Visits Card */}
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Web Visits</h3>
          <div className="text-2xl font-bold">42</div>
          <p className="text-sm text-muted-foreground">4 Link Clicks</p>
        </Card>

        {/* Information Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Info className="h-5 w-5" />
              <h3 className="font-semibold">Information</h3>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600">Add</Button>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Email</span>
              <span className="text-sm">oguzyagiz@gmail.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Phone</span>
              <span className="text-sm">+90 535 444 81 77</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Last Visited</span>
              <span className="text-sm">8 Aug, 2021</span>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Tags className="h-5 w-5" />
              <h3 className="font-semibold">Tags</h3>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600">Add</Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Abandoned Cart User</Badge>
            <Badge variant="secondary">Popup</Badge>
            <Badge variant="secondary">Shop Error</Badge>
            <Badge variant="secondary">Successful</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}