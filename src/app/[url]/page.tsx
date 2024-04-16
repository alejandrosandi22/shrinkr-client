import { getURL } from '@/services/urls/queries/getURL';
import NotFound from '../not-found';

export default async function URL({ params }: { params: { url: string } }) {
  const { error } = await getURL(params.url);

  if (error) return <NotFound />;

  return null;
}
