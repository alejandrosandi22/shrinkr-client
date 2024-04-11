'use client';

import { Card } from '@/components/common/card';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Pie,
  PieChart as PieChartComponent,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const renderCustomizedLabel = ({ cx, x, y, name }: any) => {
  return (
    <text
      x={x}
      y={y}
      fill='#9ca3af'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {name}
    </text>
  );
};

interface PieChartProps {
  title: string;
  data?: {
    name: string;
    value: number;
  }[];
}

export default function PieChart({ title, data }: PieChartProps) {
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

  return (
    <Card className='flex h-96 w-full flex-col overflow-hidden border p-6'>
      <div className='mb-5'>
        <h2 className='text-2xl font-bold'>{title}</h2>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChartComponent width={500} height={500}>
          <Tooltip />
          <Pie
            data={data}
            dataKey='value'
            cx='50%'
            cy='50%'
            outerRadius={100}
            stroke={
              resolvedTheme === 'dark'
                ? 'hsl(217.2 91.2% 59.8%)'
                : 'hsl(221.2 83.2% 53.3%)'
            }
            strokeWidth={4}
            fill={
              resolvedTheme === 'dark'
                ? 'hsl(222.2 47.4% 11.2%)'
                : 'rgba(37, 99, 235, 0.5)'
            }
            label={renderCustomizedLabel}
            labelLine={false}
          />
        </PieChartComponent>
      </ResponsiveContainer>
    </Card>
  );
}
