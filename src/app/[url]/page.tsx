import NotFound from '@/components/common/not-found';
import { getURL } from '@/services/urls/queries/getURL';

export default async function URL({ params }: { params: { url: string } }) {
  const { error } = await getURL(params.url);

  if (error) return <NotFound />;

  return null;
}
