/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import { User } from '../User/user.model';
import { IDesignation } from './designation.interface';
import { Designation } from './designation.model';

const createDesignation = async (designation: IDesignation) => {
    // Create the Designation
    const createdDesignation = await Designation.create(designation);
    return createdDesignation;
};


export const getAllDesignation = async () => {
    const Designations = await Designation.findOne(); // Fetch all Designations from the database
      return Designations;
}

const updateDesignationById = async (payload: Partial<IDesignation>, id: string) => {
    const result = await Designation.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
}

const deleteDesignationById = async (DesignationId: string) => {
    const result = await Designation.findByIdAndDelete(DesignationId);
    return result;
};

export const DesignationService = {
    createDesignation,
    getAllDesignation,
    updateDesignationById,
    deleteDesignationById,
};
