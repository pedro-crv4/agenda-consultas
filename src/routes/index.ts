import { Request, Response, Router } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { verifyToken } from '../middlewares/auth';
const router = Router();

const SECRET_KEY = process.env.SECRET_KEY;

router.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello World from typescript" });
});

router.use('*', verifyToken)

export default router;