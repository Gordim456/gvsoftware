
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <motion.div
      className="fixed z-50 bottom-8 left-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="relative overflow-hidden bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-indigo-500/10 
                 border-white/20 backdrop-blur-sm rounded-full w-12 h-12 shadow-lg hover:shadow-purple-500/20"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-indigo-600/20 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.5, 0.7] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
        >
          <Moon className="h-6 w-6 text-blue-400" />
        </motion.div>
      </Button>
    </motion.div>
  );
}
