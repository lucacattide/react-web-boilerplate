// Module Start
// JS imports
import type { NextApiResponse } from 'next';

// Module Export
export default (res: NextApiResponse) => {
  res.status(200).json({
    coverage: global.__coverage__ || null,
  });
};
// Module End
