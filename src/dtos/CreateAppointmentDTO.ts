import { User } from '../entities/User';

export class CreateAppointmentDTO {
    readonly time: string;
    readonly status: string;
    readonly details: string;
    readonly doctor: User;
    readonly pacient: User;

    constructor({ time, status, details, doctor, pacient }) {
        this.time = time;
        this.status = status;
        this.details = details;
        this.doctor = doctor;
        this.pacient = pacient;
    }
}