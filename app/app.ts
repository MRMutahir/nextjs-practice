// app.ts

import express from 'express';
import { handleGetRequest, handlePostRequest } from './api/routes/route';

const app = express();

// Define routes for different HTTP methods
app.get('/api/routes/endget', handleGetRequest);
app.post('/endpost', handlePostRequest);

// You can define other routes for different HTTP methods similarly

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
