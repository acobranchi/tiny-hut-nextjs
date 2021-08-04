-- CreateTable
CREATE TABLE "Player" (
    "playerId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,

    PRIMARY KEY ("playerId")
);

-- CreateTable
CREATE TABLE "Character" (
    "characterId" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "class" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "notes" TEXT,
    "isDead" BOOLEAN DEFAULT false,
    "characterSheetUrl" TEXT,

    PRIMARY KEY ("characterId")
);

-- CreateTable
CREATE TABLE "RuleSet" (
    "ruleSetId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    PRIMARY KEY ("ruleSetId")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "campaignId" SERIAL NOT NULL,
    "gameMasterId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "notes" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "ruleSetId" INTEGER NOT NULL,
    "isActive" BOOLEAN DEFAULT false,

    PRIMARY KEY ("campaignId")
);

-- CreateTable
CREATE TABLE "CharacterCampaign" (
    "characterCampaignId" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,
    "notes" TEXT,

    PRIMARY KEY ("characterCampaignId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player.name_unique" ON "Player"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RuleSet.name_unique" ON "RuleSet"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign.name_unique" ON "Campaign"("name");

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("playerId") REFERENCES "Player"("playerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD FOREIGN KEY ("gameMasterId") REFERENCES "Player"("playerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD FOREIGN KEY ("ruleSetId") REFERENCES "RuleSet"("ruleSetId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterCampaign" ADD FOREIGN KEY ("campaignId") REFERENCES "Campaign"("campaignId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterCampaign" ADD FOREIGN KEY ("characterId") REFERENCES "Character"("characterId") ON DELETE CASCADE ON UPDATE CASCADE;
