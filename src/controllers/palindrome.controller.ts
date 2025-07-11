import { Request, Response } from 'express';

export const checkPalindrome = (req: Request, res: Response) => {
  const { x } = req.body;

  if (typeof x !== 'number') {
    return res.status(400).json({ message: 'Input harus berupa angka.' });
  }

  const str = x.toString();
  const isPalindrome = str === str.split('').reverse().join('');
  res.json({ input: x, palindrome: isPalindrome });
};
