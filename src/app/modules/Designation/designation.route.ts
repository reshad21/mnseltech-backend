import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../User/user.utils';
import { DesignationController } from './designation.controller';
import { createDesignationValidationSchema, updateDesignationValidationSchema } from './designation.validation';

const router = express.Router();

// Create a new post (User only)
router.post(
    '/',
    // auth(USER_ROLE.user,USER_ROLE.admin),
    validateRequest(createDesignationValidationSchema),
    DesignationController.createDesignation
);

// Get all posts (Both Admin and User)
router.get(
    '/',
    // auth(USER_ROLE.admin, USER_ROLE.user),
    DesignationController.getAllDesignation
);


// Update a post by ID (User and Admin)
router.patch(
    '/:postId',
    // auth(USER_ROLE.admin, USER_ROLE.user),
    validateRequest(updateDesignationValidationSchema),
    DesignationController.updateDesignationById
);

// Delete a post by ID
router.delete(
    '/:id',
    // auth(USER_ROLE.admin, USER_ROLE.user),
    DesignationController.deleteDesignationById
);

export const DesignationRoutes = router;
