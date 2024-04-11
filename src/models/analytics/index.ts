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
