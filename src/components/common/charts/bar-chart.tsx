'use client';

import { Card } from '@/components/common/card';
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
      <div className='custom-tooltip'>
        <p className='label capitalize'>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

interface BarChartProps {
  title: string;
  data?: {
    name: string;
    value: number;
  }[];
}

export default function BarChart({ title, data }: BarChartProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !data)
    return (
      <Card className='flex h-96 w-full flex-col overflow-hidden p-6'>
        <div className='mb-5'>
          <h2 className='text-2xl font-bold'>{title}</h2>
        </div>
      </Card>
    );

  return (
    <Card className='flex h-96 w-full flex-col overflow-hidden p-6'>
      <div className='mb-5'>
        <h2 className='text-2xl font-bold'>{title}</h2>
      </div>
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
            tickLine={false}
            axisLine={false}
            className='capitalize'
          />
          <Tooltip
            cursor={{
              fill:
                resolvedTheme === 'dark'
                  ? 'hsl(217.2 32.6% 17.5%)'
                  : 'hsl(210 40% 96.1%)',
            }}
            content={<CustomTooltip />}
          />
          <Bar dataKey='value' fill='url(#barUv)' />
        </BarChartComponent>
      </ResponsiveContainer>
    </Card>
  );
}
