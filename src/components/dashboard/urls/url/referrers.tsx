import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { StatsProps } from '@/types';

export default function Referrers({ data }: StatsProps) {
  return <HorizontalBarChart title='Referrers' data={data} />;
}
