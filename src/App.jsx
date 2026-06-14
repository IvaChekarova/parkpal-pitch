import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import SolutionOverview from "./sections/SolutionOverview";
import TargetUsers from "./sections/TargetUsers";
import MobileApp from "./sections/MobileApp";
import KeyFeatures from "./sections/KeyFeatures";
import Architecture from "./sections/Architecture";
import Database from "./sections/Database";
import IoT from "./sections/IoT";
import AIFuture from "./sections/AIFuture";
import Business from "./sections/Business";
import Conclusion from "./sections/Conclusion";

export default function App() {
  return (
    <div className="h-full font-sans text-ink">
      <Nav />
      <main id="slides" className="slides">
        <Hero />
        <Problem />
        <SolutionOverview />
        <TargetUsers />
        <MobileApp />
        <KeyFeatures />
        <Architecture />
        <Database />
        <IoT />
        <AIFuture />
        <Business />
        <Conclusion />
      </main>
    </div>
  );
}
