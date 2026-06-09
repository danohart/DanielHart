import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, budget, message } = req.body;

  if (!name || !email || !projectType || !budget) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <hello@danielhart.co>',
      to: 'daniel@danielhart.co',
      replyTo: email,
      subject: `New inquiry from ${name} — ${projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td><strong>Project Type</strong></td>
            <td>${projectType}</td>
          </tr>
          <tr>
            <td><strong>Budget</strong></td>
            <td>${budget}</td>
          </tr>
          <tr>
            <td><strong>Message</strong></td>
            <td>${message || '—'}</td>
          </tr>
        </table>
        <p style="margin-top:24px;color:#888;font-size:12px;">
          Sent from danielhart.co/hire
        </p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
