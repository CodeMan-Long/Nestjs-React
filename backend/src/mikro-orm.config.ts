import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { LoadStrategy } from '@mikro-orm/core';

const config: Options = {
  type: 'mysql',
  host: process.env.DB_HOST,
  // host: 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  // port: 3306,
  user: process.env.DB_USER,
  // user: 'root',
  password: process.env.DB_PASSWORD,
  // password: '',
  dbName: process.env.DB_NAME,
  // dbName: 'test',
  entities: ['dist/**/entities/*.entity.js'],
  entitiesTs: ['src/**/entities/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  registerRequestContext: false,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
};

export default config;
