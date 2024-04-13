import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';

const data = [
  {
    name: 'Instargam',
    value: 623,
  },
  {
    name: 'Facebook',
    value: 429,
  },
  {
    name: 'Twitter',
    value: 302,
  },
  {
    name: 'Direct Search',
    value: 160,
  },
  {
    name: 'Tik Tok',
    value: 98,
  },
];

export default function Referrers() {
  return <HorizontalBarChart title='Referrers' data={data} />;
}
