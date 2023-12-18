import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './Doctor';
import { Pacient } from './Pacient';

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Doctor, (doctor) => doctor.id)
    doctor: Doctor

    @ManyToOne(() => Pacient, (pacient) => pacient.id)
    pacient: Pacient

    @Column("datetime")
    time: string;

    @Column("varchar")
    status: string;

    @Column("longtext")
    details: string;
}