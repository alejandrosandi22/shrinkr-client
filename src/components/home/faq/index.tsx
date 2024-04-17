import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/accordion';
import { CardDescription, CardTitle } from '@/components/common/card';

export default function FrequentlyAskedQuestions() {
  return (
    <section className='bg-cover bg-center py-8 lg:py-32'>
      <div className='relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <div className='mb-14 text-center'>
          <CardTitle className='mb-3 text-center lg:text-3xl lg:leading-none'>
            Frequently Asked Questions
          </CardTitle>
          <CardDescription className='mx-auto max-w-md md:max-w-2xl lg:text-base'>
            Explore Answers to Common Queries About Our URL Shortener and
            Enhance Your Experience
          </CardDescription>
        </div>
        <Accordion
          type='single'
          collapsible
          className='mx-auto w-full max-w-3xl'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              How does your URL shortener work?
            </AccordionTrigger>
            <AccordionContent>
              Our URL shortener takes long URLs and generates shorter, more
              manageable versions. When someone clicks on the shortened link, it
              redirects them to the original URL.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Is your URL shortening service free to use?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our basic URL shortening service is free for all users.
              However, we also offer premium features for businesses and
              organizations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              Can I customize the shortened URLs?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! You can customize your shortened URLs with unique
              aliases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              Can I track the performance of my shortened links?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our service provides comprehensive analytics that allow you
              to track click-through rates, geographic locations of visitors,
              referral sources, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>
              How secure are the shortened URLs?
            </AccordionTrigger>
            <AccordionContent>
              We prioritize security and offer features like link expiration,
              password protection, and optional CAPTCHA verification to
              safeguard against malicious activities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Do you offer customer support if I encounter any issues?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Our dedicated customer support team is available to
              assist you with any questions or concerns you may have regarding
              our service. Feel free to reach out to us via email or through our
              support portal.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
