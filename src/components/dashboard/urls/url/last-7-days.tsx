import AreaChart from '@/components/common/charts/area-chart';

const data = [
  { name: 'Sunday', value: 150 },
  { name: 'Monday', value: 220 },
  { name: 'Tuesday', value: 300 },
  { name: 'Wednesday', value: 268 },
  { name: 'Thursday', value: 320 },
  { name: 'Friday', value: 400 },
  { name: 'Saturday', value: 302 },
];

export default function Last7Days() {
  return (
    <AreaChart
      title='Last 7 days'
      description='Performance of the last 7 days'
      data={data}
    />
  );
}
