import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCampaign = {
  __typename?: 'AggregateCampaign';
  _count?: Maybe<CampaignCountAggregate>;
  _avg?: Maybe<CampaignAvgAggregate>;
  _sum?: Maybe<CampaignSumAggregate>;
  _min?: Maybe<CampaignMinAggregate>;
  _max?: Maybe<CampaignMaxAggregate>;
};

export type AggregateCharacter = {
  __typename?: 'AggregateCharacter';
  _count?: Maybe<CharacterCountAggregate>;
  _avg?: Maybe<CharacterAvgAggregate>;
  _sum?: Maybe<CharacterSumAggregate>;
  _min?: Maybe<CharacterMinAggregate>;
  _max?: Maybe<CharacterMaxAggregate>;
};

export type AggregateCharacterCampaign = {
  __typename?: 'AggregateCharacterCampaign';
  _count?: Maybe<CharacterCampaignCountAggregate>;
  _avg?: Maybe<CharacterCampaignAvgAggregate>;
  _sum?: Maybe<CharacterCampaignSumAggregate>;
  _min?: Maybe<CharacterCampaignMinAggregate>;
  _max?: Maybe<CharacterCampaignMaxAggregate>;
};

export type AggregatePlayer = {
  __typename?: 'AggregatePlayer';
  _count?: Maybe<PlayerCountAggregate>;
  _avg?: Maybe<PlayerAvgAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
};

export type AggregateRuleSet = {
  __typename?: 'AggregateRuleSet';
  _count?: Maybe<RuleSetCountAggregate>;
  _avg?: Maybe<RuleSetAvgAggregate>;
  _sum?: Maybe<RuleSetSumAggregate>;
  _min?: Maybe<RuleSetMinAggregate>;
  _max?: Maybe<RuleSetMaxAggregate>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
};

export type Campaign = {
  __typename?: 'Campaign';
  campaignId: Scalars['Int'];
  gameMasterId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  ruleSetId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  gameMaster: Player;
  ruleSet: RuleSet;
  characterCampaigns: Array<CharacterCampaign>;
};


export type CampaignCharacterCampaignsArgs = {
  where?: Maybe<CharacterCampaignWhereInput>;
  orderBy?: Maybe<Array<CharacterCampaignOrderByInput>>;
  cursor?: Maybe<CharacterCampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CharacterCampaignScalarFieldEnum>>;
};

export type CampaignAvgAggregate = {
  __typename?: 'CampaignAvgAggregate';
  campaignId?: Maybe<Scalars['Float']>;
  gameMasterId?: Maybe<Scalars['Float']>;
  ruleSetId?: Maybe<Scalars['Float']>;
};

export type CampaignCountAggregate = {
  __typename?: 'CampaignCountAggregate';
  campaignId: Scalars['Int'];
  gameMasterId: Scalars['Int'];
  name: Scalars['Int'];
  description: Scalars['Int'];
  notes: Scalars['Int'];
  startDate: Scalars['Int'];
  endDate: Scalars['Int'];
  ruleSetId: Scalars['Int'];
  isActive: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CampaignCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  gameMaster: PlayerCreateNestedOneWithoutGameMasteredInput;
  ruleSet: RuleSetCreateNestedOneWithoutCampaignsInput;
  characterCampaigns?: Maybe<CharacterCampaignCreateNestedManyWithoutCampaignInput>;
};

