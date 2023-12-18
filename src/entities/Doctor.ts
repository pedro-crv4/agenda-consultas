import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("varchar")
    specialization: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}