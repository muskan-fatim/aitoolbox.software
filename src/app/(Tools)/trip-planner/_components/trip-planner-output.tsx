"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, MapPin, Calendar, DollarSign, Clock, Star } from "lucide-react";
import { toast } from "sonner";
import { TripPlannerResult } from "./trip-planner-client";

interface TripPlannerOutputProps {
  result: TripPlannerResult | null;
  isLoading: boolean;
}

export default function TripPlannerOutput({ result, isLoading }: TripPlannerOutputProps) {
  const [copiedDay, setCopiedDay] = useState<number | null>(null);

  const copyToClipboard = async (text: string, dayIndex?: number) => {
    try {
      await navigator.clipboard.writeText(text);
      if (dayIndex !== undefined) {
        setCopiedDay(dayIndex);
        setTimeout(() => setCopiedDay(null), 2000);
      }
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const copyFullItinerary = () => {
    if (!result) return;
    
    let fullText = `🗺️ ${result.destination} - ${result.duration} Day Trip Plan\n\n`;
    fullText += `💰 Budget: ${result.budget}\n`;
    fullText += `🎯 Interests: ${result.interests.join(", ")}\n\n`;
    
    result.dailyItinerary.forEach((day, index) => {
      fullText += `📅 Day ${index + 1}: ${day.title}\n`;
      fullText += `🕐 ${day.timeOfDay}\n\n`;
      
      day.activities.forEach(activity => {
        fullText += `• ${activity.name}\n`;
        fullText += `  📍 ${activity.location}\n`;
        fullText += `  ⏱️ ${activity.duration}\n`;
        if (activity.cost) fullText += `  💵 ${activity.cost}\n`;
        fullText += `  ${activity.description}\n\n`;
      });
      
      if (day.restaurants.length > 0) {
        fullText += `🍽️ Recommended Restaurants:\n`;
        day.restaurants.forEach(restaurant => {
          fullText += `• ${restaurant.name} - ${restaurant.cuisine}\n`;
          fullText += `  📍 ${restaurant.location}\n`;
          if (restaurant.priceRange) fullText += `  💰 ${restaurant.priceRange}\n`;
          fullText += `  ${restaurant.description}\n\n`;
        });
      }
      
      fullText += `\n${"=".repeat(50)}\n\n`;
    });
    
    if (result.accommodation.length > 0) {
      fullText += `🏨 Recommended Accommodation:\n`;
      result.accommodation.forEach(hotel => {
        fullText += `• ${hotel.name} - ${hotel.type}\n`;
        fullText += `  📍 ${hotel.location}\n`;
        if (hotel.priceRange) fullText += `  💰 ${hotel.priceRange}\n`;
        fullText += `  ${hotel.description}\n\n`;
      });
    }
    
    copyToClipboard(fullText);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse space-y-3">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-20 bg-muted rounded"></div>
            <div className="h-20 bg-muted rounded"></div>
            <div className="h-20 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>Your personalized trip plan will appear here</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Trip Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {result.destination}
              </CardTitle>
              <CardDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {result.duration} days
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {result.budget}
                </span>
              </CardDescription>
            </div>
            <Button onClick={copyFullItinerary} variant="outline" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copy All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <strong>Interests:</strong>
              <div className="flex flex-wrap gap-1 mt-1">
                {result.interests.map((interest, index) => (
                  <Badge key={index} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Itinerary */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Daily Itinerary</h3>
        {result.dailyItinerary.map((day, dayIndex) => (
          <Card key={dayIndex}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Day {dayIndex + 1}: {day.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {day.timeOfDay}
                  </CardDescription>
                </div>
                <Button
                  onClick={() => {
                    const dayText = `Day ${dayIndex + 1}: ${day.title}\n${day.timeOfDay}\n\nActivities:\n${day.activities.map(a => `• ${a.name} (${a.location}) - ${a.duration}\n  ${a.description}`).join('\n\n')}\n\nRestaurants:\n${day.restaurants.map(r => `• ${r.name} - ${r.cuisine} (${r.location})\n  ${r.description}`).join('\n\n')}`;
                    copyToClipboard(dayText, dayIndex);
                  }}
                  variant="ghost"
                  size="sm"
                >
                  <Copy className="h-4 w-4" />
                  {copiedDay === dayIndex ? "Copied!" : ""}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Activities */}
              <div>
                <h4 className="font-medium mb-2">Activities</h4>
                <div className="space-y-3">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium">{activity.name}</h5>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {activity.location}
                            <Clock className="h-3 w-3 ml-2" />
                            {activity.duration}
                            {activity.cost && (
                              <>
                                <DollarSign className="h-3 w-3 ml-2" />
                                {activity.cost}
                              </>
                            )}
                          </p>
                          <p className="text-sm mt-1">{activity.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Restaurants */}
              {day.restaurants.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Recommended Restaurants</h4>
                  <div className="grid gap-2">
                    {day.restaurants.map((restaurant, restIndex) => (
                      <div key={restIndex} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="font-medium">{restaurant.name}</h5>
                            <p className="text-sm text-muted-foreground">
                              {restaurant.cuisine} • {restaurant.location}
                              {restaurant.priceRange && (
                                <span className="ml-2 flex items-center gap-1">
                                  <DollarSign className="h-3 w-3" />
                                  {restaurant.priceRange}
                                </span>
                              )}
                            </p>
                            <p className="text-sm mt-1">{restaurant.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Accommodation */}
      {result.accommodation.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recommended Accommodation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {result.accommodation.map((hotel, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{hotel.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {hotel.type} • {hotel.location}
                        {hotel.priceRange && (
                          <span className="ml-2 flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {hotel.priceRange}
                          </span>
                        )}
                      </p>
                      <p className="text-sm mt-1">{hotel.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
