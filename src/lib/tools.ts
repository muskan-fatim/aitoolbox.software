export type Tool = {
  name: string;
  slug: string; // used as route path e.g. "/tool-name"
  icon: React.ComponentType<{ className?: string }>;
};

import {
  LayoutDashboard,
  Star,
  Bot,
  MessageSquare,
  Settings as SettingsIcon,
} from "lucide-react";

export const tools: Tool[] = [
  {
    name: "Dashboard",
    slug: "/", // landing page
    icon: LayoutDashboard,
  },
  {
    name: "Tool 1",
    slug: "/tool1",
    icon: Star,
  },
  {
    name: "Tool 2",
    slug: "/tool2",
    icon: Bot,
  },
  {
    name: "Tool 3",
    slug: "/tool3",
    icon: MessageSquare,
  },
];

export const settingsItem = {
  name: "Settings",
  slug: "/settings",
  icon: SettingsIcon,
}; 