import { PrismaClient } from '@prisma/client';
import campaignGenerator from '../lib/campaigns';
import characterCampaignGenerator from '../lib/characterCampaigns';
import characterGenerator from '../lib/characters';
import playerGenerator from '../lib/players';
import ruleSetGenerator from '../lib/ruleSets';

const prisma = new PrismaClient();
async function main() {
    const players = playerGenerator(5);
    for (const player of players) {
        await prisma.player.upsert({
            where: {
                name: player.name,
            },
            create: player,
            update: player,
        });
    }

    const ruleSets = ruleSetGenerator(5);
    for (const ruleSet of ruleSets) {
        await prisma.ruleSet.create({
            data: ruleSet,
        });
    }

    const characters = characterGenerator(5);
    for (const character of characters) {
        await prisma.character.create({
            data: character,
        });
    }

    const campaigns = campaignGenerator(5);
    for (const campaign of campaigns) {
        await prisma.campaign.create({
            data: campaign,
        });
    }

    const characterCampaigns = characterCampaignGenerator(5);
    for (const characterCampaign of characterCampaigns) {
        await prisma.characterCampaign.create({
            data: characterCampaign,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
