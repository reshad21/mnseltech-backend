import { z } from 'zod';

// Create User validation schema
export const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'), // Title must not be empty
    content: z.string().min(1, 'Content is required'), // Content must not be empty
    liveLink: z.string().min(1, 'Content is required'), // Content must not be empty
    tech: z.array(z.string()).optional(), // Array of image URLs is optional
  }),
});


// Update User validation schema
export const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required').optional(), // Title must not be empty
    content: z.string().min(1, 'Content is required').optional(), // Content must not be empty
    liveLink: z.string().min(1, 'Content is required').optional(), // Content must not be empty
    tech: z.array(z.string()).optional(), // Array of image URLs is optional
  }),
});

export const UserValidations = {
    createProjectValidationSchema,
    updateProjectValidationSchema,
};
