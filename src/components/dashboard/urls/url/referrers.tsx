import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { ChartDataValues } from '@/types';

interface StatsProps {
  data: ChartDataValues[] | undefined;
}

export default function Referrers({ data }: StatsProps) {
  return <HorizontalBarChart title='Referrers' data={data} />;
}
