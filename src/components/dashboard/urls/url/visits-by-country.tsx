import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';

const data = [
  { name: 'United States', value: 625 },
  { name: 'Canada', value: 433 },
  { name: 'United Kingdom', value: 402 },
  { name: 'United Arab Emirates', value: 312 },
  { name: 'Brazil', value: 125 },
  { name: 'Costa Rica', value: 59 },
];
export default function VisitsByCountry() {
  return <HorizontalBarChart title='Visits by country' data={data} />;
}
