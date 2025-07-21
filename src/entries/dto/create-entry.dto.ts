export class CreateEntryDto {
  userId: string;
  datetimeUtc: Date;
  bodyRaw: string;
  bodyClean: string;
  moodScore: number;
  topics: string[];
}
