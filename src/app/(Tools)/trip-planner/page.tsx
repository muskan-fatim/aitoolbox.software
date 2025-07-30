import TripPlannerClient from "./_components/trip-planner-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TripPlannerPage() {
  return (
    <div className="space-y-8">
      <TripPlannerClient />

      {/* About Section - SSR */}
      <div className="container mx-auto pb-6">
        <Card>
          <CardHeader>
            <CardTitle>About AI Trip Planner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The AI Trip Planner creates personalized travel itineraries based on your destination,
              duration, budget, and interests. Get detailed day-by-day plans with activities,
              restaurants, and accommodation recommendations.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customized daily itineraries based on your interests</li>
              <li>Restaurant recommendations with cuisine types and locations</li>
              <li>Activity suggestions with duration and cost estimates</li>
              <li>Accommodation options within your budget range</li>
              <li>Practical tips and transportation guidance</li>
              <li>Export and share your complete itinerary</li>
            </ul>
            <p>
              <strong>How to use:</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Enter your destination (city, country, or region)</li>
              <li>Specify the number of days for your trip</li>
              <li>Select your budget range</li>
              <li>Choose your travel interests (adventure, culture, food, etc.)</li>
              <li>Add any additional preferences or requirements</li>
              <li>Click &quot;Generate Trip Plan&quot; to create your personalized itinerary</li>
              <li>Copy individual days or the complete itinerary</li>
            </ol>
            <p>
              <strong>Tips for better results:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be specific with your destination (e.g., &quot;Tokyo, Japan&quot; vs &quot;Japan&quot;)</li>
              <li>Select multiple interests that match your travel style</li>
              <li>Include dietary restrictions or accessibility needs in additional info</li>
              <li>Consider realistic daily budgets for your destination</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
