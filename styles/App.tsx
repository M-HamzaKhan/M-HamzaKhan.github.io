
import { HeroSection } from "./components/HeroSection";
import { UseCaseOverview } from "./components/UseCaseOverview";
import { DatasetSection } from "./components/DatasetSection";
import { PipelineArchitecture } from "./components/PipelineArchitecture";
import { TechnologyStack } from "./components/TechnologyStack";
import { ExpectedOutcomes } from "./components/ExpectedOutcomes";
import { ChallengesSection } from "./components/ChallengesSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <HeroSection />
      <UseCaseOverview />
      <DatasetSection />
      <PipelineArchitecture />
      <TechnologyStack />
      <ExpectedOutcomes />
      <ChallengesSection />
      <Footer />
    </div>
  );
}
