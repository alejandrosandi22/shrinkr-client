import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import {
  ArrowTrendingUpIcon,
  HandThumbUpIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const data = [
  {
    title: 'Efficiency',
    description:
      'Streamline your links with ease. Our intuitive interface swiftly generates concise URLs, saving you time and effort.',
    icon: ArrowTrendingUpIcon,
  },
  {
    title: 'Robust Analytics',
    description:
      'Gain deep insights into link performance. Track clicks, location, and referral sources to optimize your strategies effectively.',
    icon: PresentationChartBarIcon,
  },
  {
    title: 'Reliability',
    description:
      "Trust our service's reliable uptime. Say goodbye to broken links and rest assured your audience can access your content seamlessly.",
    icon: HandThumbUpIcon,
  },
  {
    title: 'Advanced Security',
    description:
      'Our commitment to your safety includes robust encryption and proactive threat detection, providing comprehensive protection for your valuable data.',
    icon: ShieldCheckIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className='flex gap-10 px-2 py-8 max-lg:flex-col lg:py-32'>
      <div className='relative mx-auto my-8 flex max-w-7xl gap-10 px-2 max-lg:flex-col sm:px-6 lg:px-8'>
        <div className='mx-auto w-full lg:max-w-md'>
          <CardTitle className='mb-3 lg:text-3xl lg:leading-none'>
            Why Choose Our URL Shortener Service?
          </CardTitle>
          <CardDescription className='max-w-md md:max-w-2xl lg:text-base'>
            Discover the Advantages of Partnering with Us for Your Link
            Management Needs
          </CardDescription>
          <div
            aria-hidden='true'
            className='inset-x-o pointer-events-none absolute -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-32'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
        <div className='mx-auto grid gap-12 max-md:max-w-lg md:grid-cols-2'>
          {data.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <CardHeader>
                  <div className='mb-5 w-min rounded-full bg-secondary p-2.5'>
                    <Icon width={24} height={24} />
                  </div>
                  <CardTitle className='pb-2.5'>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
