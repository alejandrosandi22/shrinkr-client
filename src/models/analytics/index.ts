import { ChartDataValues } from '@/types';

export interface TopDevice {
  name: string;
  value: number;
}

export interface TopReferrer {
  name: string;
  value: number;
}

export interface TopPlatform {
  name: string;
  value: number;
}

export interface TopCountry {
  country: string;
  visits: number;
  uniqueVisitors: number;
  mostVisitedUrl: string;
}

export interface MainStatsValues {
  title: string;
  value: string;
  difference: number;
}

export interface MainStats {
  uniqueVisitors: MainStatsValues;
  visits: MainStatsValues;
  topCountry: MainStatsValues;
  topReferrer: MainStatsValues;
}

export interface URLStats {
  devices: ChartDataValues[];
  platforms: ChartDataValues[];
  browsers: ChartDataValues[];
  referrers: ChartDataValues[];
  visitsByCountry: ChartDataValues[];
  daysWithMoreVisits: ChartDataValues[];
  last7DaysPerformance: ChartDataValues[];
  visits: number;
  uniqueVisitors: number;
  returnVisitors: number;
}
