import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
import * as path from "path";
import { AllExceptionsFilter } from "./common/filters/http-exception.filter";
import { LoggingInterceptor } from "./common/interceptors/logging.interceptors";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const envFile =
    process.env.NODE_ENV === "production" ? ".env.production" : ".env";
  dotenv.config({ path: path.resolve(process.cwd(), envFile) });

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(3000);

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  app.enableCors();
}
bootstrap();
