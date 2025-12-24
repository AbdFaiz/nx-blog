"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { useEffect, useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export function ThemeToggleSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Sun
          className="h-4 w-4"
        />
        <Switch
          disabled
        />
        <Moon
          className="h-4 w-4"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-4 w-4 transition-all duration-200 ${
          theme == "light" ? "text-yellow-500" : "text-muted-foreground"
        }`}
      />
      <Switch
        checked={theme == "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Moon
        className={`h-4 w-4 transition-all duration-200 ${
          theme == "light" ? "text-yellow-500" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}