export type CampaignCreateManyGameMasterInput = {
  campaignId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  ruleSetId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyGameMasterInputEnvelope = {
  data: Array<CampaignCreateManyGameMasterInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyInput = {
  campaignId?: Maybe<Scalars['Int']>;
  gameMasterId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  ruleSetId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyRuleSetInput = {
  campaignId?: Maybe<Scalars['Int']>;
  gameMasterId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyRuleSetInputEnvelope = {
  data: Array<CampaignCreateManyRuleSetInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateNestedManyWithoutGameMasterInput = {
  create?: Maybe<Array<CampaignCreateWithoutGameMasterInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutGameMasterInput>>;
  createMany?: Maybe<CampaignCreateManyGameMasterInputEnvelope>;
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
};

export type CampaignCreateNestedManyWithoutRuleSetInput = {
  create?: Maybe<Array<CampaignCreateWithoutRuleSetInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutRuleSetInput>>;
  createMany?: Maybe<CampaignCreateManyRuleSetInputEnvelope>;
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
};

export type CampaignCreateNestedOneWithoutCharacterCampaignsInput = {
  create?: Maybe<CampaignCreateWithoutCharacterCampaignsInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCharacterCampaignsInput>;
  connect?: Maybe<CampaignWhereUniqueInput>;
};

export type CampaignCreateOrConnectWithoutCharacterCampaignsInput = {
  where: CampaignWhereUniqueInput;
  create: CampaignCreateWithoutCharacterCampaignsInput;
};

export type CampaignCreateOrConnectWithoutGameMasterInput = {
  where: CampaignWhereUniqueInput;
  create: CampaignCreateWithoutGameMasterInput;
};

export type CampaignCreateOrConnectWithoutRuleSetInput = {
  where: CampaignWhereUniqueInput;
  create: CampaignCreateWithoutRuleSetInput;
};

export type CampaignCreateWithoutCharacterCampaignsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  gameMaster: PlayerCreateNestedOneWithoutGameMasteredInput;
  ruleSet: RuleSetCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutGameMasterInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  ruleSet: RuleSetCreateNestedOneWithoutCampaignsInput;
  characterCampaigns?: Maybe<CharacterCampaignCreateNestedManyWithoutCampaignInput>;
};

export type CampaignCreateWithoutRuleSetInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  gameMaster: PlayerCreateNestedOneWithoutGameMasteredInput;
  characterCampaigns?: Maybe<CharacterCampaignCreateNestedManyWithoutCampaignInput>;
};

export type CampaignGroupBy = {
  __typename?: 'CampaignGroupBy';
  campaignId: Scalars['Int'];
  gameMasterId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  ruleSetId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  _count?: Maybe<CampaignCountAggregate>;
  _avg?: Maybe<CampaignAvgAggregate>;
  _sum?: Maybe<CampaignSumAggregate>;
  _min?: Maybe<CampaignMinAggregate>;
  _max?: Maybe<CampaignMaxAggregate>;
};

export type CampaignListRelationFilter = {
  every?: Maybe<CampaignWhereInput>;
  some?: Maybe<CampaignWhereInput>;
  none?: Maybe<CampaignWhereInput>;
};

export type CampaignMaxAggregate = {
  __typename?: 'CampaignMaxAggregate';
  campaignId?: Maybe<Scalars['Int']>;
  gameMasterId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  ruleSetId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CampaignMinAggregate = {
  __typename?: 'CampaignMinAggregate';
  campaignId?: Maybe<Scalars['Int']>;
  gameMasterId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  ruleSetId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CampaignOrderByInput = {
  campaignId?: Maybe<SortOrder>;
  gameMasterId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  ruleSetId?: Maybe<SortOrder>;
  isActive?: Maybe<SortOrder>;
};

export type CampaignRelationFilter = {
  is?: Maybe<CampaignWhereInput>;
  isNot?: Maybe<CampaignWhereInput>;
};

export enum CampaignScalarFieldEnum {
  CampaignId = 'campaignId',
  GameMasterId = 'gameMasterId',
  Name = 'name',
  Description = 'description',
  Notes = 'notes',
  StartDate = 'startDate',
  EndDate = 'endDate',
  RuleSetId = 'ruleSetId',
  IsActive = 'isActive'
}

export type CampaignScalarWhereInput = {
  AND?: Maybe<Array<CampaignScalarWhereInput>>;
  OR?: Maybe<Array<CampaignScalarWhereInput>>;
  NOT?: Maybe<Array<CampaignScalarWhereInput>>;
  campaignId?: Maybe<IntFilter>;
  gameMasterId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  startDate?: Maybe<DateTimeNullableFilter>;
  endDate?: Maybe<DateTimeNullableFilter>;
  ruleSetId?: Maybe<IntFilter>;
  isActive?: Maybe<BoolNullableFilter>;
};

export type CampaignScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CampaignScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CampaignScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CampaignScalarWhereWithAggregatesInput>>;
  campaignId?: Maybe<IntWithAggregatesFilter>;
  gameMasterId?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  notes?: Maybe<StringNullableWithAggregatesFilter>;
  startDate?: Maybe<DateTimeNullableWithAggregatesFilter>;
  endDate?: Maybe<DateTimeNullableWithAggregatesFilter>;
  ruleSetId?: Maybe<IntWithAggregatesFilter>;
  isActive?: Maybe<BoolNullableWithAggregatesFilter>;
};

export type CampaignSumAggregate = {
  __typename?: 'CampaignSumAggregate';
  campaignId?: Maybe<Scalars['Int']>;
  gameMasterId?: Maybe<Scalars['Int']>;
  ruleSetId?: Maybe<Scalars['Int']>;
};

export type CampaignUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  gameMaster?: Maybe<PlayerUpdateOneRequiredWithoutGameMasteredInput>;
  ruleSet?: Maybe<RuleSetUpdateOneRequiredWithoutCampaignsInput>;
  characterCampaigns?: Maybe<CharacterCampaignUpdateManyWithoutCampaignInput>;
};

export type CampaignUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
};

export type CampaignUpdateManyWithWhereWithoutGameMasterInput = {
  where: CampaignScalarWhereInput;
  data: CampaignUpdateManyMutationInput;
};

export type CampaignUpdateManyWithWhereWithoutRuleSetInput = {
  where: CampaignScalarWhereInput;
  data: CampaignUpdateManyMutationInput;
};

export type CampaignUpdateManyWithoutGameMasterInput = {
  create?: Maybe<Array<CampaignCreateWithoutGameMasterInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutGameMasterInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutGameMasterInput>>;
  createMany?: Maybe<CampaignCreateManyGameMasterInputEnvelope>;
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutGameMasterInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutGameMasterInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
};

export type CampaignUpdateManyWithoutRuleSetInput = {
  create?: Maybe<Array<CampaignCreateWithoutRuleSetInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutRuleSetInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutRuleSetInput>>;
  createMany?: Maybe<CampaignCreateManyRuleSetInputEnvelope>;
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutRuleSetInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutRuleSetInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
};

export type CampaignUpdateOneRequiredWithoutCharacterCampaignsInput = {
  create?: Maybe<CampaignCreateWithoutCharacterCampaignsInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCharacterCampaignsInput>;
  upsert?: Maybe<CampaignUpsertWithoutCharacterCampaignsInput>;
  connect?: Maybe<CampaignWhereUniqueInput>;
  update?: Maybe<CampaignUpdateWithoutCharacterCampaignsInput>;
};

export type CampaignUpdateWithWhereUniqueWithoutGameMasterInput = {
  where: CampaignWhereUniqueInput;
  data: CampaignUpdateWithoutGameMasterInput;
};

export type CampaignUpdateWithWhereUniqueWithoutRuleSetInput = {
  where: CampaignWhereUniqueInput;
  data: CampaignUpdateWithoutRuleSetInput;
};

export type CampaignUpdateWithoutCharacterCampaignsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  gameMaster?: Maybe<PlayerUpdateOneRequiredWithoutGameMasteredInput>;
  ruleSet?: Maybe<RuleSetUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutGameMasterInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  ruleSet?: Maybe<RuleSetUpdateOneRequiredWithoutCampaignsInput>;
  characterCampaigns?: Maybe<CharacterCampaignUpdateManyWithoutCampaignInput>;
};

export type CampaignUpdateWithoutRuleSetInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isActive?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  gameMaster?: Maybe<PlayerUpdateOneRequiredWithoutGameMasteredInput>;
  characterCampaigns?: Maybe<CharacterCampaignUpdateManyWithoutCampaignInput>;
};

export type CampaignUpsertWithWhereUniqueWithoutGameMasterInput = {
  where: CampaignWhereUniqueInput;
  update: CampaignUpdateWithoutGameMasterInput;
  create: CampaignCreateWithoutGameMasterInput;
};

export type CampaignUpsertWithWhereUniqueWithoutRuleSetInput = {
  where: CampaignWhereUniqueInput;
  update: CampaignUpdateWithoutRuleSetInput;
  create: CampaignCreateWithoutRuleSetInput;
};

export type CampaignUpsertWithoutCharacterCampaignsInput = {
  update: CampaignUpdateWithoutCharacterCampaignsInput;
  create: CampaignCreateWithoutCharacterCampaignsInput;
};

export type CampaignWhereInput = {
  AND?: Maybe<Array<CampaignWhereInput>>;
  OR?: Maybe<Array<CampaignWhereInput>>;
  NOT?: Maybe<Array<CampaignWhereInput>>;
  campaignId?: Maybe<IntFilter>;
  gameMaster?: Maybe<PlayerRelationFilter>;
  gameMasterId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  startDate?: Maybe<DateTimeNullableFilter>;
  endDate?: Maybe<DateTimeNullableFilter>;
  ruleSet?: Maybe<RuleSetRelationFilter>;
  ruleSetId?: Maybe<IntFilter>;
  characterCampaigns?: Maybe<CharacterCampaignListRelationFilter>;
  isActive?: Maybe<BoolNullableFilter>;
};

