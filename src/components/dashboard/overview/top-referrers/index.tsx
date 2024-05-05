import BarChart from '@/components/common/charts/bar-chart';
import { ChartDataValues } from '@/types';

interface TopReferrerProps {
  data?: ChartDataValues[];
}

export default async function TopReferrer({ data }: TopReferrerProps) {
  return <BarChart data={data} title='Top referrers' />;
}
