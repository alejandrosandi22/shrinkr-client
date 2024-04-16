import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { StatsProps } from '@/types';

export default function Browsers({ data }: StatsProps) {
  return <HorizontalBarChart title='Browsers' data={data} />;
}
