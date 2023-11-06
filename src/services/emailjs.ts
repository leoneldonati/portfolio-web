import emailjs from "@emailjs/nodejs";
import type { EmailRes } from "../interfaces";

const SERVICE_ID: string = import.meta.env.PUBLIC_SERVICE_ID;
const TEMPLATE_ID: string = import.meta.env.PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY: string = import.meta.env.PUBLIC_KEY;
const PUBLIC_PKEY: string = import.meta.env.PUBLIC_PKEY;

export async function sendEmail(userData: {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
}): Promise<EmailRes | any> {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, userData, {
      publicKey: PUBLIC_KEY,
      privateKey: PUBLIC_PKEY,
    });

    return response;
  } catch (err) {
    return err;
  }
}
