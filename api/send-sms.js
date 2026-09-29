export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, phone, date, guests } = req.body;

    if (!name || !phone || !date || !guests) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required details.",
      });
    }

    const message = `Hello ${name}, your Café Bliss reservation request for ${guests} guest(s) on ${date} has been received. Thank you!`;

    const response = await fetch(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        method: "POST",

        headers: {
          Authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json",
          accept: "application/json",
        },

        body: JSON.stringify({
          route: "q",
          message: message,
          numbers: phone,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
  return res.status(response.status).json({
    success: false,
    message: data.message || data.error || "SMS could not be sent",
    data: data,
  });
}

    return res.status(200).json({
      success: true,
      message: "SMS sent successfully!",
      data: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error. SMS could not be sent.",
    });
  }
}