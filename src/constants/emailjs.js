// EmailJS configuration.
// Both forms below reuse a single proven template (the same one used in your
// portfolio project) that expects these variables: {{from_name}}, {{from_email}},
// {{subject}}, {{message}}, {{to_name}}. Every extra detail (phone, goal, plan,
// time slot, etc.) is packed into a formatted {{message}} body by each form.
//
// Want a second, dedicated template for trial bookings instead? Create it on
// emailjs.com, then set VITE_EMAILJS_TRIAL_TEMPLATE_ID (or replace the fallback
// below) — no other code changes needed.

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_e4xzhgl",
  contactTemplateId:
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || "template_j8w4k44",
  trialTemplateId:
    import.meta.env.VITE_EMAILJS_TRIAL_TEMPLATE_ID || "template_j8w4k44",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ps7gprqjAYQADhly5",
};
