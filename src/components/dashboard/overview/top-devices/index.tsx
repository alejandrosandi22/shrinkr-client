import PieChart from '@/components/common/charts/pie-chart';
import { getTopDevices } from '@/services/analytics/queries/getTopDevices';

export default async function TopDevices() {
  const response = await getTopDevices();

  const { success } = response;

  return <PieChart data={success?.data} title='Top devices' />;
}
