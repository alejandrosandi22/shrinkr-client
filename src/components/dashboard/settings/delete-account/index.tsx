'use client';

import { Button } from '@/components/common/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/dialog';
import { deleteAccount } from '@/services/users/mutations/deleteAccount';

export default function DeleteAccount() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive' className='w-full'>
          Delete account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to delete your account?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <form action={deleteAccount}>
          <DialogFooter>
            <DialogClose>
              <Button type='button' variant='secondary'>
                Go back
              </Button>
            </DialogClose>
            <Button type='submit' variant='destructive'>
              Yes, I want to delete my account
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
