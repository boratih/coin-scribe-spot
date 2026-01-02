import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Article from "./pages/Article";
import DegenRollReview from "./pages/DegenRollReview";
import Technology from "./pages/Technology";
import Glossary from "./pages/Glossary";
import About from "./pages/About";
import WhatIsDegenRoll from "./pages/WhatIsDegenRoll";
import NotFound from "./pages/NotFound";
import GuidesIndex from "./pages/guides/Index";
import WhatIsCryptoCasino from "./pages/guides/WhatIsCryptoCasino";
import WhatIsNoKycCryptoCasino from "./pages/guides/WhatIsNoKycCryptoCasino";
import WhatIsDecentralizedCryptoCasino from "./pages/guides/WhatIsDecentralizedCryptoCasino";
import WhatIsProvablyFairSystem from "./pages/guides/WhatIsProvablyFairSystem";
import InstantDepositsWithdrawals from "./pages/guides/InstantDepositsWithdrawals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/degenroll-review" element={<DegenRollReview />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/what-is-degenroll" element={<WhatIsDegenRoll />} />
          <Route path="/guides" element={<GuidesIndex />} />
          <Route path="/guides/what-is-crypto-casino" element={<WhatIsCryptoCasino />} />
          <Route path="/guides/what-is-no-kyc-crypto-casino" element={<WhatIsNoKycCryptoCasino />} />
          <Route path="/guides/what-is-decentralized-crypto-casino" element={<WhatIsDecentralizedCryptoCasino />} />
          <Route path="/guides/what-is-provably-fair-system" element={<WhatIsProvablyFairSystem />} />
          <Route path="/guides/instant-deposits-withdrawals-crypto-casinos" element={<InstantDepositsWithdrawals />} />
          <Route path="/:slug" element={<Article />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
