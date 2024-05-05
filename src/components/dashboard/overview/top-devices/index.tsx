import PieChart from '@/components/common/charts/pie-chart';
import { ChartDataValues } from '@/types';

interface TopDevicesProps {
  data?: ChartDataValues[];
}

export default async function TopDevices({ data }: TopDevicesProps) {
  return <PieChart data={data} title='Top devices' />;
}
