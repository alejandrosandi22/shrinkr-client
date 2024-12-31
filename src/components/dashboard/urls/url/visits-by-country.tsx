import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { StatsProps } from '@/types';

export default function VisitsByCountry({ data }: StatsProps) {
  if (!data) return null;

  return <HorizontalBarChart title='Visits by country' data={data} />;
}
