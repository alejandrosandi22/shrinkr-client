import { deleteURL } from '@/services/urls/mutations/deleteURL';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function DeleteURL({ id }: { id: number }) {
  const deleteURLWithId = deleteURL.bind(null, id);

  return (
    <form action={deleteURLWithId}>
      <button className='flex w-full items-center gap-3 rounded-md text-sm'>
        <TrashIcon height={24} width={24} />
        Delete
      </button>
    </form>
  );
}
