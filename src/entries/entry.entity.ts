import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entries')
export class Entry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  datetimeUtc: Date;

  @Column('text')
  bodyRaw: string;

  @Column('text')
  bodyClean: string;

  @Column('float')
  moodScore: number;

  @Column('text', { array: true })
  topics: string[];

  //@Column({ type: 'vector', nullable: true }) // ← Bu artık çalışmalı
  //embedding: any;
}