export type CampaignWhereUniqueInput = {
  campaignId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Character = {
  __typename?: 'Character';
  characterId: Scalars['Int'];
  playerId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  class: Scalars['String'];
  level: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
  player: Player;
  characterCampaigns: Array<CharacterCampaign>;
};


export type CharacterCharacterCampaignsArgs = {
  where?: Maybe<CharacterCampaignWhereInput>;
  orderBy?: Maybe<Array<CharacterCampaignOrderByInput>>;
  cursor?: Maybe<CharacterCampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CharacterCampaignScalarFieldEnum>>;
};

export type CharacterAvgAggregate = {
  __typename?: 'CharacterAvgAggregate';
  characterId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type CharacterCampaign = {
  __typename?: 'CharacterCampaign';
  characterCampaignId: Scalars['Int'];
  campaignId: Scalars['Int'];
  characterId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  campaign: Campaign;
  character: Character;
};

export type CharacterCampaignAvgAggregate = {
  __typename?: 'CharacterCampaignAvgAggregate';
  characterCampaignId?: Maybe<Scalars['Float']>;
  campaignId?: Maybe<Scalars['Float']>;
  characterId?: Maybe<Scalars['Float']>;
};

export type CharacterCampaignCountAggregate = {
  __typename?: 'CharacterCampaignCountAggregate';
  characterCampaignId: Scalars['Int'];
  campaignId: Scalars['Int'];
  characterId: Scalars['Int'];
  notes: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CharacterCampaignCreateInput = {
  notes?: Maybe<Scalars['String']>;
  campaign: CampaignCreateNestedOneWithoutCharacterCampaignsInput;
  character: CharacterCreateNestedOneWithoutCharacterCampaignsInput;
};

export type CharacterCampaignCreateManyCampaignInput = {
  characterCampaignId?: Maybe<Scalars['Int']>;
  characterId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
};

export type CharacterCampaignCreateManyCampaignInputEnvelope = {
  data: Array<CharacterCampaignCreateManyCampaignInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CharacterCampaignCreateManyCharacterInput = {
  characterCampaignId?: Maybe<Scalars['Int']>;
  campaignId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
};

export type CharacterCampaignCreateManyCharacterInputEnvelope = {
  data: Array<CharacterCampaignCreateManyCharacterInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CharacterCampaignCreateManyInput = {
  characterCampaignId?: Maybe<Scalars['Int']>;
  campaignId: Scalars['Int'];
  characterId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
};

export type CharacterCampaignCreateNestedManyWithoutCampaignInput = {
  create?: Maybe<Array<CharacterCampaignCreateWithoutCampaignInput>>;
  connectOrCreate?: Maybe<Array<CharacterCampaignCreateOrConnectWithoutCampaignInput>>;
  createMany?: Maybe<CharacterCampaignCreateManyCampaignInputEnvelope>;
  connect?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
};

export type CharacterCampaignCreateNestedManyWithoutCharacterInput = {
  create?: Maybe<Array<CharacterCampaignCreateWithoutCharacterInput>>;
  connectOrCreate?: Maybe<Array<CharacterCampaignCreateOrConnectWithoutCharacterInput>>;
  createMany?: Maybe<CharacterCampaignCreateManyCharacterInputEnvelope>;
  connect?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
};

export type CharacterCampaignCreateOrConnectWithoutCampaignInput = {
  where: CharacterCampaignWhereUniqueInput;
  create: CharacterCampaignCreateWithoutCampaignInput;
};

export type CharacterCampaignCreateOrConnectWithoutCharacterInput = {
  where: CharacterCampaignWhereUniqueInput;
  create: CharacterCampaignCreateWithoutCharacterInput;
};

export type CharacterCampaignCreateWithoutCampaignInput = {
  notes?: Maybe<Scalars['String']>;
  character: CharacterCreateNestedOneWithoutCharacterCampaignsInput;
};

export type CharacterCampaignCreateWithoutCharacterInput = {
  notes?: Maybe<Scalars['String']>;
  campaign: CampaignCreateNestedOneWithoutCharacterCampaignsInput;
};

export type CharacterCampaignGroupBy = {
  __typename?: 'CharacterCampaignGroupBy';
  characterCampaignId: Scalars['Int'];
  campaignId: Scalars['Int'];
  characterId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  _count?: Maybe<CharacterCampaignCountAggregate>;
  _avg?: Maybe<CharacterCampaignAvgAggregate>;
  _sum?: Maybe<CharacterCampaignSumAggregate>;
  _min?: Maybe<CharacterCampaignMinAggregate>;
  _max?: Maybe<CharacterCampaignMaxAggregate>;
};

export type CharacterCampaignListRelationFilter = {
  every?: Maybe<CharacterCampaignWhereInput>;
  some?: Maybe<CharacterCampaignWhereInput>;
  none?: Maybe<CharacterCampaignWhereInput>;
};

export type CharacterCampaignMaxAggregate = {
  __typename?: 'CharacterCampaignMaxAggregate';
  characterCampaignId?: Maybe<Scalars['Int']>;
  campaignId?: Maybe<Scalars['Int']>;
  characterId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type CharacterCampaignMinAggregate = {
  __typename?: 'CharacterCampaignMinAggregate';
  characterCampaignId?: Maybe<Scalars['Int']>;
  campaignId?: Maybe<Scalars['Int']>;
  characterId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type CharacterCampaignOrderByInput = {
  characterCampaignId?: Maybe<SortOrder>;
  campaignId?: Maybe<SortOrder>;
  characterId?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
};

export enum CharacterCampaignScalarFieldEnum {
  CharacterCampaignId = 'characterCampaignId',
  CampaignId = 'campaignId',
  CharacterId = 'characterId',
  Notes = 'notes'
}

export type CharacterCampaignScalarWhereInput = {
  AND?: Maybe<Array<CharacterCampaignScalarWhereInput>>;
  OR?: Maybe<Array<CharacterCampaignScalarWhereInput>>;
  NOT?: Maybe<Array<CharacterCampaignScalarWhereInput>>;
  characterCampaignId?: Maybe<IntFilter>;
  campaignId?: Maybe<IntFilter>;
  characterId?: Maybe<IntFilter>;
  notes?: Maybe<StringNullableFilter>;
};

export type CharacterCampaignScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CharacterCampaignScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CharacterCampaignScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CharacterCampaignScalarWhereWithAggregatesInput>>;
  characterCampaignId?: Maybe<IntWithAggregatesFilter>;
  campaignId?: Maybe<IntWithAggregatesFilter>;
  characterId?: Maybe<IntWithAggregatesFilter>;
  notes?: Maybe<StringNullableWithAggregatesFilter>;
};

export type CharacterCampaignSumAggregate = {
  __typename?: 'CharacterCampaignSumAggregate';
  characterCampaignId?: Maybe<Scalars['Int']>;
  campaignId?: Maybe<Scalars['Int']>;
  characterId?: Maybe<Scalars['Int']>;
};

export type CharacterCampaignUpdateInput = {
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  campaign?: Maybe<CampaignUpdateOneRequiredWithoutCharacterCampaignsInput>;
  character?: Maybe<CharacterUpdateOneRequiredWithoutCharacterCampaignsInput>;
};

export type CharacterCampaignUpdateManyMutationInput = {
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CharacterCampaignUpdateManyWithWhereWithoutCampaignInput = {
  where: CharacterCampaignScalarWhereInput;
  data: CharacterCampaignUpdateManyMutationInput;
};

export type CharacterCampaignUpdateManyWithWhereWithoutCharacterInput = {
  where: CharacterCampaignScalarWhereInput;
  data: CharacterCampaignUpdateManyMutationInput;
};

export type CharacterCampaignUpdateManyWithoutCampaignInput = {
  create?: Maybe<Array<CharacterCampaignCreateWithoutCampaignInput>>;
  connectOrCreate?: Maybe<Array<CharacterCampaignCreateOrConnectWithoutCampaignInput>>;
  upsert?: Maybe<Array<CharacterCampaignUpsertWithWhereUniqueWithoutCampaignInput>>;
  createMany?: Maybe<CharacterCampaignCreateManyCampaignInputEnvelope>;
  connect?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  set?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  disconnect?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  delete?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  update?: Maybe<Array<CharacterCampaignUpdateWithWhereUniqueWithoutCampaignInput>>;
  updateMany?: Maybe<Array<CharacterCampaignUpdateManyWithWhereWithoutCampaignInput>>;
  deleteMany?: Maybe<Array<CharacterCampaignScalarWhereInput>>;
};

export type CharacterCampaignUpdateManyWithoutCharacterInput = {
  create?: Maybe<Array<CharacterCampaignCreateWithoutCharacterInput>>;
  connectOrCreate?: Maybe<Array<CharacterCampaignCreateOrConnectWithoutCharacterInput>>;
  upsert?: Maybe<Array<CharacterCampaignUpsertWithWhereUniqueWithoutCharacterInput>>;
  createMany?: Maybe<CharacterCampaignCreateManyCharacterInputEnvelope>;
  connect?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  set?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  disconnect?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  delete?: Maybe<Array<CharacterCampaignWhereUniqueInput>>;
  update?: Maybe<Array<CharacterCampaignUpdateWithWhereUniqueWithoutCharacterInput>>;
  updateMany?: Maybe<Array<CharacterCampaignUpdateManyWithWhereWithoutCharacterInput>>;
  deleteMany?: Maybe<Array<CharacterCampaignScalarWhereInput>>;
};

export type CharacterCampaignUpdateWithWhereUniqueWithoutCampaignInput = {
  where: CharacterCampaignWhereUniqueInput;
  data: CharacterCampaignUpdateWithoutCampaignInput;
};

export type CharacterCampaignUpdateWithWhereUniqueWithoutCharacterInput = {
  where: CharacterCampaignWhereUniqueInput;
  data: CharacterCampaignUpdateWithoutCharacterInput;
};

export type CharacterCampaignUpdateWithoutCampaignInput = {
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  character?: Maybe<CharacterUpdateOneRequiredWithoutCharacterCampaignsInput>;
};

export type CharacterCampaignUpdateWithoutCharacterInput = {
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  campaign?: Maybe<CampaignUpdateOneRequiredWithoutCharacterCampaignsInput>;
};

export type CharacterCampaignUpsertWithWhereUniqueWithoutCampaignInput = {
  where: CharacterCampaignWhereUniqueInput;
  update: CharacterCampaignUpdateWithoutCampaignInput;
  create: CharacterCampaignCreateWithoutCampaignInput;
};

export type CharacterCampaignUpsertWithWhereUniqueWithoutCharacterInput = {
  where: CharacterCampaignWhereUniqueInput;
  update: CharacterCampaignUpdateWithoutCharacterInput;
  create: CharacterCampaignCreateWithoutCharacterInput;
};

export type CharacterCampaignWhereInput = {
  AND?: Maybe<Array<CharacterCampaignWhereInput>>;
  OR?: Maybe<Array<CharacterCampaignWhereInput>>;
  NOT?: Maybe<Array<CharacterCampaignWhereInput>>;
  characterCampaignId?: Maybe<IntFilter>;
  campaignId?: Maybe<IntFilter>;
  campaign?: Maybe<CampaignRelationFilter>;
  characterId?: Maybe<IntFilter>;
  character?: Maybe<CharacterRelationFilter>;
  notes?: Maybe<StringNullableFilter>;
};

export type CharacterCampaignWhereUniqueInput = {
  characterCampaignId?: Maybe<Scalars['Int']>;
};

export type CharacterCountAggregate = {
  __typename?: 'CharacterCountAggregate';
  characterId: Scalars['Int'];
  playerId: Scalars['Int'];
  name: Scalars['Int'];
  description: Scalars['Int'];
  class: Scalars['Int'];
  level: Scalars['Int'];
  notes: Scalars['Int'];
  isDead: Scalars['Int'];
  characterSheetUrl: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CharacterCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  class: Scalars['String'];
  level: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
  player: PlayerCreateNestedOneWithoutCharactersInput;
  characterCampaigns?: Maybe<CharacterCampaignCreateNestedManyWithoutCharacterInput>;
};

export type CharacterCreateManyInput = {
  characterId?: Maybe<Scalars['Int']>;
  playerId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  class: Scalars['String'];
  level: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
};

export type CharacterCreateManyPlayerInput = {
  characterId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  class: Scalars['String'];
  level: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
};

export type CharacterCreateManyPlayerInputEnvelope = {
  data: Array<CharacterCreateManyPlayerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CharacterCreateNestedManyWithoutPlayerInput = {
  create?: Maybe<Array<CharacterCreateWithoutPlayerInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutPlayerInput>>;
  createMany?: Maybe<CharacterCreateManyPlayerInputEnvelope>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
};

export type CharacterCreateNestedOneWithoutCharacterCampaignsInput = {
  create?: Maybe<CharacterCreateWithoutCharacterCampaignsInput>;
  connectOrCreate?: Maybe<CharacterCreateOrConnectWithoutCharacterCampaignsInput>;
  connect?: Maybe<CharacterWhereUniqueInput>;
};

export type CharacterCreateOrConnectWithoutCharacterCampaignsInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutCharacterCampaignsInput;
};

export type CharacterCreateOrConnectWithoutPlayerInput = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateWithoutPlayerInput;
};

export type CharacterCreateWithoutCharacterCampaignsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  class: Scalars['String'];
  level: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
  player: PlayerCreateNestedOneWithoutCharactersInput;
};

export type CharacterCreateWithoutPlayerInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  class: Scalars['String'];
  level: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
  characterCampaigns?: Maybe<CharacterCampaignCreateNestedManyWithoutCharacterInput>;
};

export type CharacterGroupBy = {
  __typename?: 'CharacterGroupBy';
  characterId: Scalars['Int'];
  playerId: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  class: Scalars['String'];
  level: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
  _count?: Maybe<CharacterCountAggregate>;
  _avg?: Maybe<CharacterAvgAggregate>;
  _sum?: Maybe<CharacterSumAggregate>;
  _min?: Maybe<CharacterMinAggregate>;
  _max?: Maybe<CharacterMaxAggregate>;
};

export type CharacterListRelationFilter = {
  every?: Maybe<CharacterWhereInput>;
  some?: Maybe<CharacterWhereInput>;
  none?: Maybe<CharacterWhereInput>;
};

export type CharacterMaxAggregate = {
  __typename?: 'CharacterMaxAggregate';
  characterId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
};

export type CharacterMinAggregate = {
  __typename?: 'CharacterMinAggregate';
  characterId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  isDead?: Maybe<Scalars['Boolean']>;
  characterSheetUrl?: Maybe<Scalars['String']>;
};

export type CharacterOrderByInput = {
  characterId?: Maybe<SortOrder>;
  playerId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  class?: Maybe<SortOrder>;
  level?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  isDead?: Maybe<SortOrder>;
  characterSheetUrl?: Maybe<SortOrder>;
};

export type CharacterRelationFilter = {
  is?: Maybe<CharacterWhereInput>;
  isNot?: Maybe<CharacterWhereInput>;
};

export enum CharacterScalarFieldEnum {
  CharacterId = 'characterId',
  PlayerId = 'playerId',
  Name = 'name',
  Description = 'description',
  Class = 'class',
  Level = 'level',
  Notes = 'notes',
  IsDead = 'isDead',
  CharacterSheetUrl = 'characterSheetUrl'
}

export type CharacterScalarWhereInput = {
  AND?: Maybe<Array<CharacterScalarWhereInput>>;
  OR?: Maybe<Array<CharacterScalarWhereInput>>;
  NOT?: Maybe<Array<CharacterScalarWhereInput>>;
  characterId?: Maybe<IntFilter>;
  playerId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  class?: Maybe<StringFilter>;
  level?: Maybe<IntFilter>;
  notes?: Maybe<StringNullableFilter>;
  isDead?: Maybe<BoolNullableFilter>;
  characterSheetUrl?: Maybe<StringNullableFilter>;
};

export type CharacterScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CharacterScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CharacterScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CharacterScalarWhereWithAggregatesInput>>;
  characterId?: Maybe<IntWithAggregatesFilter>;
  playerId?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  class?: Maybe<StringWithAggregatesFilter>;
  level?: Maybe<IntWithAggregatesFilter>;
  notes?: Maybe<StringNullableWithAggregatesFilter>;
  isDead?: Maybe<BoolNullableWithAggregatesFilter>;
  characterSheetUrl?: Maybe<StringNullableWithAggregatesFilter>;
};

export type CharacterSumAggregate = {
  __typename?: 'CharacterSumAggregate';
  characterId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
};

export type CharacterUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  class?: Maybe<StringFieldUpdateOperationsInput>;
  level?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDead?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  characterSheetUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUpdateOneRequiredWithoutCharactersInput>;
  characterCampaigns?: Maybe<CharacterCampaignUpdateManyWithoutCharacterInput>;
};

export type CharacterUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  class?: Maybe<StringFieldUpdateOperationsInput>;
  level?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDead?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  characterSheetUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CharacterUpdateManyWithWhereWithoutPlayerInput = {
  where: CharacterScalarWhereInput;
  data: CharacterUpdateManyMutationInput;
};

export type CharacterUpdateManyWithoutPlayerInput = {
  create?: Maybe<Array<CharacterCreateWithoutPlayerInput>>;
  connectOrCreate?: Maybe<Array<CharacterCreateOrConnectWithoutPlayerInput>>;
  upsert?: Maybe<Array<CharacterUpsertWithWhereUniqueWithoutPlayerInput>>;
  createMany?: Maybe<CharacterCreateManyPlayerInputEnvelope>;
  connect?: Maybe<Array<CharacterWhereUniqueInput>>;
  set?: Maybe<Array<CharacterWhereUniqueInput>>;
  disconnect?: Maybe<Array<CharacterWhereUniqueInput>>;
  delete?: Maybe<Array<CharacterWhereUniqueInput>>;
  update?: Maybe<Array<CharacterUpdateWithWhereUniqueWithoutPlayerInput>>;
  updateMany?: Maybe<Array<CharacterUpdateManyWithWhereWithoutPlayerInput>>;
  deleteMany?: Maybe<Array<CharacterScalarWhereInput>>;
};

export type CharacterUpdateOneRequiredWithoutCharacterCampaignsInput = {
  create?: Maybe<CharacterCreateWithoutCharacterCampaignsInput>;
  connectOrCreate?: Maybe<CharacterCreateOrConnectWithoutCharacterCampaignsInput>;
  upsert?: Maybe<CharacterUpsertWithoutCharacterCampaignsInput>;
  connect?: Maybe<CharacterWhereUniqueInput>;
  update?: Maybe<CharacterUpdateWithoutCharacterCampaignsInput>;
};

export type CharacterUpdateWithWhereUniqueWithoutPlayerInput = {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateWithoutPlayerInput;
};

export type CharacterUpdateWithoutCharacterCampaignsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  class?: Maybe<StringFieldUpdateOperationsInput>;
  level?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDead?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  characterSheetUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  player?: Maybe<PlayerUpdateOneRequiredWithoutCharactersInput>;
};

export type CharacterUpdateWithoutPlayerInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  class?: Maybe<StringFieldUpdateOperationsInput>;
  level?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDead?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  characterSheetUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  characterCampaigns?: Maybe<CharacterCampaignUpdateManyWithoutCharacterInput>;
};

