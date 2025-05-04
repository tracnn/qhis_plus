import { NestFactory } from '@nestjs/core';
import { RuleEvaluatorModule } from './rule-evaluator.module';

async function bootstrap() {
  const app = await NestFactory.create(RuleEvaluatorModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
