import { ChartDataValues } from '@/types';

export interface TopCountry {
  country: string;
  visits: number;
  uniqueVisitors: number;
  mostVisitedURL: string;
}

export interface MainStatsValues {
  title: string;
  value: string;
  difference: number;
}

export interface IMainStats {
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

export interface OverviewModel {
  mainStats: IMainStats;
  topReferrers: ChartDataValues[];
  topPlatforms: ChartDataValues[];
  topDevices: ChartDataValues[];
  topCountries: TopCountry[];
}
