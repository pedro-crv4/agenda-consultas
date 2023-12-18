import { AppointmentRepository } from './../repositories/AppointmentRepository';
import { Request, Response } from 'express';
import { UpdateAppointmentDTO } from '../dtos/UpdateAppointmentDTO';
import { CreateAppointmentDTO } from '../dtos/CreateAppointmentDTO';
import { Appointment } from '../entities/Appointment';
import { UserRepository, doctorRepository, pacientRepository } from '../repositories/UserRepository';
import { AppDataSource } from '../data-source';

const appointmentRepository = new AppointmentRepository();
const userRepository = new UserRepository();

const findAll = async (_, res: Response) => {
    try {
        const appointments = await appointmentRepository.findAll();

        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const createAppointment = async(req: Request, res: Response) => {
    try {
        const doctor = await doctorRepository.findOne({
            where: {
                id: req.body.doctor_id
            },
            relations: {
                user: true
            }
        });

        const pacient = await pacientRepository.findOne({
            where: {
                id: req.body.pacient_id
            },
            relations: {
                user: true
            }
        });

        const data = new CreateAppointmentDTO({
            time: new Date(req.body.time),
            status: req.body.status,
            details: req.body.details,
            doctor,
            pacient
        });

        const appointment = await appointmentRepository.create(data);

        res.status(200).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateAppointment = async(req: Request, res: Response) => {
    
}

const deleteAppointment = async(req: Request, res: Response) => {
    
}

export { findAll, createAppointment, updateAppointment, deleteAppointment }