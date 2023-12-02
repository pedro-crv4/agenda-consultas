import { Router } from 'express';
import { createUser, deleteUser, findAll, updateUser } from "../controllers/UserController";

const router = Router();

router.get('/users', findAll);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;