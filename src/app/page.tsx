import Hero from '@/components/Hero';
import About from '@/components/About';
import ResearchOverview from '@/components/ResearchOverview';
import FeaturedProject from '@/components/FeaturedProject';
import Publications from '@/components/Publications';
import Timeline from '@/components/Timeline';
import Metrics from '@/components/Metrics';
import Skills from '@/components/Skills';
import Awards from '@/components/Awards';
import Conferences from '@/components/Conferences';
import Dashboard from '@/components/Dashboard';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ResearchOverview />
      <FeaturedProject />
      <Publications />
      <Timeline />
      <Metrics />
      <Skills />
      <Awards />
      <Conferences />
      <Dashboard />
      <Contact />
    </>
  );
}
