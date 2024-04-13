import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';

const data = [
  { name: 'Chrome', value: 402 },
  { name: 'Safari', value: 312 },
  { name: 'Firefox', value: 125 },
  { name: 'Other', value: 59 },
];
export default function Browsers() {
  return <HorizontalBarChart title='Browsers' data={data} />;
}
