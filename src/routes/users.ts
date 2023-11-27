import { Router } from 'express';
import { createUser, findAll } from "../controllers/UserController";

const router = Router();

router.get('/users', findAll);
router.post('/users', createUser);

export default router;