import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
import * as path from "node:path";
import { AllExceptionsFilter } from "./common/filters/http-exception.filter";
import { LoggingInterceptor } from "./common/interceptors/logging.interceptors";
import { ValidationPipe } from "@nestjs/common";
import cookieParser = require("cookie-parser");

async function bootstrap() {
  const envFile =
    process.env.NODE_ENV === "production" ? ".env.production" : ".env";
  dotenv.config({ path: path.resolve(process.cwd(), envFile) });

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  app.enableCors({
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
    credentials: true, // permite envio de cookies/headers de autenticação
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  });

  app.use(cookieParser());

  await app.listen(4000);
}
bootstrap();
