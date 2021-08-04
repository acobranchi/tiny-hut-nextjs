import { Campaign } from '@prisma/client';
import Faker from 'faker';
import _times from 'lodash/times';

type NewCampaign = Omit<Campaign, 'campaignId'>;

export const fakeCampaign = (): NewCampaign => {
    return {
        name: Faker.commerce.productName(),
        gameMasterId: Faker.random.arrayElement([1, 2, 3, 4, 5]),
        description: Faker.random.words(),
        notes: Faker.random.words(),
        startDate: Faker.date.past(),
        endDate: Faker.date.recent(),
        ruleSetId: Faker.random.arrayElement([1, 2, 3, 4, 5]),
        isActive: false,
    };
};

export default (times: number): NewCampaign[] => _times(times, fakeCampaign);
