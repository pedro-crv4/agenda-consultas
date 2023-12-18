import { AppDataSource } from "../data-source";
import { CreateAppointmentDTO } from '../dtos/CreateAppointmentDTO';
import { Appointment } from "../entities/Appointment";

const db = AppDataSource.getRepository(Appointment);

export class AppointmentRepository {
    async findAll() {
        const results = await db.find();

        return results;
    }

    async create(data: CreateAppointmentDTO) {
        const { time, status, details, doctor, pacient  } = data;

        try {
            const appointment = await db.save({
                time,
                status,
                details,
                doctor, 
                pacient
            });

            return appointment;
        } catch (error) {
            console.error(error);
            throw new Error("Internal server error");
        }
    }
}