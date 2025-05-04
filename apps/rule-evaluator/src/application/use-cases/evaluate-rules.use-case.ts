import { Injectable } from '@nestjs/common';
import { IRuleRepository } from '../ports/outbound/rule-repository.interface';
import { IEvaluateRulesUseCase } from '../ports/inbound/evaluate-rules.usecase.interface';
import { RuleEntity } from '../../domain/entities/rule.entity';

@Injectable()
export class EvaluateRulesUseCase implements IEvaluateRulesUseCase {
  constructor(
    private readonly ruleRepository: IRuleRepository
  ) {}

  async execute(group: string, facts: any): Promise<RuleEntity[]> {
    const rules = await this.ruleRepository.findActiveRulesByGroup(group);

    // Sau này: validate rules, gọi engine tại đây
    return rules;
  }
}