export type CharacterUpsertWithWhereUniqueWithoutPlayerInput = {
  where: CharacterWhereUniqueInput;
  update: CharacterUpdateWithoutPlayerInput;
  create: CharacterCreateWithoutPlayerInput;
};

export type CharacterUpsertWithoutCharacterCampaignsInput = {
  update: CharacterUpdateWithoutCharacterCampaignsInput;
  create: CharacterCreateWithoutCharacterCampaignsInput;
};

export type CharacterWhereInput = {
  AND?: Maybe<Array<CharacterWhereInput>>;
  OR?: Maybe<Array<CharacterWhereInput>>;
  NOT?: Maybe<Array<CharacterWhereInput>>;
  characterId?: Maybe<IntFilter>;
  playerId?: Maybe<IntFilter>;
  player?: Maybe<PlayerRelationFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  class?: Maybe<StringFilter>;
  level?: Maybe<IntFilter>;
  notes?: Maybe<StringNullableFilter>;
  isDead?: Maybe<BoolNullableFilter>;
  characterSheetUrl?: Maybe<StringNullableFilter>;
  characterCampaigns?: Maybe<CharacterCampaignListRelationFilter>;
};

export type CharacterWhereUniqueInput = {
  characterId?: Maybe<Scalars['Int']>;
};


