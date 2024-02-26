import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../database";
import { createTaskSchema } from "../../valitationSchema";
mongoose.connect('mongodb+srv://nextjspractice:rq74Mqfxr3QLFvmA@cluster0.zwicjnc.mongodb.net/', {
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch(error => {
    console.error('MongoDB connection error:', error);
});

export async function GET(request: NextRequest) {
    // return NextResponse.json("Api is  run");
    try {
        // Fetch all tasks from the database
        const tasks = await Task.find();

        // Check if tasks were found
        if (!tasks || tasks.length === 0) {
            return NextResponse.json({ message: "No tasks found" }, { status: 404 });
        }

        // Return the fetched tasks as a JSON response
        return NextResponse.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = createTaskSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.errors, { status: 400 });
        }

        const { title, description } = validation.data;
        const newTask = new Task({
            title,
            description,
            status: String("OPEN")
        });


        await newTask.save();

        return NextResponse.json({ message: 'Task created successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error creating task:', error);
        return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
    }
}