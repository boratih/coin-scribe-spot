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
import GlossaryTerm from "./pages/GlossaryTerm";
import About from "./pages/About";
import WhatIsDegenRoll from "./pages/WhatIsDegenRoll";
import NotFound from "./pages/NotFound";

// Crypto Casino Guides
import WhatIsCryptoCasino from "./pages/guides/WhatIsCryptoCasino";
import WhatIsNoKycCryptoCasino from "./pages/guides/WhatIsNoKycCryptoCasino";
import WhatIsDecentralizedCryptoCasino from "./pages/guides/WhatIsDecentralizedCryptoCasino";
import WhatIsProvablyFairSystem from "./pages/guides/WhatIsProvablyFairSystem";
import InstantDepositsWithdrawals from "./pages/guides/InstantDepositsWithdrawals";
import BlockchainTransactionsCryptoCasinos from "./pages/guides/BlockchainTransactionsCryptoCasinos";
import SmartContractsCryptoCasinos from "./pages/guides/SmartContractsCryptoCasinos";
import CryptoCasinoWalletsExplained from "./pages/guides/CryptoCasinoWalletsExplained";
import SupportedBlockchainNetworks from "./pages/guides/SupportedBlockchainNetworks";
import GasFeesTransactionSpeed from "./pages/guides/GasFeesTransactionSpeed";
import HowCryptoCasinosEnsureGameFairness from "./pages/guides/HowCryptoCasinosEnsureGameFairness";
import RngVsProvablyFair from "./pages/guides/RngVsProvablyFair";
import TransparencyBlockchainGambling from "./pages/guides/TransparencyBlockchainGambling";
import SecurityRisksCryptoCasinos from "./pages/guides/SecurityRisksCryptoCasinos";
import AreCryptoCasinosLegal from "./pages/guides/AreCryptoCasinosLegal";
import HowJurisdictionAffectsCryptoGambling from "./pages/guides/HowJurisdictionAffectsCryptoGambling";
import WhyCryptoCasinosAvoidKyc from "./pages/guides/WhyCryptoCasinosAvoidKyc";
import CryptoCasinoBonusesExplained from "./pages/guides/CryptoCasinoBonusesExplained";
import FiatVsCryptoCasinosDifferences from "./pages/guides/FiatVsCryptoCasinosDifferences";
import AnonymityCryptoGambling from "./pages/guides/AnonymityCryptoGambling";

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
          <Route path="/glossary/:slug" element={<GlossaryTerm />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/what-is-degenroll" element={<WhatIsDegenRoll />} />
          
          {/* Crypto Casino Guides - Fundamentals */}
          <Route path="/what-is-crypto-casino" element={<WhatIsCryptoCasino />} />
          <Route path="/what-is-no-kyc-crypto-casino" element={<WhatIsNoKycCryptoCasino />} />
          <Route path="/what-is-decentralized-crypto-casino" element={<WhatIsDecentralizedCryptoCasino />} />
          <Route path="/what-is-provably-fair-system" element={<WhatIsProvablyFairSystem />} />
          <Route path="/instant-deposits-withdrawals-crypto-casinos" element={<InstantDepositsWithdrawals />} />
          
          {/* Crypto Casino Guides - Technical */}
          <Route path="/blockchain-transactions-crypto-casinos" element={<BlockchainTransactionsCryptoCasinos />} />
          <Route path="/smart-contracts-crypto-casinos" element={<SmartContractsCryptoCasinos />} />
          <Route path="/crypto-casino-wallets-explained" element={<CryptoCasinoWalletsExplained />} />
          <Route path="/supported-blockchain-networks-crypto-casinos" element={<SupportedBlockchainNetworks />} />
          <Route path="/gas-fees-transaction-speed-crypto-gambling" element={<GasFeesTransactionSpeed />} />
          
          {/* Crypto Casino Guides - Fairness & Security */}
          <Route path="/how-crypto-casinos-ensure-game-fairness" element={<HowCryptoCasinosEnsureGameFairness />} />
          <Route path="/rng-vs-provably-fair-crypto-casinos" element={<RngVsProvablyFair />} />
          <Route path="/transparency-blockchain-gambling" element={<TransparencyBlockchainGambling />} />
          <Route path="/security-risks-crypto-casinos" element={<SecurityRisksCryptoCasinos />} />
          
          {/* Crypto Casino Guides - Legal & Regulatory */}
          <Route path="/are-crypto-casinos-legal" element={<AreCryptoCasinosLegal />} />
          <Route path="/how-jurisdiction-affects-crypto-gambling" element={<HowJurisdictionAffectsCryptoGambling />} />
          <Route path="/why-crypto-casinos-avoid-kyc" element={<WhyCryptoCasinosAvoidKyc />} />
          
          {/* Crypto Casino Guides - User Experience */}
          <Route path="/crypto-casino-bonuses-explained" element={<CryptoCasinoBonusesExplained />} />
          <Route path="/fiat-vs-crypto-casinos-differences" element={<FiatVsCryptoCasinosDifferences />} />
          <Route path="/anonymity-crypto-gambling" element={<AnonymityCryptoGambling />} />
          
          <Route path="/:slug" element={<Article />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