export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type DateTimeNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _avg?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCampaign: Campaign;
  createManyCampaign: AffectedRowsOutput;
  deleteCampaign?: Maybe<Campaign>;
  updateCampaign?: Maybe<Campaign>;
  deleteManyCampaign: AffectedRowsOutput;
  updateManyCampaign: AffectedRowsOutput;
  upsertCampaign: Campaign;
  createCharacter: Character;
  createManyCharacter: AffectedRowsOutput;
  deleteCharacter?: Maybe<Character>;
  updateCharacter?: Maybe<Character>;
  deleteManyCharacter: AffectedRowsOutput;
  updateManyCharacter: AffectedRowsOutput;
  upsertCharacter: Character;
  createCharacterCampaign: CharacterCampaign;
  createManyCharacterCampaign: AffectedRowsOutput;
  deleteCharacterCampaign?: Maybe<CharacterCampaign>;
  updateCharacterCampaign?: Maybe<CharacterCampaign>;
  deleteManyCharacterCampaign: AffectedRowsOutput;
  updateManyCharacterCampaign: AffectedRowsOutput;
  upsertCharacterCampaign: CharacterCampaign;
  createPlayer: Player;
  createManyPlayer: AffectedRowsOutput;
  deletePlayer?: Maybe<Player>;
  updatePlayer?: Maybe<Player>;
  deleteManyPlayer: AffectedRowsOutput;
  updateManyPlayer: AffectedRowsOutput;
  upsertPlayer: Player;
  createRuleSet: RuleSet;
  createManyRuleSet: AffectedRowsOutput;
  deleteRuleSet?: Maybe<RuleSet>;
  updateRuleSet?: Maybe<RuleSet>;
  deleteManyRuleSet: AffectedRowsOutput;
  updateManyRuleSet: AffectedRowsOutput;
  upsertRuleSet: RuleSet;
};


