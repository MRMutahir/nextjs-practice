// import { NextRequest, NextResponse } from "next/server";
// import Task from "../../database";

// export async function GET(request: NextRequest) {
//     try {
//         const getIssues = await Task.find();

//         // Check if getIssues is empty or null
//         if (!getIssues || getIssues.length === 0) {
//             return NextResponse.json({ message: "No tasks found" }, { status: 404 });
//         }

//         return NextResponse.json(getIssues);
//     } catch (error) {
//         // Log the error to get more details (for development purposes)
//         console.error("Error fetching tasks:", error);

//         // Return a more specific error message along with status code 500 for internal server error
//         return NextResponse.json({ message: "Failed to fetch tasks from the database" }, { status: 500 });
//     }
// }
