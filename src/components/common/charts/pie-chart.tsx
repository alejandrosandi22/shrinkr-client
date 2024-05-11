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
  Pie,
  PieChart as PieChartComponent,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='rounded-lg bg-card/15 p-2.5 text-card-foreground shadow-sm'>
        <p className='label capitalize'>{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const renderCustomizedLabel = ({ cx, x, y, name, resolvedTheme }: any) => {
  return (
    <text
      x={x}
      y={y}
      fill={
        resolvedTheme === 'dark'
          ? 'hsl(215 20.2% 65.1%)'
          : 'hsl(215.4 16.3% 46.9%)'
      }
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {name}
    </text>
  );
};

interface PieChartProps {
  title: string;
  description?: string;
  data?: {
    name: string;
    value: string;
  }[];
}

export default function PieChart({ title, description, data }: PieChartProps) {
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
    <Card className='flex h-96 w-full flex-col overflow-hidden border'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChartComponent width={500} height={500}>
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
            className='capitalize'
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
        </PieChartComponent>
      </ResponsiveContainer>
    </Card>
  );
}
