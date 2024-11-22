// models/post.interface.ts
import { Document, Types } from 'mongoose';

export interface IProject extends Document {
    title: string;
    content: string;
    liveLink: string;
    tech: string[];
}
