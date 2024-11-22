import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../User/user.utils';
import { createProjectValidationSchema, updateProjectValidationSchema } from './project.validation';
import { ProjectController } from './project.controller';

const router = express.Router();

// Create a new post (User only)
router.post(
    '/',
    // auth(USER_ROLE.user,USER_ROLE.admin),
    validateRequest(createProjectValidationSchema),
    ProjectController.createProject
);

// Get all posts (Both Admin and User)
router.get(
    '/',
    // auth(USER_ROLE.admin, USER_ROLE.user),
    ProjectController.getAllProject
);


// Update a post by ID (User and Admin)
router.patch(
    '/:postId',
    // auth(USER_ROLE.admin, USER_ROLE.user),
    validateRequest(updateProjectValidationSchema),
    ProjectController.updateProjectById
);

// Delete a post by ID
router.delete(
    '/:id',
    // auth(USER_ROLE.admin, USER_ROLE.user),
    ProjectController.deletePostById
);

export const ProjectRoutes = router;
