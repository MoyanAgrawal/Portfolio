// // pages/api/send-whatsapp.js
// import twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { mobile, message } = req.body;

//     try {
//       const response = await client.messages.create({
//         body: "Hi Moyan Agrawal this side, How can I help you?",
//         from: `whatsapp:+${process.env.TWILIO_WHATSAPP_NUMBER}`,
//         to: `whatsapp:+${mobile}`,
//       });

//       res.status(200).json({ success: true, response });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to send message', details: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
