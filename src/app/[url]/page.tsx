import NotFound from '@/components/common/not-found';
import SendAnalytics from '@/components/url/send-analytics';
import { getURL } from '@/services/urls/queries/getURL';

export default async function URL({ params }: { params: { url: string } }) {
  const { error, success } = await getURL(params.url);

  if (error) return <NotFound />;

  return <SendAnalytics url={success?.data} />;
}
