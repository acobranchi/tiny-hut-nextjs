import { Character } from '@prisma/client';
import Faker from 'faker';
import _times from 'lodash/times';

type NewCharacter = Omit<Character, 'characterId'>;

export const fakeCharacter = (): NewCharacter => {
    return {
        name: Faker.name.firstName(),
        playerId: Faker.random.arrayElement([1, 2, 3, 4, 5]),
        description: Faker.random.words(),
        notes: Faker.random.words(),
        class: Faker.random.arrayElement(['Fighter', 'Mage']),
        characterSheetUrl: '',
        isDead: false,
        level: 1,
    };
};

export default (times: number): NewCharacter[] => _times(times, fakeCharacter);
