"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

interface TripPlannerFormProps {
  onSubmit: (data: {
    destination: string;
    duration: string;
    budget: string;
    interests: string[];
    additionalInfo: string;
  }) => void;
  isLoading: boolean;
}

export default function TripPlannerForm({ onSubmit, isLoading }: TripPlannerFormProps) {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("moderate");
  const [interests, setInterests] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim() || !duration.trim()) return;
    
    onSubmit({
      destination,
      duration,
      budget,
      interests,
      additionalInfo
    });
  };

  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const budgetOptions = [
    { value: "budget", label: "Budget ($0-50/day)" },
    { value: "moderate", label: "Moderate ($50-150/day)" },
    { value: "comfortable", label: "Comfortable ($150-300/day)" },
    { value: "luxury", label: "Luxury ($300+/day)" }
  ];

  const interestOptions = [
    "Adventure",
    "Culture",
    "Food",
    "History",
    "Nature",
    "Shopping",
    "Nightlife",
    "Art",
    "Architecture",
    "Museums",
    "Beaches",
    "Mountains"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="destination">Destination</Label>
        <Input
          id="destination"
          placeholder="Enter your destination (e.g., Paris, France)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            placeholder="Number of days (e.g., 5)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select
            value={budget}
            onValueChange={setBudget}
            disabled={isLoading}
          >
            <SelectTrigger id="budget" className="w-full">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Travel Interests</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {interestOptions.map((interest) => (
            <div
              key={interest}
              className="flex items-center space-x-2"
            >
              <Checkbox
                id={`interest-${interest}`}
                checked={interests.includes(interest)}
                onCheckedChange={() => handleInterestChange(interest)}
                disabled={isLoading}
              />
              <Label
                htmlFor={`interest-${interest}`}
                className="text-sm cursor-pointer"
              >
                {interest}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
        <Textarea
          id="additionalInfo"
          placeholder="Any specific preferences, dietary restrictions, mobility requirements, etc."
          className="min-h-[100px] resize-y"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || !destination.trim() || !duration.trim()}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Planning Trip...
          </>
        ) : (
          "Generate Trip Plan"
        )}
      </Button>
    </form>
  );
}
