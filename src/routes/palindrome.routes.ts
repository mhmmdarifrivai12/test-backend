import { Router } from 'express';
import { checkPalindrome } from '../controllers/palindrome.controller';

const router = Router();

router.post('/', checkPalindrome);

export default router;
