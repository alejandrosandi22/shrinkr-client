import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { StatsProps } from '@/types';

export default function Platforms({ data }: StatsProps) {
  return <HorizontalBarChart title='Platforms' data={data} />;
}
