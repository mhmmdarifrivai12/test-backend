import { Router } from 'express';
import { printNumbers, addRule } from '../controllers/catkitty.controller';

const router = Router();

router.post('/', printNumbers);
router.post('/addrule', addRule);

export default router;
