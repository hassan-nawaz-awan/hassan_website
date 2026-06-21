import Hero from '@/components/Hero';
import CommandHub from '@/components/CommandHub';
import About from '@/components/About';
import News from '@/components/News';
import ResearchOverview from '@/components/ResearchOverview';
import FeaturedProject from '@/components/FeaturedProject';
import Publications from '@/components/Publications';
import Timeline from '@/components/Timeline';
import Metrics from '@/components/Metrics';
import Skills from '@/components/Skills';
import Awards from '@/components/Awards';
import Conferences from '@/components/Conferences';
import Collaborations from '@/components/Collaborations';
import Dashboard from '@/components/Dashboard';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <CommandHub />
      <About />
      <News />
      <ResearchOverview />
      <FeaturedProject />
      <Publications />
      <Timeline />
      <Metrics />
      <Skills />
      <Awards />
      <Conferences />
      <Collaborations />
      <Dashboard />
      <Contact />
    </>
  );
}
