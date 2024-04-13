import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';

const data = [
  { name: 'Friday', value: 400 },
  { name: 'Thursday', value: 320 },
  { name: 'Saturday', value: 302 },
  { name: 'Tuesday', value: 300 },
  { name: 'Wednesday', value: 268 },
];

export default function MoreActiveDays() {
  return <HorizontalBarChart title='More active days' data={data} />;
}
