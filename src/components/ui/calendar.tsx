// import 'react-day-picker/dist/style.css';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '../../lib/cn';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-6', className)}
      classNames={{
        month_caption: 'flex justify-between items-center pb-4 px-2',
        months: 'flex flex-col sm:flex-row space-y-4 sm:px-4 sm:space-y-0',
        caption: 'flex justify-between items-center pt-1 px-1',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center space-x-1',
        button_previous: cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 text-slate-700'),
        button_next: cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1'),
        table: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        weeks: 'mt-2 space-y-1',
        week: 'flex w-full',
        day: cn('h-9 w-9 p-0 text-center text-sm relative focus-within:relative focus-within:z-20'),
        day_button: cn(buttonVariants({ variant: 'ghost' }), 'h-9 w-9 p-0 font-normal aria-selected:opacity-100'),
        selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-md',
        today: 'bg-accent text-accent-foreground rounded-md',
        outside: 'text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        disabled: 'text-muted-foreground opacity-50',
        range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        range_start: 'aria-selected:rounded-l-md',
        range_end: 'aria-selected:rounded-r-md',
        hidden: 'invisible',
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
