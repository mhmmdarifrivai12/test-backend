import { Request, Response } from 'express';

let rules: { [key: number]: string } = {
  3: 'cat',
  5: 'kitty'
};

export const printNumbers = (req: Request, res: Response) => {
  const { n } = req.body;

  if (typeof n !== 'number' || n < 1) {
    return res.status(400).json({ message: 'Input harus angka positif.' });
  }

  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    let output = '';
    for (const key in rules) {
      if (i % Number(key) === 0) {
        output += rules[Number(key)];
      }
    }
    result.push(output || i.toString());
  }

  res.json({ input: n, result });
};

export const addRule = (req: Request, res: Response) => {
  const { number, word } = req.body;

  if (typeof number !== 'number' || !word || typeof word !== 'string') {
    return res.status(400).json({ message: 'Input tidak valid. Contoh: { number: 13, word: "dog" }' });
  }

  rules[number] = word;
  res.json({ message: 'Rule ditambahkan', rules });
};
