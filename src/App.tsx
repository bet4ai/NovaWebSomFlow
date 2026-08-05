import { Hero } from "./components/sections/Hero/Hero";
import { Problems } from './components/sections/Problems/Problems';
import { SoftwareBoundary } from './components/sections/SoftwareBoundary/SoftwareBoundary';
import { TimeRecovery } from "./components/sections/TimeRecovery/TimeRecovery";
import { FinancialAudit } from "./components/sections/FinancialAudit/FinancialAudit";
import { FlowOutcome } from "./components/sections/FlowOutcome/FlowOutcome";
import { ProcessSection } from "./components/sections/ProcessSection/ProcessSection";

export default function App() {
  return (
    <div>
      <Hero />
      <Problems />
      <SoftwareBoundary />
      <TimeRecovery/>
      <FinancialAudit/>
      <FlowOutcome/>
      <ProcessSection/>
      {/* després vindran la secció “D’on recuperam temps”, auditoria, etc. */}
    </div>
  );
}