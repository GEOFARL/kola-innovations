import { ForgotPasswordSchema } from "@/lib/schemas/auth/forgot-password.schema";
import { z } from "zod";

export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordSchema>;
