
import React from "react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <div className="fixed z-50 bottom-8 left-8">
      <Button
        variant="outline"
        size="icon"
        className="relative overflow-hidden bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-indigo-500/10 
                 border-white/20 backdrop-blur-sm rounded-full w-12 h-12 shadow-lg hover:shadow-purple-500/20 
                 transition-all duration-300 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-indigo-600/20 rounded-full opacity-70" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Moon className="h-6 w-6 text-blue-400" />
        </div>
      </Button>
    </div>
  );
}
