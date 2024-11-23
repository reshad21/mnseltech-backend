import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DesignationService } from './designation.service';

const createDesignation = catchAsync(async (req, res) => {
    const result = await DesignationService.createDesignation(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Designation is created successfully',
        data: result,
    });
});


const getAllDesignation = catchAsync(async (req, res) => {
    const result = await DesignationService.getAllDesignation();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Designation are retrieved successfully',
        data: result,
    });
});

const updateDesignationById = catchAsync(async (req, res) => {
    const id = req.params.postId;
    const result = await DesignationService.updateDesignationById(req.body, id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Designation is updated successfully',
        data: result,
    });
});

const deleteDesignationById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await DesignationService.deleteDesignationById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Designation is deleted successfully',
        data: result && null,
    });
});

export const DesignationController = {
    createDesignation,
    getAllDesignation,
    updateDesignationById,
    deleteDesignationById,
};
