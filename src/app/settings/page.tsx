export const metadata = {
  title: "Settings",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="text-muted-foreground">
        Manage your account preferences and application settings here.
      </p>
    </div>
  )
} 