import BarChart from '@/components/common/charts/bar-chart';
import { getTopReferrers } from '@/services/analytics/queries/getTopReferrers';

export default async function TopReferrer() {
  const response = await getTopReferrers();

  const { success } = response;

  return <BarChart data={success?.data} title='Top referrers' />;
}
