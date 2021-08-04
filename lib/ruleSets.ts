import { RuleSet } from '@prisma/client';
import Faker from 'faker';
import _times from 'lodash/times';

type NewRuleSet = Omit<RuleSet, 'ruleSetId'>;

export const fakeRuleSet = (): NewRuleSet => {
    return {
        name: Faker.commerce.productName(),
        code: Faker.random.alphaNumeric(3),
    };
};

export default (times: number): NewRuleSet[] => _times(times, fakeRuleSet);
