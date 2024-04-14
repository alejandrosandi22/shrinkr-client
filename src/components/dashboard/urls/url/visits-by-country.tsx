import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { ChartDataValues } from '@/types';

interface StatsProps {
  data: ChartDataValues[] | undefined;
}

export default function VisitsByCountry({ data }: StatsProps) {
  return <HorizontalBarChart title='Visits by country' data={data} />;
}
