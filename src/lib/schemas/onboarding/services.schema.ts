import { z } from 'zod';

export const costRangeSchema = z
  .object({
    min: z
      .number({
        required_error: 'Minimum cost is required',
        invalid_type_error: 'Minimum cost must be a number',
      })
      .nonnegative('Minimum cost must be positive'),
    max: z
      .number({
        required_error: 'Maximum cost is required',
        invalid_type_error: 'Maximum cost must be a number',
      })
      .nonnegative('Maximum cost must be positive'),
  })
  .superRefine((data, ctx) => {
    if (
      typeof data.min === 'number' &&
      typeof data.max === 'number' &&
      data.max < data.min
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Max cost must be greater than or equal to Min cost',
        path: ['max'],
      });
    }
  });

export const serviceSchema = z.object({
  service: z
    .string({
      required_error: 'Service name is required',
    })
    .min(1, 'Service name is required'),
  brief: z
    .string({
      required_error: 'Brief is required',
    })
    .min(1, 'Brief is required'),
  fixedCost: costRangeSchema.optional(),
  fixedCostBenefits: z.string().optional(),
  hourlyCost: costRangeSchema.optional(),
  hourlyCostBenefits: z.string().optional(),
  dayRate: costRangeSchema.optional(),
  dayRateBenefits: z.string().optional(),
  image: z
    .instanceof(File)
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'Only JPEG and PNG images are allowed',
    })
    .optional(),
});
