import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(compression());
  app.use(helmet());
  app.enableCors();
  // app.use(csurf());
  await app.listen(3000);
}
bootstrap();
