import BarChart from '@/components/common/charts/bar-chart';
import { ChartDataValues } from '@/types';

interface TopPlatformsProps {
  data?: ChartDataValues[];
}

export default async function TopPlatforms({ data }: TopPlatformsProps) {
  return <BarChart data={data} title='Top platforms' />;
}
