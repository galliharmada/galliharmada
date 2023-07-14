import {
  Entity, PrimaryGeneratedColumn, Column, Timestamp,
} from 'typeorm';

@Entity()
export class Guests {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ type: 'text' })
    username: string;

  @Column({ type: 'text' })
    password: string;

  @Column({ type: 'text' })
    email: string;

  @Column()
    phone_number: string;

  @Column({ type: 'text' })
    full_name: string;

  @Column({ type: 'bool', default: false })
    enabled: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Timestamp;
}
