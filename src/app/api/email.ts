// pages/api/emails.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Connect from '../../mongo/db';
import Email from '../../models/mailModel';

type Data = {
  success: boolean;
  data?: any;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await Connect();

  if (req.method === 'GET') {
    try {
      const emails = await Email.find({});
      res.status(200).json({ success: true, data: emails });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error fetching emails' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Invalid request method' });
  }
}
