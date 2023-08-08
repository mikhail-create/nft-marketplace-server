import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 5000;

  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  
  await app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

bootstrap();
