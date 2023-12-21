
// import { NextRequest } from "next/server";
// import { z } from "zod";
// import mongoose from 'mongoose';
// // import IssueModel, { IIssue } from "../../";

// const createIssueSchema = z.object({
//     title: z.string(),
//     description: z.string()
// });

// Establish MongoDB connection (assuming you've set up the connection elsewhere)
// mongoose.connect('mongodb+srv://mutahirkareem820:aG4NUHfz6DkvpnSq@cluster0.zwicjnc.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// export default async function createIssueHandler(request: NextRequest) {
//     if (request.method === "POST"){
//         Response.json({
//             api:"API chl gi"
//         })
//     }

//     console.log("API chl gi");


// if (request.method !== 'POST') {
//     return NextRequest.json({ error: 'Method not allowed' }, { status: 405 });
// }

// try {
//     const body = await request.json();
//     const validation = createIssueSchema.safeParse(body);

//     if (!validation.success) {
//         return NextRequest.json({ errors: validation.error.errors }, { status: 400 });
//     }

//     const { title, description } = validation.data;
//     const newIssue: IIssue = new IssueModel({
//         title,
//         description,
//         status: 'OPEN',
//     });

//     // Save the new issue to the MongoDB database
//     await newIssue.save();

//     return NextRequest.json({ message: 'Issue created successfully' }, { status: 200 });
// } catch (error) {
//     return NextRequest.json({ error: 'Internal server error' }, { status: 500 });
// }

// }

// import express, { Request, Response } from 'express';

// const app = express();

// app.post('/', (req: Request, res: Response) => {
//     res.status(200).json({ api: 'API chl gi' });
// });

// export default app;
// myapp/api/routes/route.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Logic to handle GET request
    res.status(200).json({ message: 'Sample GET API endpoint working!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};