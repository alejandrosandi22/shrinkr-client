import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';

const data = [
  {
    name: 'Laptop',
    value: 623,
  },
  {
    name: 'Desktop',
    value: 429,
  },
  {
    name: 'Phone',
    value: 302,
  },
  {
    name: 'Tablet',
    value: 160,
  },
];

export default function Devices() {
  return <HorizontalBarChart title='Devices' data={data} />;
}
