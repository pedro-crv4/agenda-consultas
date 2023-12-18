import { Doctor } from '../entities/Doctor';
import { Pacient } from '../entities/Pacient';

export class UpdateAppointmentDTO {
    readonly time: string;
    readonly status: string;
    readonly details: string;
    readonly doctor: Doctor;
    readonly pacient: Pacient;

    constructor({ time, status, details, doctor, pacient }) {
        this.time = time;
        this.status = status;
        this.details = details;
        this.doctor = doctor;
        this.pacient = pacient;
    }
}