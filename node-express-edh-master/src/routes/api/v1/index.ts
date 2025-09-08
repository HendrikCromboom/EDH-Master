import Router from 'express';
import cards from './cards/index.ts'


const router = Router();

router.use('/cards', cards);


export default router;