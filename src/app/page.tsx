import CallToAction from '@/components/home/call-to-action';
import FrequentlyAskedQuestions from '@/components/home/faq';
import Features from '@/components/home/features';
import Footer from '@/components/home/footer/footer';
import Hero from '@/components/home/hero';
import ValueProposition from '@/components/home/value-proposition';
import WhyChooseUs from '@/components/home/why-choose-us';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Hero />
      <WhyChooseUs />
      <ValueProposition />
      <Features />
      <FrequentlyAskedQuestions />
      <CallToAction />
      <Footer />
    </main>
  );
}
