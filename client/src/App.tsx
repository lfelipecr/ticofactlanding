import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CookieConsent from "./components/CookieConsent";
import FacticoAPI from "./pages/FacticoAPI";
import FacticoPro from "./pages/FacticoPro";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/terms"} component={TermsAndConditions} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/cookies"} component={CookiePolicy} />
      <Route path={"/factico-api"} component={FacticoAPI} />
      <Route path={"/factico-pro"} component={FacticoPro} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
