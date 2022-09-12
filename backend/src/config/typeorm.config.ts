import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'myusername',
  password: process.env.DB_PASSWORD || 'mypassword',
  database: process.env.DB_NAME || 'postgres',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  logging: true,
  synchronize: true, // to be disabled in prod,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.DB_SECRET,
  },
};
