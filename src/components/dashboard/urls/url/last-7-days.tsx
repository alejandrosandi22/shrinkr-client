import AreaChart from '@/components/common/charts/area-chart';
import { StatsProps } from '@/types';
import dayjs from 'dayjs';

export default function Last7Days({ data }: StatsProps) {
  if (!data) return null;

  const formatData = data.map((item) => ({
    name: dayjs(item.name).format('MMM D'),
    value: item.value,
  }));
  return (
    <AreaChart
      title='Last 7 days'
      description='Performance of the last 7 days'
      data={formatData}
    />
  );
}