export type MutationCreateCampaignArgs = {
  data: CampaignCreateInput;
};


export type MutationCreateManyCampaignArgs = {
  data: Array<CampaignCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCampaignArgs = {
  where: CampaignWhereUniqueInput;
};


export type MutationUpdateCampaignArgs = {
  data: CampaignUpdateInput;
  where: CampaignWhereUniqueInput;
};


export type MutationDeleteManyCampaignArgs = {
  where?: Maybe<CampaignWhereInput>;
};


export type MutationUpdateManyCampaignArgs = {
  data: CampaignUpdateManyMutationInput;
  where?: Maybe<CampaignWhereInput>;
};


export type MutationUpsertCampaignArgs = {
  where: CampaignWhereUniqueInput;
  create: CampaignCreateInput;
  update: CampaignUpdateInput;
};


export type MutationCreateCharacterArgs = {
  data: CharacterCreateInput;
};


export type MutationCreateManyCharacterArgs = {
  data: Array<CharacterCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type MutationUpdateCharacterArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};


export type MutationDeleteManyCharacterArgs = {
  where?: Maybe<CharacterWhereInput>;
};


export type MutationUpdateManyCharacterArgs = {
  data: CharacterUpdateManyMutationInput;
  where?: Maybe<CharacterWhereInput>;
};


export type MutationUpsertCharacterArgs = {
  where: CharacterWhereUniqueInput;
  create: CharacterCreateInput;
  update: CharacterUpdateInput;
};


export type MutationCreateCharacterCampaignArgs = {
  data: CharacterCampaignCreateInput;
};


export type MutationCreateManyCharacterCampaignArgs = {
  data: Array<CharacterCampaignCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCharacterCampaignArgs = {
  where: CharacterCampaignWhereUniqueInput;
};


export type MutationUpdateCharacterCampaignArgs = {
  data: CharacterCampaignUpdateInput;
  where: CharacterCampaignWhereUniqueInput;
};


export type MutationDeleteManyCharacterCampaignArgs = {
  where?: Maybe<CharacterCampaignWhereInput>;
};


export type MutationUpdateManyCharacterCampaignArgs = {
  data: CharacterCampaignUpdateManyMutationInput;
  where?: Maybe<CharacterCampaignWhereInput>;
};


export type MutationUpsertCharacterCampaignArgs = {
  where: CharacterCampaignWhereUniqueInput;
  create: CharacterCampaignCreateInput;
  update: CharacterCampaignUpdateInput;
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationCreateManyPlayerArgs = {
  data: Array<PlayerCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationDeleteManyPlayerArgs = {
  where?: Maybe<PlayerWhereInput>;
};


export type MutationUpdateManyPlayerArgs = {
  data: PlayerUpdateManyMutationInput;
  where?: Maybe<PlayerWhereInput>;
};


export type MutationUpsertPlayerArgs = {
  where: PlayerWhereUniqueInput;
  create: PlayerCreateInput;
  update: PlayerUpdateInput;
};


export type MutationCreateRuleSetArgs = {
  data: RuleSetCreateInput;
};


export type MutationCreateManyRuleSetArgs = {
  data: Array<RuleSetCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
};


export type MutationUpdateRuleSetArgs = {
  data: RuleSetUpdateInput;
  where: RuleSetWhereUniqueInput;
};


export type MutationDeleteManyRuleSetArgs = {
  where?: Maybe<RuleSetWhereInput>;
};


export type MutationUpdateManyRuleSetArgs = {
  data: RuleSetUpdateManyMutationInput;
  where?: Maybe<RuleSetWhereInput>;
};


export type MutationUpsertRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
  create: RuleSetCreateInput;
  update: RuleSetUpdateInput;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _avg?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Player = {
  __typename?: 'Player';
  playerId: Scalars['Int'];
  name: Scalars['String'];
  emailAddress: Scalars['String'];
  characters: Array<Character>;
  gameMastered: Array<Campaign>;
};


export type PlayerCharactersArgs = {
  where?: Maybe<CharacterWhereInput>;
  orderBy?: Maybe<Array<CharacterOrderByInput>>;
  cursor?: Maybe<CharacterWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CharacterScalarFieldEnum>>;
};


export type PlayerGameMasteredArgs = {
  where?: Maybe<CampaignWhereInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  cursor?: Maybe<CampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CampaignScalarFieldEnum>>;
};

export type PlayerAvgAggregate = {
  __typename?: 'PlayerAvgAggregate';
  playerId?: Maybe<Scalars['Float']>;
};

export type PlayerCountAggregate = {
  __typename?: 'PlayerCountAggregate';
  playerId: Scalars['Int'];
  name: Scalars['Int'];
  emailAddress: Scalars['Int'];
  _all: Scalars['Int'];
};

export type PlayerCreateInput = {
  name: Scalars['String'];
  emailAddress: Scalars['String'];
  characters?: Maybe<CharacterCreateNestedManyWithoutPlayerInput>;
  gameMastered?: Maybe<CampaignCreateNestedManyWithoutGameMasterInput>;
};

export type PlayerCreateManyInput = {
  playerId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  emailAddress: Scalars['String'];
};

export type PlayerCreateNestedOneWithoutCharactersInput = {
  create?: Maybe<PlayerCreateWithoutCharactersInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutCharactersInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
};

export type PlayerCreateNestedOneWithoutGameMasteredInput = {
  create?: Maybe<PlayerCreateWithoutGameMasteredInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutGameMasteredInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
};

export type PlayerCreateOrConnectWithoutCharactersInput = {
  where: PlayerWhereUniqueInput;
  create: PlayerCreateWithoutCharactersInput;
};

export type PlayerCreateOrConnectWithoutGameMasteredInput = {
  where: PlayerWhereUniqueInput;
  create: PlayerCreateWithoutGameMasteredInput;
};

export type PlayerCreateWithoutCharactersInput = {
  name: Scalars['String'];
  emailAddress: Scalars['String'];
  gameMastered?: Maybe<CampaignCreateNestedManyWithoutGameMasterInput>;
};

export type PlayerCreateWithoutGameMasteredInput = {
  name: Scalars['String'];
  emailAddress: Scalars['String'];
  characters?: Maybe<CharacterCreateNestedManyWithoutPlayerInput>;
};

export type PlayerGroupBy = {
  __typename?: 'PlayerGroupBy';
  playerId: Scalars['Int'];
  name: Scalars['String'];
  emailAddress: Scalars['String'];
  _count?: Maybe<PlayerCountAggregate>;
  _avg?: Maybe<PlayerAvgAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
};

export type PlayerMaxAggregate = {
  __typename?: 'PlayerMaxAggregate';
  playerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
};

export type PlayerMinAggregate = {
  __typename?: 'PlayerMinAggregate';
  playerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
};

export type PlayerOrderByInput = {
  playerId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  emailAddress?: Maybe<SortOrder>;
};

export type PlayerRelationFilter = {
  is?: Maybe<PlayerWhereInput>;
  isNot?: Maybe<PlayerWhereInput>;
};

export enum PlayerScalarFieldEnum {
  PlayerId = 'playerId',
  Name = 'name',
  EmailAddress = 'emailAddress'
}

export type PlayerScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  playerId?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  emailAddress?: Maybe<StringWithAggregatesFilter>;
};

export type PlayerSumAggregate = {
  __typename?: 'PlayerSumAggregate';
  playerId?: Maybe<Scalars['Int']>;
};

export type PlayerUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  emailAddress?: Maybe<StringFieldUpdateOperationsInput>;
  characters?: Maybe<CharacterUpdateManyWithoutPlayerInput>;
  gameMastered?: Maybe<CampaignUpdateManyWithoutGameMasterInput>;
};

export type PlayerUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  emailAddress?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PlayerUpdateOneRequiredWithoutCharactersInput = {
  create?: Maybe<PlayerCreateWithoutCharactersInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutCharactersInput>;
  upsert?: Maybe<PlayerUpsertWithoutCharactersInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
  update?: Maybe<PlayerUpdateWithoutCharactersInput>;
};

export type PlayerUpdateOneRequiredWithoutGameMasteredInput = {
  create?: Maybe<PlayerCreateWithoutGameMasteredInput>;
  connectOrCreate?: Maybe<PlayerCreateOrConnectWithoutGameMasteredInput>;
  upsert?: Maybe<PlayerUpsertWithoutGameMasteredInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
  update?: Maybe<PlayerUpdateWithoutGameMasteredInput>;
};

export type PlayerUpdateWithoutCharactersInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  emailAddress?: Maybe<StringFieldUpdateOperationsInput>;
  gameMastered?: Maybe<CampaignUpdateManyWithoutGameMasterInput>;
};

export type PlayerUpdateWithoutGameMasteredInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  emailAddress?: Maybe<StringFieldUpdateOperationsInput>;
  characters?: Maybe<CharacterUpdateManyWithoutPlayerInput>;
};

