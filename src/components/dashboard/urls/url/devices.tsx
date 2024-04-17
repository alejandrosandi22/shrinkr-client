import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { StatsProps } from '@/types';

export default async function Devices({ data }: StatsProps) {
  return <HorizontalBarChart title='Devices' data={data} />;
}
