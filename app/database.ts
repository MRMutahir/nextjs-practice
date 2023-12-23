import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'CLOSE';
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new Schema<ITask>({
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
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;
