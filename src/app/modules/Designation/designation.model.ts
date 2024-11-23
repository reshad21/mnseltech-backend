/* eslint-disable no-useless-escape */
// models/Post.ts
import mongoose, { Schema } from 'mongoose';
import { IDesignation } from './designation.interface';

const designationSchema: Schema<IDesignation> = new mongoose.Schema({
    designationTitle: { type: String, required: true },
});

export const Designation = mongoose.model<IDesignation>('Designation', designationSchema);
