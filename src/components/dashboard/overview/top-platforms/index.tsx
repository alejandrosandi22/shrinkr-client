import BarChart from '@/components/common/charts/bar-chart';
import { getTopPlatforms } from '@/services/analytics/queries/getTopPlatforms';

export default async function TopPlatforms() {
  const response = await getTopPlatforms();

  const { success } = response;

  return <BarChart data={success?.data} title='Top platforms' />;
}
