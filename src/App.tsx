import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Article from "./pages/Article";
import DegenRollReview from "./pages/DegenRollReview";

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
import CryptoCasinosLegalCambodia2026 from "./pages/guides/CryptoCasinosLegalCambodia2026";
import CryptoCasinoBonusesExplained from "./pages/guides/CryptoCasinoBonusesExplained";
import FiatVsCryptoCasinosDifferences from "./pages/guides/FiatVsCryptoCasinosDifferences";
import AnonymityCryptoGambling from "./pages/guides/AnonymityCryptoGambling";

// Top Picks Guides
import TopSafestNoKycCasinos from "./pages/guides/TopSafestNoKycCasinos";
import TopCryptoCasinoBonuses from "./pages/guides/TopCryptoCasinoBonuses";
import BestCryptoSlotGames from "./pages/guides/BestCryptoSlotGames";
import BlockchainGamingNftCasinos from "./pages/guides/BlockchainGamingNftCasinos";

import CryptoCasino from "./pages/CryptoCasino";
import ScrollToTop from "./components/ScrollToTop";
import Methodology from "./pages/Methodology";
import EditorialPolicy from "./pages/EditorialPolicy";
import SourcesReferences from "./pages/SourcesReferences";
import BrandGuidelines from "./pages/BrandGuidelines";

// Answers
import Answers from "./pages/Answers";
import WhatIsACryptoCasino from "./pages/answers/WhatIsACryptoCasino";
import HowDoCryptoCasinosWork from "./pages/answers/HowDoCryptoCasinosWork";
import AreCryptoCasinosLegalAnswer from "./pages/answers/AreCryptoCasinosLegal";
import AreCryptoCasinosSafe from "./pages/answers/AreCryptoCasinosSafe";
import WhatIsANoKycCryptoCasino from "./pages/answers/WhatIsANoKycCryptoCasino";
import AreNoKycCryptoCasinosLegal from "./pages/answers/AreNoKycCryptoCasinosLegal";
import WhatIsProvablyFairGambling from "./pages/answers/WhatIsProvablyFairGambling";
import HowDoCryptoCasinoWithdrawalsWork from "./pages/answers/HowDoCryptoCasinoWithdrawalsWork";
import WhatCryptocurrenciesDoCasinosAccept from "./pages/answers/WhatCryptocurrenciesDoCasinosAccept";
import WhatAreTheRisksOfCryptoCasinos from "./pages/answers/WhatAreTheRisksOfCryptoCasinos";
import DoCryptoCasinosRequireKyc from "./pages/answers/DoCryptoCasinosRequireKyc";
import HowToVerifyProvablyFairGames from "./pages/answers/HowToVerifyProvablyFairGames";
import ProvablyFairVsRng from "./pages/answers/ProvablyFairVsRng";
import CryptoCasinoSecurityScamDetection from "./pages/answers/CryptoCasinoSecurityScamDetection";
import CryptoCasinoDepositsFeesSpeedLimits from "./pages/answers/CryptoCasinoDepositsFeesSpeedLimits";
import DecentralizedVsCentralizedCryptoCasinos from "./pages/answers/DecentralizedVsCentralizedCryptoCasinos";
import MobileCryptoCasinoExperience from "./pages/answers/MobileCryptoCasinoExperience";
import ResponsibleGamblingCryptoCasinos from "./pages/answers/ResponsibleGamblingCryptoCasinos";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crypto-casino" element={<CryptoCasino />} />
          <Route path="/degenroll-review" element={<DegenRollReview />} />
          <Route path="/degenroll-review" element={<DegenRollReview />} />
          
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/glossary/:slug" element={<GlossaryTerm />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/what-is-degenroll" element={<WhatIsDegenRoll />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/sources-and-references" element={<SourcesReferences />} />
          <Route path="/brand-guidelines" element={<BrandGuidelines />} />
          
          {/* Crypto Casino Guides - Top Picks */}
          <Route path="/top-safest-no-kyc-crypto-casinos" element={<TopSafestNoKycCasinos />} />
          <Route path="/top-crypto-casino-bonuses" element={<TopCryptoCasinoBonuses />} />
          <Route path="/best-crypto-slot-games" element={<BestCryptoSlotGames />} />
          <Route path="/blockchain-gaming-nft-casinos" element={<BlockchainGamingNftCasinos />} />
          
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
          <Route path="/are-crypto-casinos-legal-cambodia-2026" element={<CryptoCasinosLegalCambodia2026 />} />
          
          {/* Crypto Casino Guides - User Experience */}
          <Route path="/crypto-casino-bonuses-explained" element={<CryptoCasinoBonusesExplained />} />
          <Route path="/fiat-vs-crypto-casinos-differences" element={<FiatVsCryptoCasinosDifferences />} />
          <Route path="/anonymity-crypto-gambling" element={<AnonymityCryptoGambling />} />
          
          {/* Answers */}
          <Route path="/answers" element={<Answers />} />
          <Route path="/answers/what-is-a-crypto-casino" element={<WhatIsACryptoCasino />} />
          <Route path="/answers/how-do-crypto-casinos-work" element={<HowDoCryptoCasinosWork />} />
          <Route path="/answers/are-crypto-casinos-legal" element={<AreCryptoCasinosLegalAnswer />} />
          <Route path="/answers/are-crypto-casinos-safe" element={<AreCryptoCasinosSafe />} />
          <Route path="/answers/what-is-a-no-kyc-crypto-casino" element={<WhatIsANoKycCryptoCasino />} />
          <Route path="/answers/are-no-kyc-crypto-casinos-legal" element={<AreNoKycCryptoCasinosLegal />} />
          <Route path="/answers/what-is-provably-fair-gambling" element={<WhatIsProvablyFairGambling />} />
          <Route path="/answers/how-do-crypto-casino-withdrawals-work" element={<HowDoCryptoCasinoWithdrawalsWork />} />
          <Route path="/answers/what-cryptocurrencies-do-casinos-accept" element={<WhatCryptocurrenciesDoCasinosAccept />} />
          <Route path="/answers/what-are-the-risks-of-crypto-casinos" element={<WhatAreTheRisksOfCryptoCasinos />} />
          <Route path="/answers/do-crypto-casinos-require-kyc" element={<DoCryptoCasinosRequireKyc />} />
          <Route path="/answers/how-to-verify-provably-fair-games" element={<HowToVerifyProvablyFairGames />} />
          <Route path="/answers/provably-fair-vs-rng" element={<ProvablyFairVsRng />} />
          <Route path="/answers/crypto-casino-security-and-scam-detection" element={<CryptoCasinoSecurityScamDetection />} />
          <Route path="/answers/crypto-casino-deposits-fees-speed-limits" element={<CryptoCasinoDepositsFeesSpeedLimits />} />
          <Route path="/answers/decentralized-vs-centralized-crypto-casinos" element={<DecentralizedVsCentralizedCryptoCasinos />} />
          <Route path="/answers/mobile-crypto-casino-experience" element={<MobileCryptoCasinoExperience />} />
          <Route path="/answers/responsible-gambling-crypto-casinos" element={<ResponsibleGamblingCryptoCasinos />} />
          
          <Route path="/:slug" element={<Article />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
