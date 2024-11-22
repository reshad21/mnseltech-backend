/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import { User } from '../User/user.model';
import { IProject } from './project.interface';
import { Project } from './project.model';

const createProject = async (project: IProject) => {
    // Create the project
    const createdProject = await Project.create(project);
    return createdProject;
};


export const getAllProject = async () => {
    const projects = await Project.find(); // Fetch all projects from the database
      return projects;
}

const updateProjectById = async (payload: Partial<IProject>, id: string) => {
    const result = await Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
}

const deleteProjectById = async (projectId: string) => {
    const result = await Project.findByIdAndDelete(projectId);
    return result;
};

export const ProjectService = {
    createProject,
    getAllProject,
    updateProjectById,
    deleteProjectById,
};
