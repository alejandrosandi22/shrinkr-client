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
  Area,
  AreaChart as AreaChartComponent,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface LineChartProps {
  title: string;
  description?: string;
  data: {
    name: string;
    value: number;
  }[];
}

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

export default function AreaChart({
  title,
  description,
  data,
}: LineChartProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !data)
    return (
      <Card className='flex h-[512px] w-full flex-col overflow-auto'>
        <CardHeader className='mb-5'>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      </Card>
    );

  return (
    <Card className='flex h-[512px] w-full flex-col overflow-auto'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className='h-full w-full min-w-[576px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChartComponent
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 25,
              left: 25,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey='name'
              className='text-xs sm:text-sm'
              axisLine={false}
              tickLine={false}
              tick={{
                fill:
                  resolvedTheme === 'dark'
                    ? 'hsl(215 20.2% 65.1%)'
                    : 'hsl(215.4 16.3% 46.9%)',
              }}
            />
            <YAxis hide />
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
            <Area
              type='monotone'
              dataKey='value'
              strokeWidth={2}
              stroke={
                resolvedTheme === 'dark'
                  ? 'hsl(217.2 91.2% 59.8%)'
                  : 'hsl(221.2 83.2% 53.3%)'
              }
              activeDot={{ r: 4 }}
              fill='url(#barUv)'
            />
          </AreaChartComponent>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
