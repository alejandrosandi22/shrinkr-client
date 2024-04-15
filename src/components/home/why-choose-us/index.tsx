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
    title: 'Advanced Security Measures',
    description:
      "Protect your links and users' data with advanced security features. Benefit from link expiration, password protection, and CAPTCHA verification.",
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
