'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { formatLabel } from '@/lib/utils';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  ScriptableContext,
  Title,
  Tooltip,
} from 'chart.js';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface HorizontalBarChartProps {
  title: string;
  description?: string;
  data?: {
    name: string;
    value: string;
  }[];
}

export default function HorizontalBarChart({
  title,
  description,
  data,
}: HorizontalBarChartProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !data)
    return (
      <Card className='flex h-96 w-full flex-col overflow-hidden border p-6'>
        <div className='mb-5'>
          <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
      </Card>
    );

  const dataset = [
    {
      id: 1,
      data: data?.map((item) => parseFloat(item.value)) || [],
      backgroundColor: (context: ScriptableContext<'bar'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(200, 0, 0, 0);
        gradient.addColorStop(
          0,
          resolvedTheme === 'dark'
            ? 'rgba(55, 128, 246, 1)'
            : 'rgba(36, 99, 235, 1)',
        );
        gradient.addColorStop(
          1,
          resolvedTheme === 'dark'
            ? 'rgba(2, 8, 23, 0)'
            : 'rgba(36, 99, 235, 0)',
        );
        return gradient;
      },
    },
  ];

  const chartData = {
    labels: data?.map((item) => item.name),
    datasets: dataset,
  };

  return (
    <Card className='flex h-[450px] w-full flex-col overflow-hidden'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className='h-full w-full'>
        <Bar
          options={{
            maintainAspectRatio: false,
            indexAxis: 'y' as const,
            elements: {
              bar: {
                borderWidth: 0,
              },
            },
            plugins: {
              tooltip: {
                caretSize: 0,
                displayColors: false,
                backgroundColor:
                  resolvedTheme === 'dark'
                    ? 'rgba(2, 8, 23, 0.25)'
                    : 'rgba(255, 255, 255, 0.25)',
                padding: 10,
                titleFont: {
                  size: 0,
                },
                bodyColor:
                  resolvedTheme === 'dark'
                    ? 'rgb(255, 255, 255)'
                    : 'rgb(0, 0, 0)',
                position: 'average',
                bodyFont: {
                  size: 18,
                  weight: 500,
                },
                callbacks: {
                  label: (tooltipItem) => {
                    return `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
                  },
                },
              },
              legend: {
                display: false,
                position: 'right' as const,
              },
              title: {
                display: false,
                text: '',
              },
            },
            scales: {
              x: {
                grid: {
                  color:
                    resolvedTheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                },
                border: {
                  display: false,
                },
              },
              y: {
                position: 'left',
                type: 'category',
                border: {
                  display: false,
                },
                afterFit(scale) {
                  scale.width = window.innerWidth <= 768 ? 75 : 100;
                },
                grid: {
                  display: false,
                },
                ticks: {
                  callback(tickValue, index, ticks) {
                    const labelValue = this.getLabelForValue(
                      tickValue as number,
                    );
                    const formattedLabelValue = formatLabel(labelValue, 10);
                    return formattedLabelValue;
                  },
                },
              },
            },
          }}
          data={chartData}
        />
      </CardContent>
    </Card>
  );
}
