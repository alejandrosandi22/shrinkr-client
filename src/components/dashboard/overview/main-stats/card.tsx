import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  value: string;
  difference: number;
}

export default function GeneralStatisticsCard({
  title,
  value,
  difference,
}: CardProps) {
  const differenceTextColor = (): string => {
    if (difference === 0) return 'text-gray-500';
    if (difference > 0) return 'text-green-500';
    return 'text-red-500';
  };

  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardDescription>{title}</CardDescription>
        <CardTitle className='text-4xl'>{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={cn('text-xs text-muted-foreground', differenceTextColor())}
        >
          {difference && difference.toFixed(2)}%
        </p>
      </CardContent>
    </Card>
  );
}
