import { Router } from 'express';
import { createAppointment, deleteAppointment, findAll, updateAppointment } from "../controllers/AppointmentsController";

const router = Router();

router.get('/appointments', findAll);
router.post('/appointments', createAppointment);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);

export default router;