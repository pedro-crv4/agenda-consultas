import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Pacient {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("varchar")
    medical_history: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}