"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { toast } from "sonner"

export default function SettingsPage() {
  const clearLocalStorage = () => {
    try {
      localStorage.clear()
      toast.success("Site data cleared successfully")
    } catch (error) {
      toast.error("Failed to clear site data")
      console.error("Error clearing localStorage:", error)
    }
  }

  return (
    <div className="container mx-auto py-6 px-5 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account preferences and application settings here.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Site Data</CardTitle>
            <CardDescription>
              Manage data stored in your browser
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-2 text-sm text-muted-foreground">
                  Clear all locally stored data including preferences and history.
                </p>
                <Button 
                  variant="destructive" 
                  onClick={clearLocalStorage}
                >
                  Clear Site Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Legal Information</CardTitle>
            <CardDescription>
              View our policies and legal documents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/privacy-policy">
                <Button className="w-full" variant="outline">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms-of-service">
                <Button className="w-full" variant="outline">
                  Terms of Service
                </Button>
              </Link>
              <Link href="/cookie-policy">
                <Button className="w-full" variant="outline">
                  Cookie Policy
                </Button>
              </Link>
              <Link href="/dmca-policy">
                <Button className="w-full" variant="outline">
                  DMCA Policy
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 