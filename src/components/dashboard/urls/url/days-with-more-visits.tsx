import HorizontalBarChart from '@/components/common/charts/horizontal-bar-chart';
import { ChartDataValues } from '@/types';
import dayjs from 'dayjs';

function getDayName(dateString: string): string {
  return dayjs(dateString).format('dddd');
}

function getVisitsByDay(
  data: ChartDataValues[],
): { name: string; value: string }[] {
  const visitsByDay = data.reduce(
    (acc, visit) => {
      const day = getDayName(visit.name);
      acc[day] = (acc[day] || 0) + parseInt(visit.value);
      return acc;
    },
    {} as { [key: string]: number },
  );

  const result = Object.keys(visitsByDay).map((day) => ({
    name: day,
    value: visitsByDay[day].toString(),
  }));

  return result.sort((a, b) => {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  });
}

interface StatsProps {
  data: ChartDataValues[] | undefined;
}

export default function DaysWithMoreVisits({ data }: StatsProps) {
  if (!data) return null;

  return (
    <HorizontalBarChart
      title='Days with most visits'
      data={getVisitsByDay(data)}
    />
  );
}
