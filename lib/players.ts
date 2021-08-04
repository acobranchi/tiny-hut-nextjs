import { Player } from '@prisma/client';
import Faker from 'faker';
import _times from 'lodash/times';

type NewPlayer = Omit<Player, 'playerId'>;

export const fakePlayer = (): NewPlayer => {
    return {
        name: Faker.name.firstName(),
        emailAddress: Faker.internet.email(),
    };
};

export default (times: number): NewPlayer[] => _times(times, fakePlayer);
