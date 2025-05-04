import { RuleEntity } from '../../../domain/entities/rule.entity';

export interface IRuleRepository {
  /**
   * Truy vấn danh sách rule đang hoạt động theo group (tên nhóm nghiệp vụ)
   */
  findActiveRulesByGroup(group: string): Promise<RuleEntity[]>;
}