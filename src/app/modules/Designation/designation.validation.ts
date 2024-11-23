import { z } from 'zod';

// Create User validation schema
export const createDesignationValidationSchema = z.object({
  body: z.object({
    designationTitle: z.string().min(1, 'Title is required'), // Title must not be empty
  }),
});


// Update User validation schema
export const updateDesignationValidationSchema = z.object({
  body: z.object({
    designationTitle: z.string().min(1, 'Title is required').optional(), // Title must not be empty
  }),
});

export const UserValidations = {
    createDesignationValidationSchema,
    updateDesignationValidationSchema,
};
