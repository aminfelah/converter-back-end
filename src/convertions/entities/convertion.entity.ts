import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Convertion extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromcurrency: string;

  @Column()
  tocurrency: string;

  @Column({ default: true })
  date: string;
}
