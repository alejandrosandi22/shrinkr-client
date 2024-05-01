export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'test' | 'dev' | 'prod';
      JWT_SECRET: string;
      CLIENT_APP_URL: string;
      NEXT_PUBLIC_CLIENT_APP_URL: string;
      SERVER_BASE_API: string;
      NEXT_PUBLIC_SERVER_BASE_API: string;
    }
  }
}
