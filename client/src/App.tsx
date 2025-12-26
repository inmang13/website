import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// ⬇️ import river components
import BackgroundRiver from "@/components/BackgroundRiver";
import RiverScrollEffect from "./components/RiverScrollEffect";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        {/* 🌊 GLOBAL BACKGROUND RIVER HERE */}
        <BackgroundRiver />
        <RiverScrollEffect />

        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
