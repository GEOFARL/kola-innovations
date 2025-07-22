import { z } from "zod";

export const portfolioSchema = z.object({
  projects: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        image: z.any().optional(),
        link: z.string().url(),
      }),
    )
    .optional(),
  links: z
    .array(
      z.object({
        platform: z.enum([
          'dribbble',
          'github',
          'behance',
          'linkedin',
          'medium',
          'youtube',
          'dev',
        ]),
        url: z.string().url(),
      }),
    )
    .optional(),
});