export type PlayerUpsertWithoutCharactersInput = {
  update: PlayerUpdateWithoutCharactersInput;
  create: PlayerCreateWithoutCharactersInput;
};

export type PlayerUpsertWithoutGameMasteredInput = {
  update: PlayerUpdateWithoutGameMasteredInput;
  create: PlayerCreateWithoutGameMasteredInput;
};

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>;
  OR?: Maybe<Array<PlayerWhereInput>>;
  NOT?: Maybe<Array<PlayerWhereInput>>;
  playerId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  emailAddress?: Maybe<StringFilter>;
  characters?: Maybe<CharacterListRelationFilter>;
  gameMastered?: Maybe<CampaignListRelationFilter>;
};

export type PlayerWhereUniqueInput = {
  playerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  campaign?: Maybe<Campaign>;
  findFirstCampaign?: Maybe<Campaign>;
  campaigns: Array<Campaign>;
  aggregateCampaign: AggregateCampaign;
  groupByCampaign: Array<CampaignGroupBy>;
  character?: Maybe<Character>;
  findFirstCharacter?: Maybe<Character>;
  characters: Array<Character>;
  aggregateCharacter: AggregateCharacter;
  groupByCharacter: Array<CharacterGroupBy>;
  characterCampaign?: Maybe<CharacterCampaign>;
  findFirstCharacterCampaign?: Maybe<CharacterCampaign>;
  characterCampaigns: Array<CharacterCampaign>;
  aggregateCharacterCampaign: AggregateCharacterCampaign;
  groupByCharacterCampaign: Array<CharacterCampaignGroupBy>;
  player?: Maybe<Player>;
  findFirstPlayer?: Maybe<Player>;
  players: Array<Player>;
  aggregatePlayer: AggregatePlayer;
  groupByPlayer: Array<PlayerGroupBy>;
  ruleSet?: Maybe<RuleSet>;
  findFirstRuleSet?: Maybe<RuleSet>;
  ruleSets: Array<RuleSet>;
  aggregateRuleSet: AggregateRuleSet;
  groupByRuleSet: Array<RuleSetGroupBy>;
};


export type QueryCampaignArgs = {
  where: CampaignWhereUniqueInput;
};


export type QueryFindFirstCampaignArgs = {
  where?: Maybe<CampaignWhereInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  cursor?: Maybe<CampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CampaignScalarFieldEnum>>;
};


export type QueryCampaignsArgs = {
  where?: Maybe<CampaignWhereInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  cursor?: Maybe<CampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CampaignScalarFieldEnum>>;
};


