'use client';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart as BarChartComponent,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='rounded-lg bg-card/15 p-2.5 text-card-foreground shadow-sm'>
        <p className='label capitalize'>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

interface BarChartProps {
  title: string;
  description?: string;
  data?: {
    name: string;
    value: string;
  }[];
}

export default function BarChart({ title, description, data }: BarChartProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !data)
    return (
      <Card className='flex h-96 w-full flex-col overflow-hidden border'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      </Card>
    );

  return (
    <Card className='flex h-96 w-full flex-col overflow-hidden'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChartComponent width={500} height={400} data={data}>
          <defs>
            <linearGradient id='barUv' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor={
                  resolvedTheme === 'dark'
                    ? 'hsl(217.2 91.2% 59.8%)'
                    : 'hsl(221.2 83.2% 53.3%)'
                }
                stopOpacity={1}
              />
              <stop
                offset='95%'
                stopColor={
                  resolvedTheme === 'dark'
                    ? 'hsl(222.2 47.4% 11.2%)'
                    : 'hsl(221.2 83.2% 53.3%)'
                }
                stopOpacity={0.5}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='name'
            type='category'
            tickLine={false}
            axisLine={false}
            width={50}
            className='text-sm capitalize'
            tick={{
              fill:
                resolvedTheme === 'dark'
                  ? 'hsl(215 20.2% 65.1%)'
                  : 'hsl(215.4 16.3% 46.9%)',
            }}
          />
          <Tooltip
            cursor={{
              fill:
                resolvedTheme === 'dark'
                  ? 'hsl(217.2 32.6% 17.5%)'
                  : 'hsl(210 40% 96.1%)',
              opacity: 0.2,
            }}
            content={<CustomTooltip />}
          />
          <Bar dataKey='value' fill='url(#barUv)' />
        </BarChartComponent>
      </ResponsiveContainer>
    </Card>
  );
}
