import { z } from "zod";

export const SERVICES = [
  "Website design & development",
  "E-commerce with UPI & Razorpay",
  "Google Ads & performance marketing",
  "SEO for Indian search",
  "WhatsApp & CRM automation",
  "Website care & support",
  "Not sure yet",
] as const;

export const BUDGETS = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "Above ₹5,00,000",
  "Need guidance",
] as const;

export const STATUSES = ["new", "contacted", "qualified", "won", "lost"] as const;
export type LeadStatus = (typeof STATUSES)[number];

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80, "Name is too long"),
  email: z.string().trim().toLowerCase().email("Enter a valid email address").max(120),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+?91[\s-]?)?0?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number")
    .transform((v) => v.replace(/\D/g, "").slice(-10)),
  company: z.string().trim().max(120, "Company name is too long").optional().default(""),
  service: z.enum(SERVICES, { errorMap: () => ({ message: "Choose a service" }) }),
  budget: z.enum(BUDGETS, { errorMap: () => ({ message: "Choose a budget range" }) }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters)")
    .max(2000, "Keep the message under 2,000 characters")
    .refine((v) => (v.match(/https?:\/\//gi) ?? []).length <= 2, "Please remove extra links"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const leadPatchSchema = z
  .object({
    status: z.enum(STATUSES).optional(),
    notes: z.string().max(2000).optional(),
  })
  .refine((v) => v.status !== undefined || v.notes !== undefined, "Nothing to update");
