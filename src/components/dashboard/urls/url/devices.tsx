import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { ChartDataValues } from '@/types';

interface StatsProps {
  data: ChartDataValues[] | undefined;
}

export default async function Devices({ data }: StatsProps) {
  return <HorizontalBarChart title='Devices' data={data} />;
}
