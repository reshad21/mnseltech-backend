// models/post.interface.ts
import { Document, Types } from 'mongoose';

export interface IDesignation extends Document {
    designationTitle: string;
}
