import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { ChartDataValues } from '@/types';

interface StatsProps {
  data: ChartDataValues[] | undefined;
}
export default function Platforms({ data }: StatsProps) {
  return <HorizontalBarChart title='Platforms' data={data} />;
}
