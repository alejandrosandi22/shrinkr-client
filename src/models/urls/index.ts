export interface URLModel {
  id: number;
  originalUrl: string;
  shortUrl: string;
  requestCount: number;
  expirationDate: Date;
  customAlias: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
