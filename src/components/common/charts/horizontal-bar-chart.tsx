'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface HorizontalBarChartProps {
  title: string;
  description?: string;
  data?: {
    name: string;
    value: string;
  }[];
}

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

  return (
    <Card className='flex h-96 w-full flex-col overflow-hidden'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className='h-full w-full'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <BarChart
            data={data}
            layout='vertical'
            width={400}
            height={400}
            margin={{ top: 0, right: 0, left: 25, bottom: 0 }}
          >
            <defs>
              <linearGradient id='hBarUv' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop
                  offset='5%'
                  style={{
                    stopColor:
                      resolvedTheme === 'dark'
                        ? 'hsl(222.2, 47.4%, 11.2%)'
                        : 'hsl(221.2, 83.2%, 53.3%)',
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset='95%'
                  style={{
                    stopColor:
                      resolvedTheme === 'dark'
                        ? 'hsl(217.2, 91.2%, 59.8%)'
                        : 'hsl(221.2, 83.2%, 53.3%)',
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
            </defs>

            <XAxis type='number' hide />
            <YAxis
              type='category'
              tickLine={false}
              axisLine={false}
              className='text-sm capitalize'
              dataKey='name'
              tick={{
                fill:
                  resolvedTheme === 'dark'
                    ? 'hsl(215 20.2% 65.1%)'
                    : 'hsl(215.4 16.3% 46.9%)',
              }}
            />
            <YAxis
              orientation='right'
              yAxisId={1}
              dataKey='value'
              type='category'
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value.toLocaleString()}
              className='text-xs capitalize md:text-sm'
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
            <Bar dataKey='value' minPointSize={2} barSize={32}>
              {data.map((d, idx) => {
                return <Cell key={d['value']} fill='url(#hBarUv)' />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
