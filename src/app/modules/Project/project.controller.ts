import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectService } from './project.service';

const createProject = catchAsync(async (req, res) => {
    const result = await ProjectService.createProject(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Project is created successfully',
        data: result,
    });
});


const getAllProject = catchAsync(async (req, res) => {
    const result = await ProjectService.getAllProject();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project are retrieved successfully',
        data: result,
    });
});

const updateProjectById = catchAsync(async (req, res) => {
    const id = req.params.postId;
    const result = await ProjectService.updateProjectById(req.body, id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project is updated successfully',
        data: result,
    });
});

const deletePostById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectService.deleteProjectById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project is deleted successfully',
        data: result && null,
    });
});

export const ProjectController = {
    createProject,
    getAllProject,
    updateProjectById,
    deletePostById,
};
