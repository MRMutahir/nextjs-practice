import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'CLOSE';
    createdAt: Date;
    updatedAt: Date;
}

let Task: mongoose.Model<ITask>;

try {
    // Try to get the existing model
    Task = mongoose.model<ITask>('Task');
} catch (error) {
    // If the model doesn't exist, define it
    Task = mongoose.model<ITask>('Task', new Schema<ITask>({
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
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    }, { timestamps: true }));
}

export default Task;
