// Module Start
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// JS imports
import type { NextApiRequest, NextApiResponse } from 'next';

// Module Export
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};
// Module End
