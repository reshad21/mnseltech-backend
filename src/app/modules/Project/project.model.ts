/* eslint-disable no-useless-escape */
// models/Post.ts
import mongoose, { Schema } from 'mongoose';
import { IProject } from './project.interface';

const projectSchema: Schema<IProject> = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    liveLink: { type: String, required: true },
    tech: [String],
});

export const Project = mongoose.model<IProject>('Project', projectSchema);
