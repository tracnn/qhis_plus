import { RuleEntity } from '../../../domain/entities/rule.entity';

export interface IEvaluateRulesUseCase {
  execute(group: string, facts: any): Promise<RuleEntity[]>; // sẽ sửa kiểu trả về sau
}