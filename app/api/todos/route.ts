import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../database"; // Renamed 'Issue' to 'Task'
import { z } from "zod";

// MongoDB connection
mongoose.connect('mongodb+srv://mutahirkareem820:aG4NUHfz6DkvpnSq@cluster0.zwicjnc.mongodb.net/', {
     // useNewUrlParser: true,
     // useUnifiedTopology: true,
}).catch(error => {
    console.error('MongoDB connection error:', error);
});

const createTaskSchema = z.object({ // Renamed 'createIssueSchema' to 'createTaskSchema'
    title: z.string(),
    description: z.string()
});

export async function POST(request: NextRequest) { // Renamed 'POST' to 'createTask'
    try {
        const body = await request.json();
        const validation = createTaskSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }

        const { title, description } = validation.data;
        const newTask = new Task({ // Renamed 'newIssue' to 'newTask'
            title,
            description,
            status: 'OPEN',
        });

        // Saving the new task
        await newTask.save();

        return NextResponse.json({ message: 'Task created successfully' }, { status: 200 },
            { task: newTask });
    } catch (error) {
        console.error('Error creating task:', error);
        return NextResponse.error('Error creating task', { status: 500 });
    }
}


// import { NextResponse } from "next/server"

// export async function GET() {
//     return NextResponse.json({ "message": 'Hello, Next.js!' })
// }