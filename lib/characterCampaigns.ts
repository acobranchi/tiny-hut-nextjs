import { CharacterCampaign } from '@prisma/client';
import Faker from 'faker';
import _times from 'lodash/times';

type NewCharacterCampaign = Omit<CharacterCampaign, 'characterCampaignId'>;

export const fakeCharacterCampaign = (): NewCharacterCampaign => {
    return {
        campaignId: Faker.random.arrayElement([1, 2, 3, 4, 5]),
        characterId: Faker.random.arrayElement([1, 2, 3, 4, 5]),
        notes: Faker.random.words(),
    };
};

export default (times: number): NewCharacterCampaign[] => _times(times, fakeCharacterCampaign);
