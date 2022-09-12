import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scan extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: number;

  @Column({ type: 'json' })
  message: any;

  @Column({ nullable: true })
  deviceId: string;

  @Column({ nullable: true })
  userName: string;
}
