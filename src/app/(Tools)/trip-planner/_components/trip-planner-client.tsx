"use client";

import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TripPlannerForm from "./trip-planner-form";
import TripPlannerOutput from "./trip-planner-output";
import { toast } from "sonner";

export interface Activity {
  name: string;
  location: string;
  duration: string;
  cost?: string;
  description: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  location: string;
  priceRange?: string;
  description: string;
}

export interface DayItinerary {
  title: string;
  timeOfDay: string;
  activities: Activity[];
  restaurants: Restaurant[];
}

export interface Accommodation {
  name: string;
  type: string;
  location: string;
  priceRange?: string;
  description: string;
}

export interface TripPlannerResult {
  destination: string;
  duration: string;
  budget: string;
  interests: string[];
  dailyItinerary: DayItinerary[];
  accommodation: Accommodation[];
}

export default function TripPlannerClient() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<TripPlannerResult | null>(null);

  const handleSubmit = async (formData: {
    destination: string;
    duration: string;
    budget: string;
    interests: string[];
    additionalInfo: string;
  }) => {
    setIsLoading(true);
    
    try {
      const prompt = `
        Create a detailed ${formData.duration}-day trip itinerary for ${formData.destination}.
        
        Trip Details:
        - Destination: ${formData.destination}
        - Duration: ${formData.duration} days
        - Budget: ${formData.budget}
        - Interests: ${formData.interests.join(", ")}
        - Additional Information: ${formData.additionalInfo || "None"}
        
        Please create a comprehensive trip plan with:
        1. Daily itinerary with specific activities and timeframes
        2. Restaurant recommendations for each day
        3. Accommodation suggestions
        4. Estimated costs where relevant
        5. Practical tips and transportation suggestions
        
        Return your response as a JSON object with the following structure:
        {
          "destination": "${formData.destination}",
          "duration": "${formData.duration}",
          "budget": "${formData.budget}",
          "interests": ${JSON.stringify(formData.interests)},
          "dailyItinerary": [
            {
              "title": "Arrival & City Center Exploration",
              "timeOfDay": "Full Day (9 AM - 8 PM)",
              "activities": [
                {
                  "name": "Activity name",
                  "location": "Specific location/address",
                  "duration": "2-3 hours",
                  "cost": "€20-30 (optional)",
                  "description": "Detailed description of the activity"
                }
              ],
              "restaurants": [
                {
                  "name": "Restaurant name",
                  "cuisine": "Type of cuisine",
                  "location": "Address or area",
                  "priceRange": "€15-25 per person (optional)",
                  "description": "Why this restaurant is recommended"
                }
              ]
            }
          ],
          "accommodation": [
            {
              "name": "Hotel/Accommodation name",
              "type": "Hotel/Hostel/Apartment",
              "location": "Area/District",
              "priceRange": "€80-120 per night (optional)",
              "description": "Why this accommodation is recommended"
            }
          ]
        }
        
        Make sure each day has 3-5 activities and 2-3 restaurant recommendations. Consider the specified interests and budget level.
      `;
      
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "chat",
          prompt,
          options: {
            model: "openai",
            response_format: { type: "json_object" }
          }
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate trip plan");
      }

      const data = await response.json();
      
      // Parse the JSON string response
      const parsedResult = JSON.parse(data.data);
      setResult(parsedResult);
    } catch (error) {
      console.error("Error generating trip plan:", error);
      toast.error("Failed to generate trip plan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">AI Trip Planner</h1>
        <p className="text-muted-foreground">
          Get personalized travel itineraries with AI-powered recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-1 lg:sticky lg:top-6 lg:h-fit lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>
              Enter your travel preferences and requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TripPlannerForm onSubmit={handleSubmit} isLoading={isLoading} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Your Trip Plan</CardTitle>
            <CardDescription>
              AI-generated personalized travel itinerary
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TripPlannerOutput result={result} isLoading={isLoading} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
