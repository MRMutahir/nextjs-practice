
import mongoose, { Document, Schema } from 'mongoose';

export interface IIssue extends Document {
    title: string;
    description: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'CLOSE';
    createdAt: Date;
    updatedAt: Date;
}

const issueSchema = new Schema<IIssue>({
    title: {
        type: String,
        maxlength: 255,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['OPEN', 'IN_PROGRESS', 'CLOSE'],
        default: 'OPEN',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Issue = mongoose.model<IIssue>('Issue', issueSchema);

export default Issue;