export type QueryAggregateCampaignArgs = {
  where?: Maybe<CampaignWhereInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  cursor?: Maybe<CampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCampaignArgs = {
  where?: Maybe<CampaignWhereInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  by: Array<CampaignScalarFieldEnum>;
  having?: Maybe<CampaignScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type QueryFindFirstCharacterArgs = {
  where?: Maybe<CharacterWhereInput>;
  orderBy?: Maybe<Array<CharacterOrderByInput>>;
  cursor?: Maybe<CharacterWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CharacterScalarFieldEnum>>;
};


export type QueryCharactersArgs = {
  where?: Maybe<CharacterWhereInput>;
  orderBy?: Maybe<Array<CharacterOrderByInput>>;
  cursor?: Maybe<CharacterWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CharacterScalarFieldEnum>>;
};


export type QueryAggregateCharacterArgs = {
  where?: Maybe<CharacterWhereInput>;
  orderBy?: Maybe<Array<CharacterOrderByInput>>;
  cursor?: Maybe<CharacterWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCharacterArgs = {
  where?: Maybe<CharacterWhereInput>;
  orderBy?: Maybe<Array<CharacterOrderByInput>>;
  by: Array<CharacterScalarFieldEnum>;
  having?: Maybe<CharacterScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCharacterCampaignArgs = {
  where: CharacterCampaignWhereUniqueInput;
};


export type QueryFindFirstCharacterCampaignArgs = {
  where?: Maybe<CharacterCampaignWhereInput>;
  orderBy?: Maybe<Array<CharacterCampaignOrderByInput>>;
  cursor?: Maybe<CharacterCampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CharacterCampaignScalarFieldEnum>>;
};


export type QueryCharacterCampaignsArgs = {
  where?: Maybe<CharacterCampaignWhereInput>;
  orderBy?: Maybe<Array<CharacterCampaignOrderByInput>>;
  cursor?: Maybe<CharacterCampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CharacterCampaignScalarFieldEnum>>;
};


export type QueryAggregateCharacterCampaignArgs = {
  where?: Maybe<CharacterCampaignWhereInput>;
  orderBy?: Maybe<Array<CharacterCampaignOrderByInput>>;
  cursor?: Maybe<CharacterCampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCharacterCampaignArgs = {
  where?: Maybe<CharacterCampaignWhereInput>;
  orderBy?: Maybe<Array<CharacterCampaignOrderByInput>>;
  by: Array<CharacterCampaignScalarFieldEnum>;
  having?: Maybe<CharacterCampaignScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryFindFirstPlayerArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<Array<PlayerOrderByInput>>;
  cursor?: Maybe<PlayerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PlayerScalarFieldEnum>>;
};


export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<Array<PlayerOrderByInput>>;
  cursor?: Maybe<PlayerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PlayerScalarFieldEnum>>;
};


export type QueryAggregatePlayerArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<Array<PlayerOrderByInput>>;
  cursor?: Maybe<PlayerWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByPlayerArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<Array<PlayerOrderByInput>>;
  by: Array<PlayerScalarFieldEnum>;
  having?: Maybe<PlayerScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
};


export type QueryFindFirstRuleSetArgs = {
  where?: Maybe<RuleSetWhereInput>;
  orderBy?: Maybe<Array<RuleSetOrderByInput>>;
  cursor?: Maybe<RuleSetWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<RuleSetScalarFieldEnum>>;
};


export type QueryRuleSetsArgs = {
  where?: Maybe<RuleSetWhereInput>;
  orderBy?: Maybe<Array<RuleSetOrderByInput>>;
  cursor?: Maybe<RuleSetWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<RuleSetScalarFieldEnum>>;
};


export type QueryAggregateRuleSetArgs = {
  where?: Maybe<RuleSetWhereInput>;
  orderBy?: Maybe<Array<RuleSetOrderByInput>>;
  cursor?: Maybe<RuleSetWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByRuleSetArgs = {
  where?: Maybe<RuleSetWhereInput>;
  orderBy?: Maybe<Array<RuleSetOrderByInput>>;
  by: Array<RuleSetScalarFieldEnum>;
  having?: Maybe<RuleSetScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RuleSet = {
  __typename?: 'RuleSet';
  ruleSetId: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
  campaigns: Array<Campaign>;
};


export type RuleSetCampaignsArgs = {
  where?: Maybe<CampaignWhereInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  cursor?: Maybe<CampaignWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CampaignScalarFieldEnum>>;
};

export type RuleSetAvgAggregate = {
  __typename?: 'RuleSetAvgAggregate';
  ruleSetId?: Maybe<Scalars['Float']>;
};

export type RuleSetCountAggregate = {
  __typename?: 'RuleSetCountAggregate';
  ruleSetId: Scalars['Int'];
  name: Scalars['Int'];
  code: Scalars['Int'];
  _all: Scalars['Int'];
};

export type RuleSetCreateInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  campaigns?: Maybe<CampaignCreateNestedManyWithoutRuleSetInput>;
};

export type RuleSetCreateManyInput = {
  ruleSetId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  code: Scalars['String'];
};

export type RuleSetCreateNestedOneWithoutCampaignsInput = {
  create?: Maybe<RuleSetCreateWithoutCampaignsInput>;
  connectOrCreate?: Maybe<RuleSetCreateOrConnectWithoutCampaignsInput>;
  connect?: Maybe<RuleSetWhereUniqueInput>;
};

export type RuleSetCreateOrConnectWithoutCampaignsInput = {
  where: RuleSetWhereUniqueInput;
  create: RuleSetCreateWithoutCampaignsInput;
};

export type RuleSetCreateWithoutCampaignsInput = {
  name: Scalars['String'];
  code: Scalars['String'];
};

export type RuleSetGroupBy = {
  __typename?: 'RuleSetGroupBy';
  ruleSetId: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
  _count?: Maybe<RuleSetCountAggregate>;
  _avg?: Maybe<RuleSetAvgAggregate>;
  _sum?: Maybe<RuleSetSumAggregate>;
  _min?: Maybe<RuleSetMinAggregate>;
  _max?: Maybe<RuleSetMaxAggregate>;
};

export type RuleSetMaxAggregate = {
  __typename?: 'RuleSetMaxAggregate';
  ruleSetId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type RuleSetMinAggregate = {
  __typename?: 'RuleSetMinAggregate';
  ruleSetId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type RuleSetOrderByInput = {
  ruleSetId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
};

export type RuleSetRelationFilter = {
  is?: Maybe<RuleSetWhereInput>;
  isNot?: Maybe<RuleSetWhereInput>;
};

export enum RuleSetScalarFieldEnum {
  RuleSetId = 'ruleSetId',
  Name = 'name',
  Code = 'code'
}

export type RuleSetScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<RuleSetScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<RuleSetScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<RuleSetScalarWhereWithAggregatesInput>>;
  ruleSetId?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  code?: Maybe<StringWithAggregatesFilter>;
};

export type RuleSetSumAggregate = {
  __typename?: 'RuleSetSumAggregate';
  ruleSetId?: Maybe<Scalars['Int']>;
};

export type RuleSetUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutRuleSetInput>;
};

export type RuleSetUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RuleSetUpdateOneRequiredWithoutCampaignsInput = {
  create?: Maybe<RuleSetCreateWithoutCampaignsInput>;
  connectOrCreate?: Maybe<RuleSetCreateOrConnectWithoutCampaignsInput>;
  upsert?: Maybe<RuleSetUpsertWithoutCampaignsInput>;
  connect?: Maybe<RuleSetWhereUniqueInput>;
  update?: Maybe<RuleSetUpdateWithoutCampaignsInput>;
};

export type RuleSetUpdateWithoutCampaignsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  code?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RuleSetUpsertWithoutCampaignsInput = {
  update: RuleSetUpdateWithoutCampaignsInput;
  create: RuleSetCreateWithoutCampaignsInput;
};

export type RuleSetWhereInput = {
  AND?: Maybe<Array<RuleSetWhereInput>>;
  OR?: Maybe<Array<RuleSetWhereInput>>;
  NOT?: Maybe<Array<RuleSetWhereInput>>;
  ruleSetId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  code?: Maybe<StringFilter>;
  campaigns?: Maybe<CampaignListRelationFilter>;
};

export type RuleSetWhereUniqueInput = {
  ruleSetId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
};

export type PlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayersQuery = (
  { __typename?: 'Query' }
  & { players: Array<(
    { __typename?: 'Player' }
    & Pick<Player, 'playerId' | 'name'>
  )> }
);


export const PlayersDocument = gql`
    query Players {
  players {
    playerId
    name
  }
}
    `;

/**
 * __usePlayersQuery__
 *
 * To run a query within a React component, call `usePlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlayersQuery(baseOptions?: Apollo.QueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, options);
      }
export function usePlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, options);
        }
export type PlayersQueryHookResult = ReturnType<typeof usePlayersQuery>;
export type PlayersLazyQueryHookResult = ReturnType<typeof usePlayersLazyQuery>;
export type PlayersQueryResult = Apollo.QueryResult<PlayersQuery, PlayersQueryVariables>;