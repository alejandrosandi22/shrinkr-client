import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';

const data = [
  {
    name: 'Windows',
    value: 623,
  },
  {
    name: 'IOS',
    value: 429,
  },
  {
    name: 'Android',
    value: 302,
  },
  {
    name: 'Mac OS',
    value: 160,
  },
  {
    name: 'Linux',
    value: 98,
  },
  {
    name: 'Other',
    value: 10,
  },
];

export default function Platforms() {
  return <HorizontalBarChart title='Platforms' data={data} />;
}
