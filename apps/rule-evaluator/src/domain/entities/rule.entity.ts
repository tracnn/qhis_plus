export class RuleEntity {
    constructor(
        public readonly rule_code: string,
        public readonly event_type: string,
        public readonly message: string,
        public readonly conditions: any, // TODO: define rõ sau
        public readonly is_active: boolean = true,
    ) {}
}