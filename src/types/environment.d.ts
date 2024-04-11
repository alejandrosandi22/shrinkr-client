export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'test' | 'dev' | 'prod';
      JWT_SECRET: string;
      CLIENT_APP_URL: string;
      SERVER_APP_URL: string;
    }
  }
}
