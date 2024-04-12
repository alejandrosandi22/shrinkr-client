'use client';

import { format } from 'date-fns';

import { Button } from '@/components/common/button';
import { Calendar } from '@/components/common/calendar';
import { TimePicker12hour } from '@/components/common/date-picker/time-picker-12hour';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/common/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';

interface DatePickerProps {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <div className='flex w-full gap-3'>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, 'PPP HH:mm:ss') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            initialFocus
          />
          <div className='border-t border-border p-3'>
            <TimePicker12hour setDate={setDate} date={date} />
          </div>
        </PopoverContent>
      </Popover>
      <Button
        type='button'
        variant='secondary'
        onClick={() => setDate(undefined)}
      >
        <TrashIcon width={20} height={20} />
      </Button>
    </div>
  );
}
